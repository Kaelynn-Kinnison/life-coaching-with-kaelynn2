import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Kaelynn Kinnison | Life Coaching with Kaelynn",
  description:
    "Meet Kaelynn Kinnison, founder of Life Coaching with Kaelynn and a coach for women creating a meaningful next chapter.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const facts = [
  "Founder of Life Coaching with Kaelynn",
  "Health and wellness coaching certificate",
  "Continuing education in psychology",
  "Focused on Core Belief Transformation and intentional personal growth",
];

const coachingStyle = [
  "Warm and compassionate",
  "Calm and grounded",
  "Honest without being harsh",
  "Focused on practical next steps",
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
              A coach for women who are ready to come back to themselves.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6f5a4d] md:text-xl">
              I created Life Coaching with Kaelynn to support women who are
              ready for more than surviving. My work blends compassionate
              listening, core belief work, and intentional action so clients can
              rebuild confidence and create a meaningful next chapter.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6f5a4d]">
              My coaching style is steady, honest, and deeply personal. I care
              about helping you feel safe enough to tell the truth and supported
              enough to do something with it.
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
              I believe a woman can rebuild her life without abandoning who she
              is.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#6f5a4d]">
            <p>
              I am passionate about the quiet, meaningful work of helping women
              understand themselves again: what shaped them, what they have
              outgrown, and what they are ready to choose next.
            </p>
            <p>
              Coaching is not about giving you a new personality or a perfect
              life plan. It is about helping you reconnect with your own voice,
              trust yourself more deeply, and take steps that feel aligned with
              the life you want to create.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#3f342c] p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">
              My Background
            </p>
            <div className="mt-6 grid gap-4">
              {facts.map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5">
                  {item}
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
