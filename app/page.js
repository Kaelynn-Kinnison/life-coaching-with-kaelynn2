import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="px-6 py-24 text-center bg-[#fdf8f3]">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/hibiscus-logo.png"
            alt="Life Coaching with Kaelynn logo"
            width={250}
            height={250}
            className="mx-auto mb-6"
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
              className="bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33]"
            >
              Book a Clarity Appointment
            </Link>

            <Link
              href="/pricing"
              className="border border-[#7b4f43] text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f1e3da]"
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
            <p className="text-[#6b4b43] leading-relaxed mb-4">
              Hi, I&apos;m Kaelynn Kinnison. My passion is helping people heal,
              grow, and transform into the best version of themselves.
            </p>
            <p className="text-[#6b4b43] leading-relaxed mb-4">
              Through compassionate support, accountability, and personal
              development strategies, I help clients gain clarity, strengthen
              confidence, navigate life transitions, and move forward with
              purpose.
            </p>
            <Link
              href="/about"
              className="inline-block mt-4 bg-[#7b4f43] text-white px-6 py-3 rounded-full font-semibold"
            >
              Read My Bio
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
            className="bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold"
          >
            Schedule Your Clarity Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
