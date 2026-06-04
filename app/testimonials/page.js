import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://www.lifecoachingwithkaelynn.com"),
  title: "Testimonials | Life Coaching with Kaelynn",
  description:
    "Read testimonials and professional feedback reflecting growth, confidence, clarity, accountability, and transformation through Life Coaching with Kaelynn.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const clientTestimonials = [
  {
    quote:
      "Kaelynn helped me gain clarity, confidence, and direction during a season where I felt completely stuck.",
    name: "Growth Coaching Client",
  },
  {
    quote:
      "Through coaching, I learned how to hold myself accountable while still giving myself grace.",
    name: "Signature Coaching Client",
  },
  {
    quote:
      "This coaching experience helped me reconnect with myself and take meaningful steps toward the life I want.",
    name: "Transformation Coaching Client",
  },
];

const trainingFeedback = [
  {
    quote:
      "Kaelynn has a natural ability to listen without judgment while helping people see possibilities they may not see for themselves.",
    name: "Training Participant",
  },
  {
    quote:
      "Kaelynn consistently demonstrated empathy, professionalism, and a genuine desire to help others succeed.",
    name: "Wellness Training Colleague",
  },
  {
    quote:
      "One of Kaelynn’s greatest strengths is her ability to help people feel heard and understood.",
    name: "Coaching Practicum Participant",
  },
  {
    quote:
      "Kaelynn brings warmth, positivity, and accountability into every interaction.",
    name: "Professional Development Participant",
  },
  {
    quote:
      "Her passion for helping others is evident in everything she does.",
    name: "Program Participant",
  },
  {
    quote:
      "Kaelynn encourages growth while meeting people where they are.",
    name: "Peer Training Participant",
  },
];

const transformationThemes = [
  "Clarity",
  "Confidence",
  "Accountability",
  "Self-Worth",
  "Personal Growth",
  "Core Belief Awareness",
  "Emotional Wellness",
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
            Stories of Growth, Confidence, and Transformation
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            A space for client experiences, professional feedback, and
            reflections that represent the heart of Life Coaching with Kaelynn:
            healing, growth, clarity, accountability, and meaningful change.
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
              Real Stories of Support and Growth
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
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

          <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">
            What Clients Often Seek Through Coaching
          </h2>

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
            participation.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin Your Own Transformation
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Ready to Create Your Own Growth Story?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-200">
            Schedule your complimentary Discovery Call and explore how coaching
            can support your confidence, clarity, self-worth, accountability,
            and transformation.
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
              View Programs & Investment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
