import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title: "WordPress Development Services | Elementor & WooCommerce Experts",

  description:
    "Professional WordPress development services including custom website design, Elementor development, WooCommerce store setup, speed optimisation and SEO-friendly websites.",

  keywords: [
    "WordPress developer",
    "Hire WordPress developer",
    "WordPress website design",
    "Elementor developer",
    "WooCommerce development",
  ],

  alternates: {
    canonical: "https://www.mvpinfotech.in/wordpress",
  },

  openGraph: {
    title: "WordPress Development Services | MVP InfoTech",
    description:
      "Expert WordPress developers building fast, SEO-friendly and high-converting websites using Elementor and WooCommerce.",
    url: "https://www.mvpinfotech.in/wordpress",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/wordpress.png",
        width: 1200,
        height: 630,
        alt: "WordPress Website Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services | MVP InfoTech",
    description:
      "Custom WordPress development, Elementor design and WooCommerce ecommerce solutions.",
    images: ["https://www.mvpinfotech.in/wordpress.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function WordPressServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "WordPress Website Development",
            provider: {
              "@type": "Organization",
              name: "MVP InfoTech",
              url: "https://www.mvpinfotech.in",
            },
            areaServed: "Worldwide",
            description:
              "Professional WordPress development services including Elementor websites, WooCommerce ecommerce stores and website optimisation.",
          }),
        }}
      />

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#1f2937] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert WordPress & Elementor Development Services
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Professional WordPress website development designed to create
              modern, fast and high-converting websites.
            </p>

            <p className="mt-4 text-white/70">
              With more than 12 years of experience and over 2000 websites
              delivered worldwide, we specialise in building WordPress websites
              that are mobile-responsive, SEO-friendly and easy to manage.
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
                src="/wordpress.png"
                alt="WordPress website development"
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
            WordPress Development Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Custom WordPress website development",
              "Elementor Pro website design and landing pages",
              "WooCommerce store setup and customization",
              "Website redesign and UI improvements",
              "WordPress theme customization",
              "Plugin installation and configuration",
              "PSD, Figma or XD to WordPress conversion",
              "Mobile responsive website design",
              "WordPress speed optimization",
              "SEO-friendly website structure",
              "Website migration and hosting transfer",
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
            Professional WordPress Website Development
          </h2>

          <p className="mt-6 text-white/70">
            WordPress is the most popular website platform in the world,
            powering millions of business websites, blogs and ecommerce
            stores. With the right design and development approach, a
            WordPress website can become a powerful platform for generating
            leads and growing your business online.
          </p>

          <p className="mt-4 text-white/70">
            Our WordPress development services focus on creating fast,
            secure and scalable websites that deliver an exceptional user
            experience. Using modern tools such as Elementor Pro and
            WooCommerce, we build websites that are visually impressive,
            easy to manage and optimised for search engines.
          </p>

          <p className="mt-4 text-white/70">
            Whether you need a new business website, an ecommerce store,
            a landing page or improvements to an existing WordPress site,
            we deliver solutions designed to increase traffic, engagement
            and conversions.
          </p>

        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-semibold">
            Why Choose Our WordPress Development Services
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-white/80 text-sm">

            <div>✔ 12+ years WordPress development experience</div>
            <div>✔ 2000+ websites successfully delivered</div>
            <div>✔ Fast loading websites under 3 seconds</div>
            <div>✔ Mobile responsive and SEO-friendly design</div>
            <div>✔ Conversion focused landing pages</div>
            <div>✔ Long-term website support and maintenance</div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to Build Your WordPress Website?
          </h2>

          <p className="mt-6 text-white/70">
            Let’s create a modern, fast and high-converting WordPress website
            that helps your business grow online.
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