import Link from "next/link";

export const metadata = {
  title: "Payment Received",
  description: "Your secure coaching payment was received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaymentSuccessPage() {
  return (
    <main className="bg-[#fdf8f3] px-6 py-24 text-[#3f342c] md:px-12">
      <section className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-xl shadow-[#8b6f5c]/10 ring-1 ring-[#eadfd5] md:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0f766e] text-3xl font-bold text-white">
          ✓
        </div>
        <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#9b6f5d]">
          Payment Received
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
          Thank you for choosing yourself.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
          Stripe will email your receipt to the address you provided. Kaelynn will
          follow up with your next steps and scheduling information.
        </p>
        <p className="mx-auto mt-5 max-w-2xl rounded-2xl bg-[#f7efe8] p-5 text-sm leading-7 text-[#5f4c41]">
          If you chose a three- or four-payment option, your remaining payments
          will be charged monthly and will stop automatically after the final
          scheduled payment.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#0f766e] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#115e59]"
        >
          Return to Home
        </Link>
      </section>
    </main>
  );
}
