const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function Pricing() {
  const programs = [
    {
      title: "Free Discovery Call",
      description:
        "A complimentary call to discuss your goals, current challenges, coaching needs, and the best support option for your journey.",
      includes: [
        "Goal and needs discussion",
        "Coaching fit conversation",
        "Personalized recommendation",
        "Next-step guidance",
      ],
    },
    {
      title: "One-on-One Coaching",
      description:
        "Personalized coaching support focused on clarity, confidence, healing, growth, transformation, and intentional action.",
      includes: [
        "Private coaching sessions",
        "Personalized growth plan",
        "Goal setting and action steps",
        "Supportive accountability",
      ],
    },
    {
      title: "Accountability Coaching",
      description:
        "Structured support for follow-through, consistency, motivation, habit building, and personal responsibility.",
      includes: [
        "Weekly accountability focus",
        "Habit and goal tracking",
        "Progress check-ins",
        "Action planning support",
      ],
    },
    {
      title: "Wellness Coaching",
      description:
        "Support for creating healthier routines, managing stress, improving balance, and building sustainable self-care habits.",
      includes: [
        "Wellness goal planning",
        "Lifestyle habit support",
        "Stress management focus",
        "Mind-body balance",
      ],
    },
    {
      title: "Life Transition Coaching",
      description:
        "Guidance and support through major life changes, personal reinvention, emotional adjustment, and new beginnings.",
      includes: [
        "Transition clarity work",
        "Emotional support and reflection",
        "Confidence-building tools",
        "Next-chapter planning",
      ],
    },
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-sm text-[#9b6b5f] mb-4">
            Coaching Programs
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Personalized Coaching Support
          </h1>

          <p className="text-lg leading-8 max-w-3xl mx-auto mb-6">
            Programs are customized based on your goals, level of support
            desired, and coaching needs. Schedule a complimentary discovery call
            to receive a personalized recommendation and investment overview.
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-3xl bg-white border border-[#eadfd5] p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {program.title}
              </h2>

              <p className="leading-7 mb-6">
                {program.description}
              </p>

              <ul className="space-y-3 mb-6">
                {program.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#9b6b5f]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-semibold text-[#9b6b5f]">
                Investment discussed during discovery call.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-white border border-[#eadfd5] p-8 md:p-10 text-center shadow-sm">
          <h2 className="text-3xl font-bold mb-4">
            Not Sure Which Program Fits Best?
          </h2>

          <p className="text-lg leading-8 max-w-3xl mx-auto mb-6">
            That is exactly what the discovery call is for. Together, we will
            talk through your goals, current season, desired level of support,
            and the coaching option that best aligns with your needs.
          </p>

          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#3f342c] px-6 py-3 text-white font-semibold hover:bg-[#5a4a3f] transition"
          >
            Schedule Your Complimentary Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
