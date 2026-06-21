import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Nebraska Life Coach for Women | Life Coaching with Kaelynn",
  description:
    "Nebraska-based virtual life coaching for women of all ages ready to transform limiting core beliefs, rebuild confidence, and create a meaningful next chapter.",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Coaching Approach", href: "/coaching-approach" },
  { name: "Core Belief Coaching", href: "/core-belief-coaching" },
  { name: "H.E.A.L. Framework", href: "/heal-framework" },
  { name: "Programs & Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const facebookLink = "https://www.facebook.com/Lifecoachingwithkaelynn";
const linkedinLink = "https://www.linkedin.com/in/lifecoachingwithkaelynn";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#fdf8f3] text-[#3f342c] antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7M7KB7PY2W"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7M7KB7PY2W');
          `}
        </Script>

        <header className="sticky top-0 z-50 border-b border-[#eadfd5] bg-[#fdf8f3]/95 backdrop-blur">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-6">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/hibiscus-logo.png"
                  alt="Life Coaching with Kaelynn Logo"
                  className="h-11 w-11 object-contain"
                />

                <div className="leading-tight">
                  <span className="block text-sm font-semibold text-[#3f342c] sm:text-base">
                    Life Coaching with Kaelynn
                  </span>

                  <span className="block text-[11px] text-[#8b6f5c] sm:text-xs">
                    Core Belief Transformation Coaching
                  </span>
                </div>
              </Link>

              <div className="hidden items-center gap-4 text-sm font-medium text-[#3f342c] md:flex">
                {navigation.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="whitespace-nowrap transition-colors hover:text-[#0f766e]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-center text-sm font-medium text-[#3f342c] md:hidden">
              {navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-2 ${
                    link.name === "Contact"
                      ? "col-span-2 bg-[#3f342c] text-white"
                      : "border border-[#eadfd5] bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        {children}

        <footer className="border-t border-[#eadfd5] bg-[#fdf8f3] px-6 py-8 text-sm text-[#6f5a4d]">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} Life Coaching with Kaelynn. All
              rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0f766e] underline-offset-4 transition hover:underline"
              >
                Facebook
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0f766e] underline-offset-4 transition hover:underline"
              >
                LinkedIn
              </a>
              <Link
                href="/contact#privacy-policy"
                className="font-semibold text-[#0f766e] underline-offset-4 transition hover:underline"
              >
                Privacy & Confidentiality
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
