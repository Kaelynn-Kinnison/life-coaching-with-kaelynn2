import "./globals.css";

export const metadata = {
  title: "Life Coaching with Kaelynn",
  description:
    "Compassionate life coaching for clarity, personal growth, emotional healing, and accountability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
