import Image from "next/image";

export default function About() {
  return (
    <main className="bg-[#fdf8f3]">
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/kaelynn-portrait.png"
            alt="Kaelynn Kinnison"
            width={450}
            height={550}
            className="rounded-3xl shadow-xl object-cover mx-auto"
          />

          <div>
            <p className="uppercase tracking-[0.25em] text-[#9b6f5f] text-sm mb-3">
              About Kaelynn
            </p>

            <h1 className="text-5xl font-bold mb-6">Meet Kaelynn Kinnison</h1>

<p className="text-[#6b4b43] leading-relaxed mb-4">
  Hi, I'm Kaelynn Kinnison.
</p>

<p className="text-[#6b4b43] leading-relaxed mb-4">
  I am passionate about helping people discover their strengths,
  overcome challenges, and create meaningful transformation in
  their lives. I believe every individual has the ability to heal,
  grow, and move forward with greater confidence, clarity, and purpose.
</p>

<p className="text-[#6b4b43] leading-relaxed mb-4">
  My coaching approach combines compassion, accountability,
  and personal development to support clients through life's
  challenges, transitions, and opportunities for growth.
  I strive to create a supportive, non-judgmental space where
  clients feel heard, encouraged, and empowered to take meaningful
  steps toward their goals.
</p>

<p className="text-[#6b4b43] leading-relaxed mb-4">
  In addition to my life coaching work, I have earned a Health and
  Wellness Coaching Certificate and am currently in my second year
  of studying Psychology in college. These experiences have strengthened
  my understanding of human behavior, personal growth, mindset development,
  and the powerful connection between mental, emotional, and physical well-being.
</p>

<p className="text-[#6b4b43] leading-relaxed mb-4">
  One of my core beliefs is that no problem is too big, especially when
  you don't have to face it alone. While we cannot always control life's
  circumstances, we can develop the tools, resilience, and confidence
  needed to navigate them.
</p>

<p className="text-[#6b4b43] leading-relaxed">
  Whether you are seeking healing, personal growth, greater confidence,
  accountability, or support through a life transition, I am committed
  to helping you move forward with purpose and possibility. Together,
  we can create the next chapter of your journey.
</p>
        </div>
      </section>
    </main>
  );
}
