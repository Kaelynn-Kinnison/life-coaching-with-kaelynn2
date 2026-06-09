```jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";

export async function generateMetadata({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found | Life Coaching with Kaelynn",
    };
  }

  return {
    title: `${post.title} | Life Coaching with Kaelynn`,
    description: post.description,
  };
}

export default function BlogArticlePage({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-b from-teal-50 via-white to-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
            {post.category}
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            {post.title}
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
            {post.description}
          </p>
        </div>
      </section>

      <article className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-8 text-slate-700">
          {post.content?.map((section, index) => {
            if (section.type === "heading") {
              return (
                <h2
                  key={index}
                  className="pt-6 text-3xl font-bold text-slate-900"
                >
                  {section.text}
                </h2>
              );
            }

            if (section.type === "paragraph") {
              return <p key={index}>{section.text}</p>;
            }

            return null;
          })}
        </div>
      </article>

      <section className="bg-slate-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
            Ready to Go Deeper?
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Change Begins When You Understand the Belief Behind the Pattern
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-200">
            Schedule your complimentary Discovery Call and explore how coaching
            can support your confidence, self-worth, accountability, and
            transformation.
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
              href="/blog"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
```
