export default function Services() {
  const services = [
    {
      title: "Personal Growth Coaching",
      text: "Develop confidence, self-awareness, purpose, and healthy habits that support long-term success and fulfillment.",
    },
    {
      title: "Mindset & Emotional Wellness Coaching",
      text: "Strengthen your mindset, manage negative thought patterns, build resilience, and improve emotional well-being.",
    },
    {
      title: "Accountability Coaching",
      text: "Stay focused on your goals through structured support, accountability, encouragement, and action planning.",
    },
    {
      title: "Life Transition Coaching",
      text: "Navigate change, uncertainty, career shifts, relationship transitions, personal reinvention, and major life decisions.",
    },
    {
      title: "Healing & Self-Discovery Coaching",
      text: "Reconnect with yourself, explore your values, strengthen self-awareness, and create space for healing and growth.",
    },
    {
      title: "Confidence Coaching",
      text: "Build self-trust, overcome limiting beliefs, and develop confidence in your decisions and abilities.",
    },
  ];

  return (
    <main className="bg-[#fdf8f3]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Services
          </p>

          <h1 className="text-5xl font-bold mb-6">Coaching Services</h1>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            Coaching services are designed to support healing, emotional
            wellness, mindset growth, accountability, and life transformation.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#fdf8f3] rounded-3xl p-8 shadow-md"
            >
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-[#6b4b43] leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
