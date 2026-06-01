export const metadata = {
  title: "Client Testimonials | Life Coaching with Kaelynn",
  description:
    "Read testimonials from coaching clients who have experienced personal growth, increased confidence, greater clarity, and meaningful life transformation through coaching with Kaelynn Kinnison.",
};

export default function Testimonials() {
  const clientTestimonials = [
    {
      quote:
        "Kaelynn helped me gain clarity, confidence, and direction during a season where I felt completely stuck.",
      name: "Starter Client Testimonial",
    },
    {
      quote:
        "Through coaching, I learned how to hold myself accountable while still giving myself grace.",
      name: "Starter Client Testimonial",
    },
    {
      quote:
        "This coaching experience helped me reconnect with myself and take meaningful steps toward the life I want.",
      name: "Starter Client Testimonial",
    },
  ];

  const trainingFeedback = [
    {
      quote:
        "Kaelynn has a natural ability to listen without judgment while helping people see possibilities they may not see for themselves. Her encouragement, compassion, and thoughtful questions helped me gain confidence and move forward with greater clarity.",
      name: "Training Participant",
    },
    {
      quote:
        "During our training sessions, Kaelynn consistently demonstrated empathy, professionalism, and a genuine desire to help others succeed. She creates a supportive environment where people feel comfortable sharing openly and exploring personal growth.",
      name: "Wellness Training Colleague",
    },
    {
      quote:
        "One of Kaelynn’s greatest strengths is her ability to help people feel heard and understood. She has a gift for encouraging others while helping them stay accountable to the goals they set for themselves.",
      name: "Coaching Practicum Participant",
    },
    {
      quote:
        "Kaelynn brings warmth, positivity, and accountability into every interaction. She has a way of helping people focus on solutions rather than limitations, which inspires confidence and forward movement.",
      name: "Professional Development Participant",
    },
    {
      quote:
        "I was impressed by Kaelynn’s ability to connect with people from different backgrounds and make them feel supported. Her passion for helping others is evident in everything she does.",
      name: "Program Participant",
    },
    {
      quote:
        "Kaelynn encourages growth while meeting people where they are. Her compassionate approach and genuine interest in helping others create a safe space for learning, reflection, and positive change.",
      name: "Peer Training Participant",
    },
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f2f2a]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Testimonials
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Client Testimonials
          </h1>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            A space for client stories, encouragement, and transformation
            experiences.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {clientTestimonials.map((item) => (
            <div
              key={item.quote}
              className="bg-[#fdf8f3] rounded-3xl shadow-md p-8"
            >
              <p className="text-xl mb-4">★★★★★</p>

              <p className="text-[#5f463f] italic mb-6">
                &quot;{item.quote}&quot;
              </p>

              <h2 className="font-semibold text-[#4a2f2a]">
                — {item.name}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Professional Feedback
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Training & Professional Development Feedback
          </h2>

          <p className="text-[#6b4b43] leading-relaxed">
            The following feedback reflects experiences from training programs,
            professional development settings, and coaching-related learning
            environments.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {trainingFeedback.map((item) => (
            <div
              key={item.quote}
              className="bg-white rounded-3xl shadow-md p-8"
            >
              <p className="text-xl mb-4">★★★★★</p>

              <p className="text-[#5f463f] italic mb-6">
                &quot;{item.quote}&quot;
              </p>

              <h2 className="font-semibold text-[#4a2f2a]">
                — {item.name}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
