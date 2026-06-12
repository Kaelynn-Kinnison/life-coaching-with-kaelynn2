import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Life Coach for Women | Clarity, Confidence & Your Next Chapter",
  description:
    "Life Coaching with Kaelynn helps women who feel stuck, unfulfilled, or uncertain about what's next rebuild confidence, strengthen self-worth, and create a meaningful next chapter.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const signs = [
  "You keep wondering, “Is this all there is?”",
  "You feel stuck between who you were and who you want to become",
  "You have spent years caring for everyone else",
  "You feel disconnected from yourself, your purpose, or your confidence",
  "You are navigating a life transition and need direction",
  "You know you want more, but you do not know where to begin",
];

const outcomes = [
  "Clarity about what you truly want next",
  "Renewed confidence and self-trust",
  "Stronger self-worth and boundaries",
  "Support through life transitions",
  "Accountability for meaningful action",
  "A vision for your next chapter",
];

const whyThisWorks = [
  {
    title: "You Feel Heard",
    text: "You get space to talk honestly about what you are carrying without judgment, pressure, or shame.",
  },
  {
    title: "You Gain Clarity",
    text: "Together, we sort through the noise so you can understand what feels stuck and what needs to shift.",
  },
  {
    title: "You Rebuild Confidence",
    text: "Coaching helps you strengthen self-trust, reconnect with your voice, and begin believing in your next chapter.",
  },
  {
    title: "You Take Action",
    text: "You leave with realistic next steps, support, and accountability so change becomes more than an idea.",
  },
];

const discoveryCallSteps = [
  "Talk about where you are right now",
  "Explore what feels stuck or unclear",
  "Discuss your goals and desired change",
  "Decide which coaching option fits your season",
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <Image
            src="/hibiscus-logo.png"
            alt="Life Coaching with Kaelynn logo"
            width={240}
            height={240}
            className="mx-auto mb-6"
            priority
          />

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            Life Coaching with Kaelynn
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            Feeling Stuck in Life? Let’s Discover What Comes Next.
          </h1>

          <p className="mx-auto mb-6 max-w-4xl text-xl leading-8 text-slate-700 md:text-2xl">
            Supportive life coaching for women who are ready to rebuild
            confidence, reconnect with themselves, and create a meaningful next
            chapter.
          </p>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600">
            You do not have to figure out this season alone. Coaching gives you
            space to feel heard, gain clarity, and move forward with support and
            accountability.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
            >
              Schedule Your Free Discovery Call
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              View Coaching Services
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Is This You?
          </p>

          <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            You May Be Ready for Coaching If...
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {signs.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-teal-50 p-5 text-slate-700 shadow-sm"
              >
                <span className="font-bold text-teal-700">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            A New Way Forward
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Maybe You Are Not Stuck.
            <span className="block text-teal-300">
              Maybe You Are Being Called Into Your Next Chapter.
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
            Many women believe something is wrong with them because they feel
            restless, disconnected, or unsure. But sometimes that feeling is not
            failure. Sometimes it is a sign that you are outgrowing the version
            of yourself that got you here.
          </p>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            What Coaching Can Help You Create
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">
            Support for Clarity, Confidence, and Meaningful Change
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-5 text-slate-700 shadow-sm"
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
              Why Coaching Can Help
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              You Do Not Need to Have It All Figured Out to Begin
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              Coaching helps you slow down, understand what is keeping you
              stuck, and begin taking steps that feel aligned with the woman you
              are becoming.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyThisWorks.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200"
              >
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Discovery Call
            </p>

            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              What Happens During Your Free Discovery Call?
            </h2>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              Your Discovery Call is a supportive conversation where we discuss
              what you are currently navigating, what you want to change, and
              whether coaching is the right next step for you.
            </p>

            <p className="text-lg leading-8 text-slate-700">
              There is no pressure. It is simply a chance to be heard, ask
              questions, and explore what level of support fits your current
              season.
            </p>
          </div>

          <div className="rounded-3xl bg-teal-50 p-8 shadow-md">
            <div className="grid gap-4">
              {discoveryCallSteps.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-5 text-slate-700 shadow-sm"
                >
                  <span className="font-bold text-teal-700">✓</span> {item}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800"
              >
                Schedule Your Free Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Coaching Focus
          </p>

          <h2 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">
            Coaching for Women Ready to Feel Like Themselves Again
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">
            Whether you are rebuilding confidence, navigating a transition,
            healing from difficult experiences, or creating a new vision for
            your life, coaching can help you reconnect with who you are and move
            forward with support.
          </p>

          <p className="mx-auto mt-10 max-w-3xl text-sm leading-7 text-slate-600">
            Coaching with Kaelynn is supportive, forward-focused coaching. It is
            not therapy, mental health counseling, or substance abuse treatment.
            If you are in crisis or need clinical care, please contact a
            licensed mental health or medical professional.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Your Next Chapter Is Waiting
          </h2>

          <p className="mb-10 text-lg leading-8 text-slate-200">
            You do not have to spend another year wondering what is next for
            you. Together, we can uncover what has been holding you back, build
            confidence in who you are becoming, and create a future that feels
            meaningful, purposeful, and aligned with who you truly are.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
            >
              Schedule Your Free Discovery Call
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              View Coaching Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
