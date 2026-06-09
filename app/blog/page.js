import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Core Belief Coaching Blog | Life Coaching with Kaelynn",
  description:
    "Read professional coaching articles on core beliefs, limiting beliefs, self-worth, confidence, emotional wellness, accountability, personal growth, and lasting transformation.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const categories = [
  "Core Beliefs",
  "Limiting Beliefs",
  "Self-Worth",
  "Confidence",
  "Healing",
  "Emotional Wellness",
  "Accountability",
  "Relationships",
  "Life Transitions",
  "Personal Growth",
];

export default function BlogPage() {
  const featuredPosts = posts.filter((post) => post.featured && post.published);
  const publishedPosts = posts.filter(
    (post) => !post.featured && post.published
  );
  const comingSoonPosts = posts.filter((post) => !post.published);

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
            Explore professional coaching articles on core beliefs, limiting
            beliefs, confidence, self-worth, emotional wellness, accountability,
            and personal growth.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/core-belief-coaching"
              className="rounded-full bg-teal-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-teal-800"
            >
              Learn About Core Belief Coaching
            </Link>

            <Link
              href={bookingLink}
              target="_blank"
              className="rounded-full border border-teal-700 px-8 py-4 font-semibold text-teal-800 transition hover:bg-teal-50"
            >
              Schedule Your Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 md:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            Welcome
          </p>

          <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
            A Professional Resource for Reflection and Personal Growth
          </h2>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              This blog was created as a resource for individuals who want to
              better understand themselves, recognize limiting beliefs, build
              confidence, and create meaningful personal change.
            </p>

            <p>
              Here you will find articles focused on core belief transformation,
              emotional wellness, mindset, self-worth, accountability, life
              transitions, and practical growth tools.
            </p>

            <p className="font-semibold text-teal-700">
              Transformation does not happen all at once. It begins with
              awareness, intentional choices, and the willingness to keep moving
              forward.
            </p>

            <p className="font-semibold text-slate-900">
              — Kaelynn Kinnison, Transformational Life Coach
            </p>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
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
                New to core belief work? Begin with these published cornerstone
                articles.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
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
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-teal-700 hover:underline"
                  >
                    Read Article →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {publishedPosts.length > 0 && (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                More Articles
              </p>

              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Continue Exploring Healing, Mindset, and Growth
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {publishedPosts.map((post) => (
                <article
                  key={post.slug}
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
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-teal-700 hover:underline"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {comingSoonPosts.length > 0 && (
        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                Coming Soon
              </p>

              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Upcoming Articles
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                These articles are being developed and will be added to the blog
                soon.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {comingSoonPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-md opacity-90"
                >
                  <div className="mb-4">
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                      Coming Soon
                    </span>
                  </div>

                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                    {post.category}
                  </p>

                  <h3 className="mb-4 text-xl font-bold text-slate-900">
                    {post.title}
                  </h3>

                  <p className="mb-6 leading-7 text-slate-700">
                    {post.description}
                  </p>

                  <span className="inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                    Article Coming Soon
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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
