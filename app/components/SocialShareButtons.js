"use client";

import { usePathname } from "next/navigation";

const siteUrl = "https://www.lifecoachingwithkaelynn.com";

export default function SocialShareButtons() {
  const pathname = usePathname() || "/";
  const pageUrl = `${siteUrl}${pathname}`;
  const shareText =
    "Life Coaching with Kaelynn offers confidence coaching for women and personal growth coaching.";

  const links = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        pageUrl,
      )}`,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        pageUrl,
      )}`,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        pageUrl,
      )}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: "Email",
      href: `mailto:?subject=${encodeURIComponent(
        "Life Coaching with Kaelynn",
      )}&body=${encodeURIComponent(`${shareText}\n\n${pageUrl}`)}`,
    },
  ];

  return (
    <section
      aria-label="Share this page"
      className="border-t border-[#eadfd5] bg-white px-6 py-6"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-[#5f4c41]">
          Share this page
        </p>

        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name === "Email" ? undefined : "_blank"}
              rel={link.name === "Email" ? undefined : "noopener noreferrer"}
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#0f766e] bg-white px-4 text-sm font-bold text-[#0f766e] transition hover:bg-[#0f766e] hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
