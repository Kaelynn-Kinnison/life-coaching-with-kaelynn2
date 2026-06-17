import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Nebraska Life Coach for Women | Virtual Coaching with Kaelynn",
  description:
    "Nebraska-based virtual life coaching for women who have lost themselves while surviving life and are ready to rebuild confidence, reconnect with themselves, and create a meaningful next chapter.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const niche = [
  "I don't even know who I am anymore.",
  "I've spent my whole life putting myself last.",
  "I keep repeating the same patterns.",
  "I know I want more, but I don't know where to start.",
];

const coachingAccess = [
  "Nebraska-based coaching with a personal, grounded feel",
  "Virtual sessions available for women across the U.S.",
  "Support for women of all ages and seasons of life",
];

const clientFeelings = [
  "You look capable, but inside you feel disconnected.",
  "You are tired of living on autopilot.",
  "You are ready for life to feel like yours again.",
];

const path = [
  {
    title: "Feel Seen",
    text: "We start with what is real, without judgment or pressure.",
  },
  {
    title: "Find the Pattern",
    text: "We notice the beliefs and habits that keep pulling you back.",
  },
  {
    title: "Move Differently",
    text: "You practice new choices with support, clarity, and accountability.",
  },
];

const outcomes = [
  "More self-trust",
  "Clearer direction",
  "Healthier boundaries",
  "Less overthinking",
  "More aligned action",
  "A stronger sense of self",
];

export default function Home() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 pb-16 pt-14 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Life Coaching with Kaelynn
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              For the woman who has lost herself while surviving life.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
              I help women reconnect with who they truly are, rebuild their
              confidence, and create a meaningful next chapter through Core
              Belief Transformation and intentional personal growth.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex justify-center rounded-full bg-[#0f766e] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
              >
                Schedule a Discovery Call
              </Link>

              <Link
                href="/services"
                className="inline-flex justify-center rounded-full border border-[#0f766e] bg-white/70 px-7 py-4 text-sm font-bold text-[#0f766e] transition hover:bg-white"
              >
                Explore Coaching Programs
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-[#8b6f5c]/20 ring-1 ring-[#eadfd5]">
            <Image
              src="/life-coaching-hero.png"
              alt="A woman walking toward sunrise on a mountain path"
              width={1200}
              height={800}
              className="h-80 w-full object-cover sm:h-[28rem]"
              priority
            />
            <div className="p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b6f5d]">
                Your next chapter can begin gently
              </p>
              <p className="mt-3 text-xl font-semibold leading-8">
                You do not need the whole plan. You only need a place to begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {coachingAccess.map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-5 text-center font-semibold leading-7 text-[#5f4c41] shadow-sm ring-1 ring-[#eadfd5]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eadfd5] md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Who I Help
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            Have you spent so long surviving that you no longer know who you
            are?
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#6f5a4d]">
            You may look strong on the outside, but inside you feel exhausted,
            disconnected, and unsure how to move forward. You have carried pain,
            pressure, responsibilities, disappointment, and expectations for so
            long that somewhere along the way, you stopped feeling like
            yourself.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {niche.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f7efe8] p-5 text-lg font-semibold leading-7 text-[#5f4c41]"
              >
                “{item}”
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#0f766e] p-6 text-white">
            <p className="text-xl font-bold leading-8">
              I help women who have lost themselves while surviving life
              reconnect with who they truly are, rebuild their confidence, and
              create a meaningful next chapter.
            </p>
            <p className="mt-4 leading-7 text-[#e6fffb]">
              Through Core Belief Transformation and intentional personal
              growth, we work together to uncover what has been keeping you
              stuck and begin building a life that feels aligned, grounded, and
              possible.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl border-y border-[#eadfd5] py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {clientFeelings.map((item) => (
              <div key={item} className="text-lg leading-8 text-[#5f4c41]">
                <span className="mb-4 block h-1 w-12 rounded-full bg-[#b7835f]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              A Different Kind of Support
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Coaching that is gentle enough to feel safe and clear enough to
              create movement.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6f5a4d]">
              We focus on what is happening now, what is underneath it, and what
              needs to change next.
            </p>
          </div>

          <div className="grid gap-5">
            {path.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#eadfd5] bg-[#fdf8f3] p-6"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#6f5a4d]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              What Becomes Possible
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Small shifts can change the way you move through your whole life.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 font-semibold leading-7 text-[#4f3b4d] shadow-sm ring-1 ring-[#eadfd5]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3f342c] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">
              Begin with a conversation
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Let this be the first honest step.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f7efe8]">
              We will talk about where you are, what you want to change, and
              whether coaching feels like the right fit.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-[#3f342c] transition hover:bg-[#f7efe8]"
            >
              Schedule a Discovery Call
            </Link>
            <Link
              href="/about"
              className="inline-flex justify-center rounded-full border border-white px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#3f342c]"
            >
              Meet Kaelynn
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
