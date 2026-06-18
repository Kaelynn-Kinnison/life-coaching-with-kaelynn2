import Link from "next/link";

export const metadata = {
  title: "Nebraska & Virtual Coaching Programs for Women | Kaelynn",
  description:
    "Explore Nebraska-based virtual coaching programs for women of all ages ready to rebuild confidence, transform core beliefs, and create a meaningful next chapter.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const programs = [
  {
    name: "Clarity & Confidence Accelerator",
    duration: "8-week coaching experience",
    investment: "$697",
    foundingRate: "$497",
    tagline: "Gain Direction. Build Confidence. Take Action.",
    audience:
      "For women who feel stuck, overwhelmed, or uncertain about what comes next.",
    includes: [
      "Identify what is keeping you stuck",
      "Build confidence and self-trust",
      "Clarify goals and vision",
      "Create an action plan",
      "Develop momentum toward meaningful change",
    ],
  },
  {
    name: "The Next Chapter Transformation",
    duration: "12-week signature coaching experience",
    investment: "$997",
    foundingRate: "$747",
    tagline: "Stop surviving. Start creating a life you genuinely love.",
    audience:
      "For women ready to transform old patterns, rebuild self-worth, and move into a more intentional next chapter.",
    featured: true,
    includes: [
      "H.E.A.L. Framework",
      "Core Belief Transformation",
      "Uncover limiting beliefs",
      "Rebuild self-worth and confidence",
      "Release old patterns",
      "Strengthen boundaries",
      "Create sustainable transformation",
    ],
  },
  {
    name: "Reclaim Her VIP Experience",
    duration: "6-month private coaching experience",
    investment: "$1,497",
    foundingRate: "$1,197",
    tagline: "Rediscover Yourself. Reclaim Your Life.",
    audience:
      "For women who desire the deepest private coaching support, spacious transformation, and continued implementation.",
    premium: true,
    includes: [
      "Personalized transformation roadmap",
      "Advanced Core Belief Transformation work",
      "Accountability and implementation support",
      "Ongoing guidance between sessions",
      "Deep identity and self-worth work",
    ],
  },
  {
    name: "Growth Membership",
    duration: "Monthly membership",
    investment: "$147/month",
    foundingRate: "$97/month",
    tagline: "Continue Growing with Coaching, Accountability & Community.",
    audience:
      "For women who want continued encouragement, coaching, and accountability as they keep growing.",
    includes: [
      "Monthly coaching calls",
      "Accountability support",
      "Personal growth trainings",
      "Community connection",
      "Continued encouragement and guidance",
    ],
  },
];

function ProgramTitle({ name }) {
  return (
    <>
      {name}
      <sup className="ml-1 text-sm font-semibold">&trade;</sup>
    </>
  );
}

function ProgramCard({ program }) {
  const cardClass = program.premium
    ? "relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#3f342c] p-7 text-white shadow-2xl shadow-[#3f342c]/20 ring-1 ring-[#6d594b]/40"
    : program.featured
      ? "relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 text-[#3f342c] shadow-2xl shadow-[#8b6f5c]/20 ring-2 ring-[#b7835f]"
      : "relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 text-[#3f342c] shadow-lg shadow-[#8b6f5c]/10 ring-1 ring-[#eadfd5]";

  const textClass = program.premium ? "text-[#f7efe8]" : "text-[#6f5a4d]";
  const mutedClass = program.premium ? "text-[#f7d7c7]" : "text-[#9b6f5d]";
  const listClass = program.premium ? "text-[#f7efe8]" : "text-[#5f4c41]";

  return (
    <article className={cardClass}>
      {program.featured && (
        <div className="absolute right-5 top-5 rounded-full bg-[#b7835f] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
          Most Popular
        </div>
      )}

      <p className={`pr-28 text-sm font-bold uppercase tracking-[0.18em] ${mutedClass}`}>
        {program.duration}
      </p>

      <h2 className="mt-5 text-3xl font-bold leading-tight">
        <ProgramTitle name={program.name} />
      </h2>

      <p className={`mt-4 text-xl font-semibold leading-8 ${mutedClass}`}>
        {program.tagline}
      </p>

      <p className={`mt-5 leading-7 ${textClass}`}>{program.audience}</p>

      <div
        className={
          program.premium
            ? "mt-7 rounded-2xl bg-white/10 p-5"
            : "mt-7 rounded-2xl bg-[#f7efe8] p-5"
        }
      >
        <p className="text-base font-black uppercase tracking-[0.18em]">
          Investment Starts At
        </p>
        <p className="mt-2 text-4xl font-black">{program.investment}</p>
        <p className={`mt-3 text-base font-bold leading-7 ${textClass}`}>
          Founding client rate may be available from {program.foundingRate} for
          a limited number of clients.
        </p>
      </div>

      <div className="mt-7 flex-1">
        <h3 className="text-lg font-bold">What is included:</h3>
        <ul className={`mt-4 list-disc space-y-3 pl-5 leading-7 ${listClass}`}>
          {program.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <Link
        href={bookingLink}
        target="_blank"
        className={
          program.premium
            ? "mt-8 inline-flex justify-center rounded-full bg-white px-6 py-4 text-sm font-bold text-[#3f342c] transition hover:bg-[#f7efe8]"
            : "mt-8 inline-flex justify-center rounded-full bg-[#0f766e] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#115e59]"
        }
      >
        Schedule a Discovery Call
      </Link>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 pb-16 pt-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Coaching Programs
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Choose the coaching experience that fits this season of your
              life.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
              These virtual coaching experiences offer different levels of
              structure, depth, and support for women in Nebraska and across the
              U.S.
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
                href="#programs"
                className="inline-flex justify-center rounded-full border border-[#0f766e] bg-white/70 px-7 py-4 text-sm font-bold text-[#0f766e] transition hover:bg-white"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-[#8b6f5c]/20 ring-1 ring-[#eadfd5]">
            <img
              src="/services-hero.jpg"
              alt="A calm sunrise over a peaceful lake"
              className="h-80 w-full object-cover sm:h-96"
            />
            <div className="p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b6f5d]">
                Core Belief Transformation
              </p>
              <p className="mt-3 text-xl font-semibold leading-8 text-[#3f342c]">
                A clear path, steady support, and practical tools for real life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#3f342c] shadow-2xl shadow-[#3f342c]/20">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#4f3b4d] p-8 text-white md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">
                Guarantee & Risk Reversal
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
                My Commitment to You
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#f7efe8]">
                Coaching works best when support and commitment meet.
              </p>
            </div>

            <div className="space-y-5 bg-white p-8 text-lg leading-8 text-[#5f4c41] md:p-12">
              <p>
                My role is to bring guidance, accountability, support, and
                proven tools for growth. Your role is to show up, engage in the
                process, and take action.
              </p>

              <p>
                If after your first coaching session you feel we are not the
                right fit, I will gladly refund your investment minus the value
                of the completed session.
              </p>

              <p>
                My goal is to provide a coaching experience that feels
                supportive, clear, and meaningful.
              </p>

              <div className="rounded-2xl bg-[#f7efe8] p-5 text-base leading-7 text-[#6f5a4d]">
                Coaching does not guarantee specific outcomes and is not
                therapy, medical care, mental health treatment, or crisis
                support. If you are experiencing a crisis or need clinical
                support, please contact a licensed mental health professional or
                emergency service.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Offer Suite
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Choose the experience that fits your season.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6f5a4d]">
              Compare the options below and choose the experience that matches
              the depth of support you want right now.
            </p>

            <div className="mt-8 rounded-[2rem] border border-[#eadfd5] bg-[#fdf8f3] p-6 shadow-lg shadow-[#8b6f5c]/10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9b6f5d]">
                Limited Founding Client Offer
              </p>
              <p className="mt-3 text-lg leading-8 text-[#5f4c41]">
                I am currently accepting a small number of founding clients at
                an introductory rate in exchange for honest feedback, a
                testimonial, and permission to feature the coaching experience
                in my portfolio where appropriate.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <ProgramCard key={program.name} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe8] px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Begin With a Conversation
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Start with a Discovery Call.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
            We will talk through your goals and decide which coaching experience
            fits best.
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
