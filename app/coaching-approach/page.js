export const metadata = {
  title: "Coaching Approach | Core Belief Transformation Method",
  description:
    "Discover the Core Belief Transformation Method, Kaelynn's signature coaching framework for identifying limiting beliefs, creating emotional healing, and building lasting transformation.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function CoachingApproach() {
  const approachSteps = [
    {
      title: "Awareness",
      description:
        "We begin by creating awareness around your goals, challenges, emotions, patterns, and the core beliefs that may be influencing your decisions and behavior.",
    },
    {
      title: "Understanding",
      description:
        "Together, we explore how those beliefs may be affecting your confidence, relationships, emotions, choices, habits, and results.",
    },
    {
      title: "Challenge",
      description:
        "We gently question beliefs that may no longer be serving you and begin separating truth from old conditioning, fear, or past experiences.",
    },
    {
      title: "Transformation",
      description:
        "You begin replacing limiting beliefs with healthier, empowering perspectives that support healing, confidence, emotional wellness, and growth.",
    },
    {
      title: "Alignment",
      description:
        "We create actions, habits, boundaries, and accountability that support the new belief system you are choosing to live from.",
    },
  ];

  const values = [
    "Compassionate support",
    "Honest accountability",
    "Personalized guidance",
    "Core belief awareness",
    "Mindset and action alignment",
    "Sustainable transformation",
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-sm text-[#9b6b5f] mb-4">
            Coaching Approach
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Core Belief Transformation Method™
          </h1>

          <p className="text-lg leading-8 max-w-3xl mx-auto">
            My coaching approach is built on partnership, trust, compassion,
            clarity, and accountability. Together, we explore not only the goals
            you want to achieve, but also the core beliefs, emotional patterns,
            and barriers that may be shaping your current experience.
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-[#eadfd5] p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformation Begins With Awareness
          </h2>

          <div className="space-y-5 text-lg leading-8">
            <p>
              Many of the challenges we experience in life are connected to
              beliefs, patterns, and experiences operating beneath the surface.
              Through personalized coaching, we work to uncover the root causes
              that may be limiting your growth and preventing you from fully
              stepping into your potential.
            </p>

            <p>
              True transformation does not begin with changing your behavior
              alone. It begins with understanding the beliefs that drive your
              behavior.
            </p>

            <p>
              Your beliefs influence your thoughts. Your thoughts influence your
              emotions. Your emotions affect your actions. Your actions create
              your results.
            </p>

            <p className="font-semibold text-[#9b6b5f]">
              When you change the beliefs that shape your life, you begin
              changing the life those beliefs create.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[0.25em] text-sm text-[#9b6b5f] mb-4">
              My Signature Framework
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              The Core Belief Transformation Method™
            </h2>

            <p className="text-lg leading-8 max-w-3xl mx-auto mt-6">
              My signature coaching framework helps clients identify limiting
              beliefs, create emotional healing, develop empowering
              perspectives, and build lasting transformation from the inside out.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="rounded-3xl bg-white border border-[#eadfd5] p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#9b6b5f]">
                Awareness
              </h3>
              <p className="leading-7">
                Identify the limiting belief operating beneath the challenge.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#eadfd5] p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#9b6b5f]">
                Understanding
              </h3>
              <p className="leading-7">
                Explore how that belief influences thoughts, emotions,
                decisions, relationships, and behaviors.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#eadfd5] p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#9b6b5f]">
                Challenge
              </h3>
              <p className="leading-7">
                Question beliefs that may no longer be serving your growth.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#eadfd5] p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#9b6b5f]">
                Transformation
              </h3>
              <p className="leading-7">
                Replace limiting beliefs with healthier, empowering
                perspectives.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#eadfd5] p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#9b6b5f]">
                Alignment
              </h3>
              <p className="leading-7">
                Create actions, habits, and accountability that support lasting
                change.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-[#3f342c] text-white p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How We Work Together
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {approachSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white/10 border border-white/20 p-5"
              >
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                <p className="leading-7 text-white/90">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-3xl bg-white border border-[#eadfd5] p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-5">
              What Makes Working With Me Unique
            </h2>

            <p className="leading-8 mb-5">
              Many coaching programs focus primarily on goals, habits, or
              accountability. While those are important, I believe lasting
              change happens when we address the beliefs operating beneath the
              surface.
            </p>

            <p className="leading-8 mb-5">
              Through the Core Belief Transformation Method™, I help clients
              identify and transform limiting beliefs that may be influencing
              confidence, relationships, emotional wellness, self-worth,
              decision-making, and goal achievement.
            </p>

            <p className="leading-8">
              By creating change at the belief level, clients often experience
              deeper and more sustainable transformation than motivation alone
              can provide.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#eadfd5] p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-5">What You Can Expect</h2>

            <div className="space-y-3">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl bg-[#fdf8f3] border border-[#eadfd5] p-4"
                >
                  ✔ {value}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center rounded-3xl bg-white border border-[#eadfd5] p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>

          <p className="text-lg leading-8 max-w-3xl mx-auto mb-6">
            Schedule a complimentary discovery call to discuss your goals,
            current challenges, and the beliefs that may be keeping you stuck.
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
