import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Core Belief Coaching Blog | Life Coaching with Kaelynn",
  description:
    "Read professional coaching articles on core beliefs, limiting beliefs, self-worth, confidence, emotional wellness, accountability, personal growth, and lasting transformation.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

const categories = [
  "Healing Patterns",
  "Support & Growth",
  "Trauma-Informed Growth",
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
  const spotlightPost = posts.find((post) => post.spotlight && post.published);
  const featuredPosts = posts.filter((post) => post.featured && post.published);
  const publishedPosts = posts.filter(
    (post) => !post.featured && !post.spotlight && post.published
  );
  const comingSoonPosts = posts.filter((post) => !post.published);

  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 pb-16 pt-14 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#9b6f5d]">
              Life Coaching with Kaelynn Blog
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#3f342c] md:text-6xl">
              Insights for Healing, Growth, and Core Belief Transformation
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
              Read grounded, compassionate coaching articles about confidence,
              self-worth, emotional wellness, accountability, and the beliefs
              that shape how you move through life.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/core-belief-coaching"
                className="inline-flex justify-center rounded-full bg-[#0f766e] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
              >
                Learn About Core Belief Coaching
              </Link>

              <Link
                href={bookingLink}
                target="_blank"
                className="inline-flex justify-center rounded-full border border-[#0f766e] bg-white/70 px-7 py-4 text-sm font-bold text-[#0f766e] transition hover:bg-white"
              >
                Schedule Your Free Discovery Call
              </Link>
            </div>
          </div>

          {spotlightPost && (
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-[#8b6f5c]/20 ring-1 ring-[#eadfd5]">
              <div className="bg-[#f7efe8] p-3 sm:p-4">
                <img
                  src="/life-coaching-hero.png"
                  alt="A woman walking a mountain path at sunrise"
                  className="h-72 w-full rounded-[1.4rem] object-cover object-center sm:h-80"
                />
              </div>

              <div className="border-t border-[#eadfd5] p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b6f5d]">
                  Featured Article
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-tight text-[#3f342c]">
                  {spotlightPost.title}
                </h2>
                <p className="mt-3 leading-7 text-[#6f5a4d]">
                  {spotlightPost.description}
                </p>
                <Link
                  href={`/blog/${spotlightPost.slug}`}
                  className="mt-5 inline-flex rounded-full bg-[#0f766e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#115e59]"
                >
                  Read the Article
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl border-y border-[#eadfd5] py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9b6f5d]">
            Welcome
          </p>

          <div className="mt-5 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-bold leading-tight text-[#3f342c] md:text-4xl">
              A resource for reflection and personal growth.
            </h2>

            <div className="space-y-5 text-lg leading-8 text-[#6f5a4d]">
              <p>
                This blog was created for people who want to better understand
                themselves, recognize limiting beliefs, build confidence, and
                create meaningful personal change.
              </p>

              <p>
                Transformation does not happen all at once. It begins with
                awareness, intentional choices, and the willingness to keep
                moving forward.
              </p>

              <p className="font-semibold text-[#3f342c]">
                Kaelynn Kinnison, Transformational Life Coach
              </p>
            </div>
          </div>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#9b6f5d]">
                Start Here
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#3f342c] md:text-4xl">
                Foundational Articles for Core Belief Transformation
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="flex h-full flex-col rounded-2xl border border-[#eadfd5] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                    {post.category}
                  </p>

                  <h3 className="text-xl font-bold leading-snug text-[#3f342c]">
                    {post.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-[#6f5a4d]">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 font-semibold text-[#0f766e] hover:underline"
                  >
                    Read Article -&gt;
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {publishedPosts.length > 0 && (
        <section className="bg-white px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#9b6f5d]">
                More Articles
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#3f342c] md:text-4xl">
                Continue Exploring Healing, Mindset, and Growth
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {publishedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="flex h-full flex-col rounded-2xl border border-[#eadfd5] bg-[#fdf8f3] p-6 transition hover:border-[#d6c5b7] hover:bg-white hover:shadow-lg"
                >
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                    {post.category}
                  </p>

                  <h3 className="text-xl font-bold leading-snug text-[#3f342c]">
                    {post.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-[#6f5a4d]">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 font-semibold text-[#0f766e] hover:underline"
                  >
                    Read More -&gt;
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {comingSoonPosts.length > 0 && (
        <section className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#9b6f5d]">
                Coming Soon
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#3f342c] md:text-4xl">
                Upcoming Articles
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {comingSoonPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-[#eadfd5] bg-white/70 p-6 opacity-80"
                >
                  <span className="inline-flex rounded-full bg-[#f3e3d8] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#8b6f5c]">
                    Coming Soon
                  </span>

                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">
                    {post.category}
                  </p>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-[#3f342c]">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#6f5a4d]">
                    {post.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl border-y border-[#eadfd5] py-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#9b6f5d]">
            Explore by Topic
          </p>

          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[#3f342c] md:text-4xl">
            Topics That Support Healing, Growth, and Transformation
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[#eadfd5] bg-white px-5 py-3 text-sm font-semibold text-[#6f5a4d]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3f342c] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#f7d7c7]">
              Begin Your Own Transformation
            </p>

            <h2 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
              The life you want begins with the beliefs you choose to change.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f7efe8]">
              Schedule your complimentary Discovery Call and explore how
              coaching can support your confidence, self-worth, accountability,
              and personal transformation.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href={bookingLink}
              target="_blank"
              className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-[#3f342c] transition hover:bg-[#f7efe8]"
            >
              Schedule Your Free Discovery Call
            </Link>

            <Link
              href="/pricing"
              className="inline-flex justify-center rounded-full border border-white px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#3f342c]"
            >
              View Programs & Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-sm leading-7 text-[#6f5a4d]">
          <p className="font-bold text-[#3f342c]">Blog Disclaimer</p>
          <p className="mt-2">
            Blog content is for educational and personal growth purposes only
            and is not a substitute for therapy, counseling, medical care, or
            mental health treatment. If you are experiencing a mental health
            crisis or need clinical support, please contact a licensed mental
            health professional or emergency service.
          </p>
        </div>
      </section>
    </main>
  );
}
