import Link from "next/link";

export const metadata = {
  title: "Coaching Approach | Core Belief Transformation Method",
  description:
    "Discover the Core Belief Transformation Method, Kaelynn's signature coaching approach for identifying limiting beliefs, building confidence, and creating lasting personal transformation.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const methodSteps = [
  {
    step: "01",
    title: "Awareness",
    description:
      "We begin by creating awareness around your goals, challenges, emotions, patterns, and the core beliefs that may be influencing your decisions and behavior.",
  },
  {
    step: "02",
    title: "Understanding",
    description:
      "Together, we explore how those beliefs may be affecting your confidence, relationships, emotions, choices, habits, and results.",
  },
  {
    step: "03",
    title: "Challenge",
    description:
      "We gently question beliefs that may no longer be serving you and begin separating truth from old conditioning, fear, or past experiences.",
  },
  {
    step: "04",
    title: "Transformation",
    description:
      "You begin replacing limiting beliefs with healthier, empowering perspectives that support confidence, self-worth, emotional wellness, and growth.",
  },
  {
    step: "05",
    title: "Alignment",
    description:
      "We create actions, habits, boundaries, and accountability that support the new belief system you are choosing to live from.",
  },
];

const beliefFormula = [
  "Belief",
  "Thought",
  "Emotion",
  "Action",
  "Result",
];

const signs = [
  "You repeat patterns you deeply want to change",
  "You struggle with confidence or self-worth",
  "You overthink decisions or second-guess yourself",
  "You people-please or fear disappointing others",
  "You know what to do but struggle to follow through",
  "You feel stuck even though you are ready for more",
  "You are navigating a life transition or personal reinvention",
  "You want deeper healing, growth, and self-awareness",
];

const expectations = [
  "Compassionate support",
  "Honest accountability",
  "Personalized guidance",
  "Core belief awareness",
  "Mindset and action alignment",
  "Sustainable transformation",
];

export default function CoachingApproachPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Coaching Approach
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Transform the Beliefs That Shape Your Life
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            The Core Belief Transformation Method is my signature coaching
            approach for helping you identify what has been holding you back,
            build confidence, and create meaningful change from the inside out.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex rounded-full bg-teal-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-teal-800"
            >
              View Coaching Programs
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
            Why Core Beliefs Matter
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Lasting Transformation Begins Beneath the Surface
          </h2>

          <p className="text-lg leading-8 text-slate-700">
            Many people try to change their habits, goals, relationships, or
            confidence without first understanding the beliefs driving their
            patterns. When those beliefs remain unexamined, it can be easy to
            repeat the same cycles even when you deeply want something
            different.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Core belief coaching helps you identify the internal stories that
            may be shaping how you see yourself, what you allow, what you avoid,
            and how you move through life.
          </p>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Transformation Pathway
          </p>

          <h2 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">
            Belief → Thought → Emotion → Action → Result
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-slate-700">
            The beliefs you carry often influence how you think, how you feel,
            how you respond, and what results you create. When the belief
            changes, the pattern can begin to change too.
          </p>

          <div className="grid gap-5 md:grid-cols-5">
            {beliefFormula.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-teal-100"
              >
                <p className="text-xl font-bold text-teal-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              My Signature Framework
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              The Core Belief Transformation Method
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              This method is designed to help you identify limiting beliefs,
              understand how they show up in your life, and create new alignment
              through reflection, action, and accountability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {methodSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                  Step {step.step}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-700">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Is This Approach Right for You?
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              This Method May Support You If...
            </h2>

            <div className="grid gap-3">
              {signs.map((sign) => (
                <div
                  key={sign}
                  className="rounded-2xl bg-teal-50 p-4 text-slate-700"
                >
                  <span className="font-bold text-teal-700">✓</span> {sign}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
              What Makes This Different
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              We Do Not Just Focus on What You Want to Do
            </h2>

            <p className="mb-5 leading-8 text-slate-200">
              Many coaching programs focus primarily on goals, habits, or
              accountability. Those are important, but lasting change often
              requires understanding what you believe about yourself and what
              you believe is possible.
            </p>

            <p className="mb-5 leading-8 text-slate-200">
              Through core belief work, we look beneath the surface so you can
              begin shifting the inner patterns that influence confidence,
              self-worth, decision-making, relationships, and follow-through.
            </p>

            <p className="leading-8 text-slate-200">
              This approach allows coaching to become more than motivation. It
              becomes a process of self-awareness, alignment, and personal
              transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              What You Can Expect
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Support That Is Compassionate, Honest, and Action-Oriented
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {expectations.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-teal-50 p-5 text-slate-700 shadow-sm"
              >
                <span className="font-bold text-teal-700">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Coaching Disclaimer
          </h2>

          <p className="leading-8 text-slate-700">
            Coaching is not therapy, counseling, or medical treatment. Coaching
            focuses on self-awareness, personal growth, accountability,
            mindset, goal achievement, and future-focused action. If you are
            experiencing a mental health crisis or need clinical support, please
            contact a licensed mental health professional or emergency service.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-10 text-center text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin Your Transformation
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Explore the Beliefs That May Be Holding You Back?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-200">
            Schedule a complimentary Discovery Call to discuss your goals,
            current challenges, and which coaching program best supports your
            next season of growth.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
            >
              View Programs & Investment
            </Link>

            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
