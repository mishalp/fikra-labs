import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fikra Labs — Web Development & Product Engineering",
    template: "%s · Fikra Labs",
  },
  description:
    "Fikra Labs partners with ambitious teams to ship fast, scalable Next.js products—strategy, UI engineering, performance, and integrations.",
  openGraph: {
    title: "Fikra Labs — Web Development & Product Engineering",
    description:
      "Premium web development for modern SaaS and growth-stage brands. Next.js, TypeScript, and design systems built to last.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-clip antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-[#030510] text-zinc-100">
        <div className="bg-noise" aria-hidden />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
