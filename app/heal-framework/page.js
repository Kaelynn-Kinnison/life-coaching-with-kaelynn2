import Link from "next/link";

export const metadata = {
  title: "H.E.A.L. Framework",
  description:
    "A simple overview of Kaelynn's H.E.A.L. Framework: Hear, Expose, Align, and Live.",
  alternates: {
    canonical: "/heal-framework",
  },
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const healSteps = [
  {
    letter: "H",
    title: "Hear",
    phrase: "Hear the story beneath the struggle.",
    text: "We begin by slowing down and naming what has been heavy, hidden, or hard to explain.",
  },
  {
    letter: "E",
    title: "Expose",
    phrase: "Expose the belief behind the pattern.",
    text: "We look for the belief that may be driving the fear, guilt, self-doubt, or repeated choices.",
  },
  {
    letter: "A",
    title: "Align",
    phrase: "Align with what is true now.",
    text: "We choose a healthier belief and reconnect it to your values, voice, needs, and direction.",
  },
  {
    letter: "L",
    title: "Live",
    phrase: "Live from the new story.",
    text: "We turn insight into action through boundaries, choices, habits, and supported follow-through.",
  },
];

export default function HealFrameworkPage() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 pb-16 pt-14 text-center md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Signature Framework
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            H.E.A.L.
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-2xl font-semibold leading-9 text-[#0f766e]">
            Hear the story. Expose the belief. Align with truth. Live the
            transformation.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d]">
            The H.E.A.L. Framework is the simple process I use to help you move
            from hidden stories and old beliefs into clearer, more intentional
            action.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {healSteps.map((step) => (
              <article
                key={step.letter}
                className="rounded-2xl border border-[#eadfd5] bg-[#fdf8f3] p-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0f766e] text-3xl font-bold text-white">
                  {step.letter}
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-[#9b6f5d]">
                  {step.title}
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-tight">
                  {step.phrase}
                </h2>

                <p className="mt-4 leading-7 text-[#6f5a4d]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-[#3f342c] p-8 text-white md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">
              Why It Helps
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              The process is simple so the work can go deep.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#f7efe8]">
            <p>
              H.E.A.L. gives coaching a clear path without making your life feel
              like a project to fix.
            </p>
            <p>
              It helps us listen to what has been carried, understand what has
              been shaping the pattern, and practice new choices in real life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe8] px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Begin the Work
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Your story deserves to be heard with care.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
            Schedule a Discovery Call to explore whether this framework is the
            right support for what you are ready to change.
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
