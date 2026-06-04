import Link from "next/link";

export const metadata = {
  title: "Coaching Services | Life Coaching with Kaelynn",
  description:
    "Explore coaching services rooted in Core Belief Transformation Coaching, including confidence coaching, self-worth coaching, life transition support, accountability, wellness alignment, and personal growth.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const services = [
  {
    title: "Core Belief Transformation",
    icon: "🌿",
    description:
      "Identify the beliefs, stories, and patterns that may be influencing your confidence, choices, relationships, and personal growth.",
    focus: [
      "Limiting belief awareness",
      "Self-worth development",
      "Pattern recognition",
      "Inner growth and reflection",
    ],
  },
  {
    title: "Confidence & Self-Worth Coaching",
    icon: "✨",
    description:
      "Build a stronger relationship with yourself by challenging self-doubt, strengthening self-trust, and learning to make decisions from confidence instead of fear.",
    focus: [
      "Confidence building",
      "Self-trust",
      "Boundary awareness",
      "Overcoming self-doubt",
    ],
  },
  {
    title: "Life Transition Coaching",
    icon: "🦋",
    description:
      "Receive support while navigating major life changes, uncertainty, emotional shifts, and new seasons of personal growth.",
    focus: [
      "Career changes",
      "Relationship transitions",
      "Identity shifts",
      "Personal reinvention",
    ],
  },
  {
    title: "Accountability & Goal Support",
    icon: "🎯",
    description:
      "Create structure, consistency, and momentum with coaching support designed to help you follow through on what matters most.",
    focus: [
      "Goal setting",
      "Weekly action steps",
      "Habit tracking",
      "Progress accountability",
    ],
  },
  {
    title: "Wellness & Lifestyle Alignment",
    icon: "🌱",
    description:
      "Align your daily habits, routines, energy, and self-care with the life you are working to create.",
    focus: [
      "Self-care routines",
      "Stress management",
      "Wellness habits",
      "Life balance",
    ],
  },
  {
    title: "Personal Growth & Emotional Wellness",
    icon: "💛",
    description:
      "Develop greater self-awareness, emotional clarity, and personal resilience as you move toward healing, growth, and transformation.",
    focus: [
      "Emotional awareness",
      "Mindset support",
      "Personal development",
      "Healing-focused growth",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Coaching Services
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Coaching Services Rooted in Core Belief Transformation
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            Your confidence, decisions, relationships, habits, and goals are
            often shaped by what you believe about yourself and what you believe
            is possible. Coaching helps you identify those patterns and create
            change from the inside out.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex rounded-full bg-teal-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-teal-800"
            >
              Explore Programs & Investment
            </Link>

            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex rounded-full border border-teal-700 px-8 py-4 text-base font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Core Belief Connection
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Lasting Change Starts Beneath the Surface
          </h2>

          <p className="text-lg leading-8 text-slate-700">
            Many people try to change their habits, relationships, goals, or
            confidence without first understanding the beliefs driving their
            patterns. When those beliefs remain unexamined, it can be easy to
            repeat the same cycles even when you deeply want something
            different.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Core Belief Transformation Coaching focuses on identifying the
            inner stories that may be shaping how you see yourself, what you
            allow, what you avoid, and how you move through life.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Areas of Support
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Coaching Services Designed to Help You Heal, Grow, and Transform
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 text-4xl">{service.icon}</div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-700">
                  {service.description}
                </p>

                <div className="rounded-2xl bg-teal-50 p-5">
                  <h4 className="mb-3 font-bold text-slate-900">
                    Focus Areas:
                  </h4>

                  <ul className="space-y-2 text-slate-700">
                    {service.focus.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="font-bold text-teal-700">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-md">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                Step One
              </p>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Identify the Belief
              </h3>

              <p className="leading-7 text-slate-700">
                We explore the beliefs and inner stories that may be shaping
                your confidence, choices, habits, and emotional patterns.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                Step Two
              </p>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Understand the Pattern
              </h3>

              <p className="leading-7 text-slate-700">
                We connect those beliefs to the patterns showing up in your
                life, such as self-doubt, people-pleasing, avoidance, or
                inconsistency.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-md">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                Step Three
              </p>

              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Create New Alignment
              </h3>

              <p className="leading-7 text-slate-700">
                Through reflection, coaching, action steps, and accountability,
                you begin creating choices that align with the life you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-slate-200">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            How Services Connect to Programs
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Your Coaching Plan Is Personalized to Your Goals
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">
            These service areas are integrated into the Growth Coaching Program,
            Signature Coaching Experience, Premium Transformation Experience,
            and ongoing Accountability & Growth Membership. During your
            Discovery Call, we will discuss your goals and determine which
            coaching path best fits your current season of life.
          </p>

          <div className="mt-10">
            <Link
              href="/pricing"
              className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800"
            >
              View Coaching Programs & Investment
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-10 text-center text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin Your Transformation
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Understand What Has Been Holding You Back?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-200">
            Schedule a complimentary Discovery Call to discuss your goals,
            challenges, and the type of coaching support that would best serve
            your growth.
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
