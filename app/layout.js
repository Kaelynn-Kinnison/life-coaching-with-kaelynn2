import "./globals.css";
import Script from "next/script";
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
  title: "Life Coaching with Kaelynn",
  description:
    "Personalized life coaching to help you heal, grow, and transform with clarity, confidence, and accountability.",
};

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

        {children}
      </body>
    </html>
  );
}
