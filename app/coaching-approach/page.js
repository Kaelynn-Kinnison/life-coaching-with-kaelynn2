import Link from "next/link";

export const metadata = {
  title: "Coaching Approach | Life Coaching with Kaelynn",
  description:
    "Discover what coaching with Kaelynn feels like: compassionate support, honest accountability, self-awareness, confidence-building, and action-focused growth for women ready for transformation.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const sessionFlow = [
  {
    title: "You Bring What Is Real",
    text: "We begin with what is actually happening in your life, your thoughts, your emotions, your goals, and the places where you feel stuck.",
  },
  {
    title: "We Slow Down the Pattern",
    text: "Together, we look beneath the surface to notice the repeated thoughts, reactions, fears, habits, or beliefs that may be shaping your choices.",
  },
  {
    title: "We Create Clarity",
    text: "You begin seeing what is yours to carry, what is not, what needs to change, and what next step feels aligned with who you are becoming.",
  },
  {
    title: "You Leave With Direction",
    text: "Each session is designed to help you leave with more self-awareness, practical next steps, and accountability that supports your growth.",
  },
];

const coachingStyle = [
  "Compassionate",
  "Honest",
  "Encouraging",
  "Grounded",
  "Reflective",
  "Action-oriented",
];

const supportAreas = [
  "Self-doubt and confidence",
  "Overthinking and second-guessing",
  "People-pleasing and boundaries",
  "Life transitions and personal reinvention",
  "Emotional wellness and self-awareness",
  "Accountability and follow-through",
];

const rightFit = [
  "You want to feel heard without being judged.",
  "You are tired of repeating the same patterns.",
  "You want to understand yourself on a deeper level.",
  "You are ready to rebuild confidence and self-trust.",
  "You want support that is both compassionate and honest.",
  "You are ready to take action, not just talk about change.",
];

const notAbout = [
  "Being told what to do",
  "Being judged for where you are",
  "Pretending everything is fine",
  "Quick fixes that do not last",
];

const about = [
  "Feeling safe enough to be honest",
  "Understanding what keeps you stuck",
  "Building confidence from the inside out",
  "Taking realistic steps toward change",
];

export default function CoachingApproachPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-slate-50 px-6 py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Coaching Approach
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              A Coaching Space Where You Can Feel Heard, Supported, and
              Challenged to Grow
            </h1>

            <p className="mb-8 text-lg leading-8 text-slate-700 md:text-xl">
              Coaching with me is not about being judged, rushed, or told who
              you should be. It is a supportive space to slow down, understand
              what is keeping you stuck, rebuild confidence, and take meaningful
              steps toward the woman you are becoming.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
              >
                Book a Discovery Call
              </Link>

              <Link
                href="/pricing"
                className="inline-flex rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                View Programs
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
              What This Work Feels Like
            </p>

            <h2 className="mb-6 text-3xl font-bold">
              Safe enough to be honest. Strong enough to create change.
            </h2>

            <p className="mb-6 leading-8 text-slate-300">
              You do not have to have everything figured out before you begin.
              You only need a willingness to be honest, curious, and open to
              seeing yourself differently.
            </p>

            <p className="leading-8 text-slate-300">
              My role is to help you notice what has been happening beneath the
              surface, support you as you process it, and help you move forward
              with clarity, courage, and accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Heart of My Approach
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
            You Are Not a Problem to Fix
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">
            You are a person with a story, emotions, goals, patterns, strengths,
            and experiences that deserve to be understood. My coaching approach
            begins with seeing the whole person, not just the problem you want
            to solve.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
              Coaching Is Not About
            </p>

            <div className="grid gap-4">
              {notAbout.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-5 text-lg font-medium text-slate-200"
                >
                  ✕ {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
              Coaching Is About
            </p>

            <div className="grid gap-4">
              {about.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-teal-300/20 p-5 text-lg font-medium text-white"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              What Sessions Are Like
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Simple, Supportive, and Focused on Real Growth
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sessionFlow.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-teal-100"
              >
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                  Session Step 0{index + 1}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              My Coaching Style
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
              Compassionate Support With Honest Accountability
            </h2>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              I believe growth requires both safety and challenge. You deserve a
              space where you can be honest about what you are experiencing
              while also being supported to take the next step forward.
            </p>

            <p className="text-lg leading-8 text-slate-700">
              I will encourage you, ask thoughtful questions, help you notice
              patterns, and support you in creating action that aligns with the
              life you want to build.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {coachingStyle.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-slate-950 p-6 text-center text-lg font-semibold text-white shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Areas of Support
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Where Coaching Can Support You
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Core belief work may be part of the process, but coaching is also
              about helping you navigate the real-life places where those
              beliefs show up.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {supportAreas.map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-6 text-lg font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                <span className="font-bold text-teal-700">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-teal-50 p-10 shadow-xl ring-1 ring-teal-100">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              This Is For the Woman Who
            </p>

            <h2 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">
              Is Ready to Stop Carrying Everything Alone
            </h2>

            <div className="grid gap-4">
              {rightFit.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-5 text-slate-700 shadow-sm"
                >
                  <span className="font-bold text-teal-700">✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-10 text-white shadow-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
              My Promise
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              I Will Meet You With Compassion, Not Judgment
            </h2>

            <p className="mb-5 leading-8 text-slate-300">
              You will not be shamed for where you are. You will not be rushed
              into becoming someone you are not. You will be supported as you
              reconnect with your voice, your confidence, and your ability to
              choose differently.
            </p>

            <p className="mb-5 leading-8 text-slate-300">
              Coaching is a partnership. I bring support, structure, reflection,
              and accountability. You bring honesty, willingness, and the
              courage to grow.
            </p>

            <p className="text-xl font-semibold leading-8 text-teal-300">
              Together, we create space for the woman you are becoming.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-teal-100">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Signature Method Integration
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Core Belief Work May Be Part of the Process
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">
            My signature Core Belief Transformation Method may be woven into
            your coaching experience when it supports your goals. This allows us
            to look beneath the surface, identify what may be keeping you stuck,
            and create meaningful change from the inside out.
          </p>

          <div className="mt-8">
            <Link
              href="/core-belief-coaching"
              className="inline-flex rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              Learn About Core Belief Coaching
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
            focuses on self-awareness, personal growth, accountability, mindset,
            goal achievement, and future-focused action. If you are experiencing
            a mental health crisis or need clinical support, please contact a
            licensed mental health professional or emergency service.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin Your Growth
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            You Do Not Have to Navigate This Season Alone
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
            Schedule a complimentary Discovery Call to discuss your goals, your
            current challenges, and how coaching can support your next season of
            growth.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-teal-50"
            >
              Book Discovery Call
            </Link>

            <Link
              href="/pricing"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
