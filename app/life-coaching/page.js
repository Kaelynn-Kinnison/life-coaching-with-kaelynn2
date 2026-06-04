import Link from "next/link";

export const metadata = {
  title: "Life Coaching | Life Coaching with Kaelynn",
  description:
    "Learn how life coaching with Kaelynn supports clarity, confidence, accountability, emotional wellness, life transitions, and lasting change through Core Belief Transformation Coaching.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const signs = [
  "You feel stuck but are not sure what needs to change",
  "You want more confidence, clarity, or direction",
  "You keep repeating the same patterns",
  "You struggle with self-doubt or overthinking",
  "You are navigating a major life transition",
  "You want accountability and support",
  "You are ready to grow but do not know where to start",
  "You want to reconnect with yourself and your purpose",
];

const formula = ["Belief", "Thought", "Emotion", "Action", "Result"];

const supportAreas = [
  {
    title: "Clarity",
    text: "Coaching helps you identify what you want, what matters most, and what steps can help you move forward.",
  },
  {
    title: "Confidence",
    text: "Together, we work on strengthening self-trust, self-worth, and your belief in your ability to create change.",
  },
  {
    title: "Accountability",
    text: "Coaching provides structure, support, and follow-through so your goals become intentional actions.",
  },
  {
    title: "Life Transitions",
    text: "Whether you are facing change, uncertainty, or a new season of life, coaching helps you navigate the process with support.",
  },
  {
    title: "Emotional Wellness",
    text: "Coaching can help you recognize patterns, manage overwhelm, and create healthier ways of thinking and responding.",
  },
  {
    title: "Personal Growth",
    text: "Coaching supports self-awareness, growth, healing, mindset development, and becoming more aligned with who you want to be.",
  },
];

const results = [
  "Greater self-awareness",
  "Clearer goals and direction",
  "Stronger confidence",
  "Healthier boundaries",
  "Improved decision-making",
  "More consistent action",
  "Reduced self-sabotage",
  "A stronger sense of purpose",
];

export default function LifeCoachingPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Life Coaching
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Life Coaching for Clarity, Confidence, and Core Belief
              Transformation
            </h1>

            <p className="mb-8 text-xl leading-8 text-slate-700">
              Life coaching helps you move beyond feeling stuck and into a life
              of greater confidence, purpose, growth, and transformation by
              exploring both your goals and the beliefs that may be shaping your
              patterns.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
              >
                Book a Free Discovery Call
              </Link>

              <Link
                href="/pricing"
                className="inline-flex rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                View Programs & Investment
              </Link>
            </div>
          </div>

          <div>
            <img
              src="/life-coaching-hero.png"
              alt="Person climbing a mountain path at sunrise representing growth and transformation"
              className="w-full rounded-3xl border border-slate-200 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Who Coaching Is For
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
            You May Benefit From Coaching If...
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-lg leading-8 text-slate-700">
            Coaching is for individuals who are ready to grow, reflect, take
            ownership of their next steps, and receive support while creating
            meaningful change.
          </p>

          <div className="grid gap-5 text-left md:grid-cols-2">
            {signs.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                <span className="font-bold text-teal-700">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            What Makes This Coaching Different
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Life Coaching That Looks Beneath the Surface
          </h2>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Many people try to change their habits, goals, relationships, or
            confidence without addressing the beliefs that may be influencing
            those patterns. Through my coaching approach, we explore not only
            what you want to change, but also what may be keeping you stuck.
          </p>

          <p className="mb-10 text-lg leading-8 text-slate-700">
            My work is rooted in the Core Belief Transformation Method™, a
            supportive process that helps identify limiting beliefs, challenge
            old patterns, and create healthier beliefs that support lasting
            growth.
          </p>

          <Link
            href="/core-belief-coaching"
            className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800"
          >
            Learn About Core Belief Transformation
          </Link>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Core Belief Connection
          </p>

          <h2 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">
            Belief → Thought → Emotion → Action → Result
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-slate-700">
            The beliefs you carry often influence how you think, how you feel,
            how you respond, and what results you create. When the belief
            changes, the pattern can begin to change too.
          </p>

          <div className="grid gap-4 md:grid-cols-5">
            {formula.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-teal-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Coaching Support
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Areas Life Coaching Can Support
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-lg leading-8 text-slate-700">
            Coaching can support many areas of life depending on your goals,
            challenges, and current season.
          </p>

          <div className="grid gap-6 text-left md:grid-cols-3">
            {supportAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl bg-slate-50 p-8 shadow-md ring-1 ring-slate-200"
              >
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {area.title}
                </h3>

                <p className="leading-7 text-slate-700">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200">
            <h2 className="mb-5 text-3xl font-bold text-slate-900">
              Coaching Is Not About Having It All Figured Out
            </h2>

            <p className="mb-4 leading-8 text-slate-700">
              You do not need to have all the answers before beginning
              coaching. You only need a willingness to reflect, grow, and take
              the next step forward.
            </p>

            <p className="leading-8 text-slate-700">
              Coaching gives you a space to be supported, encouraged,
              challenged, and held accountable while you create meaningful
              change in your life.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-md">
            <h2 className="mb-5 text-3xl font-bold">No Problem Is Too Big</h2>

            <p className="mb-4 leading-8 text-slate-200">
              One of my core beliefs is that no problem is too big, especially
              when you do not have to face it alone.
            </p>

            <p className="leading-8 text-slate-200">
              Life coaching provides support, clarity, accountability, and a
              path forward when the next step feels hard to see.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Possible Results
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">
            What Clients Often Experience
          </h2>

          <div className="grid gap-5 text-left md:grid-cols-2">
            {results.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 font-medium text-slate-700 shadow-md"
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
            focuses on self-awareness, personal growth, accountability, mindset,
            goal achievement, and future-focused action. If you are experiencing
            a mental health crisis or need clinical support, please contact a
            licensed mental health professional or emergency service.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin Your Transformation
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Take the First Step?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-200">
            A discovery call is a supportive first step to talk through your
            goals, current challenges, and whether coaching is the right fit for
            your next chapter.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
            >
              Book a Free Discovery Call
            </Link>

            <Link
              href="/pricing"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              View Programs & Investment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
