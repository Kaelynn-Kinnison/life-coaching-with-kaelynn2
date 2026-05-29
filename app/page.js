import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf8f3] text-[#3f2f2a]">
      {/* Hero Section */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/hibiscus-logo.png"
            alt="Life Coaching with Kaelynn logo"
            width={140}
            height={140}
            className="mx-auto mb-6"
          />

          <p className="text-sm uppercase tracking-[0.3em] text-[#9b6f5f] mb-4">
            Life Coaching with Kaelynn
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Heal. Grow. Transform.
          </h1>

          <p className="text-xl md:text-2xl text-[#6b4b43] mb-8 leading-relaxed">
            Supportive life coaching for individuals ready to gain clarity,
            build confidence, create healthier patterns, and move forward with
            purpose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kaelynnkinnison@gmail.com"
              className="bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
            >
              Book a Discovery Call
            </a>

            <a
              href="#services"
              className="border border-[#7b4f43] text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f1e3da] transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Coaching Space for Personal Growth and Lasting Change
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed max-w-3xl mx-auto">
            Life Coaching with Kaelynn is designed to help you reconnect with
            yourself, strengthen your mindset, and create meaningful forward
            movement. Through compassionate support, practical tools, and
            intentional accountability, coaching helps you move from feeling
            stuck or uncertain into a place of clarity, confidence, and personal
            transformation.
          </p>
        </div>
      </section>

      {/* About Kaelynn Section */}
      <section className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/kaelynn-portrait.png"
              alt="Portrait of Kaelynn Kinnison"
              width={450}
              height={550}
              className="rounded-3xl shadow-xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Kaelynn
            </h2>

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

            <p className="text-[#6b4b43] leading-relaxed">
              I believe lasting transformation begins with self-awareness,
              intentional action, and a willingness to embrace growth. My goal is
              to create a supportive space where you can discover your strengths,
              overcome obstacles, and build a life aligned with your values.
            </p>
          </div>
        </div>
      </section>

      {/* What Life Coaching Is */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Is Life Coaching?
            </h2>

            <p className="text-[#6b4b43] leading-relaxed mb-4">
              Life coaching is a forward-focused partnership that helps you
              identify where you are, where you want to go, and what steps will
              help you get there. It creates space for reflection, clarity,
              personal responsibility, and intentional action.
            </p>

            <p className="text-[#6b4b43] leading-relaxed">
              Coaching can support you through personal growth, mindset shifts,
              life transitions, emotional wellness, confidence building, and goal
              achievement.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Coaching may help you:
            </h3>

            <ul className="space-y-3 text-[#6b4b43]">
              <li>• Gain clarity about your goals and direction</li>
              <li>• Build confidence and self-trust</li>
              <li>• Create healthier habits and patterns</li>
              <li>• Move through change with support</li>
              <li>• Stay accountable to meaningful action</li>
              <li>• Reconnect with your purpose and values</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who I Help */}
      <section className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I Help</h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed max-w-3xl mx-auto mb-10">
            I support individuals who are ready to grow, heal, reset, and take
            meaningful steps toward the life they want to create.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-xl mb-3">Feeling Stuck</h3>
              <p className="text-[#6b4b43]">
                For those who feel uncertain, overwhelmed, or unsure about their
                next step.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-xl mb-3">Seeking Growth</h3>
              <p className="text-[#6b4b43]">
                For those ready to build confidence, strengthen mindset, and
                develop healthier habits.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-xl mb-3">Navigating Change</h3>
              <p className="text-[#6b4b43]">
                For those moving through transitions, new seasons, or personal
                reinvention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Coaching Services
          </h2>

          <p className="text-[#6b4b43] max-w-3xl mx-auto mb-12">
            Each coaching service is designed to support healing, personal
            growth, emotional wellness, accountability, and transformation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#fdf8f3] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Personal Growth Coaching
              </h3>
              <p className="text-[#6b4b43]">
                Build self-awareness, confidence, direction, and intentional
                habits that support the next version of you.
              </p>
            </div>

            <div className="bg-[#fdf8f3] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Mindset & Emotional Wellness
              </h3>
              <p className="text-[#6b4b43]">
                Strengthen your mindset, manage negative thought patterns, and
                create more emotional balance.
              </p>
            </div>

            <div className="bg-[#fdf8f3] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Accountability Coaching
              </h3>
              <p className="text-[#6b4b43]">
                Stay committed to your goals with structure, support,
                reflection, and practical action steps.
              </p>
            </div>

            <div className="bg-[#fdf8f3] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Life Transition Coaching
              </h3>
              <p className="text-[#6b4b43]">
                Receive support while moving through change, uncertainty, new
                beginnings, or personal reinvention.
              </p>
            </div>

            <div className="bg-[#fdf8f3] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Healing & Self-Discovery Coaching
              </h3>
              <p className="text-[#6b4b43]">
                Reconnect with yourself, explore your values, and create space
                for emotional growth and personal healing.
              </p>
            </div>

            <div className="bg-[#fdf8f3] rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Confidence Coaching
              </h3>
              <p className="text-[#6b4b43]">
                Build self-trust, overcome limiting beliefs, and develop the
                confidence to move forward with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Areas of Focus
          </h2>

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
                className="bg-white px-5 py-3 rounded-full shadow-sm text-[#6b4b43] font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Approach */}
      <section className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Coaching Approach
          </h2>

          <p className="text-[#6b4b43] max-w-3xl mx-auto mb-12">
            My coaching approach is built around a simple, supportive process
            that helps you move from awareness to action.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {["Discover", "Clarify", "Create", "Act", "Transform"].map(
              (step) => (
                <div key={step} className="bg-white rounded-2xl p-5 shadow-md">
                  <h3 className="font-semibold text-lg">{step}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Client Testimonials
          </h2>

          <p className="text-[#6b4b43] max-w-3xl mx-auto mb-12">
            A space for future client stories, encouragement, and transformation
            experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#fdf8f3] rounded-2xl shadow-md p-6">
              <p className="text-[#5f463f] italic mb-6">
                “Kaelynn helped me gain clarity, confidence, and direction
                during a season where I felt completely stuck.”
              </p>
              <h3 className="font-semibold text-[#4a2f2a]">
                — Client Testimonial
              </h3>
            </div>

            <div className="bg-[#fdf8f3] rounded-2xl shadow-md p-6">
              <p className="text-[#5f463f] italic mb-6">
                “Through coaching, I learned how to hold myself accountable
                while still giving myself grace.”
              </p>
              <h3 className="font-semibold text-[#4a2f2a]">
                — Client Testimonial
              </h3>
            </div>

            <div className="bg-[#fdf8f3] rounded-2xl shadow-md p-6">
              <p className="text-[#5f463f] italic mb-6">
                “This coaching experience helped me reconnect with myself and
                take meaningful steps toward the life I want.”
              </p>
              <h3 className="font-semibold text-[#4a2f2a]">
                — Client Testimonial
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Kaelynn
          </h2>

          <p className="text-[#6b4b43] text-lg mb-10">
            Ready to begin your healing, growth, and transformation journey?
            Reach out today to schedule a discovery conversation.
          </p>

          <div className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-xl mb-4">
              <strong>Kaelynn Kinnison</strong>
            </p>

            <p className="mb-3">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:kaelynnkinnison@gmail.com"
                className="text-[#7b4f43] underline"
              >
                kaelynnkinnison@gmail.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:4027998166" className="text-[#7b4f43] underline">
                (402) 799-8166
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 text-center bg-[#7b4f43] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Transformation?
          </h2>

          <p className="text-lg mb-8 text-[#f7e9df]">
            You do not have to figure everything out alone. Coaching gives you a
            space to feel supported, get clear, and take intentional steps
            forward.
          </p>

          <a
            href="mailto:kaelynnkinnison@gmail.com"
            className="bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df] transition"
          >
            Contact Kaelynn
          </a>
        </div>
      </section>
    </main>
  );
}
