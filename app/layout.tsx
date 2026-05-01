import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashLoader from "@/components/SplashLoader";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "HorsPulse — IT Solutions & Digital Transformation",
  description:
    "We build scalable, secure, and modern digital solutions for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-ink font-epilogue overflow-x-hidden">
       <SplashLoader>{children}</SplashLoader>
      </body>
    </html>
  );
}
