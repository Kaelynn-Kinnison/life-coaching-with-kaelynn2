import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: {
    absolute:
      "Life Coach for Women | Confidence Coaching for Women | Personal Growth Coaching",
  },
  description:
    "Confidence coaching for capable women who privately struggle with self-doubt, overthinking, people-pleasing, boundaries, and trusting their decisions.",
  alternates: {
    canonical: "/",
  },
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const rightPlaceSigns = [
  "You replay decisions long after you have made them.",
  "You say yes to keep the peace, then feel frustrated that your needs disappeared again.",
  "You look capable to everyone else, but privately wonder whether you are enough.",
  "You talk yourself out of opportunities because fear sounds more convincing than your own voice.",
  "You are entering a new chapter and do not want self-doubt making the decisions anymore.",
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
  "Make a decision without replaying it for days",
  "Say what you need without immediately apologizing",
  "Set a boundary and trust yourself enough to hold it",
  "Stop shrinking to keep other people comfortable",
  "Follow through without waiting to feel completely ready",
  "Move into your next chapter with a clearer sense of who you are",
];

const waysToWorkTogether = [
  {
    name: "One-Time Coaching Session",
    detail: "One focused issue",
    text: "A private 45-60 minute session for one decision, challenge, or confidence block that needs clarity now.",
  },
  {
    name: "The Confidence Rebuild",
    detail: "12 focused weeks",
    text: "A structured private coaching experience for changing one central self-doubt pattern and rebuilding self-trust.",
  },
  {
    name: "The Confidence Reclamation",
    detail: "16 high-touch weeks",
    text: "Deeper support for interconnected patterns affecting your identity, boundaries, relationships, or next chapter.",
  },
];

const clientReflections = [
  {
    quote: "The biggest shift for me was realizing that my thoughts were not always the truth. That changed how I made decisions, set boundaries, and trusted myself.",
    name: "Transformation Coaching Client",
  },
  {
    quote: "Kaelynn balanced compassion with accountability. I left coaching feeling more grounded, more aware, and more committed to my growth.",
    name: "Accountability Coaching Client",
  },
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
              Confidence Coaching for Women
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              You look capable on the outside. But inside, you second-guess yourself.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
              I help women uncover the beliefs beneath overthinking,
              people-pleasing, and self-doubt—so you can trust your decisions,
              set healthier boundaries, and stop talking yourself out of the
              life you want.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex justify-center rounded-full bg-[#0f766e] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
              >
                Book Your Complimentary Clarity Call
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
              Change the belief beneath the pattern—not just the behavior on top of it.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6f5a4d]">
              Self-doubt is not always a lack of effort or motivation. It can
              grow from an old belief about who you are, what you deserve, or
              what feels safe. Through Core Belief Transformation and personal
              growth coaching, we find that belief and practice a more honest
              way of deciding, speaking, and showing up.
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
            This is for the woman who is tired of looking confident while quietly questioning herself.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#6f5a4d]">
            You do not need another reminder to “just be confident.” You need
            space to understand why you keep doubting yourself and support as
            you practice choosing from self-trust instead of fear.
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
              Warm enough to feel safe. Honest enough to create movement.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6f5a4d]">
              My approach to confidence coaching for women brings compassion,
              practical accountability, and Core Belief Transformation
              together. You can feel supported without staying comfortable in
              the patterns you are ready to change.
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
              Confidence becomes visible in the choices you make every day.
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

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Ways to Work Together
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Choose the depth of support your next step needs.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6f5a4d]">
              Start with one focused conversation or step into a private
              coaching experience designed for deeper, lasting change.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {waysToWorkTogether.map((offer, index) => (
              <article
                key={offer.name}
                className={`rounded-[2rem] p-7 ${index === 2 ? "bg-[#3f342c] text-white" : "bg-[#fdf8f3] text-[#3f342c] ring-1 ring-[#eadfd5]"}`}
              >
                <p className={`text-sm font-bold uppercase tracking-[0.18em] ${index === 2 ? "text-[#f7d7c7]" : "text-[#0f766e]"}`}>
                  {offer.detail}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{offer.name}</h3>
                <p className={`mt-4 leading-8 ${index === 2 ? "text-[#f7efe8]" : "text-[#6f5a4d]"}`}>
                  {offer.text}
                </p>
                <Link
                  href="/pricing"
                  className={`mt-7 inline-flex rounded-full px-6 py-3 text-sm font-bold ${index === 2 ? "bg-white text-[#3f342c]" : "bg-[#0f766e] text-white"}`}
                >
                  Explore This Option
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Client Reflections
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              What changes when your own voice becomes easier to trust.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {clientReflections.map((item) => (
              <blockquote key={item.name} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#eadfd5]">
                <p className="text-lg leading-8 text-[#5f4c41]">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-[#9b6f5d]">— {item.name}</footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#6f5a4d]">Individual experiences vary; testimonials are not a guarantee of specific results.</p>
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
              During your complimentary Confidence Clarity Call, we will name
              where self-doubt is showing up, clarify what you want to change,
              and decide whether one of these coaching experiences fits—without
              pressure to decide on the call.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-[#3f342c] transition hover:bg-[#f7efe8]"
            >
              Book Your Complimentary Clarity Call
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
