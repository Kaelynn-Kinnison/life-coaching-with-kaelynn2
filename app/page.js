import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Life Coaching with Kaelynn | Heal. Grow. Transform.",
  description:
    "Core Belief Transformation Coaching for individuals ready to uncover limiting beliefs, rebuild confidence, strengthen self-worth, and create lasting change from the inside out.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const signs = [
  "You repeat patterns you deeply want to change",
  "You struggle with confidence or self-worth",
  "You overthink decisions or second-guess yourself",
  "You people-please or fear disappointing others",
  "You know what to do but struggle to follow through",
  "You feel stuck even though you are ready for more",
];

const beliefFormula = ["Belief", "Thought", "Emotion", "Action", "Result"];

const credentials = [
  "Health & Wellness Coaching Certificate",
  "Psychology Degree Candidate",
  "Creator of the Core Belief Transformation Method™",
  "Founder of Life Coaching with Kaelynn",
];

const methodSteps = [
  {
    step: "01",
    title: "Awareness",
    text: "Identify the belief or pattern operating beneath the surface.",
  },
  {
    step: "02",
    title: "Understanding",
    text: "Explore how that belief affects confidence, emotions, decisions, and actions.",
  },
  {
    step: "03",
    title: "Transformation",
    text: "Create healthier beliefs, aligned habits, and meaningful next steps.",
  },
];

const healFramework = [
  {
    letter: "H",
    title: "Hear the Story",
    text: "Understand the current challenge while exploring emotions, experiences, and the impact they have had on your life.",
  },
  {
    letter: "E",
    title: "Expose the Belief",
    text: "Identify limiting beliefs, recurring patterns, and hidden narratives that may be keeping you stuck.",
  },
  {
    letter: "A",
    title: "Align with Truth",
    text: "Challenge old stories and replace them with empowering beliefs that support confidence, growth, and possibility.",
  },
  {
    letter: "L",
    title: "Live the Transformation",
    text: "Build sustainable habits, accountability, and action steps that create lasting change in everyday life.",
  },
];

const growFramework = [
  {
    letter: "G",
    title: "Gain Awareness",
    text: "Understand the problem, the pattern, and what is currently keeping you stuck.",
  },
  {
    letter: "R",
    title: "Reveal Core Beliefs",
    text: "Identify the hidden beliefs, fears, and barriers influencing your choices.",
  },
  {
    letter: "O",
    title: "Open New Possibilities",
    text: "Reframe old narratives, create a new vision, and explore healthier ways forward.",
  },
  {
    letter: "W",
    title: "Walk Forward",
    text: "Take consistent action with support, accountability, and intentional next steps.",
  },
];

const programs = [
  {
    title: "Growth Coaching Program",
    investment: "Schedule to Discuss",
    length: "10 Weeks",
    text: "For clarity, confidence, accountability, and personal growth.",
  },
  {
    title: "Signature Coaching Experience",
    investment: "Schedule to Discuss",
    length: "12 Weeks",
    text: "Core Belief Transformation Coaching for deeper personal change.",
    featured: true,
  },
  {
    title: "Premium Transformation Experience",
    investment: "Schedule to Discuss",
    length: "16 Weeks",
    text: "The highest level of coaching support for significant transformation.",
  },
  {
    title: "Accountability & Growth Membership",
    investment: "Schedule to Discuss",
    length: "Monthly",
    text: "Ongoing coaching support for continued growth and accountability.",
  },
];

const focusAreas = [
  "Core Beliefs",
  "Limiting Beliefs",
  "Self-Worth",
  "Self-Confidence",
  "Healing",
  "Personal Growth",
  "Emotional Wellness",
  "Accountability",
  "Life Transitions",
  "Goal Achievement",
  "Mindset Alignment",
  "Lasting Transformation",
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <Image
            src="/hibiscus-logo.png"
            alt="Life Coaching with Kaelynn logo"
            width={260}
            height={260}
            className="mx-auto mb-6"
            priority
          />

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            Life Coaching with Kaelynn
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            Heal. Grow. Transform.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-8 text-slate-700 md:text-2xl">
            Core Belief Transformation Coaching for individuals ready to uncover
            limiting beliefs, rebuild confidence, strengthen self-worth, and
            create lasting change from the inside out.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
            >
              Schedule Your Free Discovery Call
            </Link>

            <Link
              href="/pricing"
              className="rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              Explore Coaching Options
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Is This You?
          </p>

          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            You May Be Ready for Coaching If...
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {signs.map((item) => (
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

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Core Belief Connection
          </p>

          <h2 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">
            Belief → Thought → Emotion → Action → Result
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-slate-700">
            The beliefs you carry influence how you think, how you feel, how you
            respond, and what results you create. When the belief changes, the
            pattern can begin to change too.
          </p>

          <div className="grid gap-4 md:grid-cols-5">
            {beliefFormula.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-teal-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <Image
              src="/kaelynn-portrait.png"
              alt="Portrait of Kaelynn Kinnison"
              width={450}
              height={550}
              className="rounded-3xl object-cover shadow-2xl"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Meet Kaelynn
            </p>

            <h2 className="mb-6 text-4xl font-bold text-slate-900">
              You Do Not Have to Navigate Life&apos;s Challenges Alone
            </h2>

            <p className="mb-5 text-lg leading-8 text-slate-700">
              I am Kaelynn Kinnison, Transformational Life Coach and creator of
              the Core Belief Transformation Method™.
            </p>

            <p className="mb-5 text-lg leading-8 text-slate-700">
              My passion is helping people uncover the beliefs, patterns, and
              obstacles that may be holding them back so they can gain clarity,
              build confidence, and create meaningful change.
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {credentials.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-teal-50 p-4 text-sm font-semibold text-slate-800"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex rounded-full bg-teal-700 px-7 py-3 font-semibold text-white transition hover:bg-teal-800"
            >
              Read My Full Story
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Signature Method
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            The Core Belief Transformation Method™
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-lg leading-8 text-slate-700">
            Many challenges are not caused by a lack of motivation, discipline,
            or desire. They are often rooted in deeply held beliefs that shape
            how you see yourself, what you believe is possible, and how you move
            through life.
          </p>

          <div className="grid gap-6 text-left md:grid-cols-3">
            {methodSteps.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
                  Step {item.step}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>

          <Link
            href="/core-belief-coaching"
            className="mt-10 inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800"
          >
            Explore Core Belief Coaching
          </Link>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Signature Framework
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              The H.E.A.L.™ Framework
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              The H.E.A.L.™ Framework is the foundation of my Core Belief
              Transformation Coaching™ process. It helps uncover the beliefs
              beneath the surface, create healthier perspectives, and build
              lasting change through intentional action.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {healFramework.map((item) => (
              <div
                key={item.letter}
                className="rounded-3xl bg-teal-50 p-8 shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-2xl font-bold text-white">
                  {item.letter}
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Coaching Process
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              The G.R.O.W.™ Framework
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Every coaching journey begins with awareness and moves toward
              intentional action. The G.R.O.W.™ Framework provides a simple path
              forward for clients seeking clarity, confidence, and momentum.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {growFramework.map((item) => (
              <div
                key={item.letter}
                className="rounded-3xl bg-white p-8 shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-2xl font-bold text-white">
                  {item.letter}
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Coaching Programs
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Choose the Level of Support That Fits Your Next Season
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program.title}
                className={
                  program.featured
                    ? "rounded-3xl border-4 border-teal-700 bg-white p-6 shadow-xl"
                    : "rounded-3xl border border-slate-200 bg-white p-6 shadow-md"
                }
              >
                {program.featured && (
                  <p className="mb-4 inline-block rounded-full bg-teal-700 px-3 py-1 text-xs font-bold uppercase text-white">
                    Signature Experience
                  </p>
                )}

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mb-1 text-sm font-bold uppercase tracking-wide text-teal-700">
                  Investment
                </p>

                <p className="mb-1 text-2xl font-bold text-teal-700">
                  {program.investment}
                </p>

                <p className="mb-4 text-sm font-medium text-slate-500">
                  {program.length}
                </p>

                <p className="leading-7 text-slate-700">{program.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800"
            >
              Explore Coaching Options
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Coaching Focus Areas
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">
            Support for Healing, Growth, and Lasting Transformation
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-5 py-3 font-medium text-slate-700 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            The Life You Want Begins With the Beliefs You Choose to Change
          </h2>

          <p className="mb-10 text-lg leading-8 text-slate-200">
            Coaching gives you a space to feel supported, identify what has been
            keeping you stuck, and take intentional steps toward the life you
            are ready to create.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
            >
              Schedule Your Free Discovery Call
            </Link>

            <Link
              href="/pricing"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Explore Coaching Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
