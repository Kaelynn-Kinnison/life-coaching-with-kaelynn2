import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Nebraska Life Coach for Women | Virtual Coaching with Kaelynn",
  description:
    "Nebraska-based virtual life coaching for women of all ages who are ready to rebuild confidence, reconnect with themselves, and create a meaningful next chapter.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const clientFeelings = [
  "You have been strong for so long that you are tired of only surviving.",
  "You are ready to reconnect with who you are beneath the roles and responsibilities.",
  "You want confidence, clarity, and a life that feels meaningful again.",
];

const path = [
  {
    title: "Feel Seen",
    text: "We begin with honest space for what you are carrying, without judgment or pressure to have it all figured out.",
  },
  {
    title: "Understand the Pattern",
    text: "Together, we look beneath the surface at the beliefs, fears, and old stories that may be shaping your choices.",
  },
  {
    title: "Create Your Next Chapter",
    text: "You begin taking aligned action with support, accountability, and a clearer sense of who you are becoming.",
  },
];

const outcomes = [
  "Rebuild confidence and self-trust",
  "Reconnect with your needs, voice, and identity",
  "Understand limiting beliefs and old patterns",
  "Clarify what you want your next chapter to look like",
  "Take meaningful steps with accountability and support",
  "Create change that feels grounded, honest, and sustainable",
];

const coachingAccess = [
  "Nebraska-based coaching with a personal, grounded feel",
  "Virtual sessions available for women across the U.S.",
  "Support for women of all ages and seasons of life",
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
              For the woman who is ready to stop surviving and begin living
              with clarity, confidence, and purpose.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
              I am a Nebraska-based life coach offering virtual coaching for
              women of all ages who have spent years surviving and are ready to
              reconnect with who they truly are, rebuild confidence, and create
              a meaningful next chapter.
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
                You do not have to know every step. You only need a safe,
                supported place to begin.
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
              Coaching that honors your story while helping you move forward.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6f5a4d]">
              This work is not about pretending the past did not happen or
              forcing positivity. It is about creating space to understand what
              shaped you, release what no longer serves you, and practice a new
              way of living with support.
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
              A life-changing experience begins with reconnecting to yourself.
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
              You do not have to figure out your next chapter alone.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f7efe8]">
              A Discovery Call gives us space to talk about where you are, what
              feels heavy or unclear, and whether coaching is the right support
              for your season.
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
