// import "./globals.css";
// import type { Metadata } from "next";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export const metadata: Metadata = {
//   title: "Mitesh Parmar | Full-Stack Ecommerce Developer",
//   description:
//     "Full-stack ecommerce developer specializing in Neto, Maropost Commerce Cloud, Shopify and BigCommerce. Expert in Next.js, React, Vue and Node.js.",

//   alternates: {
//     canonical: "https://www.mvpinfotech.in",
//   },

//   icons: {
//     icon: [
//       { url: "/favicon.png", sizes: "16x16", type: "image/png" },
//       { url: "/favicon.png", sizes: "32x32", type: "image/png" },
//     ],
//     apple: "/apple-touch-icon.png",
//     shortcut: "/favicon.ico",
//   },

//   openGraph: {
//     title: "Mitesh Parmar | Full-Stack Ecommerce Developer",
//     description:
//       "Full-stack ecommerce developer specializing in Neto, Maropost Commerce Cloud, Shopify and BigCommerce. Expert in Next.js, React, Vue and Node.js.",
//     url: "https://www.mvpinfotech.in",
//     siteName: "Mitesh Parmar",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Mitesh Parmar – Full-Stack Ecommerce Developer",
//       },
//     ],
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Mitesh Parmar | Full-Stack Ecommerce Developer",
//     description:
//       "Full-stack ecommerce developer specializing in Neto, Maropost Commerce Cloud, Shopify and BigCommerce. Expert in Next.js, React, Vue and Node.js.",
//     images: ["/og-image.png"],
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className="bg-[#0b0f19] text-white">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import OfferPopup from "../components/OfferPopup";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neto Developer Australia | Shopify & Maropost Experts | MVP Infotech",
  description:
    "Looking for a reliable eCommerce developer for Australia? We specialize in Shopify, Neto (Maropost) and custom solutions for Australian businesses.",

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
     title: "Neto Developer Australia | Shopify & Maropost Experts | MVP Infotech",
  description:
    "Looking for a reliable eCommerce developer for Australia? We specialize in Shopify, Neto (Maropost) and custom solutions for Australian businesses.",
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
    title: "Neto Developer Australia | Shopify & Maropost Experts | MVP Infotech",
  description:
    "Looking for a reliable eCommerce developer for Australia? We specialize in Shopify, Neto (Maropost) and custom solutions for Australian businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="bg-[#0b0f19] text-white">
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-726CX13L75"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-726CX13L75');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <OfferPopup />
        <Footer />
      
      </body>
    </html>
  );
}