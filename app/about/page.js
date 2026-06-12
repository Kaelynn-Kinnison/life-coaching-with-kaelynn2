import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Kaelynn Kinnison | Life Coaching with Kaelynn",
  description:
    "Meet Kaelynn Kinnison, Transformational Life Coach and creator of the Core Belief Transformation Method. Coaching for women who feel stuck, unfulfilled, or uncertain about what's next.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

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
    icon: "✨",
    title: "Signature Method",
    text: "Core Belief Transformation Method™",
  },
  {
    icon: "🦋",
    title: "Founder",
    text: "Life Coaching with Kaelynn",
  },
];

const whoIHelp = [
  "Women wondering, 'Is this all there is?'",
  "Women feeling stuck between who they were and who they want to become",
  "Women navigating major life transitions",
  "Women rebuilding confidence and self-worth",
  "Women healing from difficult life experiences",
  "Women seeking clarity, purpose, and direction",
];

const beliefFormula = ["Belief", "Thought", "Emotion", "Action", "Result"];

const values = [
  {
    title: "Compassion",
    text: "A safe, supportive, and non-judgmental coaching space where you can feel heard, understood, and encouraged.",
  },
  {
    title: "Accountability",
    text: "Support that helps you stay focused, follow through, and take meaningful steps toward your goals.",
  },
  {
    title: "Growth",
    text: "Coaching that encourages self-awareness, confidence, resilience, healing, and personal transformation.",
  },
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
              Kaelynn Kinnison
            </h1>

            <p className="mb-6 text-2xl font-semibold leading-relaxed text-teal-700">
              If You&apos;ve Been Wondering What&apos;s Next, You&apos;re Not Alone.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              Have you ever found yourself asking,{" "}
              <strong>&quot;Is this all there is?&quot;</strong>
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              From the outside, life may look fine. You have responsibilities,
              relationships, and a routine you have built over the years. Yet
              something inside keeps whispering that there has to be more. More
              purpose. More fulfillment. More of you.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              I understand that feeling because I have lived through seasons
              where I questioned who I was, what I truly wanted, and what was
              next for me. I know what it feels like to carry self-doubt, to
              feel stuck between where you are and where you want to be, and to
              wonder if real change is even possible.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              What I discovered is that many of the things keeping us stuck are
              not a lack of motivation or willpower. They are often the beliefs
              we have carried about ourselves for years.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              As I began doing my own personal growth work, I became passionate
              about helping other women break free from those same limitations.
              Women who are ready to stop simply surviving and start creating a
              life that feels meaningful, aligned, and authentic.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              Today, through Life Coaching with Kaelynn, I help women gain
              clarity, rebuild confidence, challenge limiting beliefs, and
              create a vision for their next chapter.
            </p>

            <p className="mb-6 text-lg leading-8 text-slate-700">
              Whether you are navigating a major life transition, healing from
              difficult experiences, rebuilding after adversity, or simply
              feeling called toward something more, you do not have to figure it
              out alone.
            </p>

            <p className="text-lg leading-8 text-slate-700">
              My mission is simple: to help women rediscover themselves, trust
              themselves again, and confidently create what comes next.
            </p>
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

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Education • Training • Expertise
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

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Why I Do This Work
          </p>

          <h2 className="mb-10 text-center text-4xl font-bold text-slate-900">
            Helping Women Create Their Next Chapter
          </h2>

          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Through my coaching journey and studies in Psychology, I became
              increasingly fascinated by the connection between beliefs,
              emotions, behavior, confidence, self-worth, and personal growth.
            </p>

            <p>
              Time and time again, I discovered that many struggles are not
              caused by a lack of motivation, willpower, intelligence, or
              desire.
            </p>

            <p>
              Often, they are connected to deeply held beliefs about ourselves,
              our worth, our capabilities, and what we believe is possible for
              our future.
            </p>

            <p>
              I believe every woman has the ability to heal, grow, and
              transform. Sometimes the greatest challenge is not knowing what to
              do. It is trying to carry life&apos;s challenges alone.
            </p>

            <p className="font-semibold text-teal-700">
              One of my core beliefs is simple: no problem is too big,
              especially when you do not have to face it alone.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            The Core Belief Connection
          </p>

          <h2 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">
            Belief → Thought → Emotion → Action → Result
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-slate-700">
            The beliefs we carry often influence how we think, how we feel, how
            we respond, and what results we create in our lives.
          </p>

          <div className="grid gap-4 md:grid-cols-5">
            {beliefFormula.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-teal-700">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Signature Method
          </p>

          <h2 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl">
            Why I Created the Core Belief Transformation Method™
          </h2>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            Many women know what they want to change, yet they continue
            repeating the same patterns, experiencing the same frustrations, or
            struggling to create lasting results.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-700">
            I created the Core Belief Transformation Method™ to help women
            identify limiting beliefs, challenge old patterns, and build
            healthier beliefs that support confidence, self-worth,
            accountability, emotional wellness, and lasting transformation.
          </p>

          <p className="text-lg leading-8 text-slate-700">
            This approach allows coaching to become more than motivation. It
            becomes a process of self-awareness, alignment, and meaningful
            personal change.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Who I Help
          </p>

          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Support for Women Ready for Meaningful Change
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

      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            What Makes My Coaching Different
          </p>

          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            Creating Change From the Inside Out
          </h2>

          <p className="mb-6 text-lg leading-8 text-slate-200">
            Many coaching approaches focus primarily on goals, motivation, or
            accountability.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-200">
            While those tools are valuable, lasting transformation often begins
            by understanding the beliefs influencing your thoughts, emotions,
            decisions, and behaviors.
          </p>

          <p className="text-lg leading-8 text-slate-200">
            Through Core Belief Transformation Coaching™, we work from the
            inside out so change can become more sustainable, meaningful, and
            aligned with the life you want to create.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Education & Training
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">
            Professional Background
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-teal-50 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Health & Wellness Coaching Certificate
              </h3>

              <p className="text-slate-700">
                Training focused on wellness, behavior change, accountability,
                self-care, and healthy lifestyle transformation.
              </p>
            </div>

            <div className="rounded-3xl bg-teal-50 p-8 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                Psychology Studies
              </h3>

              <p className="text-slate-700">
                Currently pursuing a degree in Psychology with a strong interest
                in mindset, human behavior, emotional wellness, self-worth, and
                personal transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Coaching Values
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">
            What You Can Expect
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl bg-white p-8 text-left shadow-md ring-1 ring-slate-200"
              >
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="leading-7 text-slate-700">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Your Next Chapter Is Waiting
          </h2>

          <p className="mb-10 text-lg leading-8 text-slate-200">
            If you are ready to explore what may be holding you back and begin
            creating meaningful transformation, I invite you to schedule a
            complimentary Discovery Call.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
            >
              View Programs & Investment
            </Link>

            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Schedule Your Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
