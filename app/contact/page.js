const email = "hello@lifecoachingwithkaelynn.com";
const phone = "402-799-8166";
const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function Contact() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contact & Booking
        </h1>

        <p className="text-lg leading-8 max-w-3xl mb-8">
          Ready to take the next step? Schedule a free discovery call to explore
          your goals, your current season, and how coaching can support your
          healing, growth, and transformation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white border border-[#eadfd5] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Book a Free Discovery Call
            </h2>

            <p className="leading-7 mb-6">
              Use my Google Calendar booking page to choose a time that works
              for you. Your appointment will include a Google Meet link once
              scheduled.
            </p>

            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#3f342c] px-6 py-3 text-white font-semibold hover:bg-[#5a4a3f] transition"
            >
              Schedule Through Google Calendar
            </a>
          </div>

          <div className="rounded-2xl bg-white border border-[#eadfd5] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>

            <p className="mb-3">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${phone}`} className="underline">
                {phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
