import Link from "next/link";

export const metadata = {
  title: "Contact Kaelynn",
  description:
    "Schedule a Discovery Call with Nebraska-based life coach Kaelynn for virtual coaching that supports clarity, confidence, and your next chapter.",
};

const email = "hello@lifecoachingwithkaelynn.com";
const phone = "402-799-8166";
const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";
const facebookLink = "https://www.facebook.com/Lifecoachingwithkaelynn";
const linkedinLink = "https://www.linkedin.com/in/lifecoachingwithkaelynn";

const callSteps = [
  "Share what brings you here",
  "Ask questions about coaching",
  "Choose the next best step",
];

export default function Contact() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Contact & Booking
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Let us start with a conversation.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
            I am based in Nebraska and offer virtual coaching for women of all
            ages. A Discovery Call is a simple place to see if coaching feels
            like the right fit.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-[#8b6f5c]/10 ring-1 ring-[#eadfd5] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
              Schedule a Discovery Call
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight">
              A conversation before any commitment.
            </h2>

            <p className="mt-5 leading-8 text-[#6f5a4d]">
              This is a calm, no-pressure space to talk about what you need and
              what kind of support may help.
            </p>

            <div className="mt-7 grid gap-3">
              {callSteps.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f7efe8] p-4 leading-7 text-[#5f4c41]"
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              href={bookingLink}
              target="_blank"
              className="mt-8 inline-flex rounded-full bg-[#0f766e] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
            >
              Schedule a Discovery Call
            </Link>
          </div>

          <div className="rounded-[2rem] bg-[#3f342c] p-8 text-white shadow-xl shadow-[#3f342c]/20 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f7d7c7]">
              Get in Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight">
              Prefer to reach out directly?
            </h2>

            <p className="mt-5 leading-8 text-[#f7efe8]">
              You are welcome to email or call with questions before scheduling
              a Discovery Call.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d7c7]">
                  Email
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-2 inline-flex text-lg font-semibold underline decoration-[#f7d7c7]/60 underline-offset-4"
                >
                  {email}
                </a>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d7c7]">
                  Phone
                </p>
                <a
                  href={`tel:${phone}`}
                  className="mt-2 inline-flex text-lg font-semibold underline decoration-[#f7d7c7]/60 underline-offset-4"
                >
                  {phone}
                </a>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d7c7]">
                  Facebook
                </p>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-lg font-semibold underline decoration-[#f7d7c7]/60 underline-offset-4"
                >
                  Life Coaching with Kaelynn
                </a>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f7d7c7]">
                  LinkedIn
                </p>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-lg font-semibold underline decoration-[#f7d7c7]/60 underline-offset-4"
                >
                  Life Coaching with Kaelynn
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm leading-7 text-[#f7efe8]">
              Coaching is not crisis support. If you are in immediate danger or
              experiencing a mental health crisis, please contact emergency
              services or a licensed crisis resource in your area.
            </div>
          </div>
        </div>
      </section>

      <section id="privacy-policy" className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-lg shadow-[#8b6f5c]/10 ring-1 ring-[#eadfd5] md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Privacy & Confidentiality Disclosure
          </p>

          <h2 className="text-3xl font-bold leading-tight">
            Your privacy matters.
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-[#6f5a4d]">
            <p>
              Information you share when contacting me, scheduling a Discovery
              Call, or participating in coaching is treated with care and
              respect. Coaching conversations are held in a supportive,
              non-judgmental space.
            </p>

            <p>
              I may use the information you provide to respond to inquiries,
              schedule calls, communicate about coaching, and provide coaching
              support. This website may also use analytics tools, including
              Google Analytics, to understand general website activity and
              improve the visitor experience.
            </p>

            <p>
              Personal information is not sold. Confidentiality may have limits
              if there is a concern about safety, legal requirements, or risk of
              harm. Coaching is not therapy, medical care, mental health
              treatment, or crisis support.
            </p>

            <p>
              If you have questions about privacy or confidentiality, you may
              contact me at{" "}
              <a
                href={`mailto:${email}`}
                className="font-semibold text-[#0f766e] underline decoration-[#0f766e]/40 underline-offset-4"
              >
                {email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
