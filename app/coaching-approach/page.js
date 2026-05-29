export default function CoachingApproach() {
  const steps = [
    {
      title: "Discover",
      text: "Explore your current situation, challenges, values, and goals.",
    },
    {
      title: "Clarify",
      text: "Gain clarity around what matters most and identify meaningful priorities.",
    },
    {
      title: "Create",
      text: "Develop a personalized action plan designed to support your growth.",
    },
    {
      title: "Act",
      text: "Take intentional steps toward your goals with accountability and support.",
    },
    {
      title: "Transform",
      text: "Create lasting change through consistent action, reflection, and growth.",
    },
  ];

  return (
    <main className="bg-[#fdf8f3]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Coaching Approach
          </p>

          <h1 className="text-5xl font-bold mb-6">The Coaching Process</h1>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            My coaching approach is built around a simple, supportive process
            that helps you move from awareness to action.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-[#fdf8f3] rounded-3xl shadow-md p-6 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
              <p className="text-[#6b4b43]">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
