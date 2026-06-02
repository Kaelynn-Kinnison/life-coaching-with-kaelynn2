export const metadata = {
  title: "Core Belief Transformation Coaching | Life Coaching with Kaelynn",
  description:
    "Identify and transform limiting beliefs, build confidence, improve self-worth, and create lasting personal growth through Core Belief Transformation Coaching with Kaelynn Kinnison.",
};

const bookingLink = "https://calendly.com/kaelynnkinnison";

export default function CoreBeliefCoaching() {
  const methodSteps = [
    {
      title: "Awareness",
      text: "Identify the limiting belief, emotional pattern, or self-defeating thought that may be operating beneath the surface.",
    },
    {
      title: "Understanding",
      text: "Explore how the belief may be influencing your confidence, emotions, choices, relationships, habits, and results.",
    },
    {
      title: "Challenge",
      text: "Gently question beliefs that may no longer be serving you and begin separating truth from old conditioning, fear, or past experiences.",
    },
    {
      title: "Transformation",
      text: "Replace limiting beliefs with healthier, more empowering perspectives that support healing, confidence, and growth.",
    },
    {
      title: "Alignment",
      text: "Create actions, habits, boundaries, and accountability that support the new belief system you are choosing to live from.",
    },
  ];

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
              alt="Core Belief Transformation Coaching"
              className="rounded-3xl shadow-xl border border-[#eadfd5] w-full"
            />

            <div className="mt-6 bg-white border border-[#eadfd5] rounded-3xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#9b6b5f]">
                Why Core Beliefs Matter
              </h3>

              <p className="leading-7 mb-4">
                Core beliefs influence how you see yourself, what you believe is
                possible, how you respond to challenges, and the choices you
                make.
              </p>

              <p className="leading-7 mb-4">
                When limiting beliefs go unchallenged, they can quietly
                influence confidence, relationships, emotional wellness,
                motivation, and results.
              </p>

              <p className="font-semibold text-[#9b6b5f] leading-7">
                When you change the beliefs that shape your life, you begin
                changing the life those beliefs create.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-[#eadfd5] p-10 shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6">
            What We May Explore Together
          </h2>

          <p className="text-lg leading-8 mb-8">
            Transformation begins with awareness. Many of the challenges we
            experience in life are connected to beliefs, patterns, and
            experiences operating beneath the surface.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {explorationAreas.map((area) => (
              <div
                key={area.title}
                className="bg-[#fdf8f3] border border-[#eadfd5] rounded-2xl p-5 min-h-[150px]"
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
          <p className="uppercase tracking-[0.25em] text-sm text-white/70 mb-4">
            Signature Method
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Core Belief Transformation Method™
          </h2>

          <p className="text-lg leading-8 mb-10 text-white/90">
            This five-step process helps you move from awareness to lasting
            transformation by identifying limiting beliefs, understanding their
            impact, challenging old patterns, creating healthier perspectives,
            and aligning your actions with the person you are becoming.
          </p>

          <div className="grid md:grid-cols-5 gap-5">
            {methodSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white/10 border border-white/20 p-5"
              >
                <p className="text-white/70 text-sm mb-2">
                  Step {index + 1}
                </p>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                <p className="leading-7 text-white/90">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-[#eadfd5] p-10 shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Common Limiting Beliefs Clients May Explore
          </h2>

          <p className="text-lg leading-8 mb-8">
            These beliefs can show up in different ways and may affect
            confidence, relationships, decisions, goals, and emotional wellness.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "I'm not good enough.",
              "I always fail.",
              "I don't deserve success.",
              "I have to be perfect.",
              "My needs don't matter.",
              "I can't trust myself.",
              "Change is too hard for me.",
              "I am too far behind.",
            ].map((belief) => (
              <div
                key={belief}
                className="bg-[#fdf8f3] border border-[#eadfd5] rounded-2xl p-4 text-[#6b4b43] font-medium"
              >
                “{belief}”
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
              <div key={benefit} className="bg-white/10 rounded-xl p-4">
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
            className="inline-block rounded-full bg-[#3f342c] px-6 py-3 text-white font-semibold hover:bg-[#5a4a3f] transition"
          >
            Schedule Your Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
