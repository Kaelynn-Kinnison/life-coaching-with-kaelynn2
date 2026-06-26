import Link from "next/link";

export const metadata = {
  title: "Core Belief Coaching for Confidence",
  description:
    "Learn how hidden core beliefs can create self-doubt, shape confidence, affect self-worth, and influence the choices women make.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const signs = [
  "You overthink decisions because you do not fully trust yourself.",
  "You say yes when you want to say no because guilt feels too heavy.",
  "You keep waiting to feel ready, worthy, or confident enough.",
  "You repeat patterns even when you deeply want something different.",
];

const shifts = [
  {
    old: "I have to keep everyone happy.",
    new: "My needs and boundaries matter too.",
  },
  {
    old: "I cannot trust myself.",
    new: "I can listen, choose, and learn as I go.",
  },
  {
    old: "It is too late for me.",
    new: "My next chapter can still be meaningful.",
  },
];

export default function CoreBeliefCoachingPage() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 pb-16 pt-14 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Core Belief Transformation
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Sometimes self-doubt is not a lack of effort.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
            It may be an old belief about who you are, what you deserve, or what
            is possible for your life. Core Belief Transformation helps you
            notice those hidden stories and begin building confidence from a
            healthier, more honest place.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex justify-center rounded-full bg-[#0f766e] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
            >
              Schedule a Discovery Call
            </Link>

            <Link
              href="/heal-framework"
              className="inline-flex justify-center rounded-full border border-[#0f766e] bg-white/70 px-7 py-4 text-sm font-bold text-[#0f766e] transition hover:bg-white"
            >
              See the H.E.A.L. Framework
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              What Core Beliefs Are
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              The quiet beliefs underneath your choices.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#6f5a4d]">
            <p>
              A core belief is a deeply held idea you have learned to believe
              about yourself, others, or what life will allow you to have.
            </p>
            <p>
              These beliefs often form through experiences, relationships,
              disappointment, survival, or repeated messages. Over time, they
              can begin to feel like truth, even when they are only old
              protection.
            </p>
            <p className="font-semibold text-[#3f342c]">
              When the belief changes, the choices available to you begin to
              change too.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              How It Can Show Up
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Old beliefs often sound practical, but they quietly keep you
              small.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {signs.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 text-lg leading-8 text-[#5f4c41] shadow-sm ring-1 ring-[#eadfd5]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3f342c] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">
              The Shift
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              This work helps you move from old survival beliefs into steadier
              self-trust.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {shifts.map((item) => (
              <article key={item.old} className="rounded-2xl bg-white/10 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d7c7]">
                  Old belief
                </p>
                <p className="mt-3 leading-7 text-[#f7efe8]">{item.old}</p>
                <div className="my-5 h-px bg-white/20" />
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d7c7]">
                  New practice
                </p>
                <p className="mt-3 text-lg font-semibold leading-7">
                  {item.new}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Ready for Support?
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            You do not have to untangle old beliefs alone.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
            A Discovery Call is a simple place to talk through where you feel
            stuck and whether this work is the right fit for your next chapter.
          </p>
          <Link
            href={bookingLink}
            target="_blank"
            className="mt-9 inline-flex rounded-full bg-[#0f766e] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
