import Link from "next/link";

export const metadata = {
  title: "Coaching Services | Life Coaching with Kaelynn",
  description:
    "Explore coaching services with Kaelynn, including accountability coaching, wellness coaching, life transition coaching, one-on-one coaching, Core Belief Transformation Coaching, and premium transformation coaching.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const services = [
  {
    title: "Accountability Coaching",
    length: "8 Weeks",
    focus: "Overcoming self-sabotage and building consistency.",
    bestFor: [
      "Know what they need to do",
      "Struggle with consistency",
      "Need accountability and support",
    ],
    includes: [
      "Weekly coaching sessions",
      "Goal setting",
      "Accountability check-ins",
      "Action planning",
      "Progress tracking",
      "Coaching support",
    ],
  },
  {
    title: "Wellness Coaching",
    length: "10 Weeks",
    focus: "Creating sustainable wellness through mindset and behavior change.",
    bestFor: [
      "Want healthier habits",
      "Feel stuck in all-or-nothing thinking",
      "Need support creating lasting change",
    ],
    includes: [
      "Weekly coaching sessions",
      "Wellness goal planning",
      "Habit development support",
      "Mindset coaching",
      "Accountability",
      "Progress reviews",
    ],
  },
  {
    title: "Life Transition Coaching",
    length: "10 Weeks",
    focus: "Navigating change with confidence and clarity.",
    bestFor: [
      "Are experiencing major life changes",
      "Feel uncertain about what comes next",
      "Need support through a transition",
    ],
    includes: [
      "Weekly coaching sessions",
      "Transition support",
      "Confidence building",
      "Clarity and decision-making tools",
      "Personalized action plan",
      "Accountability support",
    ],
  },
  {
    title: "One-on-One Coaching",
    length: "12 Weeks",
    focus: "Personalized support for your unique goals and challenges.",
    bestFor: [
      "Want personalized coaching",
      "Need support in multiple areas of life",
      "Desire growth, confidence, and accountability",
    ],
    includes: [
      "Weekly coaching sessions",
      "Personalized coaching plan",
      "Goal setting",
      "Accountability support",
      "Growth strategy development",
      "Coaching resources",
    ],
  },
  {
    title: "Core Belief Transformation Coaching",
    length: "12 Weeks",
    focus:
      "Transforming the beliefs that influence your thoughts, emotions, behaviors, and results.",
    featured: true,
    bestFor: [
      "Feel stuck in repeating patterns",
      "Struggle with self-worth or confidence",
      "Want to understand what is holding them back",
      "Are ready for deeper transformation",
    ],
    includes: [
      "Weekly 1:1 coaching sessions",
      "Core belief assessment",
      "Limiting belief identification",
      "Personalized transformation plan",
      "Confidence-building strategies",
      "Accountability and action planning",
      "Email support between sessions",
      "Coaching resources and worksheets",
    ],
  },
  {
    title: "Premium Transformation Experience",
    length: "16 Weeks",
    focus: "Creating lasting transformation at the deepest level.",
    bestFor: [
      "Want the highest level of support",
      "Are committed to deep transformation",
      "Want long-term accountability",
    ],
    includes: [
      "Everything in Core Belief Transformation Coaching",
      "Extended coaching timeline",
      "Priority support",
      "Additional accountability check-ins",
      "Personalized growth roadmap",
      "Advanced transformation resources",
      "Ongoing coaching support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Coaching Services
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Choose the Coaching Support That Fits Your Season
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            Coaching services designed to help women build confidence, uncover
            limiting beliefs, create accountability, and move forward with
            clarity and purpose.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className={
                service.featured
                  ? "rounded-3xl border-4 border-teal-700 bg-white p-8 shadow-xl"
                  : "rounded-3xl border border-slate-200 bg-white p-8 shadow-md"
              }
            >
              {service.featured && (
                <p className="mb-4 inline-block rounded-full bg-teal-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                  Signature Program
                </p>
              )}

              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                {service.title}
              </h2>

              <p className="mb-6 text-lg font-semibold text-teal-700">
                {service.length}
              </p>

              <div className="mb-6">
                <h3 className="mb-3 font-bold text-slate-900">
                  For Women Who:
                </h3>

                <ul className="space-y-2 text-slate-700">
                  {service.bestFor.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 font-bold text-slate-900">Includes:</h3>

                <ul className="space-y-2 text-slate-700">
                  {service.includes.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-teal-50 p-5">
                <h3 className="mb-2 font-bold text-teal-800">Focus:</h3>

                <p className="leading-7 text-slate-700">{service.focus}</p>
              </div>

              <Link
                href={bookingLink}
                target="_blank"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-teal-700 px-6 py-4 font-semibold text-white transition hover:bg-teal-800"
              >
                Schedule Discovery Call
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Not Sure Which Service Is Right for You?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-200">
            Schedule a complimentary Discovery Call and we will discuss your
            goals, current challenges, and which coaching service best supports
            your next season of growth.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
          >
            Schedule Your Free Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
