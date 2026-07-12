import Link from "next/link";

export const metadata = {
  title: "Confidence Coaching Approach",
  description:
    "Learn how Core Belief Transformation, compassionate accountability, and confidence coaching help women overcome self-doubt and build lasting confidence.",
  alternates: {
    canonical: "/coaching-approach",
  },
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const approach = [
  {
    title: "We begin with what is true",
    text: "You bring the honest version of what you are carrying, not the polished version you show the world.",
  },
  {
    title: "We uncover what is underneath",
    text: "Together, we notice the beliefs, fears, stories, and self-doubt patterns that may be shaping how you see yourself and what you choose.",
  },
  {
    title: "We create supported action",
    text: "Insight becomes change through aligned steps, accountability, boundaries, and new ways of practicing self-trust.",
  },
];

const feelsLike = [
  "Calm enough to be honest",
  "Structured enough to create momentum",
  "Compassionate without avoiding truth",
  "Future-focused without dismissing your story",
  "Personalized to your season and goals",
  "Rooted in confidence, self-worth, and sustainable growth",
];

const notAbout = [
  "Being judged for where you are",
  "Being rushed into quick fixes",
  "Pretending the hard things did not matter",
  "Being told who you should become",
];

const isAbout = [
  "Feeling seen and supported",
  "Understanding what keeps self-doubt in place",
  "Rebuilding confidence from the inside out",
  "Creating confidence that feels aligned and meaningful",
];

export default function CoachingApproachPage() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 pb-16 pt-14 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Coaching Approach
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Support that helps you feel understood—and still moves you forward.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
              My confidence coaching approach combines compassionate honesty,
              practical accountability, and Core Belief Transformation. You
              have room to tell the truth about where you are—and support to
              practice a different choice in real life.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex justify-center rounded-full bg-[#0f766e] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
              >
                Book Your Complimentary Clarity Call
              </Link>

              <Link
                href="/pricing"
                className="inline-flex justify-center rounded-full border border-[#0f766e] bg-white/70 px-7 py-4 text-sm font-bold text-[#0f766e] transition hover:bg-white"
              >
                View Programs & Pricing
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#3f342c] p-8 text-white shadow-2xl shadow-[#8b6f5c]/20">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">
              The heart of the work
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight">
              Safe enough to tell the truth. Strong enough to support change.
            </h2>
            <p className="mt-5 leading-8 text-[#f7efe8]">
              You do not have to know exactly what you need before you begin.
              We start with where you are, then create clarity one honest step
              at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              The Process
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              From feeling overwhelmed to moving with direction.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {approach.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#eadfd5] bg-[#fdf8f3] p-6"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                  Phase 0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#6f5a4d]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#3f342c] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">
              Coaching is not about
            </p>
            <div className="mt-6 grid gap-4">
              {notAbout.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eadfd5]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Coaching is about
            </p>
            <div className="mt-6 grid gap-4">
              {isAbout.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f7efe8] p-5 text-[#5f4c41]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              What Sessions Feel Like
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Grounded, personal, and focused on real life.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6f5a4d]">
              Each session creates space for reflection and insight, but the
              work does not stop there. You leave with next steps that connect
              the inner work to the choices, boundaries, conversations, and
              actions in your everyday life.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {feelsLike.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#fdf8f3] p-5 font-semibold leading-7 shadow-sm ring-1 ring-[#eadfd5]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">Go Deeper</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Understand the belief. Follow a clear process.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link href="/core-belief-coaching" className="rounded-3xl bg-[#fdf8f3] p-8 ring-1 ring-[#eadfd5]">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">Why the pattern persists</p>
              <h3 className="mt-3 text-2xl font-bold">Explore Core Belief Coaching</h3>
              <p className="mt-4 leading-7 text-[#6f5a4d]">See how quiet beliefs can shape overthinking, boundaries, and the choices you make.</p>
            </Link>
            <Link href="/heal-framework" className="rounded-3xl bg-[#3f342c] p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d7c7]">How change is practiced</p>
              <h3 className="mt-3 text-2xl font-bold">See the H.E.A.L. Framework</h3>
              <p className="mt-4 leading-7 text-[#f7efe8]">Learn the four-part process that turns awareness into supported action.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-sm leading-7 text-[#6f5a4d] shadow-sm ring-1 ring-[#eadfd5]">
          <p className="font-bold text-[#3f342c]">Coaching Disclaimer</p>
          <p className="mt-2">
            Coaching is not therapy, counseling, medical care, mental health
            treatment, or crisis support. Coaching focuses on self-awareness,
            personal growth, accountability, mindset, goal achievement, and
            future-focused action. If you are experiencing a crisis or need
            clinical support, please contact a licensed mental health
            professional or emergency service.
          </p>
        </div>
      </section>

      <section className="bg-[#f7efe8] px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Begin With Support
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            You do not have to navigate this season alone.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
            Your complimentary Confidence Clarity Call is a place to talk
            through where you are, what you want to change, and whether
            coaching is the right next step.
          </p>
          <Link
            href={bookingLink}
            target="_blank"
            className="mt-9 inline-flex rounded-full bg-[#0f766e] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
          >
            Book Your Complimentary Clarity Call
          </Link>
        </div>
      </section>
    </main>
  );
}
