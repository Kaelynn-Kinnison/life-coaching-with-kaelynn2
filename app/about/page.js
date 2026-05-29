import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f2f2a]">
      <section className="px-6 py-24 text-center bg-[#fdf8f3]">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/hibiscus-logo.png"
            alt="Life Coaching with Kaelynn logo"
            width={300}
            height={300}
            className="mx-auto mb-6 w-48 md:w-64 lg:w-72 h-auto"
          />

          <p className="uppercase tracking-[0.3em] text-[#9b6f5f] mb-4 text-sm">
            Life Coaching with Kaelynn
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Heal. Grow. Transform.
          </h1>

          <p className="text-xl md:text-2xl text-[#6b4b43] leading-relaxed mb-8">
            Supportive life coaching for individuals ready to gain clarity,
            build confidence, overcome obstacles, and create meaningful
            transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact#book"
              className="bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
            >
              Book a Clarity Appointment
            </Link>

            <Link
              href="/pricing"
              className="border border-[#7b4f43] text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f1e3da] transition"
            >
              View Coaching Packages
            </Link>
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
              create. I believe growth happens when support, accountability, and
              possibility come together.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-6">
              Every person has a story. Every challenge has an opportunity for
              growth. And every new chapter begins with a single step forward.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-6">
              I&apos;d love to share more about my journey, my approach to
              coaching, and why helping others transform their lives means so
              much to me.
            </p>

            <Link
              href="/about"
              className="inline-block mt-4 bg-[#7b4f43] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5f3c33] transition"
            >
              Read My Full Story
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#f5e8df] text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            A Coaching Space for Personal Growth and Lasting Change
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            My mission is to help individuals heal, grow, and transform through
            compassionate support, accountability, self-discovery, and
            intentional action.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Coaching Focus Areas</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
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
                className="bg-[#fdf8f3] px-5 py-3 rounded-full shadow-sm text-[#6b4b43] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#fdf8f3]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Coaching Services
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Support for Healing, Growth, and Transformation
          </h2>

          <p className="text-[#6b4b43] max-w-3xl mx-auto mb-12 leading-relaxed">
            Each coaching service is designed to help you gain clarity,
            strengthen confidence, create healthier patterns, and move forward
            with purpose.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Personal Growth Coaching",
                text: "Build self-awareness, direction, confidence, and intentional habits that support the next version of you.",
              },
              {
                title: "Mindset & Emotional Wellness",
                text: "Strengthen your mindset, manage negative thought patterns, and create more emotional balance.",
              },
              {
                title: "Accountability Coaching",
                text: "Stay committed to your goals with structure, support, reflection, and practical action steps.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl shadow-md p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[#6b4b43] leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="inline-block mt-10 bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
          >
            View All Services
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Coaching Packages
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Choose the Support That Fits Your Journey
          </h2>

          <p className="text-[#6b4b43] max-w-3xl mx-auto mb-12 leading-relaxed">
            From an introductory discovery call to deeper transformation
            programs, coaching packages are designed to meet you where you are
            and help you move forward with clarity and support.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#fdf8f3] rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-3">Free Discovery Call</h3>
              <p className="text-3xl font-bold text-[#7b4f43] mb-2">Free</p>
              <p className="text-[#9b6f5f] font-semibold mb-4">
                20–30 minutes
              </p>
              <p className="text-[#6b4b43] leading-relaxed">
                A complimentary conversation to discuss your goals, ask
                questions, and determine whether coaching is the right fit.
              </p>
            </div>

            <div className="bg-[#fdf8f3] rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-3">Clarity Session</h3>
              <p className="text-3xl font-bold text-[#7b4f43] mb-2">$75</p>
              <p className="text-[#9b6f5f] font-semibold mb-4">60 minutes</p>
              <p className="text-[#6b4b43] leading-relaxed">
                A focused coaching session designed to help you gain clarity,
                identify obstacles, and create a path forward.
              </p>
            </div>

            <div className="bg-[#fdf8f3] rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-3">
                Growth & Empowerment
              </h3>
              <p className="text-3xl font-bold text-[#7b4f43] mb-2">$1,700</p>
              <p className="text-[#9b6f5f] font-semibold mb-4">
                Most Popular Program
              </p>
              <p className="text-[#6b4b43] leading-relaxed">
                A deeper coaching program for clients ready to create lasting
                change, confidence, and personal transformation.
              </p>
            </div>
          </div>

          <Link
            href="/pricing"
            className="inline-block mt-10 bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
          >
            View Full Pricing
          </Link>
        </div>
      </section>

      <section className="px-6 py-24 text-center bg-[#7b4f43] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Transformation?
          </h2>

          <p className="text-lg mb-8 text-[#f7e9df]">
            Coaching gives you a space to feel supported, get clear, and take
            intentional steps forward.
          </p>

          <Link
            href="/contact#book"
            className="bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df] transition"
          >
            Schedule Your Clarity Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
