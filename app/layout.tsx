import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elektritööd Tallinnas | Kindel Elekter",
  description:
    "Elektritööd Tallinnas ja Harjumaal. Elektriku teenused, pistikupesad, valgustus, elektrikilbid, rikkeotsing.",
  openGraph: {
    title: "Elektritööd Tallinnas | Kindel Elekter",
    description:
      "Elektritööd Tallinnas ja Harjumaal. Elektriku teenused, pistikupesad, valgustus, elektrikilbid, rikkeotsing.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
