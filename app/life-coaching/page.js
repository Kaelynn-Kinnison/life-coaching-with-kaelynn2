export const metadata = {
  title: "Life Coaching | Life Coaching with Kaelynn",
  description:
    "Personalized life coaching to help you gain clarity, build confidence, strengthen accountability, navigate life changes, and create lasting personal growth and transformation.",
};

export default function LifeCoaching() {
  return (
    <main className="bg-[#fdf8f3]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Life Coaching
          </p>

          <h1 className="text-5xl font-bold mb-6">What Is Life Coaching?</h1>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            Life coaching is a forward-focused partnership designed to help
            individuals identify goals, overcome obstacles, and create meaningful
            progress.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            "Gain clarity and direction",
            "Build confidence and self-trust",
            "Strengthen mindset and resilience",
            "Develop healthier habits",
            "Improve accountability",
            "Navigate life transitions",
            "Create meaningful goals",
            "Align actions with values",
            "Discover purpose and fulfillment",
          ].map((item) => (
            <div key={item} className="bg-[#fdf8f3] rounded-2xl p-6 shadow-md">
              <p className="text-[#6b4b43] font-semibold">• {item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
