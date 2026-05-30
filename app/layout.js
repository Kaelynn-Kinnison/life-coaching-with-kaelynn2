import "./globals.css";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Life Coaching with Kaelynn",
  description: "Heal. Grow. Transform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7M7KB7PY2W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7M7KB7PY2W');
          `}
        </Script>

        <header className="bg-[#fdf8f3] border-b border-[#eadfd5] sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/hibiscus-logo.png"
                alt="Life Coaching with Kaelynn logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-semibold text-[#2f2a35]">
                Life Coaching with Kaelynn
              </span>
            </Link>

            <div className="flex items-center gap-5 text-sm font-medium text-[#2f2a35]">
              <Link href="/about">About</Link>
              <Link href="/life-coaching">Life Coaching</Link>
              <Link href="/services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/coaching-approach">Approach</Link>
              <Link href="/testimonials">Testimonials</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
