import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title: "Shopify Development Services | Shopify Store Setup & Custom Development",

  description:
    "Professional Shopify development services including complete store setup, theme customization, product management, dropshipping integration and SEO optimisation.",

  keywords: [
    "Shopify developer",
    "Hire Shopify developer",
    "Shopify store setup",
    "Shopify theme customization",
    "Shopify ecommerce development",
  ],

  alternates: {
    canonical: "https://www.mvpinfotech.in/shopify",
  },

  openGraph: {
    title: "Shopify Development Services | MVP InfoTech",
    description:
      "Expert Shopify developers providing store setup, custom themes, dropshipping integrations and ecommerce optimisation.",
    url: "https://www.mvpinfotech.in/shopify",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/shopify.png",
        width: 1200,
        height: 630,
        alt: "Shopify Ecommerce Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Services | MVP InfoTech",
    description:
      "Custom Shopify store development, theme customization and ecommerce optimisation.",
    images: ["https://www.mvpinfotech.in/shopify.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ShopifyServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Shopify Ecommerce Development",
            provider: {
              "@type": "Organization",
              name: "MVP InfoTech",
              url: "https://www.mvpinfotech.in",
            },
            areaServed: "Worldwide",
            description:
              "Professional Shopify development services including store setup, theme customization, dropshipping integration and SEO optimisation.",
          }),
        }}
      />

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#1e3a8a] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert Shopify Store Development Services
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Professional Shopify store setup, customization and optimisation
              designed to help your ecommerce business grow faster.
            </p>

            <p className="mt-4 text-white/70">
              From complete Shopify store setup to advanced integrations and
              performance optimisation, we build fast, mobile-responsive and
              conversion-focused ecommerce stores.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition"
              >
                Get Free Consultation
              </Link>

              <Link
                href="/work"
                className="border border-white/20 px-6 py-3 rounded-md hover:border-white/40 transition"
              >
                View Portfolio
              </Link>

            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/shopify.png"
                alt="Shopify ecommerce development"
                fill
                priority
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold">
            Shopify Development Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Complete Shopify store setup (A–Z)",
              "Custom Shopify theme development",
              "Premium theme customization",
              "Homepage, product page and collection page design",
              "Product listing and catalog management",
              "SEO optimized product descriptions",
              "Manual and bulk product upload (CSV)",
              "Shopify app installation and configuration",
              "AliExpress, CJ Dropshipping, DSers and AutoDS integrations",
              "Social media and third-party integrations",
              "Store optimisation and speed improvement",
              "Bug fixing and Shopify troubleshooting",
              "Shopify checkout configuration",
              "Theme and section upgrades",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex gap-3">
                  <span className="text-indigo-400 font-semibold">✓</span>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6">

          <h2 className="text-3xl font-semibold">
            Professional Shopify Ecommerce Development
          </h2>

          <p className="mt-6 text-white/70">
            Shopify is one of the most popular ecommerce platforms used by
            businesses worldwide. It provides powerful tools to manage products,
            payments, orders and customer experience from a single platform.
          </p>

          <p className="mt-4 text-white/70">
            Our Shopify development services focus on building fast, secure and
            scalable ecommerce stores designed for growth. Whether you need a
            brand new Shopify store, custom theme development or improvements to
            an existing ecommerce website, we create solutions that enhance user
            experience and increase conversions.
          </p>

          <p className="mt-4 text-white/70">
            From dropshipping integrations to advanced Shopify customisation,
            we ensure that your online store is fully optimised for performance,
            SEO visibility and long-term ecommerce success.
          </p>

        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-semibold">
            Why Work With Us
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-white/80 text-sm">

            <div>✔ Fast delivery and responsive communication</div>
            <div>✔ Clean design and smooth store functionality</div>
            <div>✔ SEO-friendly and mobile responsive stores</div>
            <div>✔ Conversion-focused ecommerce development</div>
            <div>✔ Attention to detail and high quality work</div>
            <div>✔ Reliable long-term ecommerce support</div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to Launch or Improve Your Shopify Store?
          </h2>

          <p className="mt-6 text-white/70">
            Get expert Shopify development support and build a high-converting
            ecommerce store designed for growth.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-white/90 transition"
            >
              Start Your Project
            </Link>

            <Link
              href="/services"
              className="border border-white/20 px-8 py-3 rounded-md hover:border-white/40 transition"
            >
              View All Services
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}