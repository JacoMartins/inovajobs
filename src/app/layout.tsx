import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const sora = Sora({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "InovaJobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} bg-white antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
