import Link from "next/link";

export default function Pricing() {
  const offers = [
    {
      title: "Free Discovery Call",
      price: "Free",
      length: "20–30 minutes",
      description:
        "A complimentary conversation to discuss your goals, answer questions, and determine whether coaching is the right fit for you.",
      includes: [
        "Introductory conversation",
        "Goal discussion",
        "Coaching fit assessment",
        "Next-step recommendation",
      ],
    },
    {
      title: "Clarity Session",
      price: "$75",
      length: "60 minutes",
      description:
        "A focused coaching session designed to help you gain clarity, identify obstacles, and create a path forward.",
      includes: [
        "One private coaching session",
        "Goal exploration",
        "Mindset reflection",
        "Action plan",
        "Personalized guidance",
      ],
    },
    {
      title: "Foundation Coaching Program",
      price: "$1,200",
      length: "6 coaching sessions",
      description:
        "Designed for individuals seeking focused support and meaningful personal growth.",
      includes: [
        "6 coaching sessions",
        "Goal setting and action planning",
        "Mindset development",
        "Accountability support",
        "Personal growth exercises",
        "Email support between sessions",
      ],
    },
    {
      title: "Growth & Empowerment Program",
      price: "$1,700",
      length: "10 coaching sessions",
      badge: "Most Popular",
      description:
        "Designed for individuals ready to create lasting change and develop greater confidence and resilience.",
      includes: [
        "10 coaching sessions",
        "Personalized coaching plan",
        "Accountability coaching",
        "Mindset and emotional wellness support",
        "Life transition guidance",
        "Reflection exercises",
        "Email support",
      ],
    },
    {
      title: "Premium Transformation Program",
      price: "$3,000",
      length: "12–14 coaching sessions",
      description:
        "A comprehensive coaching experience focused on deep personal transformation.",
      includes: [
        "12–14 coaching sessions",
        "Personalized transformation roadmap",
        "Confidence and mindset coaching",
        "Emotional wellness support",
        "Accountability and habit development",
        "Priority email support",
        "Customized resources",
        "Progress reviews and ongoing support",
      ],
    },
  ];

  return (
    <main className="bg-[#fdf8f3]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Pricing
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Coaching Packages & Pricing
          </h1>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            Choose the level of support that best fits your current season of
            life and personal growth journey.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-[#fdf8f3] rounded-3xl shadow-lg p-8 flex flex-col"
            >
              {offer.badge && (
                <p className="bg-[#7b4f43] text-white text-sm px-4 py-2 rounded-full w-fit mb-4">
                  {offer.badge}
                </p>
              )}

              <h2 className="text-2xl font-bold mb-3">{offer.title}</h2>

              <p className="text-4xl font-bold text-[#7b4f43] mb-2">
                {offer.price}
              </p>

              <p className="text-[#9b6f5f] font-semibold mb-5">
                {offer.length}
              </p>

              <p className="text-[#6b4b43] leading-relaxed mb-6">
                {offer.description}
              </p>

              <ul className="space-y-3 text-[#6b4b43] mb-8">
                {offer.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>

              <Link
                href="/contact#book"
                className="mt-auto text-center bg-[#7b4f43] text-white px-6 py-3 rounded-full font-semibold"
              >
                Book This Option
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
