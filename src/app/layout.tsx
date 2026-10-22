import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE_TITLE = "Squirrel Tamer — Turn a Scattered Mind Into Finished Work";
const SITE_DESC =
  "For the scattered, the curious, and the endlessly interested. A system for turning the ideas you chase into work you actually ship.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thesquirreltamer.com"),
  title: SITE_TITLE,
  description: SITE_DESC,
  openGraph: {
    type: "website",
    siteName: "The Squirrel Tamer",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: "/images/og-book.jpg",
        width: 1200,
        height: 630,
        alt: "The Squirrel Tamer — How to Make S.O.S. Your Superpower, by Steve Haycock",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/images/og-book.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
