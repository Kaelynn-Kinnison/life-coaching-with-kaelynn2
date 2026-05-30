import Link from "next/link";

export default function Pricing() {
  const offers = [
    {
      title: "Free Discovery Call",
      length: "Introductory Consultation",
      description:
        "A complimentary conversation to discuss your goals, ask questions, and determine whether coaching is the right fit for you.",
      includes: [
        "Discuss your current goals and challenges",
        "Ask questions about the coaching process",
        "Explore which coaching option may fit your needs",
        "Determine next steps with clarity and confidence",
      ],
    },
    {
      title: "Clarity Session",
      length: "Single Focused Coaching Session",
      description:
        "A focused session designed to help you gain clarity, identify obstacles, and create an intentional path forward.",
      includes: [
        "Goal exploration and reflection",
        "Support with identifying current obstacles",
        "Mindset and direction-focused conversation",
        "Personalized next-step action planning",
      ],
    },
    {
      title: "Foundation Coaching Program",
      length: "Focused Growth Support",
      description:
        "Designed for individuals seeking structure, accountability, and meaningful support while working toward personal growth goals.",
      includes: [
        "Private coaching sessions",
        "Goal setting and action planning",
        "Mindset development",
        "Accountability support",
        "Personal growth exercises",
        "Support between sessions when appropriate",
      ],
    },
    {
      title: "Growth & Empowerment Program",
      length: "Most Popular Coaching Path",
      badge: "Most Popular",
      description:
        "Designed for individuals ready to create lasting change, strengthen confidence, and move forward with greater purpose.",
      includes: [
        "Personalized coaching plan",
        "Accountability coaching",
        "Mindset and emotional wellness support",
        "Life transition guidance",
        "Reflection exercises",
        "Ongoing growth support",
      ],
    },
    {
      title: "Premium Transformation Program",
      length: "Comprehensive Coaching Experience",
      description:
        "A deeper coaching partnership for individuals seeking meaningful transformation, personal growth, and continued support.",
      includes: [
        "Personalized transformation roadmap",
        "Confidence and mindset coaching",
        "Emotional wellness support",
        "Accountability and habit development",
        "Customized growth resources",
        "Progress reviews and continued support",
      ],
    },
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f2f2a]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Coaching Options
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Coaching Packages & Programs
          </h1>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            Every coaching journey is personal. Package options are designed to
            meet you where you are and support your healing, growth,
            accountability, and transformation.
          </p>

          <p className="text-[#6b4b43] leading-relaxed mt-4">
            For current pricing and availability, please schedule a discovery
            call or contact Kaelynn directly.
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
                className="mt-auto text-center bg-[#7b4f43] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5f3c33]"
              >
                Inquire About Pricing
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-[#f5e8df]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Personalized Support
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Not Sure Which Option Is Right for You?
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed mb-8">
            A discovery call is the best place to ask questions, discuss your
            goals, and determine which coaching option aligns with your current
            season of life.
          </p>

          <Link
            href="/contact#book"
            className="inline-block bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33]"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
