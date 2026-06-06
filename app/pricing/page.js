import Link from "next/link";

export const metadata = {
  title: "Coaching Programs & Investment | Life Coaching with Kaelynn",
  description:
    "Explore coaching programs with Life Coaching with Kaelynn and schedule a discovery call to discuss your investment.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const programs = [
  {
    badge: "Standard Coaching Experience",
    title: "Growth Coaching Program",
    investmentLabel: "Investment",
    investmentText: "Schedule a Discovery Call to Discuss Your Investment",
    length: "10 Weeks",
    icon: "🌱",
    featured: false,
    description:
      "Perfect for individuals seeking clarity, confidence, accountability, and support while working toward meaningful personal or professional goals.",
    includes: [
      "Ten 60-minute coaching sessions",
      "Personalized growth plan",
      "Goal-setting framework",
      "Weekly action steps",
      "Habit and progress tracking",
      "Accountability support",
      "Email support between sessions",
    ],
    idealFor: [
      "Personal growth",
      "Confidence building",
      "Goal achievement",
      "Motivation",
      "Wellness goals",
      "Life balance",
    ],
    outcome:
      "Gain clarity, confidence, and momentum while building habits that support long-term success.",
  },
  {
    badge: "Most Popular",
    title: "Heal. Grow. Transform. Signature Coaching Experience",
    investmentLabel: "Investment",
    investmentText: "Schedule a Discovery Call to Discuss Your Investment",
    length: "12 Weeks",
    icon: "🌿",
    featured: true,
    subtitle: "Core Belief Transformation Coaching",
    description:
      "This signature program helps uncover and transform the limiting beliefs that may be influencing your confidence, decisions, relationships, self-worth, and personal growth.",
    includes: [
      "Twelve 60-minute coaching sessions",
      "Core belief discovery process",
      "Limiting belief assessment",
      "Personalized transformation roadmap",
      "Goal setting and action planning",
      "Reflection exercises and worksheets",
      "Habit and progress tracking",
      "Accountability support",
      "Email support between sessions",
      "End-of-program transformation review",
    ],
    idealFor: [
      "Low self-confidence",
      "Self-sabotage",
      "People-pleasing",
      "Perfectionism",
      "Fear of failure",
      "Imposter syndrome",
      "Emotional healing",
      "Life transitions",
    ],
    outcome:
      "Develop a stronger sense of self-worth, confidence, clarity, and alignment while creating meaningful transformation from the inside out.",
  },
  {
    badge: "VIP Coaching Experience",
    title: "Premium Transformation Experience",
    investmentLabel: "Investment",
    investmentText: "Schedule a Discovery Call to Discuss Your Investment",
    length: "16 Weeks",
    icon: "🦋",
    featured: false,
    description:
      "The highest level of coaching support for individuals committed to deep personal transformation and meaningful change across multiple areas of life.",
    includes: [
      "Sixteen 60-minute coaching sessions",
      "Everything included in the Signature Coaching Experience",
      "Personalized transformation blueprint",
      "Weekly accountability check-ins",
      "Priority scheduling",
      "Unlimited email support",
      "Personalized wellness planning",
      "Guided journal prompts",
      "Advanced habit tracking system",
      "Progress monitoring reviews",
      "Mid-week support touchpoints",
      "End-of-program success strategy",
    ],
    idealFor: [
      "Deep personal transformation",
      "Major life changes",
      "High-level accountability",
      "Multiple areas of focus",
      "Long-term success",
    ],
    outcome:
      "Create lasting transformation through deeper self-awareness, consistent action, accountability, and personalized coaching support.",
  },
  {
    badge: "Ongoing Coaching Support",
    title: "Accountability & Growth Membership",
    investmentLabel: "Membership Investment",
    investmentText: "Schedule a Discovery Call to Discuss Your Investment",
    length: "Monthly",
    icon: "🌟",
    featured: false,
    description:
      "Designed for coaching graduates who want continued support, accountability, and encouragement after completing a coaching program.",
    includes: [
      "One monthly coaching session",
      "Monthly goal review",
      "Accountability check-ins",
      "Habit tracking support",
      "Email support",
      "Growth resources",
      "Priority access to future programs",
    ],
    idealFor: [
      "Coaching graduates",
      "Continued accountability",
      "Goal maintenance",
      "Habit reinforcement",
      "Long-term growth",
    ],
    outcome:
      "Maintain momentum, reinforce positive habits, and continue progressing toward your goals.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Coaching Programs & Investment
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Heal. Grow. Transform.
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            Premium transformational coaching designed to help you uncover what
            is holding you back, build confidence, and create meaningful change
            from the inside out.
          </p>

          <div className="mt-10">
            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex rounded-full bg-teal-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-teal-800"
            >
              Schedule Your Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Coaching Rooted in Core Belief Transformation
          </h2>

          <p className="text-lg leading-8 text-slate-700">
            Many people focus on changing behaviors without understanding the
            beliefs driving those behaviors. Core belief work helps identify the
            patterns, thoughts, and internal stories that may be affecting your
            confidence, relationships, decision-making, and personal growth.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            These coaching programs combine personalized support, practical
            strategies, reflection exercises, and accountability so you can
            create change that lasts.
          </p>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Your Coaching Investment
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Schedule a Discovery Call to Discuss Your Investment
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-700">
            Every client’s goals, challenges, and desired transformation are
            personal. During your complimentary Discovery Call, we will discuss
            where you are now, what you want to create, and which coaching
            experience may be the best fit for you.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            This allows your coaching recommendation and investment to be
            discussed with care, clarity, and alignment before you make a
            decision.
          </p>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-2 font-bold text-slate-900">
                Personalized Recommendation
              </h3>
              <p className="text-slate-700">
                We will discuss which coaching experience best fits your goals
                and current season of life.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-2 font-bold text-slate-900">
                Clear Next Steps
              </h3>
              <p className="text-slate-700">
                You will leave the call with a better understanding of your
                options and how coaching can support you.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-2 font-bold text-slate-900">
                Investment Discussion
              </h3>
              <p className="text-slate-700">
                Your investment will be discussed during the call based on the
                coaching program that fits your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.title}
              className={
                program.featured
                  ? "rounded-3xl border-4 border-teal-700 bg-white p-8 shadow-2xl"
                  : "rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
              }
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="text-4xl">{program.icon}</span>

                <span
                  className={
                    program.featured
                      ? "rounded-full bg-teal-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
                      : "rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-teal-800"
                  }
                >
                  {program.badge}
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
                {program.title}
              </h3>

              {program.subtitle && (
                <p className="mb-4 text-lg font-semibold text-teal-800">
                  {program.subtitle}
                </p>
              )}

              <div className="mb-8 rounded-2xl bg-teal-50 p-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-teal-800">
                  {program.investmentLabel}
                </p>

                <p className="text-2xl font-bold leading-snug text-teal-700">
                  {program.investmentText}
                </p>

                <p className="mt-3 text-lg font-medium text-slate-600">
                  {program.length}
                </p>
              </div>

              <p className="mb-8 text-base leading-7 text-slate-700">
                {program.description}
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 text-lg font-bold text-slate-900">
                    This Program Includes:
                  </h4>

                  <ul className="space-y-3 text-slate-700">
                    {program.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="font-bold text-teal-700">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-lg font-bold text-slate-900">
                    Ideal For:
                  </h4>

                  <ul className="space-y-3 text-slate-700">
                    {program.idealFor.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="font-bold text-teal-700">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                <h4 className="mb-2 text-lg font-bold text-slate-900">
                  Outcome
                </h4>
                <p className="leading-7 text-slate-700">{program.outcome}</p>
              </div>

              <div className="mt-8">
                <Link
                  href={bookingLink}
                  target="_blank"
                  className={
                    program.featured
                      ? "inline-flex rounded-full bg-teal-700 px-7 py-3 font-semibold text-white transition hover:bg-teal-800"
                      : "inline-flex rounded-full border border-teal-700 px-7 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
                  }
                >
                  Discuss Your Investment
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Why Coaching Is Framed as an Investment
          </h2>

          <p className="text-lg leading-8 text-slate-700">
            Coaching is referred to as an investment because the benefits of
            personal growth often extend far beyond the coaching experience
            itself. When you invest in your mindset, confidence, self-worth,
            goals, relationships, and personal development, the impact can reach
            every area of your life.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            The work you do today has the potential to influence how you make
            decisions, how you show up for yourself, how you pursue your goals,
            and how you create the future you want.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-10 text-center text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Complimentary Discovery Call
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Discuss Your Coaching Investment?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-200">
            Your free 30-minute Discovery Call is designed to discuss your
            goals, challenges, and determine which coaching program best fits
            your current season of life.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
          >
            Schedule Your Free Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
