import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Life Coaching with Kaelynn | Is This All There Is?",
  description:
    "Life Coaching with Kaelynn helps women who feel stuck, unfulfilled, or uncertain about what's next rediscover themselves, rebuild confidence, and create a meaningful next chapter.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const signs = [
  "You find yourself wondering, 'Is this all there is?'",
  "You feel stuck between who you were and who you want to become",
  "You are questioning what comes next in life",
  "You have spent years taking care of everyone else",
  "You feel disconnected from yourself and your purpose",
  "You know you want more, but you are not sure where to begin",
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
    text: "Identify the belief, story, or pattern operating beneath the surface.",
  },
  {
    step: "02",
    title: "Understanding",
    text: "Explore how that belief affects confidence, emotions, decisions, relationships, and actions.",
  },
  {
    step: "03",
    title: "Transformation",
    text: "Create healthier beliefs, aligned habits, and meaningful next steps for your next chapter.",
  },
];

const healFramework = [
  {
    letter: "H",
    title: "Hear the Story",
    text: "Understand where you are, what you have experienced, and what has been weighing on your heart.",
  },
  {
    letter: "E",
    title: "Expose the Belief",
    text: "Identify limiting beliefs, recurring patterns, and hidden narratives that may be keeping you stuck.",
  },
  {
    letter: "A",
    title: "Align with Truth",
    text: "Challenge old stories and replace them with empowering beliefs that support confidence, healing, and possibility.",
  },
  {
    letter: "L",
    title: "Live the Transformation",
    text: "Build sustainable habits, accountability, and action steps that help you move into your next chapter.",
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
    text: "For women seeking clarity, confidence, accountability, and personal growth.",
  },
  {
    title: "Signature Coaching Experience",
    investment: "Schedule to Discuss",
    length: "12 Weeks",
    text: "Core Belief Transformation Coaching for women ready for deeper personal change.",
    featured: true,
  },
  {
    title: "Premium Transformation Experience",
    investment: "Schedule to Discuss",
    length: "16 Weeks",
    text: "The highest level of coaching support for women ready to create significant transformation.",
  },
  {
    title: "Accountability & Growth Membership",
    investment: "Schedule to Discuss",
    length: "Monthly",
    text: "Ongoing coaching support for continued growth, confidence, and accountability.",
  },
];

const focusAreas = [
  "Finding Yourself Again",
  "Life Transitions",
  "Purpose & Direction",
  "Self-Worth",
  "Confidence",
  "Healing After Difficult Experiences",
  "Recovery Support",
  "Core Beliefs",
  "Identity & Personal Growth",
  "Emotional Wellness",
  "Accountability",
  "Creating Your Next Chapter",
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
            Is This All There Is?
          </h1>

          <p className="mx-auto mb-6 max-w-4xl text-xl leading-8 text-slate-700 md:text-2xl">
            Helping women who feel stuck, unfulfilled, or uncertain about
            what&apos;s next rediscover themselves, rebuild confidence, and
            create a meaningful next chapter.
          </p>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you are navigating a life transition, healing from difficult
            experiences, rebuilding after recovery, or simply feeling called to
            something more, you do not have to figure it out alone.
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
            Do Any of These Sound Familiar?
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
              Helping Women Create Their Next Chapter
            </h2>

            <p className="mb-5 text-lg leading-8 text-slate-700">
              I am Kaelynn Kinnison, Transformational Life Coach and creator of
              the Core Belief Transformation Method™.
            </p>

            <p className="mb-5 text-lg leading-8 text-slate-700">
              I help women who feel stuck, lost, or uncertain about what&apos;s
              next gain clarity, confidence, and direction for the future they
              truly want.
            </p>

            <p className="mb-5 text-lg leading-8 text-slate-700">
              My passion is helping women uncover the beliefs, patterns, and
              obstacles that may be holding them back so they can reconnect with
              themselves, build confidence, and create meaningful change.
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

      <section className="bg-[#f8fbfb] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            What If You&apos;re Not Stuck?
          </p>

          <h2 className="mb-8 text-4xl font-bold text-slate-900">
            Maybe You&apos;re Being Called Into Your Next Chapter
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">
            Many women believe something is wrong with them because they feel
            unfulfilled, disconnected, or restless.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            The truth is that you may simply be outgrowing the version of
            yourself that got you here.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Together, we uncover what has been keeping you stuck, reconnect with
            who you truly are, and create a vision for what&apos;s next.
          </p>
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
              forward for women seeking clarity, confidence, and momentum.
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
            Support for Healing, Growth, and Creating What Comes Next
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

          <p className="mx-auto mt-10 max-w-3xl text-sm leading-7 text-slate-600">
            Coaching with Kaelynn is supportive, forward-focused coaching. It is
            not therapy, mental health counseling, or substance abuse treatment.
            If you are in crisis or need clinical care, please contact a
            licensed mental health or medical professional.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Your Next Chapter Is Waiting
          </h2>

          <p className="mb-10 text-lg leading-8 text-slate-200">
            You do not have to spend another year wondering what is next for
            you. Together, we can uncover what has been holding you back, build
            confidence in who you are becoming, and create a future that feels
            meaningful, purposeful, and aligned with who you truly are.
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
