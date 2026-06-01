const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function CoachingApproach() {
  const framework = [
    {
      title: "Heal",
      description:
        "Identify and release limiting beliefs, emotional barriers, and patterns that no longer serve you. Healing creates the foundation for meaningful growth by increasing awareness, fostering self-compassion, and uncovering the root causes of what may be holding you back.",
    },
    {
      title: "Grow",
      description:
        "Develop confidence, self-awareness, healthy habits, emotional resilience, and empowering beliefs. Growth occurs when you intentionally challenge old patterns and begin building the mindset and behaviors that support the life you want to create.",
    },
    {
      title: "Transform",
      description:
        "Create lasting change by aligning your actions, decisions, and daily habits with the person you are becoming. Transformation is not about temporary motivation—it is about creating sustainable change that reflects your values, goals, and vision for your future.",
    },
  ];

  const uniquePoints = [
    "A personalized coaching experience tailored to your unique goals and needs",
    "Support that focuses on healing, growth, confidence, and transformation",
    "Accountability that helps you stay committed to your goals",
    "A partnership built on trust, compassion, and encouragement",
    "Guidance that addresses both mindset and action",
    "Coaching that evolves with you as you grow",
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-sm text-[#9b6b5f] mb-4">
            Coaching Approach
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Heal. Grow. Transform. Framework
          </h1>

          <p className="text-lg leading-8 max-w-3xl mx-auto">
            My coaching approach is designed to help you create lasting change
            by addressing the beliefs, patterns, and actions that shape your
            life. Together, we focus on healing what no longer serves you,
            growing into confidence and self-awareness, and transforming your
            vision into aligned action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {framework.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white border border-[#eadfd5] p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-4 text-[#9b6b5f]">
                {item.title}
              </h2>

              <p className="leading-7">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-white border border-[#eadfd5] p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why This Framework Works
          </h2>

          <div className="space-y-5 text-lg leading-8">
            <p>
              Many people focus solely on changing their behaviors, yet find
              themselves returning to the same frustrations, habits, and
              obstacles.
            </p>

            <p>
              True transformation begins at a deeper level.
            </p>

            <p>
              Your beliefs influence your thoughts. Your thoughts influence your
              actions. Your actions create your results.
            </p>

            <p>
              If the underlying beliefs remain unchanged, lasting change becomes
              difficult.
            </p>

            <p>
              That is why my coaching approach focuses on identifying and
              transforming the core beliefs that drive behavior, allowing you to
              create growth that is authentic, sustainable, and aligned with the
              life you want to live.
            </p>

            <p className="font-semibold text-[#9b6b5f]">
              Because true transformation does not begin with changing your
              behavior. It begins with changing the beliefs that drive your
              behavior.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-[#3f342c] text-white p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Makes Working With Me Unique
          </h2>

          <div className="space-y-5 text-lg leading-8">
            <p>
              Coaching is not one-size-fits-all, and neither is your journey.
            </p>

            <p>
              What makes working with me unique is my commitment to seeing the
              whole person—not just the goal you want to achieve. Together, we
              explore the patterns, beliefs, challenges, strengths, and
              opportunities that influence your growth so lasting transformation
              can occur from the inside out.
            </p>

            <p>
              My coaching approach combines compassionate support with honest
              accountability. You will have a safe space to be heard,
              encouraged, challenged, and empowered while developing practical
              strategies for real-life change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {uniquePoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl bg-white/10 border border-white/20 p-5"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center rounded-3xl bg-white border border-[#eadfd5] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Transformation?
          </h2>

          <p className="text-lg leading-8 max-w-3xl mx-auto mb-6">
            Schedule a complimentary discovery call to explore your goals,
            current challenges, and the coaching support that best fits your
            journey.
          </p>

          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#3f342c] px-6 py-3 text-white font-semibold hover:bg-[#5a4a3f] transition"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
