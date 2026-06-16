import Link from "next/link";

export const metadata = {
  title: "Contact & Booking | Life Coaching with Kaelynn",
  description:
    "Schedule a Discovery Call with Life Coaching with Kaelynn and take the first step toward clarity, confidence, and your next chapter.",
};

const email = "hello@lifecoachingwithkaelynn.com";
const phone = "402-799-8166";
const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const callSteps = [
  "Share what has been feeling heavy, stuck, or unclear",
  "Talk through what you want to change or create",
  "Ask questions about coaching and the program options",
  "Decide whether working together feels like the right fit",
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
            Take the first supported step toward your next chapter.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
            If something in you is ready for clarity, confidence, and meaningful
            change, a Discovery Call is a gentle place to begin.
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
              A conversation before a commitment.
            </h2>

            <p className="mt-5 leading-8 text-[#6f5a4d]">
              This call is a calm, no-pressure space to talk about where you
              are, what you are hoping for, and whether coaching is the right
              support for your season.
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
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-5 text-sm leading-7 text-[#f7efe8]">
              Coaching is not crisis support. If you are in immediate danger or
              experiencing a mental health crisis, please contact emergency
              services or a licensed crisis resource in your area.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
