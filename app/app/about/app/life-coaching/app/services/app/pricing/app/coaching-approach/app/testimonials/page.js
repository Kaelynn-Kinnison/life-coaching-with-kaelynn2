export default function Testimonials() {
  const testimonials = [
    "Kaelynn helped me gain clarity, confidence, and direction during a season where I felt completely stuck.",
    "Through coaching, I learned how to hold myself accountable while still giving myself grace.",
    "This coaching experience helped me reconnect with myself and take meaningful steps toward the life I want.",
  ];

  return (
    <main className="bg-[#fdf8f3]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Testimonials
          </p>

          <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            A space for client stories, encouragement, and transformation
            experiences.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((quote) => (
            <div
              key={quote}
              className="bg-[#fdf8f3] rounded-3xl shadow-md p-8"
            >
              <p className="text-[#5f463f] italic mb-6">“{quote}”</p>
              <h2 className="font-semibold text-[#4a2f2a]">
                — Client Testimonial
              </h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
