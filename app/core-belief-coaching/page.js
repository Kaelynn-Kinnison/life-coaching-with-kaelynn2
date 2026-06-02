export const metadata = {
  title: "Core Belief Transformation Coaching | Life Coaching with Kaelynn",
  description:
    "Explore Core Belief Transformation Coaching with Kaelynn Kinnison. Identify limiting beliefs, build confidence, improve self-worth, reduce self-sabotage, and create lasting personal growth.",
};

const bookingLink = "https://calendly.com/kaelynnkinnison";

export default function CoreBeliefCoaching() {
  const methodSteps = [
    {
      title: "Awareness",
      text: "Identify the limiting belief, emotional pattern, or self-defeating thought operating beneath the surface.",
    },
    {
      title: "Understanding",
      text: "Explore how that belief affects your confidence, emotions, decisions, relationships, habits, and results.",
    },
    {
      title: "Challenge",
      text: "Question beliefs that may no longer be serving your growth and separate truth from fear, conditioning, or past experiences.",
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
    "Limiting beliefs and self-defeating patterns",
    "Self-worth and self-confidence",
    "Fear of failure, rejection, or judgment",
    "Perfectionism and overthinking",
    "People-pleasing and boundary setting",
    "Imposter syndrome",
    "Emotional triggers and recurring patterns",
    "Personal identity and self-concept",
    "Goal achievement barriers",
    "Relationship dynamics",
    "Life transitions and personal growth",
    "Self-sabotage and procrastination",
  ];

  const commonBeliefs = [
    "I'm not good enough.",
    "I always fail.",
    "I don't deserve success.",
    "I have to be perfect.",
    "My needs don't matter.",
    "I can't trust myself.",
    "Change is too hard for me.",
    "I am too far behind.",
  ];

  const benefits = [
    "Greater self-awareness",
    "Increased confidence and self-trust",
    "Improved decision-making",
    "Healthier boundaries",
    "Reduced self-sabotaging behaviors",
    "Increased motivation and follow-through",
    "Stronger emotional resilience",
    "A stronger sense of purpose",
    "Improved self-worth",
    "More authentic relationships",
    "Better alignment between goals and actions",
    "Lasting personal growth",
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#9b6b5f] mb-4">
              Signature Coaching Method
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Core Belief Transformation Coaching™
            </h1>

            <p className="text-2xl font-semibold text-[#9b6b5f] leading-relaxed mb-6">
              Change the beliefs. Change the patterns. Change the life.
            </p>

            <p className="text-lg leading-8 mb-6">
              Many people try to change behaviors, habits, relationships, or
              circumstances without addressing the beliefs that may be driving
              those patterns beneath the surface.
            </p>

            <p className="text-lg leading-8 mb-8">
              Core Belief Transformation Coaching™ helps you identify limiting
              beliefs, challenge old patterns, and develop healthier
              perspectives so lasting change can begin from the inside out.
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
              <h2 className="text-2xl font-bold mb-4 text-[#9b6b5f]">
                Why Core Beliefs Matter
              </h2>

              <p className="leading-7 mb-4">
                Core beliefs influence how you see yourself, what you believe is
                possible, how you respond to challenges, and the choices you
                make.
              </p>

              <p className="leading-7 mb-4">
                When limiting beliefs go unchallenged, they can quietly shape
                confidence, relationships, emotional wellness, motivation, and
                results.
              </p>

              <p className="font-semibold text-[#9b6b5f] leading-7">
                When you change the beliefs that shape your life, you begin
                changing the life those beliefs create.
              </p>
            </div>
          </div>
        </div>

        <section className="rounded-3xl bg-white border border-[#eadfd5] p-10 shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6">What Are Core Beliefs?</h2>

          <div className="space-y-5 text-lg leading-8">
            <p>
              Core beliefs are deeply held beliefs about yourself, others, and
              the world around you. They often form through life experiences,
              relationships, challenges, repeated messages, and patterns learned
              over time.
            </p>

            <p>
              These beliefs can influence your confidence, self-worth,
              emotional responses, relationships, boundaries, decision-making,
              and ability to follow through on goals.
            </p>

            <p className="font-semibold text-[#9b6b5f]">
              When a limiting core belief goes unchallenged, it can continue
              shaping your life even when you are ready for something different.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-[#3f342c] text-white p-10 shadow-sm mb-16">
          <p className="uppercase tracking-[0.25em] text-sm text-white/70 mb-4">
            The Process
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
        </section>

        <section className="rounded-3xl bg-white border border-[#eadfd5] p-10 shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6">
            What We May Explore Together
          </h2>

          <p className="text-lg leading-8 mb-8">
            Core Belief Transformation Coaching™ may support many areas of
            personal growth, healing, confidence, emotional wellness, and life
            transformation.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {explorationAreas.map((item) => (
              <div
                key={item}
                className="bg-[#fdf8f3] border border-[#eadfd5] rounded-2xl p-5 text-[#6b4b43] font-medium"
              >
                • {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-[#f5e8df] border border-[#eadfd5] p-10 shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Common Limiting Beliefs Clients May Explore
          </h2>

          <p className="text-lg leading-8 mb-8">
            These beliefs can show up in different ways and may affect
            confidence, relationships, decisions, goals, and emotional wellness.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {commonBeliefs.map((belief) => (
              <div
                key={belief}
                className="bg-white border border-[#eadfd5] rounded-2xl p-5 text-[#6b4b43] font-medium"
              >
                “{belief}”
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white border border-[#eadfd5] p-10 shadow-sm mb-16">
          <h2 className="text-3xl font-bold mb-6">
            How Core Beliefs Can Affect Your Life
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#fdf8f3] rounded-3xl p-8 border border-[#eadfd5]">
              <h3 className="text-2xl font-bold text-[#9b6b5f] mb-4">
                Limiting Belief
              </h3>
              <p className="text-lg font-semibold mb-4">
                “I&apos;m not good enough.”
              </p>
              <p className="leading-7 text-[#6b4b43]">
                This belief may show up as perfectionism, people-pleasing,
                avoiding opportunities, fear of failure, or constantly needing
                outside validation.
              </p>
            </div>

            <div className="bg-[#3f342c] text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Empowering Belief
              </h3>
              <p className="text-lg font-semibold mb-4">
                “I am worthy, capable, and growing.”
              </p>
              <p className="leading-7 text-white/90">
                This belief supports confidence, healthier choices, stronger
                boundaries, increased self-trust, and more aligned action.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-[#3f342c] text-white p-10 shadow-sm mb-16">
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
        </section>

        <section className="text-center rounded-3xl bg-white border border-[#eadfd5] p-10 shadow-sm">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin Your Transformation?
          </h2>

          <p className="text-lg leading-8 max-w-3xl mx-auto mb-8">
            Schedule a complimentary discovery call to explore your goals,
            current challenges, and how Core Belief Transformation Coaching™ can
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
        </section>
      </section>
    </main>
  );
}
