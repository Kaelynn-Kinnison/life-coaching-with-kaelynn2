import Link from "next/link";

export const metadata = {
  title: "Programs & Pricing",
  description:
    "Explore coaching program investments for women ready to overcome self-doubt, transform limiting beliefs, and build lasting confidence.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const programs = [
  {
    name: "Free Discovery Call",
    duration: "20-30 minutes",
    investment: "Free",
    focus: "A no-pressure first conversation",
    description:
      "A supportive first conversation to talk through your goals, questions, self-doubt patterns, and whether coaching is the right fit.",
    bestFor:
      "Women who are curious about coaching and want clarity before choosing a private coaching experience.",
    includes: [
      "Space to share what is bringing you to coaching",
      "A conversation about your goals and current self-doubt patterns",
      "Guidance on which level of support may fit best",
      "Time to ask questions before making a decision",
    ],
    outcome:
      "You leave with a clearer sense of your next best step and whether this coaching relationship feels aligned.",
  },
  {
    name: "The Confidence Rebuild",
    duration: "12-week signature Core Belief Transformation experience",
    investment: "$2,497",
    focus: "The signature transformation experience",
    description:
      "For women ready to transform limiting core beliefs, rebuild self-worth, and stop letting self-doubt lead their choices.",
    featured: true,
    bestFor:
      "Women who are ready to stop second-guessing themselves, strengthen self-trust, and build confidence from the inside out.",
    includes: [
      "Private 1:1 coaching sessions",
      "Core Belief Transformation work",
      "H.E.A.L. Framework guidance",
      "Limiting belief identification and reframing",
      "Self-worth and confidence development",
      "Personalized reflection prompts and action steps",
      "Accountability between sessions",
      "Support with confident decision-making and follow-through",
    ],
    outcome:
      "You begin rebuilding the inner foundation that allows confidence, self-trust, and aligned action to feel more natural and sustainable.",
  },
  {
    name: "The Confidence Reclamation",
    duration: "6-month private coaching experience",
    investment: "$4,997",
    focus: "The deepest private coaching container",
    description:
      "For women who want the deepest private coaching support as they reclaim self-trust and build lasting confidence from the inside out.",
    premium: true,
    bestFor:
      "Women who want spacious, high-touch support as they move through deeper identity, self-worth, and confidence transformation.",
    includes: [
      "Everything in The Confidence Rebuild",
      "Extended private coaching timeline",
      "Personalized transformation roadmap",
      "Advanced Core Belief Transformation work",
      "Deeper self-trust and confidence integration",
      "Ongoing accountability and implementation support",
      "Support for boundaries, identity, self-worth, and aligned choices",
      "Priority guidance between sessions",
    ],
    outcome:
      "You receive the time, structure, and support to not only rebuild confidence, but embody it more deeply in your decisions, relationships, and next chapter.",
  },
  {
    name: "Growth Membership",
    duration: "Monthly membership",
    investment: "$197/month",
    focus: "Continued support after private coaching",
    description:
      "For past clients who want continued encouragement, coaching, and accountability as they keep strengthening confidence.",
    bestFor:
      "Past clients who have completed private coaching and want ongoing support to maintain momentum.",
    includes: [
      "Monthly coaching support",
      "Goal review and accountability",
      "Continued reflection and confidence reinforcement",
      "Support for new decisions, boundaries, and growth edges",
      "Encouragement to stay connected to the work you have already begun",
    ],
    outcome:
      "You stay supported as you continue practicing confidence, self-trust, and aligned action beyond the initial coaching experience.",
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
                className={
                  program.premium
                    ? "rounded-[2rem] bg-[#3f342c] p-8 text-white shadow-2xl shadow-[#3f342c]/20 ring-1 ring-[#6d594b]"
                    : program.featured
                      ? "rounded-[2rem] bg-white p-8 text-[#3f342c] shadow-lg shadow-[#8b6f5c]/10 ring-2 ring-[#b7835f]"
                      : "rounded-[2rem] bg-white p-8 text-[#3f342c] shadow-lg shadow-[#8b6f5c]/10 ring-1 ring-[#eadfd5]"
                }
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

                <h2
                  className={`mt-4 text-3xl font-bold leading-tight ${
                    program.premium ? "text-white" : "text-[#3f342c]"
                  }`}
                >
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

                <div
                  className={`mt-7 rounded-2xl p-5 ${
                    program.premium ? "bg-white/10" : "bg-[#fffaf5]"
                  }`}
                >
                  <p
                    className={`text-sm font-black uppercase tracking-[0.18em] ${
                      program.premium ? "text-[#f7d7c7]" : "text-[#9b6f5d]"
                    }`}
                  >
                    Focus
                  </p>
                  <p
                    className={`mt-2 font-semibold leading-7 ${
                      program.premium ? "text-white" : "text-[#3f342c]"
                    }`}
                  >
                    {program.focus}
                  </p>
                </div>

                <div className="mt-7">
                  <h3
                    className={`text-lg font-bold ${
                      program.premium ? "text-white" : "text-[#3f342c]"
                    }`}
                  >
                    Best For
                  </h3>
                  <p
                    className={`mt-3 leading-7 ${
                      program.premium ? "text-[#f7efe8]" : "text-[#6f5a4d]"
                    }`}
                  >
                    {program.bestFor}
                  </p>
                </div>

                <div className="mt-7">
                  <h3
                    className={`text-lg font-bold ${
                      program.premium ? "text-white" : "text-[#3f342c]"
                    }`}
                  >
                    What Is Included
                  </h3>
                  <ul
                    className={`mt-4 list-disc space-y-3 pl-5 leading-7 ${
                      program.premium ? "text-[#f7efe8]" : "text-[#5f4c41]"
                    }`}
                  >
                    {program.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`mt-7 rounded-2xl p-5 ${
                    program.premium ? "bg-white text-[#3f342c]" : "bg-[#f7efe8]"
                  }`}
                >
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9b6f5d]">
                    Transformation Outcome
                  </p>
                  <p className="mt-3 font-semibold leading-7">
                    {program.outcome}
                  </p>
                </div>
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
