import Link from "next/link";

export const metadata = {
  title: "Programs & Pricing",
  description:
    "Explore coaching program investments for women ready to overcome self-doubt, transform limiting beliefs, and build lasting confidence.",
  alternates: {
    canonical: "/pricing",
  },
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
    name: "One-Time Coaching Session",
    duration: "Single private coaching session",
    investment: "$215",
    focus: "Focused support for clarity and next steps",
    description:
      "For women who want a single, supportive coaching session to talk through a specific challenge, decision, or area where self-doubt is showing up.",
    bestFor:
      "Women who want focused support before committing to a longer coaching experience, or who need guidance around one clear topic.",
    includes: [
      "One private 1:1 coaching session",
      "Focused conversation around one current challenge or goal",
      "Support identifying the belief or pattern underneath the issue",
      "Practical next steps to help you move forward with more clarity",
      "Space to ask questions and receive personalized guidance",
    ],
    outcome:
      "You leave with greater clarity, a grounded next step, and a deeper understanding of what may be keeping you stuck.",
  },
  {
    name: "The Confidence Rebuild",
    duration: "12-week signature Core Belief Transformation experience",
    investment: "$1,997",
    focus: "A clear, structured reset for self-trust and confidence",
    description:
      "For women ready to identify the limiting beliefs beneath self-doubt, rebuild self-worth, and begin making choices from a steadier inner foundation.",
    featured: true,
    bestFor:
      "Women who want a focused private coaching experience to stop second-guessing themselves, understand the patterns keeping them stuck, and practice more confident follow-through.",
    includes: [
      "Private 1:1 coaching sessions",
      "Core Belief Transformation work",
      "H.E.A.L. Framework guidance",
      "Limiting belief identification and reframing",
      "Self-worth and confidence development",
      "Personalized reflection prompts and action steps",
      "Accountability between sessions to support real-life practice",
      "Support with confident decision-making and follow-through",
    ],
    outcome:
      "You leave with a clearer understanding of what has been driving self-doubt, a stronger sense of self-trust, and practical ways to keep choosing differently.",
  },
  {
    name: "The Confidence Reclamation",
    duration: "6-month private coaching experience",
    investment: "$2,997",
    focus: "Deeper identity work, integration, and high-touch support",
    description:
      "For women who want the deepest private coaching support as they reclaim self-trust, strengthen boundaries, and integrate confidence into their daily decisions, relationships, and next chapter.",
    premium: true,
    bestFor:
      "Women who know their self-doubt is connected to deeper identity, self-worth, relationship, or life-transition patterns and want more spacious support as they practice becoming who they are ready to be.",
    includes: [
      "Everything in The Confidence Rebuild",
      "Extended private coaching timeline for deeper integration",
      "Personalized confidence roadmap for your next chapter",
      "Advanced Core Belief Transformation work",
      "Monthly integration check-ins to help the work stick",
      "Ongoing accountability and implementation support between sessions",
      "Support applying the work to boundaries, relationships, decisions, and identity shifts",
      "Priority between-session support when old patterns or confidence blocks come up in real life",
    ],
    outcome:
      "You receive the time, structure, and support to not only rebuild confidence, but live from it more consistently as you make decisions, set boundaries, and step into your next chapter.",
  },
];

const continuedSupport = [
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

function ProgramCard({ program }) {
  return (
    <article
      className={
        program.premium
          ? "flex h-full flex-col rounded-[2rem] bg-[#3f342c] p-8 text-white shadow-2xl shadow-[#3f342c]/20 ring-1 ring-[#6d594b]"
          : program.featured
            ? "flex h-full flex-col rounded-[2rem] bg-white p-8 text-[#3f342c] shadow-lg shadow-[#8b6f5c]/10 ring-2 ring-[#b7835f]"
            : "flex h-full flex-col rounded-[2rem] bg-white p-8 text-[#3f342c] shadow-lg shadow-[#8b6f5c]/10 ring-1 ring-[#eadfd5]"
      }
    >
      {program.featured && (
        <p className="mb-5 inline-block w-fit rounded-full bg-[#b7835f] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
          Preferred Package
        </p>
      )}

      {program.premium && (
        <p className="mb-5 inline-block w-fit rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#3f342c]">
          Premium Package
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
        <p className="mt-2 text-5xl font-black">{program.investment}</p>
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
        <p className="mt-3 font-semibold leading-7">{program.outcome}</p>
      </div>
    </article>
  );
}

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

      <section className="px-6 pb-16 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 border-y border-[#eadfd5] py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Why This Work Matters
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              The investment is not just for more confidence. It is for the way
              your life changes when self-doubt stops leading.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#6f5a4d]">
            <p>
              When self-doubt is running the show, it can make your decisions
              smaller, your boundaries softer, your voice quieter, and your next
              chapter feel harder to trust.
            </p>
            <p>
              Coaching gives you space to understand the beliefs underneath
              those patterns, rebuild self-worth from the inside out, and
              practice choosing from clarity instead of fear.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Choose Your Next Step
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Start with clarity, then choose the level of support that fits.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <ProgramCard key={program.name} program={program} />
            ))}
          </div>

          <div className="mt-12 border-t border-[#eadfd5] pt-12">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
                Continued Support
              </p>
              <h2 className="text-3xl font-bold leading-tight">
                For past clients who want to keep building momentum.
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              {continuedSupport.map((program) => (
                <ProgramCard key={program.name} program={program} />
              ))}
            </div>
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
