import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Kaelynn Kinnison",
  description:
    "Meet Kaelynn Kinnison, a Nebraska-based life coach helping women overcome self-doubt, transform limiting beliefs, and build lasting confidence.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const facts = [
  {
    label: "Founder",
    value: "Life Coaching with Kaelynn",
  },
  {
    label: "Training",
    value: "Health & Wellness Coaching Certificate",
  },
  {
    label: "Education",
    value: "Continuing Education in Psychology",
  },
  {
    label: "Specialty",
    value: "Core Beliefs, Confidence & Personal Growth",
  },
];

const coachingStyle = [
  "Warm",
  "Grounded",
  "Honest",
  "Practical",
];

export default function AboutPage() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 pb-16 pt-14 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Meet Kaelynn
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              I am Kaelynn, and I help women come back to themselves.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6f5a4d] md:text-xl">
              My coaching style is warm, honest, and practical. I support women
              who struggle with self-doubt and a lack of confidence by helping
              them understand the beliefs behind those patterns and begin making
              choices from self-trust instead of fear.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6f5a4d]">
              I am based in Nebraska and work virtually with women who want a
              grounded space to be heard, challenged, encouraged, and reminded
              that change can happen one honest step at a time.
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
                href="/coaching-approach"
                className="inline-flex justify-center rounded-full border border-[#0f766e] bg-white/70 px-7 py-4 text-sm font-bold text-[#0f766e] transition hover:bg-white"
              >
                My Coaching Approach
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl shadow-[#8b6f5c]/20 ring-1 ring-[#eadfd5]">
              <Image
                src="/kaelynn-portrait.png"
                alt="Portrait of Kaelynn Kinnison"
                width={650}
                height={820}
                className="max-h-[680px] rounded-[1.4rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Why This Work Matters to Me
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              I care about the person underneath the pattern.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#6f5a4d]">
            <p>
              Many women come to coaching after years of being capable,
              responsible, and strong for everyone else. On the outside they may
              be functioning. On the inside, they are tired of questioning
              themselves, shrinking their needs, or waiting until they feel
              completely ready.
            </p>
            <p>
              My work is not about pushing you harder. It is about helping you
              understand what has been shaping your choices, reconnect with your
              own voice, and practice a steadier kind of confidence in real
              life.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#3f342c] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">
              Credentials & Background
            </p>
            <div className="mt-6 grid gap-4">
              {facts.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f7d7c7]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-7">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eadfd5] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              My Style
            </p>
            <div className="mt-6 grid gap-4">
              {coachingStyle.map((item) => (
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

      <section className="bg-[#f7efe8] px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Connect With Me
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            If my approach feels like the kind of support you need, let us talk.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
            A Discovery Call is a simple first conversation to see whether
            coaching together feels like the right fit.
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
