import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about life coaching, discovery calls, coaching programs, accountability coaching, Core Belief Transformation Coaching, pricing, and what it's like to work with Kaelynn Kinnison.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQ() {
  const faqs = [
    {
      question: "What is life coaching?",
      answer:
        "Life coaching is a supportive, forward-focused process that helps you gain clarity, set meaningful goals, overcome obstacles, and take intentional steps toward personal growth and transformation.",
    },
    {
      question: "How is coaching different from therapy?",
      answer:
        "Therapy often focuses on diagnosing and treating mental health concerns or processing past trauma. Life coaching focuses on personal growth, goal setting, accountability, mindset development, and moving forward. Coaching is not a replacement for therapy or mental health treatment.",
    },
    {
      question: "Who is life coaching for?",
      answer:
        "Life coaching can support individuals who feel stuck, overwhelmed, uncertain, or ready for change. It may be helpful if you are seeking clarity, confidence, accountability, emotional wellness, healing, or support during a life transition.",
    },
    {
      question: "What can I expect during a coaching session?",
      answer:
        "You can expect a supportive conversation focused on your goals, challenges, mindset, and next steps. Sessions may include reflection, action planning, accountability, encouragement, and practical strategies to help you move forward.",
    },
    {
      question: "Do you offer virtual coaching?",
      answer:
        "Yes. Coaching sessions can be offered virtually, making it easier to receive support from a comfortable and convenient location.",
    },
    {
      question: "Which package is right for me?",
      answer:
        "If you are new to coaching, begin with a complimentary Confidence Clarity Call. The one-time session supports one focused issue, The Confidence Rebuild offers a concentrated 12-week experience, and The Confidence Reclamation provides 16 weeks of high-touch support for deeper, interconnected patterns. The Growth Membership is reserved for coaching alumni.",
    },
    {
      question: "What is a Complimentary Confidence Clarity Call?",
      answer:
        "It is a free, no-pressure conversation to identify where self-doubt is showing up, clarify what you want to change, ask questions, and determine which coaching option best fits your needs.",
    },
    {
      question: "How does between-session support work?",
      answer:
        "Support is available by phone, chat, email, or text between 8:00 a.m. and 10:00 p.m. CT. The Confidence Reclamation includes priority support with replies generally within one hour during those hours. Coaching support is not emergency or crisis care.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes. The Confidence Rebuild is $1,997 paid in full or three monthly payments of $699. The Confidence Reclamation is $2,997 paid in full or four monthly payments of $799. The first payment is due at enrollment, and the remaining payments are automatically charged every 30 days. Choosing a payment plan is a commitment to the full program investment.",
    },
    {
      question: "Can I participate in coaching while I am in therapy?",
      answer:
        "Yes. Coaching can complement therapy when each has a clear role. Coaching is forward-focused and does not replace mental-health treatment, diagnosis, or crisis support.",
    },
    {
      question: "Is coaching confidential?",
      answer:
        "Coaching conversations are treated with care, respect, and privacy. Your personal goals, experiences, and challenges are held in a supportive and non-judgmental space.",
    },
  ];

  return (
    <main className="bg-[#fdf8f3] text-[#3f2f2a]">
      <section className="px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
            FAQ
          </p>

          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-[#6b4b43] leading-relaxed">
            Learn more about life coaching, what to expect, and how coaching can
            support your healing, growth, and transformation.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-[#fdf8f3] rounded-3xl shadow-md p-8"
            >
              <h2 className="text-2xl font-bold mb-4">{faq.question}</h2>
              <p className="text-[#6b4b43] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 text-center bg-[#7b4f43] text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>

          <p className="text-lg mb-8 text-[#f7e9df]">
            Your complimentary Confidence Clarity Call is a supportive place to
            name what you want to change and decide whether coaching fits.
          </p>

          <Link
            href="/contact#book"
            className="bg-white text-[#7b4f43] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e8df]"
          >
            Book Your Complimentary Clarity Call
          </Link>
        </div>
      </section>
    </main>
  );
}
