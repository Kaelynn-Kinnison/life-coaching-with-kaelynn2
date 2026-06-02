import Image from "next/image";

export const metadata = {
  title: "Life Coaching with Kaelynn | Heal. Grow. Transform.",
  description:
    "Transformational life coaching focused on healing, personal growth, confidence, accountability, and lasting change through Core Belief Transformation Coaching.",
};

export default function Home() {
  return (
    <main>
      <section className="px-6 py-24 text-center bg-[#fdf8f3]">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/hibiscus-logo.png"
            alt="Life Coaching with Kaelynn logo"
            width={350}
            height={350}
            className="mx-auto mb-6"
          />

          <p className="uppercase tracking-[0.3em] text-[#9b6f5f] mb-4 text-sm">
            Life Coaching with Kaelynn
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Heal. Grow. Transform.
          </h1>

          <p className="text-xl md:text-2xl text-[#6b4b43] leading-relaxed mb-8">
            Core Belief Transformation Coaching for individuals ready to gain
            clarity, build confidence, overcome limiting beliefs, and create
            lasting personal change.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#book"
              className="bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
            >
              Book a Clarity Appointment
            </a>

            <a
              href="/pricing"
              className="border border-[#7b4f43] text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f1e3da] transition"
            >
              View Coaching Packages
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/kaelynn-portrait.png"
            alt="Portrait of Kaelynn Kinnison"
            width={450}
            height={550}
            className="rounded-3xl shadow-xl object-cover mx-auto"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">Meet Kaelynn</h2>

            <p className="text-2xl font-semibold text-[#7b4f43] leading-relaxed mb-6">
              You do not have to navigate life&apos;s challenges alone.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              Life can feel overwhelming at times. Whether you&apos;re facing a
              major transition, struggling to find direction, rebuilding
              confidence, or simply feeling stuck, support can make the next step
              feel possible.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              My passion is helping people uncover their strengths, gain
              clarity, and take meaningful steps toward the life they want to
              create.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-6">
              I&apos;d love to share more about my journey, my coaching approach,
              and why helping others heal, grow, and transform means so much to
              me.
            </p>

            <a
              href="https://www.lifecoachingwithkaelynn.com/about"
              className="inline-block mt-4 bg-[#7b4f43] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5f3c33] transition"
            >
              Read My Full Story
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#f5e8df] text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            A Coaching Space for Personal Growth and Lasting Change
          </h2>
          <p className="text-lg text-[#6b4b43] leading-relaxed">
            My mission is to help individuals heal, grow, and transform by
            identifying and changing the core beliefs that influence their
            thoughts, emotions, behaviors, and results.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Signature Method
          </p>

          <h2 className="text-4xl font-bold mb-6">
            The Core Belief Transformation Method™
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed max-w-4xl mx-auto mb-12">
            Many challenges are not caused by a lack of motivation, discipline,
            or desire. They are often rooted in deeply held beliefs that shape
            how you see yourself, what you believe is possible, and how you move
            through life. Core Belief Transformation Coaching helps you identify
            those limiting beliefs, challenge old patterns, and create healthier
            beliefs that support lasting change.
          </p>

          <div className="grid md:grid-cols-5 gap-6 text-left">
            {[
              {
                step: "1",
                title: "Awareness",
                text: "Identify the limiting belief operating beneath the surface.",
              },
              {
                step: "2",
                title: "Understanding",
                text: "Explore how the belief may be affecting confidence, choices, emotions, and patterns.",
              },
              {
                step: "3",
                title: "Challenge",
                text: "Question the belief and begin separating truth from old conditioning.",
              },
              {
                step: "4",
                title: "Transform",
                text: "Replace limiting beliefs with healthier, more empowering perspectives.",
              },
              {
                step: "5",
                title: "Align",
                text: "Create new actions and habits that support the belief you are choosing to live from.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#fdf8f3] rounded-3xl shadow-md p-6"
              >
                <p className="text-[#7b4f43] font-bold text-lg mb-2">
                  Step {item.step}
                </p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#6b4b43] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <a
            href="/services"
            className="inline-block mt-10 bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
          >
            Explore Coaching Services
          </a>
        </div>
      </section>

      <section className="bg-[#f5e8df] px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Coaching Focus Areas</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Core Beliefs",
              "Limiting Beliefs",
              "Healing",
              "Personal Growth",
              "Emotional Wellness",
              "Self-Confidence",
              "Self-Discovery",
              "Resilience",
              "Accountability",
              "Life Purpose",
              "Goal Achievement",
              "Life Transitions",
            ].map((item) => (
              <span
                key={item}
                className="bg-white px-5 py-3 rounded-full shadow-sm text-[#6b4b43] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center bg-[#7b4f43] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-lg mb-8 text-[#f7e9df]">
            Coaching gives you a space to feel supported, identify what has been
            keeping you stuck, and take intentional steps forward.
          </p>
          <a
            href="/contact#book"
            className="bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df] transition"
          >
            Schedule Your Clarity Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
