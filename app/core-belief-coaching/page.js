import Link from "next/link";

export const metadata = {
  title: "Core Belief Transformation Coaching | Life Coaching with Kaelynn",
  description:
    "Explore Core Belief Transformation Coaching with Kaelynn Kinnison. Identify limiting beliefs, build confidence, strengthen self-worth, reduce self-sabotage, and create lasting personal growth.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const methodSteps = [
  {
    step: "01",
    title: "Awareness",
    text: "Identify the limiting belief, emotional pattern, or self-defeating thought operating beneath the surface.",
  },
  {
    step: "02",
    title: "Understanding",
    text: "Explore how that belief affects your confidence, emotions, decisions, relationships, habits, and results.",
  },
  {
    step: "03",
    title: "Challenge",
    text: "Question beliefs that may no longer be serving your growth and separate truth from fear, conditioning, or past experiences.",
  },
  {
    step: "04",
    title: "Transformation",
    text: "Replace limiting beliefs with healthier, more empowering perspectives that support confidence, self-worth, and growth.",
  },
  {
    step: "05",
    title: "Alignment",
    text: "Create actions, habits, boundaries, and accountability that support the new belief system you are choosing to live from.",
  },
];

const formula = ["Belief", "Thought", "Emotion", "Action", "Result"];

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

const explorationAreas = [
  "Limiting beliefs and self-defeating patterns",
  "Self-worth and self-confidence",
  "Fear of failure, rejection, or judgment",
  "Perfectionism and overthinking",
  "People-pleasing and boundary setting",
  "Imposter syndrome",
  "Emotional triggers and recurring patterns",
  "Personal identity and self-concept",
  "Goal achievement barriers",
  "Relationship dynamics",
  "Life transitions and personal growth",
  "Self-sabotage and procrastination",
];

const commonBeliefs = [
  "I am not good enough.",
  "I always fail.",
  "I do not deserve success.",
  "I have to be perfect.",
  "My needs do not matter.",
  "I cannot trust myself.",
  "Change is too hard for me.",
  "I am too far behind.",
];

const benefits = [
  "Greater self-awareness",
  "Increased confidence and self-trust",
  "Improved decision-making",
  "Healthier boundaries",
  "Reduced self-sabotaging behaviors",
  "Increased motivation and follow-through",
  "Stronger emotional resilience",
  "A stronger sense of purpose",
  "Improved self-worth",
  "More authentic relationships",
  "Better alignment between goals and actions",
  "Lasting personal growth",
];

export default function CoreBeliefCoachingPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Signature Coaching Method
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Core Belief Transformation Coaching
            </h1>

            <p className="mb-6 text-2xl font-semibold leading-relaxed text-teal-700">
              Change the beliefs. Change the patterns. Change the life.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              Many people try to change behaviors, habits, relationships, or
              circumstances without addressing the beliefs that may be driving
              those patterns beneath the surface.
            </p>

            <p className="mb-8 text-lg leading-8 text-slate-700">
              Core Belief Transformation Coaching helps you identify limiting
              beliefs, challenge old patterns, and develop healthier
              perspectives so lasting change can begin from the inside out.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
              >
                View Programs & Investment
              </Link>

              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Why Core Beliefs Matter
            </h2>

            <p className="mb-4 leading-8 text-slate-700">
              Core beliefs influence how you see yourself, what you believe is
              possible, how you respond to challenges, and the choices you make.
            </p>

            <p className="mb-4 leading-8 text-slate-700">
              When limiting beliefs go unchallenged, they can quietly shape
              confidence, relationships, emotional wellness, motivation, and
              results.
            </p>

            <p className="font-semibold leading-8 text-teal-700">
              When you change the beliefs that shape your life, you begin
              changing the life those beliefs create.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            What Are Core Beliefs?
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            The Inner Stories That Shape Your Patterns
          </h2>

          <p className="text-lg leading-8 text-slate-700">
            Core beliefs are deeply held beliefs about yourself, others, and the
            world around you. They often form through life experiences,
            relationships, repeated messages, challenges, and patterns learned
            over time.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            These beliefs can influence your confidence, self-worth, emotional
            responses, boundaries, relationships, decision-making, and ability to
            follow through on goals.
          </p>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            How Beliefs Create Patterns
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
            {formula.map((item) => (
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
              The Process
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              The Core Belief Transformation Method
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              This five-step method helps you move from awareness to lasting
              transformation by identifying limiting beliefs, understanding
              their impact, challenging old patterns, creating healthier
              perspectives, and aligning your actions with the person you are
              becoming.
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

                <p className="leading-7 text-slate-700">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Is This For You?
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Core Belief Coaching May Support You If...
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
              This Is More Than Motivation
            </h2>

            <p className="mb-5 leading-8 text-slate-200">
              Many coaching approaches focus primarily on goals, habits,
              motivation, or accountability. Those tools are valuable, but
              lasting change often requires understanding what you believe about
              yourself and what you believe is possible.
            </p>

            <p className="mb-5 leading-8 text-slate-200">
              Core Belief Transformation Coaching focuses on helping you create
              change from the inside out by identifying the beliefs that may be
              influencing your thoughts, emotions, decisions, behaviors, and
              results.
            </p>

            <p className="leading-8 text-slate-200">
              When your inner belief system changes, your outer choices can
              begin to change too.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              What We May Explore Together
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Areas Core Belief Coaching Can Support
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {explorationAreas.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-teal-50 p-5 font-medium text-slate-700 shadow-sm"
              >
                <span className="font-bold text-teal-700">•</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Common Beliefs
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Limiting Beliefs Clients May Explore
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {commonBeliefs.map((belief) => (
              <div
                key={belief}
                className="rounded-2xl bg-white p-5 text-lg font-semibold text-slate-700 shadow-sm"
              >
                “{belief}”
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-teal-50 p-8 shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-teal-700">
              Limiting Belief
            </h3>

            <p className="mb-4 text-lg font-semibold text-slate-900">
              “I am not good enough.”
            </p>

            <p className="leading-7 text-slate-700">
              This belief may show up as perfectionism, people-pleasing,
              avoiding opportunities, fear of failure, or constantly needing
              outside validation.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-md">
            <h3 className="mb-4 text-2xl font-bold">Empowering Belief</h3>

            <p className="mb-4 text-lg font-semibold">
              “I am worthy, capable, and growing.”
            </p>

            <p className="leading-7 text-slate-200">
              This belief supports confidence, healthier choices, stronger
              boundaries, increased self-trust, and more aligned action.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Benefits
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Clients Often Experience
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl bg-white p-5 text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                <span className="font-bold text-teal-700">✓</span> {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-slate-200">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Where This Method Is Used
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Integrated Into Your Coaching Experience
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">
            The Core Belief Transformation Method is integrated into the
            Signature Coaching Experience and the Premium Transformation
            Experience. During your Discovery Call, we will discuss your goals
            and determine which level of support best fits your current season
            of growth.
          </p>

          <div className="mt-10">
            <Link
              href="/pricing"
              className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800"
            >
              View Programs & Investment
            </Link>
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
            The Life You Want Begins With the Beliefs You Choose to Change
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-200">
            Schedule your complimentary Discovery Call and discover how Core
            Belief Transformation Coaching can support your healing, growth, and
            next chapter.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
            >
              View Programs
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
