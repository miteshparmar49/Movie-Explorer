import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title:
    "SEO Services | Technical SEO, Link Building & Digital Marketing Expert",

  description:
    "Professional SEO services including technical SEO, on-page optimization, link building, local SEO and Google Analytics implementation to improve rankings and organic traffic.",

  keywords: [
    "SEO services",
    "SEO specialist",
    "Technical SEO",
    "Link building services",
    "Local SEO expert",
    "Hire SEO expert",
  ],

  alternates: {
    canonical: "https://www.mvpinfotech.in/seo-services",
  },

  openGraph: {
    title: "Professional SEO Services | MVP InfoTech",
    description:
      "White-hat SEO services including technical SEO, on-page optimization, backlink building and local SEO strategies.",
    url: "https://www.mvpinfotech.in/seo-services",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/seo1.png",
        width: 1200,
        height: 630,
        alt: "SEO Services and Digital Marketing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Services | Technical SEO & Link Building",
    description:
      "Professional SEO specialist providing on-page SEO, off-page SEO, technical SEO and link building services.",
    images: ["https://www.mvpinfotech.in/seo1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function SEOServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Search Engine Optimization",
            provider: {
              "@type": "Organization",
              name: "MVP InfoTech",
              url: "https://www.mvpinfotech.in",
            },
            areaServed: "Worldwide",
            description:
              "Professional SEO services including technical SEO, on-page optimization, link building and local SEO.",
          }),
        }}
      />

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#1e3a8a] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional SEO Services & Digital Marketing
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Improve your search rankings, increase organic traffic and grow
              your business with professional search engine optimization
              strategies.
            </p>

            <p className="mt-4 text-white/70">
              With more than 10 years of experience in SEO and digital
              marketing, we help businesses achieve better visibility in
              search engines using ethical white-hat SEO techniques.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition"
              >
                Get Free SEO Consultation
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
                src="/seo1.png"
                alt="SEO services and digital marketing"
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
            Our SEO Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Complete SEO website audit",
              "Keyword research and competitor analysis",
              "On-page SEO optimization",
              "Technical SEO improvements",
              "Website speed optimization",
              "Meta tags and content optimization",
              "XML sitemap and robots.txt setup",
              "Google Search Console setup",
              "Google Analytics implementation",
              "Local SEO and citation building",
              "White-hat backlink building",
              "Guest post outreach and authority links",
              "Content SEO strategy",
              "SEO performance monitoring",
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
            Technical SEO, On-Page SEO & Link Building
          </h2>

          <p className="mt-6 text-white/70">
            Search engine optimization combines multiple strategies including
            technical SEO, content optimization and high-quality link building
            to improve a website’s visibility in search engines.
          </p>

          <p className="mt-4 text-white/70">
            Our SEO process begins with a complete website analysis including
            technical audits, keyword research and competitor analysis. After
            identifying opportunities, we implement on-page optimization,
            improve site structure and optimize website content for search
            engines.
          </p>

          <p className="mt-4 text-white/70">
            Off-page SEO strategies such as backlink building, guest posting
            and local citations are then implemented to strengthen domain
            authority and improve rankings for competitive keywords.
          </p>

          <p className="mt-4 text-white/70">
            Using tools like SEMrush, Ahrefs, Google Analytics and Search
            Console, we continuously monitor SEO performance and optimize
            campaigns for better long-term results.
          </p>

        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-semibold">
            Why Choose Our SEO Services
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-white/80 text-sm">

            <div>✔ 100% White-hat SEO strategies</div>
            <div>✔ Manual high-quality backlink building</div>
            <div>✔ Result-oriented SEO campaigns</div>
            <div>✔ Affordable SEO services</div>
            <div>✔ Transparent reporting and analytics</div>
            <div>✔ Long-term search engine growth</div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to Improve Your Google Rankings?
          </h2>

          <p className="mt-6 text-white/70">
            Start growing your website traffic and search visibility with
            professional SEO services designed for long-term success.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-white/90 transition"
            >
              Start SEO Project
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