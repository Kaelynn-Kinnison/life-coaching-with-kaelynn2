export const metadata = {
  title: "When Hope Feels Lost",
  description:
    "A coaching article about hopelessness, limiting beliefs, emotional wellness, and finding hope through healing, growth, and transformation.",
  alternates: {
    canonical: "/blog/when-hope-feels-lost",
  },
};

const bookingUrl = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export default function WhenHopeFeelsLostPage() {
  return (
    <main className="min-h-screen bg-white text-slate-700">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <a
            href="/blog"
            className="inline-flex rounded-full border border-teal-200 px-5 py-2 text-sm font-semibold text-teal-700 transition hover:border-teal-500 hover:bg-teal-50"
          >
            Back to Blog
          </a>

          <div className="mt-10 rounded-3xl border border-teal-100 bg-white p-8 shadow-sm sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Emotional Wellness
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              When Hope Feels Lost
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Hopelessness can make the future feel closed, heavy, and painfully
              out of reach. But feeling hopeless does not mean you are without
              options. It may mean your heart, mind, and nervous system are
              asking for care, support, and a new way forward.
            </p>
          </div>
        </div>
      </section>

      <article className="px-6 pb-20">
        <div className="mx-auto max-w-4xl space-y-10">
          <section className="rounded-3xl bg-slate-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Have You Ever Felt Like Giving Up?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              <p>
                There are moments in life when everything feels like too much.
                You may be tired of trying, tired of hoping, or tired of
                carrying pain that other people cannot see. Maybe you have done
                everything you know to do, but nothing seems to change.
              </p>
              <p>
                If you have ever felt this way, you are not broken. You are
                human. Hopelessness often rises when we have been overwhelmed
                for too long without enough rest, clarity, safety, or support.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Understanding Hopelessness
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              <p>
                Hopelessness can feel like a final answer, but it is often a
                signal. It may be pointing to exhaustion, disappointment, grief,
                unmet needs, or an old story that has gone unchallenged for too
                long.
              </p>
              <p>
                In coaching, we do not shame the hopeless feeling. We slow down
                enough to understand what it is trying to protect you from and
                what it may be asking you to heal.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-teal-50 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              The Connection Between Core Beliefs and Despair
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              <p>
                Sometimes despair is intensified by limiting beliefs that feel
                true because they have been repeated internally for years. These
                beliefs might sound like, &quot;Nothing ever works out for
                me,&quot; &quot;I am too far behind,&quot; or &quot;I will
                always feel this way.&quot;
              </p>
              <p>
                Those thoughts can shape how you interpret setbacks, choices,
                relationships, and your own worth. When they remain unchecked,
                they can make temporary pain feel permanent.
              </p>
            </div>
          </section>

          <section className="rounded-3xl bg-teal-700 p-8 text-white shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold">Confidence Clarity Call CTA</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-teal-50">
              If you are ready to explore what is keeping you stuck and begin
              moving toward healing and transformation, I would be honored to
              support you.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={bookingUrl}
                className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-700 transition hover:bg-teal-50"
              >
                Book Your Complimentary Clarity Call
              </a>
              <a
                href="/blog"
                className="inline-flex justify-center rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-600"
              >
                Back to Blog
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
