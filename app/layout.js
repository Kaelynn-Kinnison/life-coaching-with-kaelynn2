import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Life Coaching with Kaelynn",
  description:
    "Life coaching for healing, growth, clarity, confidence, accountability, and transformation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fdf8f3] text-[#3f2f2a]">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/hibiscus-logo.png"
                alt="Life Coaching with Kaelynn logo"
                width={55}
                height={55}
              />
              <span className="font-bold text-lg">Life Coaching with Kaelynn</span>
            </Link>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-[#6b4b43]">
              <Link href="/">Home</Link>
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

        <footer className="bg-[#3f2f2a] text-white px-6 py-10 text-center">
          <p className="font-bold text-xl mb-2">Life Coaching with Kaelynn</p>
          <p className="mb-4">Heal. Grow. Transform.</p>
          <p>Email: kaelynnkinnison@gmail.com</p>
          <p>Phone: (402) 799-8166</p>
        </footer>
      </body>
    </html>
  );
}
