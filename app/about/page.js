import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Kaelynn Kinnison | Life Coaching with Kaelynn",
  description:
    "Meet Kaelynn Kinnison, a life coach helping women reconnect with themselves, rebuild confidence, and create a meaningful next chapter.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const values = [
  "You are not broken because you feel tired, uncertain, or disconnected.",
  "Your past may have shaped you, but it does not have to write the next chapter.",
  "Confidence can be rebuilt through compassion, honesty, and supported action.",
  "Meaningful growth happens when you feel safe enough to tell the truth.",
];

const support = [
  {
    title: "A Calm Place to Be Honest",
    text: "Coaching gives you space to name what is real without having to perform strength or pretend everything is fine.",
  },
  {
    title: "Compassionate Accountability",
    text: "You will be supported with care while also being encouraged to take the meaningful steps your growth requires.",
  },
  {
    title: "A Focus on Who You Are Becoming",
    text: "This work honors your story while helping you reconnect with your voice, confidence, needs, and direction.",
  },
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
              A safe, steady place to begin again.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6f5a4d] md:text-xl">
              I support women who have spent years holding everything together
              for everyone else and are finally ready to reconnect with
              themselves.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#6f5a4d]">
              You may be carrying guilt for wanting more, grief over what has
              changed, fear of starting over, or exhaustion from trying to keep
              going. You do not have to minimize any of that here.
            </p>

            <p className="mt-5 text-lg font-semibold leading-8">
              Your desire for a different life matters. Your next chapter
              matters. And you do not have to begin it alone.
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
              Why I Do This Work
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Because no woman should have to lose herself in order to survive.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#6f5a4d]">
            <p>
              Many women arrive at coaching after years of pushing through,
              pleasing others, questioning themselves, or believing they have to
              carry everything alone.
            </p>
            <p>
              My work is rooted in helping you understand what has been shaping
              your patterns, rebuild trust with yourself, and create practical
              change that honors the woman you are becoming.
            </p>
            <p className="font-semibold text-[#3f342c]">
              This is not about becoming someone else. It is about coming home
              to yourself.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              What Guides My Coaching
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Support that feels safe, honest, and deeply human.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {values.map((item) => (
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
              What It Feels Like to Work Together
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              A coaching relationship built on compassion and momentum.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {support.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white/10 p-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#f7efe8]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Your Next Step
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            If something in you is ready for change, that matters.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
            You do not need to have perfect words or a perfect plan. A Discovery
            Call is simply a place to begin the conversation.
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
