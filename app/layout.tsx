import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mitesh Parmar | Full-Stack Ecommerce Developer",
  description:
    "Full-stack ecommerce developer specializing in Neto, Maropost Commerce Cloud, Shopify and BigCommerce. Expert in Next.js, React, Vue and Node.js.",

  alternates: {
    canonical: "https://www.mvpinfotech.in",
  },

  icons: {
    icon: [
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Mitesh Parmar | Full-Stack Ecommerce Developer",
    description:
      "Full-stack ecommerce developer specializing in Neto, Maropost Commerce Cloud, Shopify and BigCommerce. Expert in Next.js, React, Vue and Node.js.",
    url: "https://www.mvpinfotech.in",
    siteName: "Mitesh Parmar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mitesh Parmar – Full-Stack Ecommerce Developer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mitesh Parmar | Full-Stack Ecommerce Developer",
    description:
      "Full-stack ecommerce developer specializing in Neto, Maropost Commerce Cloud, Shopify and BigCommerce. Expert in Next.js, React, Vue and Node.js.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0b0f19] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
