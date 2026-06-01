const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function CoreBeliefCoaching() {
  const explorationAreas = [
    {
      title: "Limiting Beliefs & Self-Defeating Patterns",
      text: "Identify and challenge the beliefs that may be keeping you stuck, holding you back from opportunities, or preventing you from creating the life you desire.",
    },
    {
      title: "Self-Worth & Self-Confidence",
      text: "Strengthen your sense of self, develop confidence in your abilities, and learn to recognize your value beyond external validation.",
    },
    {
      title: "Fear of Failure, Rejection, or Judgment",
      text: "Explore the fears that may be influencing your decisions, limiting your growth, or preventing you from taking meaningful action.",
    },
    {
      title: "Perfectionism & Overthinking",
      text: "Learn to release unrealistic expectations, quiet self-criticism, and embrace progress over perfection.",
    },
    {
      title: "People-Pleasing & Boundary Setting",
      text: "Develop healthier boundaries, communicate your needs effectively, and build relationships that support your well-being.",
    },
    {
      title: "Imposter Syndrome",
      text: "Recognize and overcome feelings of self-doubt while building confidence in your abilities, accomplishments, and potential.",
    },
    {
      title: "Emotional Triggers & Recurring Life Patterns",
      text: "Gain awareness of emotional responses and recurring situations that continue to create frustration, stress, or setbacks.",
    },
    {
      title: "Personal Identity & Self-Concept",
      text: "Explore who you are beyond past experiences, limitations, and labels while creating a stronger vision for who you are becoming.",
    },
    {
      title: "Goal Achievement Barriers",
      text: "Identify what is standing between you and your goals and create strategies that support sustainable success.",
    },
    {
      title: "Relationship Dynamics",
      text: "Examine relationship patterns, communication styles, and beliefs that may be impacting your connections with others.",
    },
    {
      title: "Life Transitions & Personal Growth",
      text: "Navigate change with greater confidence, clarity, and resilience while building a foundation for your next chapter.",
    },
  ];

  const benefits = [
    "Greater self-awareness and personal insight",
    "Increased confidence and self-trust",
    "Improved decision-making and clarity",
    "Stronger boundaries and healthier relationships",
    "Reduced self-sabotaging behaviors",
    "Increased motivation and follow-through",
    "Greater emotional resilience",
    "A stronger sense of purpose and direction",
    "Improved self-worth and self-acceptance",
    "More authentic and fulfilling relationships",
    "Better alignment between goals, values, and actions",
    "Lasting personal growth and transformation",
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#9b6b5f] mb-4">
              Core Belief Transformation Coaching
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Change the Beliefs. Change the Pattern. Change the Life.
            </h1>

            <p className="text-lg leading-8 mb-6">
              Many people spend years trying to change behaviors, habits, and
              circumstances without addressing the underlying beliefs that
              influence them.
            </p>

            <p className="text-lg leading-8 mb-8">
              Core Belief Transformation Coaching focuses on identifying and
              transforming the beliefs operating beneath the surface so you can
              create meaningful and lasting change from the inside out.
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

          <div>
            <img
              src="/core-belief-transformation.jpg"
              alt="Growth and healing journey"
              className="rounded-3xl shadow-lg border border-[#eadfd5] w-full"
            />
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-[#eadfd5] p-10 shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6">
            What We May Explore Together
          </h2>

          <p className="text-lg leading-8 mb-8">
            Transformation begins with awareness.
          </p>

          <p className="leading-8 mb-8">
            Many of the challenges we experience in life are connected to
            beliefs, patterns, and experiences operating beneath the surface.
            Through personalized coaching, we work to uncover the root causes
            that may be limiting your growth and preventing you from fully
            stepping into your potential.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {explorationAreas.map((area) => (
              <div
                key={area.title}
                className="bg-[#fdf8f3] border border-[#eadfd5] rounded-2xl p-5"
              >
                <h3 className="font-semibold text-[#9b6b5f] mb-2">
                  {area.title}
                </h3>

                <p className="leading-7">{area.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-[#3f342c] text-white p-10 shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Benefits of Core Belief Transformation Coaching
          </h2>

          <p className="text-lg leading-8 mb-8">
            When you begin changing the beliefs that drive your thoughts,
            emotions, and behaviors, meaningful transformation becomes possible.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white/10 rounded-xl p-4"
              >
                ✔ {benefit}
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg leading-8">
            Because when you change the beliefs that shape your life, you begin
            changing the life those beliefs create.
          </p>
        </div>

        <div className="text-center rounded-3xl bg-white border border-[#eadfd5] p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Transformation?
          </h2>

          <p className="text-lg leading-8 max-w-3xl mx-auto mb-8">
            Schedule a complimentary discovery call to explore your goals,
            current challenges, and how core belief transformation coaching can
            support your healing, growth, and next chapter.
          </p>

          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#3f342c] px-6 py-3 text-white font-semibold"
          >
            Schedule Your Discovery Call
          </a>
        </div>

      </section>
    </main>
  );
}
