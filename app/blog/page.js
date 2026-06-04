import Link from "next/link";

export const metadata = {
  title: "Core Belief Coaching Blog | Life Coaching with Kaelynn",
  description:
    "Read articles on core beliefs, limiting beliefs, self-worth, confidence, emotional wellness, accountability, personal growth, and lasting transformation with Life Coaching with Kaelynn.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const posts = [
  {
    title: "The Hidden Core Beliefs That May Be Holding You Back",
    category: "Core Beliefs & Mindset",
    description:
      "Explore how deeply held beliefs can shape confidence, choices, relationships, self-worth, and personal growth.",
    link: "/blog/core-beliefs-holding-you-back",
    featured: true,
  },
  {
    title: "The Connection Between Self-Worth and Core Beliefs",
    category: "Self-Worth & Core Beliefs",
    description:
      "Discover how your core beliefs shape confidence, people-pleasing, perfectionism, emotional patterns, and personal growth.",
    link: "/blog/self-worth-and-core-beliefs",
    featured: true,
  },
  {
    title: "Why Healing Is the Foundation of Transformation",
    category: "Healing & Emotional Wellness",
    description:
      "Learn why true change often begins with awareness, self-compassion, emotional healing, and a willingness to grow.",
    link: "/blog/healing-foundation-of-transformation",
    featured: true,
  },
  {
    title: "How Accountability Creates Lasting Change",
    category: "Personal Growth & Accountability",
    description:
      "Discover how structure, support, reflection, and intentional action can help you stay committed to your goals.",
    link: "/blog/accountability-creates-lasting-change",
    featured: false,
  },
  {
    title: "Why Self-Sabotage Happens",
    category: "Core Beliefs & Patterns",
    description:
      "Understand how self-sabotage may be connected to fear, limiting beliefs, self-worth, and old internal patterns.",
    link: "/blog/why-self-sabotage-happens",
    featured: false,
  },
  {
    title: "How to Identify Limiting Beliefs in Daily Life",
    category: "Limiting Beliefs",
    description:
      "Learn how limiting beliefs can show up in your thoughts, habits, decisions, relationships, and emotional responses.",
    link: "/blog/identify-limiting-beliefs",
    featured: false,
  },
  {
    title: "Confidence Starts with What You Believe About Yourself",
    category: "Confidence & Self-Worth",
    description:
      "Explore how confidence grows when you begin shifting the beliefs that shape your identity, choices, and self-trust.",
    link: "/blog/confidence-starts-with-belief",
    featured: false,
  },
  {
    title: "Rewriting the Stories That Hold You Back",
    category: "Personal Growth",
    description:
      "Discover how old internal stories can influence your life and how new beliefs can support growth and transformation.",
    link: "/blog/rewriting-stories-that-hold-you-back",
    featured: false,
  },
];

const categories = [
  "Core Beliefs",
  "Limiting Beliefs",
  "Self-Worth",
  "Confidence",
  "Healing",
  "Emotional Wellness",
  "Accountability",
  "Life Transitions",
  "Personal Growth",
  "Transformation",
];

const startHere = posts.filter((post) => post.featured);
const allPosts = posts;

export default function BlogPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Life Coaching with Kaelynn Blog
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Insights for Healing, Growth, and Core Belief Transformation
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            Explore articles on core beliefs, limiting beliefs, confidence,
            self-worth, emotional wellness, accountability, and personal growth.
            This blog was created to support reflection, clarity, and lasting
            transformation from the inside out.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 md:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Welcome
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            A Space for Reflection, Awareness, and Possibility
          </h2>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Life has a way of presenting moments that challenge us, shape us,
              and invite us to become more than we were yesterday. Sometimes we
              find ourselves searching for answers. Other times, we are simply
              looking for the courage to take the next step.
            </p>

            <p>
              Here you will find insights on mindset, emotional wellness,
              personal development, life transitions, self-discovery, and the
              beliefs that influence the way we experience life.
            </p>

            <p>
              Whether you are navigating change, rebuilding confidence, pursuing
              a meaningful goal, or learning to trust yourself again, my hope is
              that these articles provide encouragement, perspective, and
              practical tools you can carry into everyday life.
            </p>

            <p className="font-semibold text-teal-700">
              Transformation does not happen all at once. It happens through
              awareness, intentional choices, and a willingness to keep moving
              forward.
            </p>

            <p className="font-semibold text-slate-900">
              — Kaelynn Kinnison, Transformational Life Coach
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Start Here
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Foundational Articles for Core Belief Transformation
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              New to core belief work? Begin with these articles to understand
              how beliefs shape confidence, self-worth, healing, and personal
              transformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {startHere.map((post) => (
              <article
                key={post.title}
                className="rounded-3xl border-2 border-teal-700 bg-white p-8 shadow-xl"
              >
                <p className="mb-4 inline-block rounded-full bg-teal-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                  Start Here
                </p>

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  {post.category}
                </p>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {post.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-700">
                  {post.description}
                </p>

                <Link
                  href={post.link}
                  className="font-semibold text-teal-700 hover:underline"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
              Featured Blog Articles
            </p>

            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Explore Healing, Mindset, and Personal Growth
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {allPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                  {post.category}
                </p>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {post.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-700">
                  {post.description}
                </p>

                <Link
                  href={post.link}
                  className="font-semibold text-teal-700 hover:underline"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Explore by Topic
          </p>

          <h2 className="mb-10 text-3xl font-bold text-slate-900 md:text-4xl">
            Topics That Support Healing, Growth, and Transformation
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-white px-5 py-3 font-medium text-slate-700 shadow-sm ring-1 ring-teal-100"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Blog Disclaimer
          </h2>

          <p className="leading-8 text-slate-700">
            Blog content is for educational and personal growth purposes only
            and is not a substitute for therapy, counseling, medical care, or
            mental health treatment. If you are experiencing a mental health
            crisis or need clinical support, please contact a licensed mental
            health professional or emergency service.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Begin Your Own Transformation
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            The Life You Want Begins With the Beliefs You Choose to Change
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-200">
            Schedule your complimentary Discovery Call and explore how coaching
            can support your confidence, self-worth, accountability, and
            personal transformation.
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
