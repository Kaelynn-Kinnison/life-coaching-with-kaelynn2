import Link from "next/link";

export const metadata = {
  title: "Confidence Coaching Programs & Pricing",
  description:
    "Compare private confidence coaching programs for women ready to stop second-guessing, change limiting beliefs, strengthen boundaries, and trust themselves.",
  alternates: {
    canonical: "/pricing",
  },
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const supportHours = "8:00 a.m.-10:00 p.m. CT";

const programs = [
  {
    name: "Confidence Clarity Call",
    eyebrow: "Complimentary Confidence Clarity Call",
    duration: "20-30 minutes",
    investment: "Free",
    focus: "A no-pressure first conversation",
    description:
      "A focused, no-pressure conversation to name where self-doubt is showing up, clarify what you want to change, and identify the support that fits.",
    bestFor:
      "Women who are curious about coaching and want clarity before choosing a private coaching experience.",
    includes: [
      "Space to share what is bringing you to coaching",
      "A conversation about your goals and current self-doubt patterns",
      "A recommendation for the level of support that may fit best",
      "Time to ask questions before making a decision",
    ],
    outcome:
      "You leave with a clearer sense of your next best step and whether this coaching relationship feels aligned.",
  },
  {
    name: "One-Time Coaching Session",
    duration: "One private 45-60 minute session",
    investment: "$215",
    focus: "Focused support for clarity and next steps",
    description:
      "For women who want a single, supportive coaching session to talk through a specific challenge, decision, or area where self-doubt is showing up.",
    bestFor:
      "Women who want focused support before committing to a longer coaching experience, or who need guidance around one clear topic.",
    includes: [
      "One private 45-60 minute coaching session",
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
    duration: "12-week private coaching experience",
    investment: "$1,997",
    paymentPlan: "or 3 monthly payments of $699 ($2,097 total)",
    focus: "A clear, structured reset for self-trust and confidence",
    description:
      "For women ready to identify the limiting beliefs beneath self-doubt, rebuild self-worth, and begin making choices from a steadier inner foundation.",
    featured: true,
    bestFor:
      "Women who want a focused private coaching experience to stop second-guessing themselves, understand the patterns keeping them stuck, and practice more confident follow-through.",
    includes: [
      "Private 45-60 minute coaching sessions across 12 weeks",
      "Core Belief Transformation work",
      "H.E.A.L. Framework guidance",
      "Limiting belief identification and reframing",
      "Self-worth and confidence development",
      "Personalized reflection prompts and action steps",
      `Between-session support by phone, chat, email, or text during ${supportHours}`,
      "Support with confident decision-making and follow-through",
    ],
    outcome:
      "You leave with a clearer understanding of what has been driving self-doubt, a stronger sense of self-trust, and practical ways to keep choosing differently.",
  },
  {
    name: "The Confidence Reclamation",
    duration: "16-week high-touch private coaching experience",
    investment: "$2,997",
    paymentPlan: "or 4 monthly payments of $799 ($3,196 total)",
    focus: "Deeper identity work, integration, and high-touch support",
    description:
      "For women ready to change interconnected patterns—not just understand them—and receive close support while practicing self-trust, boundaries, and confident choices in real life.",
    premium: true,
    bestFor:
      "Women who know their self-doubt is connected to deeper identity, self-worth, relationship, or life-transition patterns and want more spacious support as they practice becoming who they are ready to be.",
    includes: [
      "Private 45-60 minute coaching sessions across 16 weeks",
      "A personalized Confidence Reclamation Roadmap connecting your beliefs, patterns, goals, and next chapter",
      "Deeper Core Belief Transformation across identity, self-worth, relationships, and life transitions",
      "H.E.A.L. Framework coaching applied to real decisions as they happen",
      "Boundary and self-trust practice for difficult conversations and choices",
      "Personalized reflection prompts, action steps, and progress reviews",
      `Priority phone, chat, email, or text support during ${supportHours}, with replies generally within one hour`,
      "An integration plan for continuing the work after the 16 weeks end",
    ],
    outcome:
      "You receive the time, structure, and support to not only rebuild confidence, but live from it more consistently as you make decisions, set boundaries, and step into your next chapter.",
  },
];

const continuedSupport = [
  {
    name: "Growth Membership",
    duration: "Private coaching alumni membership",
    investment: "$197/month",
    focus: "Continued support after private coaching",
    description:
      "For past clients who want continued encouragement, coaching, and accountability as they keep strengthening confidence.",
    bestFor:
      "Past clients who have completed private coaching and want ongoing support to maintain momentum.",
    includes: [
      "One private 45-60 minute coaching session each month",
      "One weekly check-in by phone, email, or text",
      `Support available during ${supportHours}`,
      "Monthly goal review and accountability",
      "Continued reflection and confidence reinforcement",
      "Support for new decisions, boundaries, and growth edges",
      "Encouragement to stay connected to the work you have already begun",
    ],
    outcome:
      "You stay supported as you continue practicing confidence, self-trust, and aligned action beyond the initial coaching experience.",
  },
];

const differences = [
  {
    label: "Best fit",
    rebuild: "One central confidence pattern, decision, or season",
    reclamation: "Interconnected patterns affecting identity, boundaries, relationships, or a major transition",
  },
  {
    label: "Timeline",
    rebuild: "12 focused weeks",
    reclamation: "16 high-touch weeks for deeper practice and integration",
  },
  {
    label: "Personalization",
    rebuild: "Reflection prompts and action steps shaped around your goals",
    reclamation: "A full Confidence Reclamation Roadmap, progress reviews, and post-program integration plan",
  },
  {
    label: "Between-session access",
    rebuild: "Ongoing accountability during support hours",
    reclamation: "Priority access with replies generally within one hour during support hours",
  },
];

const featuredTestimonials = [
  {
    quote: "The biggest shift for me was realizing that my thoughts were not always the truth. That changed how I made decisions, set boundaries, and trusted myself.",
    name: "Transformation Coaching Client",
  },
  {
    quote: "I began to understand how old experiences were shaping the way I saw myself. Coaching helped me challenge those beliefs and start showing up with more confidence and self-worth.",
    name: "Self-Worth Coaching Client",
  },
  {
    quote: "Kaelynn balanced compassion with accountability. I left coaching feeling more grounded, more aware, and more committed to my growth.",
    name: "Accountability Coaching Client",
  },
];

const pricingFaqs = [
  {
    question: "Are payment plans available?",
    answer: "Yes. The Confidence Rebuild is available for $1,997 paid in full or three monthly payments of $699. The Confidence Reclamation is available for $2,997 paid in full or four monthly payments of $799. The first payment is due at enrollment, and remaining payments are automatically charged every 30 days. Payment plans are a commitment to the full program investment, not a month-to-month coaching membership.",
  },
  {
    question: "Which coaching option should I choose?",
    answer: "Choose the one-time session when you want focused support around one clear issue. The Confidence Rebuild is designed for a concentrated 12-week shift. The Confidence Reclamation is best when several patterns are connected and you want closer support while practicing change in daily life. We can decide together during your complimentary call.",
  },
  {
    question: "How does between-session support work?",
    answer: `Support is available by phone, chat, email, or text from ${supportHours}. The Confidence Reclamation includes priority support, with replies generally within one hour during those hours. Coaching support is not emergency or crisis care.`,
  },
  {
    question: "Can I participate in coaching while I am in therapy?",
    answer: "Yes. Coaching can complement therapy when each service has a clear role. Coaching is forward-focused and is not a substitute for mental-health treatment, diagnosis, or crisis support.",
  },
  {
    question: "Where do sessions take place?",
    answer: "Sessions are offered virtually, so you can join from a private, comfortable location. Sessions typically last 45-60 minutes.",
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

      {program.eyebrow && (
        <p className="mb-3 text-sm font-bold text-[#0f766e]">{program.eyebrow}</p>
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
          Investment
        </p>
        <p className="mt-2 text-5xl font-black">{program.investment}</p>
        {program.paymentPlan && (
          <>
            <p className={`mt-1 text-sm font-semibold ${program.premium ? "text-[#f7d7c7]" : "text-[#6f5a4d]"}`}>
              paid in full
            </p>
            <p className={`mt-4 border-t pt-4 text-base font-bold leading-7 ${program.premium ? "border-white/20 text-white" : "border-[#ddcfc3] text-[#3f342c]"}`}>
              {program.paymentPlan}
            </p>
          </>
        )}
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
            Stop second-guessing yourself. Start trusting the woman making the decision.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
            Private confidence coaching for women ready to change the beliefs
            beneath overthinking, people-pleasing, and self-doubt—so you can
            make decisions, set boundaries, and move forward with greater
            self-trust.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="mt-9 inline-flex rounded-full bg-[#0f766e] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
          >
            Book Your Complimentary Clarity Call
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              The H.E.A.L. Difference
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              This is not surface-level confidence advice.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6f5a4d]">
              We work beneath the pattern, then bring what you learn into the
              choices and conversations that shape your real life.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["H", "Hear", "Name the story beneath the struggle."],
              ["E", "Expose", "Find the belief driving the pattern."],
              ["A", "Align", "Choose what is true for you now."],
              ["L", "Live", "Practice it through boundaries, decisions, and action."],
            ].map(([letter, title, text]) => (
              <article key={letter} className="rounded-3xl bg-[#fdf8f3] p-6 ring-1 ring-[#eadfd5]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f766e] text-xl font-bold text-white">{letter}</div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-[#6f5a4d]">{text}</p>
              </article>
            ))}
          </div>
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

          <div className="mt-16 overflow-hidden rounded-[2rem] bg-white ring-1 ring-[#eadfd5]">
            <div className="border-b border-[#eadfd5] p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">Compare Private Coaching</p>
              <h2 className="mt-3 text-3xl font-bold">Focused change or deeper reclamation?</h2>
            </div>
            <div className="hidden grid-cols-[0.75fr_1fr_1fr] bg-[#f7efe8] px-8 py-4 font-bold md:grid">
              <span>Compare</span><span>The Confidence Rebuild</span><span>The Confidence Reclamation</span>
            </div>
            {differences.map((item) => (
              <div key={item.label} className="grid gap-3 border-t border-[#eadfd5] px-8 py-6 md:grid-cols-[0.75fr_1fr_1fr]">
                <h3 className="font-bold">{item.label}</h3>
                <p className="leading-7 text-[#6f5a4d]"><span className="font-bold text-[#3f342c] md:hidden">Rebuild: </span>{item.rebuild}</p>
                <p className="leading-7 text-[#6f5a4d]"><span className="font-bold text-[#3f342c] md:hidden">Reclamation: </span>{item.reclamation}</p>
              </div>
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

      <section className="bg-[#3f342c] px-6 py-20 text-white md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">Client Reflections</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">What begins to change when you trust yourself.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredTestimonials.map((item) => (
              <blockquote key={item.name} className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/15">
                <p className="text-lg leading-8 text-[#fffaf5]">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-[#f7d7c7]">— {item.name}</footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[#eadfd5]">Individual experiences vary; testimonials are not a guarantee of specific results.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">Before You Begin</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Questions about working together</h2>
          </div>
          <div className="mt-10 space-y-5">
            {pricingFaqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl bg-white p-7 ring-1 ring-[#eadfd5]">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="mt-3 leading-8 text-[#6f5a4d]">{faq.answer}</p>
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
            Your Complimentary Confidence Clarity Call is free.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
            We will identify where self-doubt is showing up, clarify what you
            want to change, and determine which level of support fits—without
            pressure to decide on the call.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="mt-9 inline-flex rounded-full bg-[#0f766e] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
          >
            Book Your Complimentary Clarity Call
          </Link>
        </div>
      </section>
    </main>
  );
}
