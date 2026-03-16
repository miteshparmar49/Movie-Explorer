import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title:
    "Hire Neto Developer | Maropost Commerce Cloud Development Services",

  description:
    "Professional Neto (Maropost Commerce Cloud) ecommerce development services. Custom Neto theme development, store setup, API integrations, SEO optimisation and performance improvements.",

  keywords: [
    "Neto developer",
    "Hire Neto developer",
    "Maropost developer",
    "Neto ecommerce development",
    "Maropost commerce cloud developer",
  ],

  alternates: {
    canonical: "https://www.mvpinfotech.in/neto",
  },

  openGraph: {
    title: "Neto Ecommerce Development Services | MVP InfoTech",
    description:
      "Expert Neto developers providing custom ecommerce development, theme customization, integrations and performance optimisation.",
    url: "https://www.mvpinfotech.in/neto",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/neto1.png",
        width: 1200,
        height: 630,
        alt: "Neto Ecommerce Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hire Neto Developer | MVP InfoTech",
    description:
      "Custom Neto ecommerce development, theme customization and integrations by experienced Maropost developers.",
    images: ["https://www.mvpinfotech.in/neto1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function NetoServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Neto Ecommerce Development",
            provider: {
              "@type": "Organization",
              name: "MVP InfoTech",
              url: "https://www.mvpinfotech.in",
            },
            areaServed: "Worldwide",
            description:
              "Professional Neto ecommerce development services including store setup, custom themes, integrations and optimisation.",
          }),
        }}
      />

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert Neto (Maropost Commerce Cloud) Developer
            </h1>

            <p className="mt-6 text-lg text-white/70">
              10+ years experience building high-performance Neto ecommerce stores.
            </p>

            <p className="mt-4 text-white/70">
              I help businesses design, customise and optimise Neto stores for
              performance, SEO and better ecommerce conversions.
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
                src="/neto1.png"
                alt="Neto ecommerce development"
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
            Neto / Maropost Development Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Neto store setup from scratch",
              "Custom Neto template development",
              "Homepage and layout customization",
              "Theme styling (HTML / CSS / JS)",
              "PSD or Figma to Neto theme",
              "Product catalog setup",
              "Shipping and payment configuration",
              "Mobile responsiveness optimisation",
              "Performance and speed optimisation",
              "Basic ecommerce SEO setup",
              "Neto API integrations",
              "Bug fixing and troubleshooting",
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
            Professional Neto Ecommerce Development
          </h2>

          <p className="mt-6 text-white/70">
            Neto, now known as Maropost Commerce Cloud, is a powerful ecommerce
            platform designed for growing online businesses. With the right
            development and optimisation, a Neto store can deliver fast
            performance, smooth checkout experiences and strong search engine
            visibility.
          </p>

          <p className="mt-4 text-white/70">
            With more than 10 years of ecommerce development experience, I help
            businesses build scalable Neto stores that are designed for speed,
            usability and conversions. From custom theme development to API
            integrations and performance optimisation, every store is built with
            long-term growth in mind.
          </p>

          <p className="mt-4 text-white/70">
            Whether you need a new Neto store, improvements to an existing
            ecommerce website or help fixing technical issues, I provide reliable
            development services tailored to your business needs.
          </p>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6">

          <h2 className="text-3xl font-semibold">
            Neto Development FAQ
          </h2>

          <div className="mt-10 space-y-6">

            <div>
              <h3 className="font-semibold">
                What is Neto (Maropost Commerce Cloud)?
              </h3>
              <p className="text-white/70 text-sm mt-2">
                Neto is a powerful ecommerce platform used by businesses to
                manage products, orders, inventory and online sales.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Do you customise Neto themes?
              </h3>
              <p className="text-white/70 text-sm mt-2">
                Yes, I create custom Neto themes and also modify existing Neto
                templates to improve design, usability and performance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can you optimise Neto store speed?
              </h3>
              <p className="text-white/70 text-sm mt-2">
                Yes. I optimise Neto stores for faster loading, improved SEO and
                better ecommerce conversion rates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Need Help With Your Neto Store?
          </h2>

          <p className="mt-6 text-white/70">
            Let’s build or improve your Neto ecommerce store with expert
            development and optimisation.
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