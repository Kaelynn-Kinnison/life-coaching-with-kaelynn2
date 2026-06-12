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
    icon: "✦",
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
    icon: "★",
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
    icon: "✧",
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
    icon: "❀",
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

function ServiceCard({ service }) {
  const cardClass = service.premium
    ? "relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-8 text-white shadow-xl"
    : service.featured
      ? "relative overflow-hidden rounded-3xl border-4 border-teal-700 bg-white p-8 shadow-xl"
      : "relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg";

  const badgeClass = service.premium
    ? "mb-5 inline-block rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-900"
    : service.featured
      ? "mb-5 inline-block rounded-full bg-teal-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white"
      : "mb-5 inline-block rounded-full bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-teal-800";

  const textClass = service.premium ? "text-slate-200" : "text-slate-700";
  const headingClass = service.premium ? "text-white" : "text-slate-900";
  const boxClass = service.premium
    ? "rounded-2xl bg-white/10 p-5"
    : "rounded-2xl bg-teal-50 p-5";

  return (
    <article className={cardClass}>
      <div className="absolute right-6 top-6 text-5xl opacity-20">
        {service.icon}
      </div>

      <div className="mb-5 text-2xl tracking-widest text-teal-600">
        ★ ★ ★
      </div>

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

      <div className={boxClass}>
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
            ? "mt-8 inline-flex w-full justify-center rounded-full bg-white px-6 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
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
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
            Coaching Services
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Choose the Coaching Support That Fits Your{" "}
            <span className="text-teal-700">Next Chapter</span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-8 text-slate-700">
            Coaching services for women ready to navigate a{" "}
            <strong>life transition</strong>, transform{" "}
            <strong>limiting beliefs</strong>, rebuild{" "}
            <strong>confidence</strong>, strengthen <strong>self-worth</strong>,
            and create meaningful <strong>growth</strong>.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
            >
              Schedule Your Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl rounded-3xl bg-teal-50 p-10 shadow-md ring-1 ring-teal-100">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Not Sure Where to Begin?
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            You Do Not Need to Have All the Answers Before You Start
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-slate-700">
            A complimentary Discovery Call gives you space to talk through your
            goals, your current season, and which coaching support may be the
            best fit for you.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="inline-flex rounded-full bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800"
          >
            Schedule Your Free Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
