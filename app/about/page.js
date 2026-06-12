import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Kaelynn Kinnison | Life Coaching with Kaelynn",
  description:
    "Meet Kaelynn Kinnison, founder of Life Coaching with Kaelynn. Learn about her story, values, coaching style, and passion for helping women rebuild confidence and create their next chapter.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const beliefs = [
  "I believe no woman should have to face life’s challenges alone.",
  "I believe confidence can be rebuilt.",
  "I believe self-worth is not something you have to earn.",
  "I believe healing and growth can happen in any season of life.",
  "I believe your past may have shaped you, but it does not have to define your future.",
];

const womenConnect = [
  {
    title: "I Listen Without Judgment",
    text: "You deserve a space where you can be honest about what you are carrying and feel safe enough to be seen.",
  },
  {
    title: "I Balance Compassion With Accountability",
    text: "I will support you with care while also encouraging you to take meaningful steps toward the growth you want.",
  },
  {
    title: "I Believe Growth Is Personal",
    text: "Your journey does not need to look like anyone else’s. Coaching meets you where you are and supports where you want to go.",
  },
];

const whoIHelp = [
  "Women wondering, “Is this all there is?”",
  "Women rebuilding confidence and self-worth",
  "Women who have lost themselves while caring for everyone else",
  "Women navigating life transitions or personal reinvention",
  "Women seeking clarity, purpose, and direction",
  "Women ready to create a meaningful next chapter",
];

const credentials = [
  {
    icon: "🎓",
    title: "Psychology Studies",
    text: "Degree Candidate",
  },
  {
    icon: "🌿",
    title: "Health & Wellness",
    text: "Coaching Certificate",
  },
  {
    icon: "🦋",
    title: "Founder",
    text: "Life Coaching with Kaelynn",
  },
  {
    icon: "✨",
    title: "Signature Support",
    text: "Core Belief Transformation Coaching",
  },
];

const funFacts = [
  "I am passionate about personal growth and transformation.",
  "I believe second chapters can be powerful.",
  "I am continuing my education in Psychology.",
  "I love helping women reconnect with who they are.",
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Meet Kaelynn
            </p>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              A Safe Place to Begin Again
            </h1>

           <h2 className="mb-6 text-3xl font-semibold leading-relaxed text-teal-700">
  For the woman who feels tired, discouraged, afraid, guilty, or alone — you are not broken, and you do not have to carry this by yourself.
</h2>

<p className="mb-6 text-lg leading-8 text-slate-700">
  There are seasons in life when you can look like you are holding everything together on the outside, while inside you feel overwhelmed, disconnected, uncertain, or quietly falling apart.
</p>

<p className="mb-6 text-lg leading-8 text-slate-700">
  You may be carrying guilt for wanting more, fear of starting over, sadness over what has changed, or discouragement because you have tried to move forward before and still feel stuck.
</p>

<p className="mb-6 text-lg leading-8 text-slate-700">
  <strong>
    Your feelings are not too much, your story is not too heavy, and your desire for a different life matters.
  </strong>
</p>

<p className="mb-6 text-lg leading-8 text-slate-700">
  Through Life Coaching with Kaelynn, I help women who feel lost, stuck, or emotionally worn down begin to reconnect with themselves, rebuild confidence, and take one honest step at a time toward healing, clarity, and meaningful change.
</p>

<p className="mb-8 text-lg leading-8 text-slate-700">
  You do not need to have all the answers before you begin. You only need a safe place to start — and you do not have to start alone.
</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
              >
                Schedule Discovery Call
              </Link>

              <Link
                href="/coaching-approach"
                className="inline-flex rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
              >
                My Coaching Approach
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/kaelynn-portrait.png"
              alt="Portrait of Kaelynn Kinnison"
              width={500}
              height={650}
              className="rounded-3xl object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl bg-slate-950 p-10 text-white shadow-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
              The Woman Behind the Coach
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              I know what it feels like to question what comes next.
            </h2>

            <p className="mb-5 leading-8 text-slate-300">
              I understand seasons of self-doubt, uncertainty, and wondering if
              real change is possible.
            </p>

            <p className="mb-5 leading-8 text-slate-300">
              I know what it feels like to want more for your life but not know
              exactly where to begin.
            </p>

            <p className="leading-8 text-slate-300">
              My own growth journey is part of what led me to this work. It
              gave me a deep passion for helping women feel less alone, more
              understood, and more confident as they begin creating their next
              chapter.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Why I Do This Work
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
              Because no woman should feel like she has to figure it all out by
              herself.
            </h2>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              I believe women are capable of powerful transformation when they
              have a safe space to be honest, reflect, heal, grow, and take
              supported action.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              Many women spend years holding everything together for everyone
              else while slowly losing connection with their own needs, voice,
              confidence, and dreams.
            </p>

            <p className="text-lg leading-8 text-slate-700">
              My mission is to help women rediscover themselves, trust
              themselves again, and confidently create what comes next.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            What I Believe
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-5xl">
            The Beliefs That Guide My Coaching
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {beliefs.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 text-left text-lg font-medium leading-8 text-slate-700 shadow-sm"
              >
                <span className="font-bold text-teal-700">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Why Women Connect With Me
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
              Support That Feels Compassionate, Honest, and Personal
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {womenConnect.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200"
              >
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Who I Help
          </p>

          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Women Ready to Reconnect With Themselves
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {whoIHelp.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                <span className="font-bold text-teal-700">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Signature Support
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
              Core Belief Work Is One Way I Support Transformation
            </h2>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              While this page is about who I am, my signature Core Belief
              Transformation Coaching may be woven into the coaching experience
              when it supports a client&apos;s goals.
            </p>

            <p className="mb-8 text-lg leading-8 text-slate-700">
              This deeper work helps women explore the beliefs and patterns that
              may be keeping them stuck so they can begin creating change from
              the inside out.
            </p>

            <Link
              href="/core-belief-coaching"
              className="inline-flex rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              Learn About Core Belief Coaching
            </Link>
          </div>

          <div className="rounded-3xl bg-teal-50 p-10 shadow-xl ring-1 ring-teal-100">
            <h3 className="mb-6 text-3xl font-bold text-slate-900">
              A Few Things You Should Know About Me
            </h3>

            <div className="grid gap-4">
              {funFacts.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-5 text-slate-700 shadow-sm"
                >
                  <span className="font-bold text-teal-700">✓</span> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Education • Training • Background
            </p>

            <div className="grid gap-6 md:grid-cols-4">
              {credentials.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mb-3 text-3xl">{item.icon}</div>

                  <h3 className="font-bold text-slate-900">{item.title}</h3>

                  <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            You Do Not Have to Navigate Your Next Chapter Alone
          </h2>

          <p className="mb-10 text-lg leading-8 text-slate-200">
            If you are ready to be supported, heard, encouraged, and challenged
            as you create meaningful change, I invite you to schedule a
            complimentary Discovery Call.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
            >
              Schedule Your Discovery Call
            </Link>

            <Link
              href="/pricing"
              className="inline-flex rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
