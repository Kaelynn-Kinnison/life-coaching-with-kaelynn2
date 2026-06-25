import Link from "next/link";

export const metadata = {
  title: "Programs & Pricing | Life Coaching with Kaelynn",
  description:
    "Explore coaching program investments for women ready to overcome self-doubt, transform limiting beliefs, and build lasting confidence.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const programs = [
  {
    name: "Free Discovery Call",
    duration: "20-30 minutes",
    investment: "Free",
    description:
      "A supportive first conversation to talk through your goals, questions, self-doubt patterns, and whether coaching is the right fit.",
  },
  {
    name: "The Confidence Rebuild",
    duration: "12-week signature Core Belief Transformation experience",
    investment: "$2,497",
    description:
      "For women ready to transform limiting core beliefs, rebuild self-worth, and stop letting self-doubt lead their choices.",
    featured: true,
  },
  {
    name: "The Confidence Reclamation",
    duration: "6-month private coaching experience",
    investment: "$4,997",
    description:
      "For women who want the deepest private coaching support as they reclaim self-trust and build lasting confidence from the inside out.",
    premium: true,
  },
  {
    name: "Growth Membership",
    duration: "Monthly membership",
    investment: "$197/month",
    description:
      "For past clients who want continued encouragement, coaching, and accountability as they keep strengthening confidence.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Programs & Pricing
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Signature transformation offers for lasting confidence.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
            Each coaching experience is designed to help you overcome
            self-doubt, transform limiting beliefs, strengthen self-worth, and
            build confidence that lasts. Final recommendations are discussed
            during your free Discovery Call.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.name}
                className={`rounded-[2rem] bg-white p-8 shadow-lg shadow-[#8b6f5c]/10 ring-1 ${
                  program.premium
                    ? "bg-[#3f342c] text-white ring-[#6d594b]"
                    : program.featured
                      ? "ring-2 ring-[#b7835f]"
                      : "ring-[#eadfd5]"
                }`}
              >
                {program.featured && (
                  <p className="mb-5 inline-block rounded-full bg-[#b7835f] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    Signature Offer
                  </p>
                )}

                {program.premium && (
                  <p className="mb-5 inline-block rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#3f342c]">
                    VIP Experience
                  </p>
                )}

                <p
                  className={`text-sm font-bold uppercase tracking-[0.18em] ${
                    program.premium ? "text-[#f7d7c7]" : "text-[#9b6f5d]"
                  }`}
                >
                  {program.duration}
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight">
                  {program.name}
                </h2>

                <div
                  className={`mt-6 rounded-2xl p-5 ${
                    program.premium ? "bg-white/10" : "bg-[#f7efe8]"
                  }`}
                >
                  <p
                    className={`text-base font-black uppercase tracking-[0.18em] ${
                      program.premium ? "text-[#f7d7c7]" : "text-[#6f5a4d]"
                    }`}
                  >
                    Investment Starts At
                  </p>
                  <p className="mt-2 text-5xl font-black">
                    {program.investment}
                  </p>
                </div>

                <p
                  className={`mt-6 leading-8 ${
                    program.premium ? "text-[#f7efe8]" : "text-[#6f5a4d]"
                  }`}
                >
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe8] px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Start With a Conversation
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Your Discovery Call is free.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
            We can talk through your goals, your current season, and which level
            of support feels aligned before you choose a coaching package.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="mt-9 inline-flex rounded-full bg-[#0f766e] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
