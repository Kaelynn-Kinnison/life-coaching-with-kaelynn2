export const metadata = {
  title: "Coaching Services | Life Coaching with Kaelynn",
  description:
    "Explore transformational coaching services with Kaelynn, including personal growth, mindset, accountability, life transition, healing, confidence, and Core Belief Transformation support.",
};

export default function Services() {
  const services = [
    {
      title: "Personal Growth Coaching",
      description:
        "For individuals ready to grow, gain clarity, build confidence, and become more intentional about the life they are creating.",
      focus: [
        "Self-awareness and personal development",
        "Confidence and self-trust",
        "Goal clarity and direction",
        "Healthy habits and personal growth",
      ],
    },
    {
      title: "Mindset & Emotional Wellness Coaching",
      description:
        "For clients who want to strengthen their mindset, reduce negative self-talk, and create healthier emotional patterns.",
      focus: [
        "Mindset development",
        "Emotional awareness",
        "Stress and overwhelm support",
        "Healthier thought patterns",
      ],
    },
    {
      title: "Accountability Coaching",
      description:
        "For individuals who know what they want but need support staying consistent, focused, and committed to meaningful action.",
      focus: [
        "Goal follow-through",
        "Action planning",
        "Consistency and motivation",
        "Reducing self-sabotage",
      ],
    },
    {
      title: "Life Transition Coaching",
      description:
        "For individuals navigating change, uncertainty, personal reinvention, career shifts, relationship changes, or a new season of life.",
      focus: [
        "Navigating change",
        "Decision-making support",
        "Rebuilding direction",
        "Confidence through transition",
      ],
    },
    {
      title: "Healing & Self-Discovery Coaching",
      description:
        "For clients who want to reconnect with themselves, explore their values, strengthen self-awareness, and create space for healing and growth.",
      focus: [
        "Self-discovery",
        "Personal identity",
        "Values exploration",
        "Inner growth and healing",
      ],
    },
    {
      title: "Confidence Coaching",
      description:
        "For individuals ready to build self-worth, strengthen their voice, overcome self-doubt, and move forward with courage.",
      focus: [
        "Self-worth and self-belief",
        "Fear of failure or judgment",
        "Boundary confidence",
        "Trusting yourself",
      ],
    },
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f2f2a]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Coaching Services
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Support for Healing, Growth, and Transformation
          </h1>

          <p className="text-xl text-[#6b4b43] leading-relaxed max-w-4xl mx-auto">
            Every coaching service is designed to help you gain clarity,
            strengthen confidence, create healthier patterns, and move forward
            with greater purpose.
          </p>
        </div>
      </section>

      <section className="bg-[#7b4f43] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#f7e9df] text-sm mb-3">
            Signature Foundation
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rooted in Core Belief Transformation
          </h2>

          <p className="text-lg text-[#f7e9df] leading-relaxed max-w-4xl mx-auto">
            While each service focuses on a different area of growth, my
            coaching approach is built around the Core Belief Transformation
            Method™. This means we do not only focus on goals or surface-level
            habits — we also explore the beliefs, patterns, and self-concepts
            that may be influencing your thoughts, emotions, actions, and
            results.
          </p>

          <a
            href="/core-belief-coaching"
            className="inline-block mt-8 bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df] transition"
          >
            Learn About Core Belief Transformation
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
              What I Offer
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Coaching Services Designed Around Your Growth
            </h2>

            <p className="text-[#6b4b43] leading-relaxed max-w-3xl mx-auto">
              These services can stand alone or be combined into a personalized
              coaching plan based on your goals, challenges, and current season
              of life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#fdf8f3] rounded-3xl shadow-md p-8 flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="text-[#6b4b43] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <p className="font-semibold text-[#7b4f43] mb-3">
                    Areas of focus:
                  </p>

                  <ul className="space-y-2 text-[#6b4b43]">
                    {service.focus.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            How Services Are Personalized
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Coaching That Meets You Where You Are
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed max-w-4xl mx-auto mb-12">
            You do not have to know exactly which service you need before
            beginning. During your discovery call, we will talk through your
            goals, challenges, and desired outcomes so the coaching support can
            be aligned with your current needs.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Clarify</h3>
              <p className="text-[#6b4b43] leading-relaxed">
                We identify what you want, what feels unclear, and what may be
                keeping you stuck.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Customize</h3>
              <p className="text-[#6b4b43] leading-relaxed">
                Coaching is shaped around your goals, mindset, life season,
                patterns, and personal growth needs.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Move Forward</h3>
              <p className="text-[#6b4b43] leading-relaxed">
                Together, we create realistic action steps, accountability, and
                support for meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Coaching May Support You With
          </p>

          <h2 className="text-4xl font-bold mb-10">
            Common Areas Clients Bring to Coaching
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Feeling stuck",
              "Low confidence",
              "Overthinking",
              "Life transitions",
              "Self-doubt",
              "Accountability",
              "People-pleasing",
              "Boundaries",
              "Goal follow-through",
              "Personal growth",
              "Emotional wellness",
              "Self-discovery",
            ].map((item) => (
              <span
                key={item}
                className="bg-[#fdf8f3] px-5 py-3 rounded-full shadow-sm text-[#6b4b43] font-medium"
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
            Not Sure Which Service Is Right for You?
          </h2>

          <p className="text-lg text-[#f7e9df] leading-relaxed mb-8">
            A discovery call is the best first step. We will discuss your goals,
            current challenges, and which coaching support best aligns with your
            needs.
          </p>

          <a
            href="/contact#book"
            className="inline-block bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df] transition"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
