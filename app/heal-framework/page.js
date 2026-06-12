import Link from "next/link";

export const metadata = {
  title: "H.E.A.L. Framework | Life Coaching with Kaelynn",
  description:
    "Explore the H.E.A.L. Framework by Life Coaching with Kaelynn, a signature coaching framework for women ready to be heard, uncover hidden beliefs, align with truth, and live from a new story.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const healSteps = [
  {
    letter: "H",
    title: "Hear",
    phrase: "Hear the story beneath the struggle.",
    question: "What have you been carrying that has never truly been heard?",
    description:
      "This step creates space for the truth of your experience. Not the polished version. Not the version everyone else sees. The real story underneath the exhaustion, fear, guilt, silence, and pressure.",
    details: [
      "Name what has felt heavy",
      "Give language to what has been hidden",
      "Slow down long enough to understand what is really happening",
    ],
  },
  {
    letter: "E",
    title: "Expose",
    phrase: "Expose the belief behind the pattern.",
    question: "What belief has been quietly shaping how you see yourself?",
    description:
      "This step brings hidden beliefs into the light. These may be beliefs about your worth, your voice, your choices, your past, or what you believe is possible for your life.",
    details: [
      "Identify the belief beneath the behavior",
      "Recognize where fear, guilt, or shame may be leading",
      "Separate who you are from what you learned to believe",
    ],
  },
  {
    letter: "A",
    title: "Align",
    phrase: "Align with what is true now.",
    question: "What truth are you ready to live from instead?",
    description:
      "This step is about choosing a new internal foundation. You begin challenging the old story and creating a belief that supports the woman you are becoming.",
    details: [
      "Challenge old narratives",
      "Create a healthier belief to practice",
      "Reconnect with your voice, values, and inner strength",
    ],
  },
  {
    letter: "L",
    title: "Live",
    phrase: "Live from the new story.",
    question: "What changes when you begin living like the new belief is true?",
    description:
      "This step moves the work into real life. New beliefs become stronger when they are practiced through boundaries, choices, habits, conversations, and aligned action.",
    details: [
      "Turn insight into action",
      "Practice new choices in real situations",
      "Build consistency with support and accountability",
    ],
  },
];

const reflectionPrompts = [
  "What story have I been telling myself about who I am?",
  "Where did that story begin?",
  "What has this belief cost me?",
  "What truth do I want to practice instead?",
];

export default function HealFrameworkPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-center text-white">
        <div className="absolute left-10 top-10 text-6xl text-teal-300/20">
          ✦
        </div>
        <div className="absolute right-16 top-32 text-5xl text-teal-300/20">
          ✧
        </div>
        <div className="absolute bottom-12 left-1/4 text-4xl text-teal-300/20">
          ❀
        </div>

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-teal-300">
            Signature Framework
          </p>

          <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-8xl">
            H.E.A.L.
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-2xl font-semibold leading-10 text-teal-200">
            Hear the story. Expose the belief. Align with truth. Live the
            transformation.
          </p>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            The H.E.A.L. Framework is a guided process for uncovering what has
            been hidden beneath the surface and creating a new way forward from
            the inside out.
          </p>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Question Behind the Framework
          </p>

          <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-6xl">
            What if the pattern is not the problem?
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-9 text-slate-700">
            What if the pattern is only pointing to a story that needs to be
            heard, a belief that needs to be questioned, and a truth that is
            waiting to be lived?
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              The Four Movements
            </p>

            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              A Framework for Moving From Hidden Stories to Lived Truth
            </h2>
          </div>

          <div className="space-y-10">
            {healSteps.map((step, index) => (
              <article
                key={step.letter}
                className={
                  index % 2 === 0
                    ? "grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl lg:grid-cols-[180px_1fr]"
                    : "grid gap-8 rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl lg:grid-cols-[180px_1fr]"
                }
              >
                <div
                  className={
                    index % 2 === 0
                      ? "flex h-36 w-36 items-center justify-center rounded-full bg-teal-700 text-7xl font-bold text-white"
                      : "flex h-36 w-36 items-center justify-center rounded-full bg-white text-7xl font-bold text-teal-700"
                  }
                >
                  {step.letter}
                </div>

                <div>
                  <p
                    className={
                      index % 2 === 0
                        ? "mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-700"
                        : "mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-300"
                    }
                  >
                    {step.title}
                  </p>

                  <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                    {step.phrase}
                  </h3>

                  <p
                    className={
                      index % 2 === 0
                        ? "mb-6 text-xl font-semibold leading-8 text-slate-800"
                        : "mb-6 text-xl font-semibold leading-8 text-teal-200"
                    }
                  >
                    {step.question}
                  </p>

                  <p
                    className={
                      index % 2 === 0
                        ? "mb-6 leading-8 text-slate-700"
                        : "mb-6 leading-8 text-slate-300"
                    }
                  >
                    {step.description}
                  </p>

                  <div
                    className={
                      index % 2 === 0
                        ? "rounded-2xl bg-teal-50 p-5"
                        : "rounded-2xl bg-white/10 p-5"
                    }
                  >
                    <ul
                      className={
                        index % 2 === 0
                          ? "space-y-3 text-slate-700"
                          : "space-y-3 text-slate-200"
                      }
                    >
                      {step.details.map((detail) => (
                        <li key={detail}>
                          <span
                            className={
                              index % 2 === 0
                                ? "font-bold text-teal-700"
                                : "font-bold text-teal-300"
                            }
                          >
                            ✦
                          </span>{" "}
                          <strong>{detail}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Reflection
          </p>

          <h2 className="mb-10 text-4xl font-bold text-slate-900 md:text-5xl">
            The Questions That Begin the Work
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {reflectionPrompts.map((prompt) => (
              <div
                key={prompt}
                className="rounded-3xl bg-white p-8 text-left text-xl font-semibold leading-8 text-slate-800 shadow-md ring-1 ring-slate-200"
              >
                <span className="mr-2 text-teal-700">✧</span>
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl ring-1 ring-teal-100">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Heart of H.E.A.L.
          </p>

          <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
            This Is Not a Formula for Fixing Yourself.
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-9 text-slate-700">
            It is a framework for finally listening to what has been buried,
            questioning what has been shaping you, and choosing to live from a
            truth that no longer keeps you small.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin the Work
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Your Story Deserves to Be Heard.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
            Schedule a complimentary Discovery Call and explore whether this
            framework is the right next step for the work you are ready to do.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-teal-50"
          >
            Schedule Your Free Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
