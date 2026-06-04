```jsx
import Link from "next/link";

export const metadata = {
  title: "Coaching Programs | Life Coaching with Kaelynn",
  description:
    "Explore coaching programs designed to help you heal, grow, and transform through personalized support, accountability, and Core Belief Transformation Coaching™.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function PackagesPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-widest text-teal-700 font-semibold mb-4">
            Coaching Programs
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Heal. Grow. Transform.
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transformation doesn't happen through information alone.
            It happens when you uncover what is holding you back,
            create a clear path forward, and take consistent action toward
            the life you truly want.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Coaching Designed Around Lasting Transformation
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Every coaching program combines personalized support,
            practical strategies, accountability, and transformational
            coaching techniques to help you build confidence, gain clarity,
            overcome obstacles, and create meaningful change.
          </p>

          <p className="text-lg text-slate-700 mt-6 leading-relaxed">
            All programs begin with a complimentary Discovery Call
            to determine the best fit for your goals and needs.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid gap-10">

          {/* STANDARD */}
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h3 className="text-3xl font-bold mb-2">
              🌱 Growth Coaching Program
            </h3>

            <p className="text-lg text-slate-500 mb-4">
              Standard Coaching Experience
            </p>

            <p className="text-4xl font-bold text-teal-700 mb-8">
              $1,497
            </p>

            <p className="text-slate-700 mb-6">
              Perfect for individuals seeking clarity, confidence,
              accountability, and support while working toward meaningful
              personal or professional goals.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✔ Ten 60-Minute Coaching Sessions</li>
              <li>✔ Personalized Growth Plan</li>
              <li>✔ Goal-Setting Framework</li>
              <li>✔ Weekly Action Steps</li>
              <li>✔ Habit & Progress Tracking</li>
              <li>✔ Accountability Support</li>
              <li>✔ Email Support Between Sessions</li>
            </ul>
          </div>

          {/* SIGNATURE */}
          <div className="bg-white border-4 border-teal-600 rounded-3xl shadow-xl p-10">
            <div className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              MOST POPULAR
            </div>

            <h3 className="text-3xl font-bold mb-2">
              🌿 Heal. Grow. Transform.
            </h3>

            <p className="text-lg text-slate-500 mb-4">
              Signature Coaching Experience
            </p>

            <p className="text-4xl font-bold text-teal-700 mb-8">
              $2,497
            </p>

            <h4 className="text-xl font-semibold mb-4">
              Core Belief Transformation Coaching™
            </h4>

            <p className="text-slate-700 leading-relaxed mb-6">
              Most people know what they want to change.
              What they don't always understand is why they continue to
              repeat the same patterns, struggle with confidence,
              experience self-sabotage, or feel stuck.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              Core Belief Transformation Coaching™ helps uncover and
              transform the limiting beliefs influencing your confidence,
              decisions, relationships, self-worth, and personal growth.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✔ Twelve 60-Minute Coaching Sessions</li>
              <li>✔ Core Belief Discovery Process</li>
              <li>✔ Limiting Belief Assessment</li>
              <li>✔ Personalized Transformation Roadmap</li>
              <li>✔ Goal Setting & Action Planning</li>
              <li>✔ Reflection Exercises</li>
              <li>✔ Habit Tracking</li>
              <li>✔ Accountability Support</li>
              <li>✔ Email Support Between Sessions</li>
              <li>✔ End-of-Program Transformation Review</li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h3 className="text-3xl font-bold mb-2">
              🦋 Premium Transformation Experience
            </h3>

            <p className="text-lg text-slate-500 mb-4">
              VIP Coaching Experience
            </p>

            <p className="text-4xl font-bold text-teal-700 mb-8">
              $4,997
            </p>

            <p className="text-slate-700 mb-6">
              The highest level of coaching support for individuals
              committed to deep personal transformation and meaningful
              change across multiple areas of life.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✔ Sixteen 60-Minute Coaching Sessions</li>
              <li>✔ Personalized Transformation Blueprint</li>
              <li>✔ Weekly Accountability Check-Ins</li>
              <li>✔ Priority Scheduling</li>
              <li>✔ Unlimited Email Support</li>
              <li>✔ Personalized Wellness Planning</li>
              <li>✔ Guided Journal Prompts</li>
              <li>✔ Advanced Habit Tracking</li>
              <li>✔ Progress Monitoring Reviews</li>
              <li>✔ Mid-Week Support Touchpoints</li>
            </ul>
          </div>

          {/* MEMBERSHIP */}
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <h3 className="text-3xl font-bold mb-2">
              🌟 Accountability & Growth Membership
            </h3>

            <p className="text-lg text-slate-500 mb-4">
              Ongoing Coaching Support
            </p>

            <p className="text-4xl font-bold text-teal-700 mb-8">
              $297 / Month
            </p>

            <p className="text-slate-700 mb-6">
              Continue your growth and maintain momentum after completing
              a coaching program.
            </p>

            <ul className="space-y-2 text-slate-700">
              <li>✔ One Monthly Coaching Session</li>
              <li>✔ Monthly Goal Review</li>
              <li>✔ Accountability Check-Ins</li>
              <li>✔ Habit Tracking Support</li>
              <li>✔ Email Support</li>
              <li>✔ Growth Resources</li>
            </ul>
          </div>

        </div>
      </section>

      {/* DISCOVERY CALL */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Complimentary Discovery Call
          </h2>

          <p className="text-lg text-slate-700 mb-8">
            A free 30-minute consultation designed to discuss your goals,
            challenges, and determine which coaching program is the best fit
            for your journey.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Schedule Your Free Discovery Call
          </Link>
        </div>
      </section>

    </main>
  );
}
```
