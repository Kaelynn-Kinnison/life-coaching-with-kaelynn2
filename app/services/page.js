import Link from "next/link";

export const metadata = {
  title: "Confidence Coaching Programs for Women",
  description:
    "Explore virtual coaching programs for women ready to overcome self-doubt, transform limiting core beliefs, and build lasting confidence.",
  alternates: {
    canonical: "/services",
  },
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const programs = [
  {
    name: "The Confidence Rebuild",
    duration: "12-week signature Core Belief Transformation experience",
    investment: "$1,997",
    tagline: "Transform self-doubt into lasting confidence.",
    audience:
      "For women ready to transform limiting beliefs, rebuild self-worth, and stop letting self-doubt lead their choices.",
    featured: true,
    includes: [
      "Private 45-60 minute sessions across 12 weeks",
      "H.E.A.L. Framework",
      "Core Belief Transformation",
      "Uncover limiting beliefs",
      "Rebuild self-worth and confidence",
      "Release self-doubt patterns",
      "Strengthen boundaries",
      "Practice confident decision-making",
      "Create sustainable transformation",
    ],
  },
  {
    name: "The Confidence Reclamation",
    duration: "16-week high-touch private coaching experience",
    investment: "$2,997",
    tagline:
      "Reclaim your self-trust. Expand your confidence. Become rooted in who you are.",
    audience:
      "For women who want the deepest private coaching support as they build lasting confidence from the inside out.",
    premium: true,
    includes: [
      "Private 45-60 minute sessions across 16 weeks",
      "Personalized Confidence Reclamation Roadmap",
      "Deeper work across identity, self-worth, relationships, and transitions",
      "Boundary and self-trust practice for real-life decisions",
      "Priority between-session support during support hours",
      "Progress reviews and personalized action steps",
      "A post-program confidence integration plan",
    ],
  },
  {
    name: "Growth Membership",
    duration: "Monthly membership",
    investment: "$197/month",
    tagline: "Continue Growing with Coaching, Accountability & Community.",
    audience:
      "For past clients who want continued encouragement, coaching, and accountability as they keep strengthening confidence.",
    includes: [
      "One private 45-60 minute session each month",
      "One weekly check-in by phone, email, or text",
      "Accountability and goal review",
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
        Book a Complimentary Clarity Call
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
              Two transformational coaching experiences for lasting confidence.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
              These private coaching experiences are designed for women ready to
              overcome self-doubt, transform limiting beliefs, and build
              confidence from the inside out.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex justify-center rounded-full bg-[#0f766e] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
              >
                Book a Complimentary Clarity Call
              </Link>

              <Link
                href="#programs"
                className="inline-flex justify-center rounded-full border border-[#0f766e] bg-white/70 px-7 py-4 text-sm font-bold text-[#0f766e] transition hover:bg-white"
              >
                Explore Signature Offers
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
                A clear path to rebuild self-trust and create lasting
                confidence.
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
            Start with a Complimentary Confidence Clarity Call.
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
            Book Your Complimentary Clarity Call
          </Link>
        </div>
      </section>
    </main>
  );
}
