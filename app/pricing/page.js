import Link from "next/link";

export const metadata = {
  title: "Programs & Investment | Life Coaching with Kaelynn",
  description:
    "Explore coaching program investments, founding client rates, and free discovery call options with Life Coaching with Kaelynn.",
};

const bookingLink = "https://calendar.app.google/YdUEyKBPG7xa4ox99";
const promotionDate = "July 31, 2026";

const programs = [
  {
    name: "Free Discovery Call",
    duration: "20-30 minutes",
    investment: "Free",
    foundingRate: null,
    description:
      "A supportive first conversation to talk through your goals, questions, and whether coaching is the right fit.",
  },
  {
    name: "Clarity & Confidence Accelerator",
    duration: "8-week coaching experience",
    investment: "$697",
    foundingRate: "$497",
    description:
      "For women who feel stuck, overwhelmed, or uncertain about what comes next and want direction, confidence, and momentum.",
  },
  {
    name: "The Next Chapter Transformation",
    duration: "12-week signature coaching experience",
    investment: "$997",
    foundingRate: "$747",
    description:
      "For women ready to transform old patterns, rebuild self-worth, and move into a more intentional next chapter.",
    featured: true,
  },
  {
    name: "Reclaim Her VIP Experience",
    duration: "6-month private coaching experience",
    investment: "$1,497",
    foundingRate: "$1,197",
    description:
      "For women who want the deepest private coaching support, spacious transformation, and continued implementation.",
  },
  {
    name: "Growth Membership",
    duration: "Monthly membership",
    investment: "$147/month",
    foundingRate: "$97/month",
    description:
      "For women who want continued encouragement, coaching, and accountability as they keep growing.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#fdf8f3] text-[#3f342c]">
      <section className="px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Programs & Investment
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Coaching support with clear starting investment.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6f5a4d] md:text-xl">
            Each coaching experience is designed to support clarity,
            confidence, self-worth, accountability, and meaningful personal
            growth. Final recommendations are discussed during your free
            Discovery Call.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 rounded-[2rem] border-2 border-[#b7835f] bg-[#fffaf5] p-8 text-center shadow-2xl shadow-[#8b6f5c]/15">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9b6f5d]">
              * * * Limited Founding Client Offer * * *
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Introductory coaching rates are available through {promotionDate}.
            </h2>
            <p className="mx-auto mt-5 max-w-4xl text-lg font-bold leading-8 text-[#6f5a4d]">
              I am currently accepting a limited number of founding clients at
              an introductory rate in exchange for honest feedback, a
              testimonial, and permission to feature the coaching experience in
              my portfolio where appropriate.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.name}
                className={`rounded-[2rem] bg-white p-8 shadow-lg shadow-[#8b6f5c]/10 ring-1 ${
                  program.featured ? "ring-2 ring-[#b7835f]" : "ring-[#eadfd5]"
                }`}
              >
                {program.featured && (
                  <p className="mb-5 inline-block rounded-full bg-[#b7835f] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    Signature Program
                  </p>
                )}

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9b6f5d]">
                  {program.duration}
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight">
                  {program.name}
                </h2>

                <div className="mt-6 rounded-2xl bg-[#f7efe8] p-5">
                  <p className="text-base font-black uppercase tracking-[0.18em] text-[#6f5a4d]">
                    Investment Starts At
                  </p>
                  <p className="mt-2 text-5xl font-black">
                    {program.investment}
                  </p>
                  {program.foundingRate && (
                    <p className="mt-3 text-lg font-bold leading-7 text-[#6f5a4d]">
                      Founding client rate may be available from{" "}
                      {program.foundingRate}.
                    </p>
                  )}
                </div>

                <p className="mt-6 leading-8 text-[#6f5a4d]">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7efe8] px-6 py-20 text-center md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9b6f5d]">
            Start With a Conversation
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Your Discovery Call is free.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5a4d]">
            We can talk through your goals, your current season, and which level
            of support feels aligned before you choose a coaching package.
          </p>

          <Link
            href={bookingLink}
            target="_blank"
            className="mt-9 inline-flex rounded-full bg-[#0f766e] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-[#115e59]"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
