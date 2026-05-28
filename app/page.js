export default function Home() {
  const testimonials = [
    {
      quote:
        "Kaelynn has a natural ability to make people feel heard, understood, and supported without judgment. Conversations with her always leave me feeling more grounded, clear-minded, and motivated to move forward.",
      name: "Sarah M.",
    },
    {
      quote:
        "Talking with Kaelynn helped me organize my thoughts and approach challenges with a clearer mindset. She balances compassion with accountability in a way that helped me follow through on goals I had been putting off.",
      name: "Michael D.",
    },
    {
      quote:
        "As a young woman trying to figure out who I am and what I want for my future, Kaelynn has been incredibly supportive and encouraging. She helped me feel more confident in myself and reminded me that growth takes time.",
      name: "Madison K.",
    },
  ];

  const programs = [
    {
      title: "Starter Clarity",
      price: "$1,200",
      details: [
        "6 coaching sessions",
        "Goal clarity and direction",
        "Personalized action plan",
        "Email support",
      ],
      button: "Get Started",
    },
    {
      title: "Transformation Coaching",
      price: "$1,700",
      featured: true,
      details: [
        "10 coaching sessions",
        "Goal mapping",
        "Habit building",
        "Worksheets and reflection tools",
        "Support between sessions",
      ],
      button: "Apply for Coaching",
    },
    {
      title: "Premium Breakthrough",
      price: "$3,000",
      details: [
        "12–14 coaching sessions",
        "Deep life strategy",
        "Weekly accountability",
        "Priority scheduling",
      ],
      button: "Apply Now",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F2EC] text-[#2F2B28]">
      <nav className="sticky top-0 z-50 bg-[#F7F2EC]/90 backdrop-blur border-b border-[#EADFD4]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-serif text-xl tracking-wide">
            Life Coaching with Kaelynn
          </a>
          <div className="hidden md:flex gap-8 text-sm tracking-wide">
            <a href="#about" className="hover:text-[#C8A97E]">About</a>
            <a href="#services" className="hover:text-[#C8A97E]">Services</a>
            <a href="#programs" className="hover:text-[#C8A97E]">Programs</a>
            <a href="#testimonials" className="hover:text-[#C8A97E]">Testimonials</a>
            <a href="#book" className="hover:text-[#C8A97E]">Book</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F2EC] via-[#FBF7F2] to-white" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <img
              src="/hibiscus-logo.png"
              alt="Life Coaching with Kaelynn logo"
              className="w-64 mb-8 rounded-3xl shadow-sm"
            />
            <p className="uppercase tracking-[0.35em] text-xs text-[#9C7E57] mb-5">
              Clarity • Growth • Healing • Accountability
            </p>
            <h1 className="text-5xl lg:text-7xl font-serif leading-tight mb-8">
              Create meaningful change with clarity, healing, and support.
            </h1>
            <p className="text-xl leading-relaxed text-[#5A5550] mb-10 max-w-2xl">
              Compassionate life coaching for personal growth, emotional healing,
              confidence, and accountability — helping you move forward with purpose
              and self-trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/kaelynnkinnison"
                className="inline-flex justify-center rounded-full bg-[#C8A97E] px-8 py-4 text-white text-lg shadow-lg hover:opacity-90 transition"
              >
                Book Your Free Discovery Call
              </a>
              <a
                href="#programs"
                className="inline-flex justify-center rounded-full border border-[#C8A97E] px-8 py-4 text-lg hover:bg-white transition"
              >
                View Coaching Programs
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[420px] h-[420px] bg-[#EEDFD8] rounded-full blur-3xl opacity-60" />
            <img
              src="/kaelynn-portrait.png"
              alt="Kaelynn, life coach"
              className="relative rounded-[2.5rem] shadow-2xl object-cover w-full max-w-[520px] border-8 border-white"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[#9C7E57] mb-5">
              Meet Your Coach
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif leading-tight mb-8">
              A supportive space for clarity, personal growth, and emotional wellness.
            </h2>
            <p className="text-lg leading-relaxed text-[#5A5550] mb-6">
              Hi, I’m Kaelynn Kinnison, founder of Life Coaching with Kaelynn.
              I help people gain clarity, build confidence, heal emotionally,
              and move forward toward meaningful goals.
            </p>
            <p className="text-lg leading-relaxed text-[#5A5550]">
              My coaching style blends compassion and accountability. Together,
              we focus on where you are, where you want to go, and the aligned
              steps that help you create lasting change.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              ["Clarity", "Understand what you truly want and identify the next aligned steps."],
              ["Personal Growth", "Build confidence, self-trust, and healthier patterns over time."],
              ["Emotional Healing", "Create space to process, reflect, and move forward with more peace."],
              ["Accountability", "Stay focused, supported, and consistent while pursuing your goals."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#F7F2EC] rounded-3xl p-8 border border-[#EADFD4] shadow-sm">
                <h3 className="text-2xl font-serif mb-3">{title}</h3>
                <p className="text-[#5A5550] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-[#F7F2EC]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#9C7E57] mb-5">
            Coaching Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-8">
            Support for the season you are growing through.
          </h2>
          <p className="text-lg text-[#5A5550] max-w-3xl mx-auto mb-14 leading-relaxed">
            Coaching is designed to help you get unstuck, reconnect with yourself,
            set intentional goals, and create practical movement toward the life
            you want.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              ["Life Clarity Coaching", "For identifying what you want, what feels misaligned, and where to go next."],
              ["Emotional Healing Support", "For navigating emotional blocks, self-doubt, and seasons of transition."],
              ["Personal Growth Coaching", "For building confidence, self-awareness, and intentional habits."],
              ["Accountability Coaching", "For staying consistent, focused, and supported while taking action."],
            ].map(([title, text]) => (
              <div key={title} className="bg-white rounded-3xl p-7 border border-[#EADFD4] shadow-sm">
                <h3 className="text-xl font-serif mb-4">{title}</h3>
                <p className="text-[#5A5550] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#9C7E57] mb-5">
            Coaching Programs
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-8">
            Choose your coaching path.
          </h2>
          <p className="text-lg text-[#5A5550] max-w-3xl mx-auto mb-16 leading-relaxed">
            Each program is personalized to your goals and designed to support
            clarity, healing, growth, and steady accountability.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`relative rounded-[2rem] p-9 shadow-xl border ${
                  program.featured
                    ? "bg-[#2F2B28] text-white border-[#C8A97E] lg:scale-105"
                    : "bg-[#F7F2EC] border-[#EADFD4]"
                }`}
              >
                {program.featured && (
                  <div className="absolute top-0 right-0 bg-[#D8A1A1] px-5 py-2 rounded-bl-2xl rounded-tr-[2rem] text-sm tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-3xl font-serif mb-4">{program.title}</h3>
                <p className="text-5xl font-serif mb-8">{program.price}</p>
                <ul className={`space-y-4 mb-10 ${program.featured ? "text-[#E9DDD1]" : "text-[#5A5550]"}`}>
                  {program.details.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/kaelynnkinnison"
                  className="inline-flex w-full justify-center rounded-full bg-[#C8A97E] px-6 py-4 text-white hover:opacity-90 transition"
                >
                  {program.button}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 px-6 bg-[#F7F2EC]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#9C7E57] mb-5">
            Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-14">
            Support that feels grounded and genuine.
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 text-left">
            {testimonials.map((item) => (
              <div key={item.name} className="bg-white rounded-3xl p-8 shadow-sm border border-[#EADFD4]">
                <p className="text-lg leading-relaxed mb-6 text-[#5A5550]">“{item.quote}”</p>
                <p className="font-medium">— {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="bg-[#2F2B28] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#C8A97E] mb-5">
            Start Here
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif mb-6">
            Schedule your free discovery call.
          </h2>
          <p className="text-lg text-[#E9DDD1] mb-12 max-w-3xl mx-auto leading-relaxed">
            We’ll talk about your goals, what you’re navigating, and whether coaching
            feels like the right next step.
          </p>

          <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-[#C8A97E]">
            <iframe
              src="https://calendly.com/kaelynnkinnison"
              width="100%"
              height="700"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-[#F7F2EC] text-center border-t border-[#EADFD4]">
        <img
          src="/hibiscus-logo.png"
          alt="Life Coaching with Kaelynn"
          className="w-48 mx-auto mb-8 rounded-2xl"
        />
        <h3 className="text-3xl font-serif mb-4">Life Coaching with Kaelynn</h3>
        <p className="text-[#5A5550] mb-2">kaelynnkinnison@gmail.com</p>
        <p className="text-[#8A8178] text-sm mt-8">
          © 2026 Life Coaching with Kaelynn. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
