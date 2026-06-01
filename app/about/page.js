import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "About Kaelynn Kinnison | Transformational Life Coach",
  description:
    "Meet Kaelynn Kinnison, Transformational Life Coach. Learn about her coaching philosophy, background, and commitment to helping clients heal, grow, and transform.",
};
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

            <p className="text-2xl font-semibold text-[#7b4f43] leading-relaxed mb-6">
              What if the life you want is closer than you think?
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              Hi, I&apos;m Kaelynn Kinnison, and I am passionate about helping
              people move beyond feeling stuck and into a life of greater
              clarity, confidence, and purpose.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              I believe every person has the ability to heal, grow, and
              transform, even when life&apos;s challenges feel overwhelming.
              Sometimes the hardest part isn&apos;t finding the answer—it&apos;s
              trying to carry everything alone.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              My journey into coaching began with a genuine desire to help
              people recognize their strengths, overcome obstacles, and create
              positive change in their lives. Through compassionate support,
              accountability, and practical guidance, I help clients build
              confidence, navigate transitions, strengthen their mindset, and
              reconnect with what matters most.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              I have earned a Health and Wellness Coaching Certificate and am
              currently in my second year of studying Psychology. These
              experiences have deepened my understanding of personal growth,
              emotional wellness, human behavior, and the powerful connection
              between mindset and transformation.
            </p>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              One of my core beliefs is simple: no problem is too big,
              especially when you don&apos;t have to face it alone.
            </p>

            <p className="text-[#6b4b43] leading-relaxed">
              Whether you&apos;re seeking healing, personal growth,
              accountability, greater confidence, or support through a major
              life transition, my goal is to help you move forward with clarity,
              courage, and purpose. Your next chapter is waiting—and you
              don&apos;t have to navigate it by yourself.
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
            self-awareness, courage, and the willingness to take one step
            forward at a time.
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
              <h3 className="text-2xl font-bold mb-4">Compassion</h3>
              <p className="text-[#6b4b43] leading-relaxed">
                A safe, supportive, and non-judgmental coaching space where you
                can feel heard, understood, and encouraged.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Accountability</h3>
              <p className="text-[#6b4b43] leading-relaxed">
                Support that helps you stay focused, follow through, and take
                meaningful steps toward your goals.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">Growth</h3>
              <p className="text-[#6b4b43] leading-relaxed">
                Coaching that encourages self-awareness, confidence,
                resilience, healing, and personal transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            My Coaching Philosophy
          </p>

          <h2 className="text-4xl font-bold mb-6">
            You Are Not Meant to Do This Alone
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            Coaching is not about telling you who to become. It is about helping
            you reconnect with who you are, identify what matters most, and move
            forward with support, structure, and belief in your ability to
            change.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 text-center bg-[#7b4f43] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Next Chapter Can Start Here
          </h2>

          <p className="text-lg mb-8 text-[#f7e9df]">
            No problem is too big when you have support, clarity, and someone
            walking beside you as you move forward.
          </p>

          <Link
            href="/contact#book"
            className="bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df]"
          >
            Book a Clarity Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
