export default function Contact() {
  const calendlyUrl = "https://calendly.com/kaelynnkinnison/clarity-appointment";

  return (
    <main className="bg-[#fdf8f3]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Contact
          </p>

          <h1 className="text-5xl font-bold mb-6">Contact Kaelynn</h1>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            Ready to begin your healing, growth, and transformation journey?
            Reach out today or schedule your clarity appointment below.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="max-w-3xl mx-auto text-center bg-[#fdf8f3] rounded-3xl shadow-lg p-8">
          <p className="text-2xl font-bold mb-4">Kaelynn Kinnison</p>

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
      </section>

      <section id="book" className="px-6 py-20 bg-[#f5e8df] text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            Schedule Your Appointment
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Book a Clarity Appointment
          </h2>

          <p className="text-[#6b4b43] max-w-3xl mx-auto mb-10">
            Your clarity appointment is a supportive conversation designed to
            help you discuss your goals, ask questions, and decide which
            coaching option is the best fit for you.
          </p>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <iframe
              src={calendlyUrl}
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a clarity appointment with Kaelynn"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
