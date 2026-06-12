import Link from "next/link";

export const metadata = {
  title: "Coaching Services | Life Coaching with Kaelynn",
  description:
    "Explore coaching services for women ready to navigate life transitions, transform limiting beliefs, rebuild confidence, strengthen self-worth, and create lasting personal growth.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const services = [
  {
    badge: "Life Transition Support",
    title: "Life Transition Coaching",
    length: "10 Weeks",
    statement: "Move from uncertainty to confidence.",
    description:
      "For women navigating a new season of life and seeking clarity, direction, confidence, and support.",
    bestFor: [
      "Are navigating a major life change",
      "Feel uncertain about what comes next",
      "Have lost confidence in themselves",
      "Want clarity and direction",
      "Are ready to stop feeling stuck",
    ],
    includes: [
      "Weekly 1:1 coaching sessions",
      "Personalized growth plan",
      "Confidence-building exercises",
      "Values and vision clarification",
      "Goal setting and action planning",
      "Accountability support",
      "Coaching resources and worksheets",
    ],
  },
  {
    badge: "Signature Program",
    title: "Core Belief Transformation Coaching",
    length: "12 Weeks",
    statement: "Transform the beliefs that are keeping you stuck.",
    description:
      "For women ready to uncover limiting beliefs, rebuild self-worth, and create lasting transformation from the inside out.",
    featured: true,
    bestFor: [
      "Feel stuck in repeating patterns",
      "Struggle with self-worth",
      "Battle self-doubt or people-pleasing",
      "Know something deeper is holding them back",
      "Want lasting transformation",
    ],
    includes: [
      "Weekly 1:1 coaching sessions",
      "Core belief assessment",
      "Limiting belief identification",
      "Core Belief Transformation framework",
      "Self-worth and confidence development",
      "Personalized transformation plan",
      "Accountability and action planning",
      "Coaching resources and worksheets",
      "Email support between sessions",
    ],
  },
  {
    badge: "Highest Level of Support",
    title: "Premium Transformation Experience",
    length: "16 Weeks",
    statement: "Deep transformation. Personalized support. Lasting change.",
    description:
      "For women who are fully committed to significant personal growth and want the highest level of support.",
    premium: true,
    bestFor: [
      "Are committed to significant personal growth",
      "Want deeper coaching support",
      "Desire greater accountability",
      "Are ready for transformational change",
      "Want a highly personalized experience",
    ],
    includes: [
      "Everything in Core Belief Transformation Coaching",
      "Extended coaching timeline",
      "Priority email support",
      "Additional accountability check-ins",
      "Personalized growth roadmap",
      "Custom resources and exercises",
      "Advanced transformation work",
      "Ongoing strategy and support",
    ],
  },
  {
    badge: "Continuing Support",
    title: "Growth & Accountability Membership",
    length: "Monthly Membership",
    statement: "Stay connected to your growth long after coaching ends.",
    description:
      "For women who have completed coaching and want continued accountability, encouragement, and support.",
    bestFor: [
      "Want continued accountability",
      "Do not want to lose momentum",
      "Desire ongoing support",
      "Want a trusted coach in their corner",
      "Are committed to continued growth",
    ],
    includes: [
      "Monthly coaching session",
      "Accountability check-ins",
      "Goal review and planning",
      "Continued growth support",
      "Access to coaching resources",
      "Priority member scheduling",
      "Community and encouragement",
    ],
  },
];

const path = [
  "Life Transition Coaching",
  "Core Belief Transformation",
  "Premium Transformation Experience",
  "Growth & Accountability Membership",
];

function ServiceCard({ service }) {
  const cardClass = service.premium
    ? "rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl"
    : service.featured
      ? "rounded-[2rem] border-4 border-teal-700 bg-white p-8 shadow-2xl"
      : "rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg";

  const badgeClass = service.premium
    ? "mb-5 inline-block rounded-full bg-teal-300 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-950"
    : service.featured
      ? "mb-5 inline-block rounded-full bg-teal-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
      : "mb-5 inline-block rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-teal-800";

  const textClass = service.premium ? "text-slate-300" : "text-slate-700";
  const headingClass = service.premium ? "text-white" : "text-slate-900";
  const focusClass = service.premium
    ? "rounded-2xl bg-white/10 p-5"
    : "rounded-2xl bg-teal-50 p-5";

  return (
    <article className={cardClass}>
      <p className={badgeClass}>{service.badge}</p>

      <h2 className={`mb-3 text-3xl font-bold ${headingClass}`}>
        {service.title}
      </h2>

      <p className="mb-4 text-lg font-bold text-teal-600">{service.length}</p>

      <p className={`mb-5 text-xl font-bold ${headingClass}`}>
        {service.statement}
      </p>

      <p className={`mb-8 leading-8 ${textClass}`}>{service.description}</p>

      <div className="mb-8">
        <h3 className={`mb-4 text-lg font-bold ${headingClass}`}>
          For Women Who:
        </h3>

        <ul className={`space-y-3 leading-7 ${textClass}`}>
          {service.bestFor.map((item) => (
            <li key={item}>
              <span className="font-bold text-teal-600">✓</span>{" "}
              <strong>{item}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h3 className={`mb-4 text-lg font-bold ${headingClass}`}>Includes:</h3>

        <ul className={`space-y-3 leading-7 ${textClass}`}>
          {service.includes.map((item) => (
            <li key={item}>
              <span className="font-bold text-teal-600">✓</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={focusClass}>
        <p className={`font-bold ${headingClass}`}>Focus:</p>
        <p className={`mt-2 leading-7 ${textClass}`}>
          Supporting <strong>clarity</strong>, <strong>confidence</strong>,{" "}
          <strong>self-worth</strong>, <strong>accountability</strong>, and{" "}
          <strong>growth</strong>.
        </p>
      </div>

      <Link
        href={bookingLink}
        target="_blank"
        className={
          service.premium
            ? "mt-8 inline-flex w-full justify-center rounded-full bg-white px-6 py-4 font-semibold text-slate-950 transition hover:bg-teal-50"
            : "mt-8 inline-flex w-full justify-center rounded-full bg-teal-700 px-6 py-4 font-semibold text-white transition hover:bg-teal-800"
        }
      >
        Schedule Your Free Discovery Call
      </Link>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-100 px-6 py-28 text-center">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-teal-300/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            Coaching Services
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
            Your <span className="text-teal-700">Next Chapter</span> Starts
            With One Decision
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-8 text-slate-700">
            Coaching services for women ready to navigate a{" "}
            <strong>life transition</strong>, transform{" "}
            <strong>limiting beliefs</strong>, rebuild{" "}
            <strong>confidence</strong>, strengthen <strong>self-worth</strong>,
            and create meaningful <strong>growth</strong>.
          </p>

          <div className="mt-10">
            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
            >
              Schedule Your Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Coaching Path
          </p>

          <h2 className="mb-8 text-4xl font-bold text-slate-900 md:text-5xl">
            A Coaching Path Designed for <span className="text-teal-700">Growth</span>
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-slate-700">
            Every woman begins in a different place. Whether you need support
            through a <strong>life transition</strong>, deeper{" "}
            <strong>core belief work</strong>, intensive{" "}
            <strong>transformation</strong>, or continued{" "}
            <strong>accountability</strong>, there is a next step designed to
            meet you where you are.
          </p>

          <div className="grid gap-5 md:grid-cols-4">
            {path.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-teal-100"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                  Step 0{index + 1}
                </p>

                <h3 className="text-xl font-bold text-slate-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin Your Transformation
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Take the First Step?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-300">
            You do not need all the answers before you begin. You only need the
            willingness to take the first step toward <strong>clarity</strong>,{" "}
            <strong>confidence</strong>, and your <strong>next chapter</strong>.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-teal-50"
          >
            Schedule Your Free Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
