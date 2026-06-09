import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Macarthur Infusions | IV Therapy & Wellness Clinic | Bradbury NSW",
  description:
    "Nurse-led IV infusion therapy and wellness clinic in Bradbury NSW. Evidence-based vitamin drips, hydration, recovery and wellness infusions delivered with clinical excellence.",
  keywords: [
    "IV therapy",
    "infusion clinic",
    "Macarthur",
    "Bradbury",
    "vitamin infusion",
    "iron infusion",
    "NAD+ therapy",
    "wellness clinic",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-ink">
        {children}
      </body>
    </html>
  );
}
