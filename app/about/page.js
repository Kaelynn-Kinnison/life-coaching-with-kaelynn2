import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f2f2a]">
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/kaelynn-portrait.png"
            alt="Portrait of Kaelynn Kinnison"
            width={450}
            height={550}
            className="rounded-3xl shadow-xl object-cover mx-auto"
          />

          <div>
            <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
              About Kaelynn
            </p>

            <h1 className="text-5xl font-bold mb-6">
              Meet Kaelynn Kinnison
            </h1>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              Hi, I&apos;m Kaelynn Kinnison.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              I am passionate about helping people discover their strengths,
              overcome challenges, and create meaningful transformation in their
              lives. I believe every individual has the ability to heal, grow,
              and move forward with greater confidence, clarity, and purpose.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              My coaching approach combines compassion, accountability, and
              personal development to support clients through life&apos;s
              challenges, transitions, and opportunities for growth. I strive to
              create a supportive, non-judgmental space where clients feel heard,
              encouraged, and empowered to take meaningful steps toward their
              goals.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              In addition to my life coaching work, I have earned a Health and
              Wellness Coaching Certificate and am currently in my second year of
              studying Psychology in college. These experiences have strengthened
              my understanding of human behavior, personal growth, mindset
              development, and the powerful connection between mental, emotional,
              and physical well-being.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              One of my core beliefs is that no problem is too big, especially
              when you don&apos;t have to face it alone. While we cannot always
              control life&apos;s circumstances, we can develop the tools,
              resilience, and confidence needed to navigate them.
            </p>

            <p className="text-[#6b4b43] leading-relaxed">
              Whether you are seeking healing, personal growth, greater
              confidence, accountability, or support through a life transition, I
              am committed to helping you move forward with purpose and
              possibility. Together, we can create the next chapter of your
              journey.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            My Mission
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Helping You Heal, Grow, and Transform
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            My mission is to help individuals heal, grow, and transform through
            compassionate support, accountability, self-discovery, and
            intentional action. I believe lasting change begins with
            self-awareness, courage, and the willingness to take one step forward
            at a time.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 bg-[#f5e8df]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Coaching Values
          </p>

          <h2 className="text-4xl font-bold mb-10">
            What You Can Expect
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">
                Compassion
              </h3>
              <p className="text-[#6b4b43] leading-relaxed">
                A safe, supportive, and non-judgmental coaching space where you
                can feel heard and encouraged.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">
                Accountability
              </h3>
              <p className="text-[#6b4b43] leading-relaxed">
                Support that helps you stay focused, follow through, and take
                meaningful steps toward your goals.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">
                Growth
              </h3>
              <p className="text-[#6b4b43] leading-relaxed">
                Coaching that encourages self-awareness, confidence, resilience,
                healing, and personal transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center bg-[#7b4f43] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You Do Not Have to Face It Alone
          </h2>

          <p className="text-lg mb-8 text-[#f7e9df]">
            No problem is too big when you have support, clarity, and someone
            walking beside you as you move forward.
          </p>

          <Link
            href="/contact#book"
            className="bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df] transition"
          >
            Book a Clarity Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
