import { NextResponse } from "next/server";
import { getStripe } from "../../../../lib/stripe";
import { getStripePlan } from "../../../../lib/stripe-plans";

export const runtime = "nodejs";

async function capInstallmentSubscription(stripe, checkoutSession) {
  const plan = getStripePlan(checkoutSession.metadata?.plan_key);

  if (!plan?.installments || !checkoutSession.subscription) {
    return;
  }

  const subscriptionId =
    typeof checkoutSession.subscription === "string"
      ? checkoutSession.subscription
      : checkoutSession.subscription.id;
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  // Stripe retries webhooks. If a schedule is already attached, the cap is set.
  if (subscription.schedule) {
    return;
  }

  const schedule = await stripe.subscriptionSchedules.create({
    from_subscription: subscriptionId,
  });
  const currentPhase = schedule.phases[0];

  await stripe.subscriptionSchedules.update(schedule.id, {
    end_behavior: "cancel",
    metadata: {
      checkout_session_id: checkoutSession.id,
      plan_key: checkoutSession.metadata.plan_key,
      installment_count: String(plan.installments),
    },
    phases: [
      {
        start_date: currentPhase.start_date,
        duration: {
          interval: "month",
          interval_count: plan.installments,
        },
        proration_behavior: "none",
        items: subscription.items.data.map((item) => ({
          price: item.price.id,
          quantity: item.quantity || 1,
        })),
      },
    ],
  });
}

export async function POST(request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Webhook is not configured." }, { status: 400 });
  }

  let event;

  try {
    const body = await request.text();
    event = getStripe().webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      await capInstallmentSubscription(getStripe(), event.data.object);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook processing failed:", error);
    return NextResponse.json({ error: "Webhook processing failed." }, { status: 500 });
  }
}
