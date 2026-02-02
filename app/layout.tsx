import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mitesh Parmar | Full-Stack Ecommerce Developer",
  description:
    "Full-stack ecommerce developer specializing in Neto, Maropost Commerce Cloud, Shopify and BigCommerce. Expert in Next.js, React, Vue and Node.js.",
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
