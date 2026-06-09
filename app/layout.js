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
  title: "Core Belief Transformation Coaching | Life Coaching with Kaelynn",
  description:
    "Helping women transform limiting core beliefs that keep them stuck in self-doubt, people-pleasing, fear of judgment, and self-sabotage so they can build confidence, self-trust, and lasting change.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/core-belief-coaching", label: "Core Belief Coaching" },
  { href: "/services", label: "Services" },
  { href: "/coaching-approach", label: "H.E.A.L. Framework" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/pricing", label: "Investment" },
  { href: "/contact", label: "Contact" },
];

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

        <header className="bg-[#fdf8f3]/95 backdrop-blur border-b border-[#eadfd5] sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-center md:justify-between">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/hibiscus-logo.png"
                  alt="Life Coaching with Kaelynn Logo"
                  className="h-11 w-11 object-contain"
                />
                <div className="leading-tight">
                  <span className="block font-semibold text-[#3f342c] text-sm sm:text-base">
                    Life Coaching with Kaelynn
                  </span>
                  <span className="block text-[11px] sm:text-xs text-[#8b6f5c]">
                    Core Belief Transformation Coaching
                  </span>
                </div>
              </Link>

              <div className="hidden md:flex items-center gap-4 text-sm font-medium text-[#3f342c]">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-[#9b6f4e] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden mt-4 grid grid-cols-2 gap-2 text-center text-sm font-medium text-[#3f342c]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className={`rounded-full px-3 py-2 ${
                    link.label === "Contact"
                      ? "bg-[#3f342c] text-white col-span-2"
                      : "bg-white border border-[#eadfd5]"
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
