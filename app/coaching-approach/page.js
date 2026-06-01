const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function CoachingApproach() {
  const approachSteps = [
    {
      title: "Awareness",
      description:
        "We begin by creating awareness around your goals, challenges, patterns, emotions, and the beliefs that may be influencing your decisions and behavior.",
    },
    {
      title: "Clarity",
      description:
        "Together, we gain clarity about what you truly want, what may be holding you back, and what needs to shift so your actions align with the person you are becoming.",
    },
    {
      title: "Healing",
      description:
        "We explore limiting beliefs, emotional barriers, and recurring patterns that may no longer serve you, creating space for confidence, self-compassion, and growth.",
    },
    {
      title: "Growth",
      description:
        "You begin developing healthier habits, empowering beliefs, emotional resilience, stronger boundaries, and deeper self-trust.",
    },
    {
      title: "Action",
      description:
        "We turn insight into intentional action through realistic goals, accountability, strategy, and next steps that support sustainable progress.",
    },
    {
      title: "Transformation",
      description:
        "Transformation occurs when your beliefs, habits, choices, and actions become aligned with your values and future vision.",
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
            A Personalized Approach to Healing, Growth, and Transformation
          </h1>

          <p className="text-lg leading-8 max-w-3xl mx-auto">
            My coaching approach is built on partnership, trust, compassion,
            clarity, and accountability. Together, we explore not only the
            goals you want to achieve, but also the beliefs, patterns, and
            barriers that may be shaping your current experience.
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
              My Framework
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Correct. Heal. Grow. Transform.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="rounded-3xl bg-white border border-[#eadfd5] p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#9b6b5f]">
                Correct
              </h3>
              <p className="leading-7">
                Identify the beliefs, patterns, and behaviors that are creating
                misalignment, self-doubt, or repeated obstacles.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#eadfd5] p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#9b6b5f]">
                Heal
              </h3>
              <p className="leading-7">
                Release limiting beliefs, emotional barriers, and patterns that
                no longer serve you.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#eadfd5] p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#9b6b5f]">
                Grow
              </h3>
              <p className="leading-7">
                Develop confidence, self-awareness, healthy habits, emotional
                resilience, and empowering beliefs.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#eadfd5] p-7 shadow-sm">
              <h3 className="text-2xl font-bold mb-3 text-[#9b6b5f]">
                Transform
              </h3>
              <p className="leading-7">
                Create lasting change by aligning your actions with the person
                you are becoming.
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
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

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
              What makes working with me unique is my commitment to seeing the
              whole person—not just the goal you want to achieve.
            </p>

            <p className="leading-8">
              Together, we explore the patterns, beliefs, challenges,
              strengths, and opportunities that influence your growth so that
              lasting transformation can occur from the inside out.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#eadfd5] p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-5">
              What You Can Expect
            </h2>

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
