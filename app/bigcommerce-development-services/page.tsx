import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title:
    "BigCommerce Development Services | Custom BigCommerce Store Development",

  description:
    "Professional BigCommerce development services including custom store setup, theme customization, API integrations and ecommerce performance optimisation.",

  keywords: [
    "BigCommerce developer",
    "BigCommerce development services",
    "Hire BigCommerce developer",
    "BigCommerce store setup",
    "BigCommerce theme customization",
  ],

  alternates: {
    canonical: "https://www.mvpinfotech.in/bigcommerce-development-services",
  },

  openGraph: {
    title: "BigCommerce Development Services | MVP InfoTech",
    description:
      "Expert BigCommerce developers building scalable, high-performance ecommerce stores with custom themes and integrations.",
    url: "https://www.mvpinfotech.in/bigcommerce-development-services",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/bigcommerce1.png",
        width: 1200,
        height: 630,
        alt: "BigCommerce Ecommerce Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BigCommerce Development Services | MVP InfoTech",
    description:
      "Custom BigCommerce ecommerce development, store setup, API integration and optimisation services.",
    images: ["https://www.mvpinfotech.in/bigcommerce1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BigCommerceServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#1e40af] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert BigCommerce Development Services
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Build a powerful ecommerce store with professional BigCommerce
              development and custom solutions.
            </p>

            <p className="mt-4 text-white/70">
              We design, develop and optimise BigCommerce stores that are fast,
              scalable and conversion-focused. From custom themes to advanced
              integrations, we help businesses grow their ecommerce presence.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition"
              >
                Get Free Consultation
              </Link>

              <Link
                href="/ourwork"
                className="border border-white/20 px-6 py-3 rounded-md hover:border-white/40 transition"
              >
                View Portfolio
              </Link>

            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/bigcommerce1.png"
                alt="BigCommerce development services"
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
            BigCommerce Development Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Complete BigCommerce store setup",
              "Custom BigCommerce theme development",
              "Store redesign and UI improvements",
              "Product catalog setup and management",
              "Payment gateway and shipping setup",
              "BigCommerce API integrations",
              "Third-party app integrations",
              "Mobile responsive ecommerce design",
              "Store performance optimization",
              "Technical SEO for ecommerce",
              "Bug fixing and troubleshooting",
              "Ongoing support and maintenance",
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
            Professional BigCommerce Ecommerce Development
          </h2>

          <p className="mt-6 text-white/70">
            BigCommerce is a powerful ecommerce platform designed for
            businesses that want scalability, performance and flexibility.
            It offers advanced features for managing products, orders,
            payments and marketing from a single platform.
          </p>

          <p className="mt-4 text-white/70">
            Our BigCommerce development services help businesses create
            high-performance ecommerce stores that deliver exceptional
            shopping experiences. We specialise in custom theme development,
            store optimisation, API integrations and advanced ecommerce
            functionality.
          </p>

          <p className="mt-4 text-white/70">
            Whether you are launching a new BigCommerce store or upgrading
            an existing ecommerce website, we build solutions that improve
            performance, SEO visibility and sales conversions.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to Build Your BigCommerce Store?
          </h2>

          <p className="mt-6 text-white/70">
            Let’s create a powerful ecommerce store with professional
            BigCommerce development services.
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