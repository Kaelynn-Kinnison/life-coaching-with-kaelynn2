import Link from "next/link";

export const metadata = {
  title: "The Heal. Grow. Transform. Blog | Life Coaching with Kaelynn",
  description:
    "Explore articles on healing, core belief transformation, mindset, emotional wellness, personal growth, accountability, and life transitions with Transformational Life Coach Kaelynn Kinnison.",
};

export default function BlogPage() {
  const topics = [
    {
      title: "The Hidden Core Beliefs That May Be Holding You Back",
      category: "Core Beliefs & Mindset",
      description:
        "Explore how deeply held beliefs can shape confidence, choices, relationships, and personal growth.",
      {
  title: "The Hidden Core Beliefs That May Be Holding You Back",
  category: "Core Beliefs & Mindset",
  description:
    "Explore how deeply held beliefs can shape confidence, choices, relationships, and personal growth.",
  link: "/blog/core-beliefs-holding-you-back",
    },
    {
      title: "Why Healing Is the Foundation of Transformation",
      category: "Healing & Emotional Wellness",
      description:
        "Learn why true change often begins with awareness, self-compassion, and emotional healing.",
    },
    {
      title: "How Accountability Creates Lasting Change",
      category: "Personal Growth & Accountability",
      description:
        "Discover how structure, support, and intentional action can help you stay committed to your goals.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fdf8f3] text-[#263238]">
      <section className="w-full bg-[#fdf8f3]">
        <img
          src="/blog-banner.png"
          alt="Life Coaching with Kaelynn Heal Grow Transform Blog Banner"
          className="w-full h-auto block"
        />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sm text-[#b07a3c] mb-4">
            Life Coaching with Kaelynn
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-[#1f2d3d] mb-6">
            Welcome to the Blog
          </h1>

          <div className="w-24 h-[2px] bg-[#b07a3c] mx-auto" />
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 leading-8 text-lg">
          <p className="mb-6">Welcome.</p>

          <p className="mb-6">
            Life has a way of presenting us with moments that challenge us,
            shape us, and invite us to become more than we were yesterday.
            Sometimes we find ourselves searching for answers. Other times,
            we're simply looking for the courage to take the next step.
          </p>

          <p className="mb-6">
            This blog was created as a place for reflection, growth, and
            possibility.
          </p>

          <p className="mb-6">
            Here you'll find insights on mindset, emotional wellness, personal
            development, life transitions, self-discovery, and the powerful
            beliefs that influence the way we experience life. Whether you're
            navigating change, rebuilding confidence, pursuing a meaningful
            goal, or learning to trust yourself again, my hope is that these
            articles provide encouragement, perspective, and practical tools you
            can carry into your everyday life.
          </p>

          <p className="mb-6">
            Transformation doesn't happen all at once. It happens through
            awareness, intentional choices, and a willingness to keep moving
            forward.
          </p>

          <p className="mb-6">
            No matter where you are on your journey, you're welcome here.
          </p>

          <p className="font-serif text-2xl text-[#7a4b63]">
            Let's explore what's possible together.
          </p>

          <p className="mt-6 text-[#b07a3c]">
            — Kaelynn Kinnison
            <br />
            Transformational Life Coach
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1f2d3d] mb-4">
            Featured Blog Topics
          </h2>

          <p className="text-lg max-w-2xl mx-auto text-[#5f6f73]">
            Begin with these foundational topics created to support healing,
            growth, clarity, and lasting transformation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {topics.map((topic, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl shadow-md p-8 border border-[#eadfd4]"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#b07a3c] mb-4">
                {topic.category}
              </p>

              <h3 className="text-2xl font-serif text-[#1f2d3d] mb-4">
                {topic.title}
              </h3>

              <p className="text-[#5f6f73] leading-7">{topic.description}</p>
             
               <Link
                href={topic.link}
                className="inline-block mt-4 text-[#7a4b63] font-semibold hover:underline"
                >
                Read More →
</Link>


            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#7a4b63] text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">
          Ready to Begin Your Own Transformation?
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Schedule a complimentary discovery call and let's explore what's
          possible together.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-white text-[#7a4b63] px-8 py-4 rounded-full font-semibold hover:bg-[#fdf8f3] transition"
        >
          Schedule a Discovery Call
        </Link>
      </section>
    </main>
  );
}
