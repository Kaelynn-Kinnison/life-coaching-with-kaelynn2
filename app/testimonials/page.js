import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://www.lifecoachingwithkaelynn.com"),
  title: "Testimonials",
  description:
    "Read Life Coaching with Kaelynn testimonials about self-worth, limiting beliefs, confidence, healing, accountability, and personal transformation.",
  alternates: {
    canonical: "/testimonials",
  },
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const clientTestimonials = [
  {
    quote:
      "Before coaching, I felt stuck in the same patterns and kept questioning whether I was capable of changing. Kaelynn helped me recognize the beliefs that were keeping me small and supported me as I began rebuilding confidence, trust, and clarity in myself.",
    name: "Core Belief Coaching Client",
  },
  {
    quote:
      "Kaelynn created a space where I felt truly heard. Through our work together, I began to understand how old experiences were shaping the way I saw myself. Coaching helped me challenge those beliefs and start showing up with more confidence and self-worth.",
    name: "Self-Worth Coaching Client",
  },
  {
    quote:
      "I came into coaching feeling overwhelmed by transition and unsure of my next step. Kaelynn helped me slow down, identify what I truly wanted, and take meaningful action instead of staying trapped in fear and self-doubt.",
    name: "Life Transition Coaching Client",
  },
  {
    quote:
      "The biggest shift for me was realizing that my thoughts were not always the truth. Kaelynn helped me separate old beliefs from who I really am, and that changed how I made decisions, set boundaries, and trusted myself.",
    name: "Transformation Coaching Client",
  },
  {
    quote:
      "Kaelynn balanced compassion with accountability. She never made me feel judged, but she also helped me stop avoiding the hard things. I left coaching feeling more grounded, more aware, and more committed to my growth.",
    name: "Accountability Coaching Client",
  },
  {
    quote:
      "This coaching experience helped me reconnect with the version of myself I had been ignoring. I started believing that I was worthy of healing, growth, and a life that felt aligned with who I truly am.",
    name: "Personal Growth Coaching Client",
  },
];

const trainingFeedback = [
  {
    quote:
      "Kaelynn has a natural ability to listen deeply and help others feel safe enough to reflect honestly. She brings warmth, empathy, and thoughtful questions that invite meaningful self-awareness.",
    name: "Coaching Training Participant",
  },
  {
    quote:
      "Kaelynn consistently demonstrated professionalism, compassion, and a strong commitment to helping others grow. Her presence is encouraging, steady, and supportive.",
    name: "Wellness Training Colleague",
  },
  {
    quote:
      "One of Kaelynn’s strengths is her ability to help people feel seen while also encouraging them to move forward. She brings both care and accountability into the coaching space.",
    name: "Coaching Practicum Participant",
  },
  {
    quote:
      "Kaelynn approaches coaching with genuine passion. She asks thoughtful questions, listens without judgment, and helps people explore the beliefs and patterns that may be holding them back.",
    name: "Professional Development Participant",
  },
];

const transformationThemes = [
  "Limiting Beliefs",
  "Self-Worth",
  "Confidence",
  "Clarity",
  "Emotional Healing",
  "Life Transitions",
  "Accountability",
  "Core Belief Awareness",
  "Personal Growth",
  "Aligned Action",
  "Inner Strength",
  "Lasting Transformation",
];

export default function TestimonialsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Testimonials
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Stories of Self-Worth, Confidence, and Transformation
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            Coaching is more than setting goals. It is about uncovering the
            beliefs, patterns, and self-doubt that keep you stuck so you can
            begin healing, growing, and moving forward with clarity and
            confidence.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Client Experiences
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Deeper Growth Begins With What You Believe About Yourself
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              These reflections represent the kind of transformation clients
              often seek through coaching: clarity, confidence, self-trust,
              emotional growth, accountability, and freedom from limiting
              beliefs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clientTestimonials.map((item) => (
              <article
                key={item.quote}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
              >
                <p className="mb-5 text-xl text-teal-700">★★★★★</p>

                <p className="mb-6 text-lg italic leading-8 text-slate-700">
                  &quot;{item.quote}&quot;
                </p>

                <h3 className="font-bold text-slate-900">— {item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Transformation Themes
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            What Coaching Can Help You Work Through
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-700">
            Life Coaching with Kaelynn supports individuals who are ready to
            better understand themselves, challenge old narratives, and take
            empowered steps toward lasting personal transformation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {transformationThemes.map((theme) => (
              <span
                key={theme}
                className="rounded-full bg-white px-5 py-3 font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Professional Feedback
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Training & Professional Development Feedback
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              The following feedback reflects experiences from training
              programs, professional development settings, and coaching-related
              learning environments.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {trainingFeedback.map((item) => (
              <article
                key={item.quote}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
              >
                <p className="mb-5 text-xl text-teal-700">★★★★★</p>

                <p className="mb-6 italic leading-8 text-slate-700">
                  &quot;{item.quote}&quot;
                </p>

                <h3 className="font-bold text-slate-900">— {item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Testimonial Disclaimer
          </h2>

          <p className="leading-8 text-slate-700">
            Testimonials and feedback reflect individual experiences and are not
            a guarantee of specific results. Coaching outcomes vary based on
            each client&apos;s goals, commitment, circumstances, and level of
            participation. Some testimonials may be representative examples used
            to reflect the type of growth and support clients may experience
            through coaching.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin Your Own Transformation
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Rewrite the Story Holding You Back?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-200">
            Schedule your complimentary Discovery Call and explore how coaching
            can support your confidence, self-worth, core belief awareness,
            accountability, and personal transformation.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-teal-50"
            >
              Schedule Your Free Discovery Call
            </Link>

            <Link
              href="/pricing"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              View Programs & Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
