import Link from "next/link";

export const metadata = {
  title: "Life Coaching for Women",
  description:
    "Life Coaching with Kaelynn supports women ready to overcome self-doubt, strengthen self-worth, and build lasting confidence with clarity and accountability.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const signs = [
  "You second-guess yourself even when you know what you want",
  "You want more self-trust, confidence, and direction",
  "You overthink decisions and talk yourself out of action",
  "You feel capable in some areas but doubt yourself in others",
  "You want to stop shrinking your needs, goals, and voice",
  "You want support, accountability, and encouragement as you build confidence",
];

const supportAreas = [
  {
    title: "Clarity",
    text: "Identify what you want, what matters most, and what next step makes sense for your current season.",
  },
  {
    title: "Confidence",
    text: "Strengthen self-trust so you can make decisions and move forward with more courage and less self-doubt.",
  },
  {
    title: "Accountability",
    text: "Receive support and structure so your goals become realistic, consistent action.",
  },
  {
    title: "Life Transitions",
    text: "Navigate change, uncertainty, reinvention, or a new chapter with support and direction.",
  },
  {
    title: "Emotional Wellness",
    text: "Create space to process overwhelm, recognize patterns, and respond to life with more intention.",
  },
  {
    title: "Personal Growth",
    text: "Reconnect with yourself, your values, your purpose, and the woman you are becoming.",
  },
];

const coachingProcess = [
  "We talk about what is happening in your life right now",
  "We identify the self-doubt pattern or belief underneath the hesitation",
  "We explore what you want instead",
  "We create realistic next steps",
  "We build accountability around your growth",
];

const results = [
  "More clarity about your next step",
  "Greater confidence and self-trust",
  "Stronger boundaries",
  "Improved decision-making",
  "More consistent follow-through",
  "Lasting confidence from the inside out",
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
              Life coaching for women ready to overcome self-doubt.
            </h1>

            <p className="mb-6 text-xl leading-8 text-slate-700">
              Life coaching gives you a supportive space to understand what is
              keeping you stuck, rebuild self-trust, and take meaningful steps
              toward lasting confidence.
            </p>

            <p className="mb-8 text-lg leading-8 text-slate-600">
              You do not have to have everything figured out before you begin.
              You only need a willingness to be honest about where you are and
              open to where you want to go.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
              >
                Schedule a Discovery Call
              </Link>

              <Link
                href="/pricing"
                className="inline-flex rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                View Programs & Pricing
              </Link>
            </div>
          </div>

          <div>
            <img
              src="/life-coaching-hero.png"
              alt="Woman walking toward a new path representing clarity and personal growth"
              className="w-full rounded-3xl border border-slate-200 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            A Safe Place to Begin
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            You Do Not Have to Navigate This Season Alone
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            Whether you are feeling stuck, overwhelmed, uncertain, or ready for
            something more, coaching can help you slow down, sort through the
            noise, and begin moving forward with support.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Who Coaching Is For
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-5xl">
            You May Benefit From Life Coaching If...
          </h2>

          <div className="grid gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
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
            Coaching Support
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Areas Life Coaching Can Support
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-slate-700">
            Coaching is personalized to your goals, challenges, and current
            season of life.
          </p>

          <div className="grid gap-6 text-left md:grid-cols-3">
            {supportAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-teal-100"
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

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              What Coaching Feels Like
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
              Compassionate Support With Honest Accountability
            </h2>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              Life coaching is not about being told what to do. It is a
              partnership where you are heard, supported, challenged, and
              encouraged as you create change.
            </p>

            <p className="text-lg leading-8 text-slate-700">
              Together, we create a space where you can be honest about what is
              happening, explore what you truly want, and take steps that feel
              aligned with who you are becoming.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
            <h3 className="mb-6 text-3xl font-bold">
              Coaching is for growth, not perfection.
            </h3>

            <p className="mb-5 leading-8 text-slate-300">
              You do not need to be ready in a perfect way. You do not need all
              the answers. You do not need to know exactly where to start.
            </p>

            <p className="leading-8 text-slate-300">
              Coaching helps you begin from where you are and move forward one
              intentional step at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              The Coaching Process
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              What We May Work Through Together
            </h2>
          </div>

          <div className="grid gap-4">
            {coachingProcess.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 text-lg text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                <span className="mr-3 font-bold text-teal-700">
                  0{index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-teal-50 p-8 shadow-md ring-1 ring-teal-100">
            <h2 className="mb-5 text-3xl font-bold text-slate-900">
              Coaching Can Help You Move From...
            </h2>

            <div className="space-y-4 text-lg text-slate-700">
              <p>Overwhelmed to clear</p>
              <p>Uncertain to grounded</p>
              <p>Stuck to moving forward</p>
              <p>Disconnected to reconnected</p>
              <p>Doubtful to more self-trusting</p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-md">
            <h2 className="mb-5 text-3xl font-bold">
              No Problem Is Too Big
            </h2>

            <p className="mb-4 leading-8 text-slate-300">
              One of my core beliefs is simple: no problem is too big,
              especially when you do not have to face it alone.
            </p>

            <p className="leading-8 text-slate-300">
              Coaching provides support, clarity, accountability, and a path
              forward when the next step feels hard to see.
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

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-10 text-center text-white shadow-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Signature Support
          </p>

          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Want Deeper Core Belief Work?
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-300">
            Life coaching may include core belief work when it supports your
            goals, but my full Core Belief Transformation Coaching page explains
            the deeper signature method in detail.
          </p>

          <Link
            href="/core-belief-coaching"
            className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-teal-50"
          >
            Explore Core Belief Coaching
          </Link>
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
            Begin Your Growth
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Take the First Step?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-200">
            A Discovery Call is a supportive first step to talk through your
            goals, current challenges, and whether coaching is the right fit for
            your next chapter.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
            >
              Schedule a Discovery Call
            </Link>

            <Link
              href="/pricing"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              View Programs & Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
