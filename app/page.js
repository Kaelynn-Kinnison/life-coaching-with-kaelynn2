import Image from "next/image";

export default function Home() {
  const packages = [
    {
      title: "Clarity Session",
      price: "$75",
      length: "60 minutes",
      description:
        "A one-time coaching session designed to help you gain clarity, identify where you feel stuck, and create your next intentional step.",
      includes: [
        "Personal clarity conversation",
        "Goal and mindset reflection",
        "Next-step action plan",
        "Supportive guidance and direction",
      ],
    },
    {
      title: "Growth Package",
      price: "$275",
      length: "4 sessions",
      description:
        "A supportive short-term coaching package for personal growth, confidence building, accountability, and mindset development.",
      includes: [
        "Four private coaching sessions",
        "Personal growth goals",
        "Weekly accountability support",
        "Reflection and action steps",
      ],
    },
    {
      title: "Transformation Package",
      price: "$500",
      length: "8 sessions",
      description:
        "A deeper coaching experience for clients ready to heal, grow, transform, and create lasting personal change.",
      includes: [
        "Eight private coaching sessions",
        "Mindset and emotional wellness support",
        "Life transition guidance",
        "Accountability and progress tracking",
      ],
    },
  ];

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
              href="#book"
              className="bg-[#7b4f43] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5f3c33] transition"
            >
              Book a Clarity Appointment
            </a>

            <a
              href="#packages"
              className="border border-[#7b4f43] text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f1e3da] transition"
            >
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
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
              My coaching space is designed to help you feel supported while
              taking meaningful steps toward confidence, healing, personal
              growth, and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* What Life Coaching Is */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Is Life Coaching?
          </h2>

          <p className="text-lg text-[#6b4b43] leading-relaxed max-w-3xl mx-auto">
            Life coaching is a forward-focused partnership that helps you
            identify where you are, where you want to go, and what steps will
            help you get there. Coaching offers support, reflection,
            accountability, and intentional action so you can move from feeling
            stuck into a place of clarity and confidence.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Coaching Services
          </h2>

          <p className="text-[#6b4b43] max-w-3xl mx-auto mb-12">
            Coaching services are designed to support healing, emotional
            wellness, mindset growth, accountability, and life transformation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Personal Growth Coaching",
                text: "Build self-awareness, confidence, direction, and intentional habits.",
              },
              {
                title: "Mindset & Emotional Wellness",
                text: "Strengthen your mindset, manage negative thinking, and create emotional balance.",
              },
              {
                title: "Accountability Coaching",
                text: "Stay committed to your goals with structure, reflection, and support.",
              },
              {
                title: "Life Transition Coaching",
                text: "Move through change, uncertainty, and new beginnings with guidance.",
              },
              {
                title: "Healing & Self-Discovery",
                text: "Reconnect with yourself, explore your values, and create space for healing.",
              },
              {
                title: "Confidence Coaching",
                text: "Build self-trust, overcome limiting beliefs, and move forward with purpose.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6b4b43]">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages and Pricing */}
      <section id="packages" className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9b6f5f] mb-3">
            Coaching Packages
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pricing & Package Options
          </h2>

          <p className="text-[#6b4b43] max-w-3xl mx-auto mb-12">
            Choose the level of support that best fits your season of life.
            Whether you need one clarity session or deeper transformation
            support, each package is designed to help you move forward with
            intention.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>

                <p className="text-4xl font-bold text-[#7b4f43] mb-2">
                  {pkg.price}
                </p>

                <p className="text-[#9b6f5f] font-semibold mb-5">
                  {pkg.length}
                </p>

                <p className="text-[#6b4b43] leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <ul className="space-y-3 text-[#6b4b43] mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className="mt-auto text-center bg-[#7b4f43] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5f3c33] transition"
                >
                  Book This Option
                </a>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#6b4b43] mt-8">
            Pricing can be adjusted as your coaching business grows. Package
            details may be customized based on client needs.
          </p>
        </div>
      </section>

      {/* Coaching Approach */}
      <section className="bg-white px-6 py-20">
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
                <div key={step} className="bg-[#fdf8f3] rounded-2xl p-5 shadow-md">
                  <h3 className="font-semibold text-lg">{step}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section id="book" className="bg-[#f5e8df] px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#9b6f5f] mb-3">
            Schedule Your Appointment
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book a Clarity Appointment
          </h2>

          <p className="text-[#6b4b43] max-w-3xl mx-auto mb-10">
            Your clarity appointment is a supportive conversation designed to
            help you discuss your goals, ask questions, and decide which
            coaching option is the best fit for you.
          </p>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
            <iframe
              src=src="https://calendly.com/kaelynnkinnison/clarity-appointment"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a clarity appointment with Kaelynn"
              className="rounded-2xl"
            ></iframe>
          </div>

          <p className="text-sm text-[#6b4b43] mt-6">
            Replace <strong>YOUR-CALENDLY-LINK</strong> with your actual
            Calendly scheduling link.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Kaelynn
          </h2>

          <p className="text-[#6b4b43] text-lg mb-10">
            Ready to begin your healing, growth, and transformation journey?
            Reach out today to schedule a discovery conversation.
          </p>

          <div className="bg-[#fdf8f3] rounded-3xl shadow-lg p-8 max-w-2xl mx-auto">
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
            href="#book"
            className="bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df] transition"
          >
            Schedule Your Clarity Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
