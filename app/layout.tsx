import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

const MonaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mockwise",
  description:
    "The AI-powered mock interview platform that listens, speaks, and helps you grow. Practice with real-time voice, get smart feedback, and ace your next interview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${MonaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
