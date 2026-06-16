import Link from "next/link";

export const metadata = {
  title: "Core Belief Transformation Coaching | Life Coaching with Kaelynn",
  description:
    "Core Belief Transformation Coaching helps women break free from self-doubt, limiting beliefs, people-pleasing, and old patterns so they can rebuild confidence, self-worth, and lasting personal growth.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const beliefs = [
  "I am not enough.",
  "I always mess things up.",
  "I cannot trust myself.",
  "I have to make everyone happy.",
  "If I fail, people will judge me.",
  "I do not deserve more.",
];

const patterns = [
  "Overthinking every decision",
  "People-pleasing to avoid conflict",
  "Procrastinating even when you care",
  "Feeling guilty for having needs",
  "Avoiding opportunities out of fear",
  "Trying to be perfect before moving forward",
];

const framework = [
  {
    title: "The Story",
    text: "An experience, relationship, message, or season of life shapes how you begin to see yourself.",
  },
  {
    title: "The Belief",
    text: "That story becomes an inner belief, such as I am not enough, I cannot trust myself, or I have to prove my worth.",
  },
  {
    title: "The Pattern",
    text: "The belief begins showing up through self-doubt, fear, people-pleasing, perfectionism, avoidance, or emotional overwhelm.",
  },
  {
    title: "The Transformation",
    text: "Together, we challenge the old story and begin creating new beliefs, new choices, and a new way of living.",
  },
];

const before = [
  "Self-doubt",
  "Overthinking",
  "Perfectionism",
  "People-pleasing",
  "Fear of judgment",
  "Feeling stuck",
];

const after = [
  "Confidence",
  "Clarity",
  "Healthy boundaries",
  "Self-trust",
  "Stronger self-worth",
  "Purposeful action",
];

export default function CoreBeliefCoachingPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-teal-300">
            Signature Coaching Method
          </p>

          <h1 className="mx-auto mb-8 max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            The Life You Want Is Waiting Beyond the Story You Have Been Telling Yourself
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-9 text-slate-200">
            You are not broken. You are not behind. You are not failing.
            You may simply be living from beliefs that no longer serve the
            woman you are becoming.
          </p>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-slate-300">
            Core Belief Transformation Coaching helps women uncover the hidden
            stories that fuel self-doubt, people-pleasing, fear,
            perfectionism, and feeling stuck so they can move forward with
            confidence and self-trust.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-teal-50"
            >
              Schedule a Discovery Call
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Question That Changes Everything
          </p>

          <h2 className="mb-8 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            What if the problem is not who you are?
          </h2>

          <p className="mx-auto max-w-3xl text-2xl font-semibold leading-10 text-teal-800">
            What if the problem is what you have been taught to believe about yourself?
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              The Hidden Pattern
            </p>

            <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Most women try to fix the behavior first.
            </h2>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              They try to stop overthinking, stop people-pleasing, stop
              procrastinating, stop doubting themselves, or stop feeling stuck.
            </p>

            <p className="mb-8 text-lg leading-8 text-slate-700">
              But behaviors are often symptoms. The deeper issue is usually the
              belief underneath the behavior.
            </p>

            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
              <p className="text-2xl font-bold leading-relaxed">
                Most coaching focuses on action.
                <span className="block text-teal-300">
                  This work helps you understand the belief creating the action.
                </span>
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {patterns.map((pattern) => (
              <div
                key={pattern}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-lg font-medium text-slate-700 shadow-sm"
              >
                {pattern}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Have You Ever Thought...
          </p>

          <h2 className="mb-12 text-4xl font-bold md:text-5xl">
            The beliefs you carry can quietly shape the life you live.
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief) => (
              <div
                key={belief}
                className="rounded-3xl bg-white/10 p-8 text-2xl font-semibold italic text-white ring-1 ring-white/10"
              >
                “{belief}”
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-lg leading-8 text-slate-300">
            If one of these feels familiar, you are not alone. Many of the
            struggles women carry today are connected to beliefs that were
            formed years ago and never questioned.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              The Signature Framework
            </p>

            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              The Story → The Belief → The Pattern → The Transformation
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              This method helps you stop only managing the pattern and begin
              understanding where it started, what it taught you to believe, and
              how to create a new way forward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {framework.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl bg-teal-50 p-8 shadow-md ring-1 ring-teal-100"
              >
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                  0{index + 1}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-teal-50 to-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-white p-10 shadow-xl ring-1 ring-slate-200">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Why This Work Matters To Me
            </p>

            <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
              I know what it feels like to question yourself.
            </h2>

            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>
                For years, I questioned myself, doubted my decisions, and looked
                outside myself for validation.
              </p>

              <p>
                As I studied psychology, coaching, and personal development, I
                began recognizing how powerful our beliefs truly are.
              </p>

              <p>
                I realized that lasting change often does not begin with
                changing behavior. It begins with changing the beliefs underneath
                the behavior.
              </p>

              <p>
                That realization became the foundation of the Core Belief
                Transformation Method.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-10 text-white shadow-xl">
            <h3 className="mb-6 text-3xl font-bold">
              This method was created for the woman who is ready to stop living
              from old stories.
            </h3>

            <p className="mb-6 text-lg leading-8 text-slate-300">
              Not because she is broken.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-300">
              Not because she is weak.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-300">
              But because she is ready to become honest about what she has been
              carrying and intentional about who she is becoming.
            </p>

            <p className="text-xl font-semibold leading-8 text-teal-300">
              This is where healing, growth, confidence, and transformation
              begin.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Before & After
            </p>

            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              From living in fear to living from self-trust.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-950 p-10 text-white shadow-xl">
              <h3 className="mb-8 text-3xl font-bold text-teal-300">
                Before Coaching
              </h3>

              <div className="grid gap-4">
                {before.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 p-5 text-lg font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-teal-50 p-10 shadow-xl ring-1 ring-teal-100">
              <h3 className="mb-8 text-3xl font-bold text-teal-800">
                After Coaching
              </h3>

              <div className="grid gap-4">
                {after.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white p-5 text-lg font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Vision
          </p>

          <h2 className="mb-8 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Imagine trusting yourself again.
          </h2>

          <div className="mx-auto max-w-3xl space-y-5 text-xl leading-9 text-slate-700">
            <p>Imagine no longer questioning every decision.</p>
            <p>Imagine setting boundaries without drowning in guilt.</p>
            <p>Imagine pursuing your goals without fear controlling the outcome.</p>
            <p>
              Imagine believing that you are enough exactly as you are while
              continuing to grow into who you are becoming.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
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

      <section className="bg-slate-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin Your Transformation
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-6xl">
            The Next Chapter Starts Here
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
            You do not have to stay stuck in old stories. You do not have to
            carry beliefs that no longer serve you. You do not have to navigate
            transformation alone.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-teal-50"
            >
              Book Your Complimentary Discovery Call
            </Link>

            <Link
              href="/services"
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
