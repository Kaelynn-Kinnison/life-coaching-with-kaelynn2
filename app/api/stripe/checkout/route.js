import { NextResponse } from "next/server";
import { getStripe } from "../../../../lib/stripe";
import { getStripePlan } from "../../../../lib/stripe-plans";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const planKey = formData.get("plan");
    const plan = getStripePlan(planKey);

    if (!plan) {
      return NextResponse.json({ error: "Unknown coaching option." }, { status: 400 });
    }

    // Never start a finite payment plan unless its automatic stop is active.
    if (plan.installments && !process.env.STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json(
        { error: "This payment plan is temporarily unavailable." },
        { status: 503 },
      );
    }

    const stripe = getStripe();
    const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
    const siteUrl = configuredSiteUrl || new URL(request.url).origin;
    const sessionMetadata = {
      plan_key: planKey,
      plan_name: plan.name,
    };

    if (plan.installments) {
      sessionMetadata.installments = String(plan.installments);
    }

    const session = await stripe.checkout.sessions.create({
      mode: plan.mode,
      line_items: [{ price: plan.priceId, quantity: 1 }],
      success_url: `${siteUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing`,
      metadata: sessionMetadata,
      ...(plan.mode === "subscription"
        ? {
            subscription_data: {
              metadata: sessionMetadata,
            },
          }
        : {}),
    });

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error("Unable to create Stripe Checkout Session:", error);
    return NextResponse.json(
      { error: "Checkout is temporarily unavailable. Please try again." },
      { status: 500 },
    );
  }
}
