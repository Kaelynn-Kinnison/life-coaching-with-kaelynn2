export const metadata = {
  title: "Life Coaching | Life Coaching with Kaelynn",
  description:
    "Learn how life coaching with Kaelynn supports clarity, confidence, accountability, emotional wellness, life transitions, and lasting change through the Core Belief Transformation Method.",
};

export default function LifeCoaching() {
  const signs = [
    "You feel stuck but are not sure what needs to change",
    "You want more confidence, clarity, or direction",
    "You keep repeating the same patterns",
    "You struggle with self-doubt or overthinking",
    "You are navigating a major life transition",
    "You want accountability and support",
    "You are ready to grow but do not know where to start",
    "You want to reconnect with yourself and your purpose",
  ];

  const supportAreas = [
    {
      title: "Clarity",
      text: "Coaching helps you identify what you want, what matters most, and what steps can help you move forward.",
    },
    {
      title: "Confidence",
      text: "Together, we work on strengthening self-trust, self-worth, and your belief in your ability to create change.",
    },
    {
      title: "Accountability",
      text: "Coaching provides structure, support, and follow-through so your goals become intentional actions.",
    },
    {
      title: "Life Transitions",
      text: "Whether you are facing change, uncertainty, or a new season of life, coaching helps you navigate the process with support.",
    },
    {
      title: "Emotional Wellness",
      text: "Coaching can help you recognize patterns, manage overwhelm, and create healthier ways of thinking and responding.",
    },
    {
      title: "Personal Growth",
      text: "Coaching supports self-awareness, growth, healing, mindset development, and becoming more aligned with who you want to be.",
    },
  ];

  const results = [
    "Greater self-awareness",
    "Clearer goals and direction",
    "Stronger confidence",
    "Healthier boundaries",
    "Improved decision-making",
    "More consistent action",
    "Reduced self-sabotage",
    "A stronger sense of purpose",
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f2f2a]">
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
              Life Coaching
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Coaching for Clarity, Confidence, and Lasting Change
            </h1>

            <p className="text-xl text-[#6b4b43] leading-relaxed mb-8">
              Life coaching helps you move beyond feeling stuck and into a life
              of greater confidence, purpose, growth, and transformation.
            </p>

            <a
              href="/contact#book"
              className="inline-block bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
            >
              Book a Free Discovery Call
            </a>
          </div>

          <div>
            <img
              src="/life-coaching-hero.png"
              alt="Person climbing a mountain path at sunrise representing growth and transformation"
              className="rounded-3xl shadow-xl border border-[#eadfd5] w-full max-h-[620px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#7b4f43] text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#f7e9df] text-sm mb-3">
            Who Coaching Is For
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You May Benefit From Coaching If...
          </h2>

          <p className="text-lg text-[#f7e9df] leading-relaxed max-w-4xl mx-auto mb-12">
            Coaching is for individuals who are ready to grow, reflect, take
            ownership of their next steps, and receive support while creating
            meaningful change.
          </p>

          <div className="grid md:grid-cols-2 gap-5 text-left">
            {signs.map((item) => (
              <div
                key={item}
                className="bg-white/10 border border-white/20 rounded-2xl p-5"
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            What Makes This Coaching Different
          </p>

          <h2 className="text-4xl font-bold mb-6">
            We Look Beneath the Surface
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed max-w-4xl mx-auto mb-8">
            Many people try to change their habits, goals, relationships, or
            confidence without addressing the beliefs that may be influencing
            those patterns. Through my coaching approach, we explore not only
            what you want to change, but also what may be keeping you stuck.
          </p>

          <p className="text-lg text-[#6b4b43] leading-relaxed max-w-4xl mx-auto mb-10">
            My work is rooted in the Core Belief Transformation Method™, a
            supportive process that helps identify limiting beliefs, challenge
            old patterns, and create healthier beliefs that support lasting
            growth.
          </p>

          <a
            href="/core-belief-coaching"
            className="inline-block bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
          >
            Learn About Core Belief Transformation
          </a>
        </div>
      </section>

      <section className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Coaching Support
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Areas Life Coaching Can Support
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed max-w-4xl mx-auto mb-12">
            Coaching can support many areas of life depending on your goals,
            challenges, and current season.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {supportAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-3xl shadow-md p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p className="text-[#6b4b43] leading-relaxed">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-[#fdf8f3] rounded-3xl border border-[#eadfd5] p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-5">
              Coaching Is Not About Having It All Figured Out
            </h2>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              You do not need to have all the answers before beginning
              coaching. You only need a willingness to reflect, grow, and take
              the next step forward.
            </p>

            <p className="text-[#6b4b43] leading-relaxed">
              Coaching gives you a space to be supported, encouraged,
              challenged, and held accountable while you create meaningful
              change in your life.
            </p>
          </div>

          <div className="bg-[#7b4f43] text-white rounded-3xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-5">No Problem Is Too Big</h2>

            <p className="leading-relaxed mb-4 text-[#f7e9df]">
              One of my core beliefs is that no problem is too big, especially
              when you do not have to face it alone.
            </p>

            <p className="leading-relaxed text-[#f7e9df]">
              Life coaching provides support, clarity, accountability, and a
              path forward when the next step feels hard to see.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Possible Results
          </p>

          <h2 className="text-4xl font-bold mb-10">
            What Clients Often Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-5 text-left">
            {results.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl shadow-md p-5 text-[#6b4b43] font-medium"
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#7b4f43] text-white px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take the First Step?
          </h2>

          <p className="text-lg text-[#f7e9df] leading-relaxed mb-8">
            A discovery call is a supportive first step to talk through your
            goals, current challenges, and whether coaching is the right fit for
            your next chapter.
          </p>

          <a
            href="/contact#book"
            className="inline-block bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df] transition"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
