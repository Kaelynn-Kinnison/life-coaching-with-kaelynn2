import Image from "next/image";

export const metadata = {
  title: "Coaching Services | Life Coaching with Kaelynn",
  description:
    "Explore life coaching services with Kaelynn including personal growth coaching, confidence coaching, accountability coaching, life transition coaching, emotional wellness coaching, and healing support.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function Services() {
  const services = [
    {
      title: "Personal Growth Coaching",
      bestFor: "You want clarity, direction, and intentional growth.",
      description:
        "Supports self-awareness, personal direction, confidence, and meaningful growth.",
      outcomes: [
        "Greater clarity",
        "Stronger self-awareness",
        "Personal direction",
        "More intentional choices",
      ],
    },
    {
      title: "Confidence Coaching",
      bestFor: "You struggle with self-doubt or second-guessing yourself.",
      description:
        "Helps strengthen self-trust, self-worth, courage, and confidence in your decisions.",
      outcomes: [
        "Increased self-trust",
        "Stronger self-worth",
        "Less fear of judgment",
        "More confident decisions",
      ],
    },
    {
      title: "Accountability Coaching",
      bestFor: "You know what you want but need support following through.",
      description:
        "Provides structure, encouragement, and support so you can stay focused and take action.",
      outcomes: [
        "Clear action steps",
        "Consistent follow-through",
        "Reduced procrastination",
        "Support staying focused",
      ],
    },
    {
      title: "Life Transition Coaching",
      bestFor: "You are navigating change, uncertainty, or a new chapter.",
      description:
        "Supports you through life changes, decisions, reinvention, and moving forward with confidence.",
      outcomes: [
        "Support through change",
        "Better decision-making",
        "Renewed direction",
        "Confidence in your next chapter",
      ],
    },
    {
      title: "Mindset & Emotional Wellness Coaching",
      bestFor: "You want healthier thought patterns and emotional balance.",
      description:
        "Helps you recognize patterns, manage overwhelm, reduce negative self-talk, and build resilience.",
      outcomes: [
        "Healthier mindset",
        "Emotional awareness",
        "Less overwhelm",
        "Stronger resilience",
      ],
    },
    {
      title: "Healing & Self-Discovery Coaching",
      bestFor: "You want to reconnect with yourself and your identity.",
      description:
        "Creates space to explore your values, reconnect with who you are, and move forward with self-understanding.",
      outcomes: [
        "Deeper self-discovery",
        "Clearer values",
        "Stronger identity",
        "More self-compassion",
      ],
    },
  ];

  const commonNeeds = [
    "Feeling stuck",
    "Low confidence",
    "Overthinking",
    "People-pleasing",
    "Life changes",
    "Lack of direction",
    "Self-doubt",
    "Accountability",
    "Emotional overwhelm",
    "Goal follow-through",
    "Personal growth",
    "Healing and self-discovery",
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f2f2a]">
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
              Coaching Services
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Personalized Coaching for Your Growth, Confidence, and Next Chapter
            </h1>

            <p className="text-xl text-[#6b4b43] leading-relaxed mb-8">
              Coaching services are designed to meet you where you are and help
              you move forward with clarity, support, accountability, and
              purpose.
            </p>

            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
            >
              Book a Free Discovery Call
            </a>
          </div>

          <div>
            <Image
              src="/services-hero.png"
              alt="Warm reflective coaching space for personal growth and clarity"
              width={900}
              height={650}
              className="rounded-3xl shadow-xl border border-[#eadfd5] w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            What I Help With
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Coaching Services Designed Around Real-Life Challenges
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed max-w-4xl mx-auto mb-12">
            Each service focuses on a specific area of growth. During your
            discovery call, we can discuss which type of support best aligns with
            your current goals, challenges, and season of life.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#fdf8f3] rounded-3xl shadow-md p-8 border border-[#eadfd5] flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-[#9b6f5f] font-semibold mb-4">
                  Best for: {service.bestFor}
                </p>

                <p className="text-[#6b4b43] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <p className="font-semibold text-[#7b4f43] mb-3">
                    Possible outcomes:
                  </p>

                  <ul className="space-y-2 text-[#6b4b43]">
                    {service.outcomes.map((item) => (
                      <li key={item}>✔ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl bg-white border border-[#eadfd5] p-8 shadow-md">
            <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
              Personalized Support
            </p>

            <h2 className="text-4xl font-bold mb-6">
              You Do Not Have to Know Exactly What You Need Yet
            </h2>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              Many people come to coaching knowing they want something to change,
              but not knowing exactly where to begin. That is okay.
            </p>

            <p className="text-[#6b4b43] leading-relaxed">
              Your coaching experience can be personalized around your goals,
              challenges, patterns, and desired outcomes.
            </p>
          </div>

          <div className="rounded-3xl bg-[#7b4f43] text-white p-8 shadow-md">
            <p className="uppercase tracking-[0.25em] text-[#f7e9df] text-sm mb-3">
              Signature Foundation
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Supported by the Core Belief Transformation Method™
            </h2>

            <p className="text-[#f7e9df] leading-relaxed mb-8">
              While this page focuses on the services I offer, my coaching
              foundation remains rooted in identifying the beliefs, patterns, and
              self-concepts that may be influencing your current experience.
            </p>

            <a
              href="/core-belief-coaching"
              className="inline-block bg-white text-[#7b4f43] px-6 py-3 rounded-full font-semibold hover:bg-[#f5e8df] transition"
            >
              Learn About the Method
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Common Reasons People Seek Coaching
          </p>

          <h2 className="text-4xl font-bold mb-10">
            You May Be Looking for Support With...
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {commonNeeds.map((item) => (
              <span
                key={item}
                className="bg-[#fdf8f3] px-5 py-3 rounded-full shadow-sm text-[#6b4b43] font-medium border border-[#eadfd5]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7b4f43] text-white px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find the Right Coaching Support?
          </h2>

          <p className="text-lg text-[#f7e9df] leading-relaxed mb-8">
            A discovery call is the best first step to talk through your goals,
            ask questions, and decide which coaching service is right for you.
          </p>

          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df] transition"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
