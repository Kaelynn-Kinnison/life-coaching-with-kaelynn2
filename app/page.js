import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute:
      "Life Coach for Women | Confidence Coaching for Women | Personal Growth Coaching",
  },
  description:
    "Seeking a life coach for women? Kaelynn provides personal growth coaching and confidence coaching for women to help you unlock your full potential.",
  alternates: {
    canonical: "/",
  },
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const rightPlaceSigns = [
  "You keep second-guessing yourself, even after you have thought things through.",
  "You know you are capable, but you do not feel confident inside.",
  "You talk yourself out of what you want because fear gets too loud.",
  "You look steady to other people, but privately you question your worth.",
  "You want to trust yourself, make clear decisions, and stop shrinking back.",
];

const coachingAccess = [
  "Confidence coaching for women with a personal, grounded feel",
  "Virtual life coaching available across the U.S.",
  "Nebraska-based support for self-doubt, self-worth, and confidence",
];

const trustSignals = [
  {
    label: "Training",
    value: "Health & Wellness Coaching Certificate",
  },
  {
    label: "Specialty",
    value: "Core Beliefs, Confidence & Self-Trust",
  },
  {
    label: "Support",
    value: "Private virtual coaching from Nebraska",
  },
];

const path = [
  {
    title: "Identify the Belief",
    text: "We uncover the core belief underneath the self-doubt, fear, people-pleasing, or hesitation.",
  },
  {
    title: "Challenge the Pattern",
    text: "We gently question the old story and begin building a more supportive way to see yourself.",
  },
  {
    title: "Practice Confidence",
    text: "You take aligned steps with support, accountability, and tools that help confidence become lasting.",
  },
];

const outcomes = [
  "More self-trust",
  "Less self-doubt",
  "Lasting confidence",
  "Less overthinking",
  "Clearer decisions",
  "Stronger follow-through",
];

const supportStyle = [
  {
    title: "Compassionate Honesty",
    text: "We name what is really happening without shame, pressure, or pretending you should already have it figured out.",
  },
  {
    title: "Practical Accountability",
    text: "You leave with next steps that help you practice self-trust in real life, not just talk about confidence.",
  },
  {
    title: "Lasting Inner Change",
    text: "We work beneath surface-level motivation so confidence can grow from a stronger belief in yourself.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 pb-16 pt-14 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Am I in the right place?
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              I am a life coach for women who struggle with self-doubt and a
              lack of confidence.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
              Yes, if you are tired of questioning yourself, holding back, and
              wondering why confidence feels so hard to keep. Through confidence
              coaching for women and personal growth coaching, I help you
              identify the core beliefs keeping you stuck, challenge the old
              patterns that make you second-guess yourself, and practice new
              choices that build self-trust from the inside out.
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
                href="/pricing"
                className="inline-flex justify-center rounded-full border border-[#0f766e] bg-white/70 px-7 py-4 text-sm font-bold text-[#0f766e] transition hover:bg-white"
              >
                View Programs & Pricing
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
                Confidence can be built from the inside out
              </p>
              <p className="mt-3 text-xl font-semibold leading-8">
                You do not need to become fearless before you begin. You need a
                steady place to hear yourself clearly and take the next honest
                step.
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

      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-5 rounded-[2rem] bg-[#3f342c] p-6 text-white shadow-xl shadow-[#3f342c]/10 md:grid-cols-3 md:p-8">
          {trustSignals.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f7d7c7]">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold leading-7">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              How the Work Begins
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Core Belief Transformation through personal growth coaching.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6f5a4d]">
              Self-doubt is often connected to a deeper belief about who you
              are, what you deserve, or what is possible for you. As a life
              coach for women, I help you identify that belief, understand how
              it has shaped your choices, and begin practicing new ways of
              thinking, deciding, and showing up.
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

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eadfd5] md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Is this for me?
          </p>

          <h2 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            You are in the right place if self-doubt keeps talking you out of
            trusting yourself.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#6f5a4d]">
            This is not for women who need a quick pep talk. It is for women who
            want to understand why they keep doubting themselves, where those
            patterns came from, and how to begin choosing from self-trust
            instead of fear.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {rightPlaceSigns.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f7efe8] p-5 text-lg font-semibold leading-7 text-[#5f4c41]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#0f766e] p-6 text-white">
            <p className="text-xl font-bold leading-8">
              If you have been looking for support that feels honest,
              compassionate, and practical, you are in the right place.
            </p>
            <p className="mt-4 leading-7 text-[#e6fffb]">
              Through Core Belief Transformation, we work underneath the surface
              of self-doubt so confidence is not just something you talk about.
              It becomes something you practice in your decisions, boundaries,
              relationships, and daily life.
            </p>
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
              Confidence coaching for women that feels safe and builds lasting
              self-trust.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6f5a4d]">
              We focus on what is happening now, what belief may be underneath
              the self-doubt, and what next choice you can practice without
              forcing yourself to have it all figured out.
            </p>
          </div>

          <div className="grid gap-5">
            {supportStyle.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#eadfd5] bg-[#fdf8f3] p-6"
              >
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
              The goal is not a perfect life. It is a stronger relationship
              with yourself.
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
              A Discovery Call is a simple, no-pressure conversation about
              where you are, what you want to change, and whether this support
              feels aligned.
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
