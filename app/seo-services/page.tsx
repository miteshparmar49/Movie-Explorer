import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";

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

  // 🌍 Country targeting
  "seo services australia",
  "seo expert australia",
  "seo services usa",
  "seo expert uk",
  "hire seo expert worldwide",

  // 🛠 Services
  "on page seo services",
  "off page seo services",
  "technical seo audit",
  "seo audit services",
  "keyword research services",
  "website seo optimization",
  "seo content optimization",
  "ecommerce seo services",

  // 💰 Business intent
  "seo agency",
  "seo company",
  "hire seo freelancer",
  "best seo services",
  "affordable seo services",
  "increase website traffic seo",
  "google ranking improvement",

  // 🔥 Advanced
  "core web vitals optimization",
  "seo performance optimization",
  "seo strategy services",
  "google search console optimization",
  "seo backlink strategy",
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
      Technical SEO, On-Page SEO & Link Building Services
    </h2>

    <p className="mt-6 text-white/70">
      Search engine optimization (SEO) is one of the most powerful digital marketing strategies to grow your business online. A successful SEO strategy combines <strong>technical SEO</strong>, <strong>on-page SEO</strong>, and <strong>link building</strong> to improve your website’s visibility on search engines like Google. Our SEO services are designed to help businesses rank higher, attract organic traffic, and generate quality leads.
    </p>

    <p className="mt-4 text-white/70">
      Whether you are a startup, small business, or enterprise, investing in <strong>professional SEO services</strong> can significantly improve your online presence. Our team of SEO experts uses proven strategies, advanced tools, and data-driven insights to deliver measurable results and long-term growth.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Comprehensive Technical SEO Optimization
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Technical SEO</strong> is the foundation of a successful website. Without proper technical optimization, even the best content cannot rank on Google. Our technical SEO services focus on improving website performance, crawlability, and indexing.
    </p>

    <p className="mt-4 text-white/70">
      We perform a complete <strong>technical SEO audit</strong> to identify issues such as broken links, duplicate content, slow page speed, mobile usability problems, and crawl errors. By fixing these issues, we ensure that search engines can easily crawl and index your website.
    </p>

    <p className="mt-4 text-white/70">
      Our technical SEO process includes <strong>website speed optimization</strong>, <strong>core web vitals improvement</strong>, XML sitemap optimization, robots.txt configuration, structured data implementation, and HTTPS security enhancements. These improvements not only boost your rankings but also enhance user experience.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      On-Page SEO Optimization for Higher Rankings
    </h3>

    <p className="mt-4 text-white/70">
      <strong>On-page SEO</strong> plays a crucial role in improving your website’s search engine rankings. It involves optimizing individual pages with the right keywords, content structure, and HTML elements.
    </p>

    <p className="mt-4 text-white/70">
      Our on-page SEO services include <strong>keyword research</strong>, meta title and description optimization, header tag optimization (H1, H2, H3), image alt tags, and internal linking strategies. We ensure your content is aligned with user intent and search engine algorithms.
    </p>

    <p className="mt-4 text-white/70">
      We focus on high-performing keywords such as <strong>SEO services</strong>, <strong>SEO company</strong>, <strong>digital marketing services</strong>, <strong>on-page SEO optimization</strong>, and <strong>website SEO optimization</strong>. These keywords are strategically placed to improve rankings without keyword stuffing.
    </p>

    <p className="mt-4 text-white/70">
      Content optimization is another key aspect of on-page SEO. We create and optimize high-quality, engaging, and informative content that provides value to users while improving search engine visibility.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      High-Quality Link Building & Off-Page SEO
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Link building</strong> is an essential part of off-page SEO that helps improve your website’s authority and credibility. Search engines consider backlinks as votes of confidence from other websites.
    </p>

    <p className="mt-4 text-white/70">
      Our <strong>off-page SEO strategies</strong> include high-quality backlink building, guest posting, business directory submissions, and local citations. We focus on acquiring links from authoritative and relevant websites to boost your domain authority.
    </p>

    <p className="mt-4 text-white/70">
      We follow white-hat SEO techniques to ensure safe and sustainable growth. Our link building strategies help improve rankings for competitive keywords and drive targeted traffic to your website.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Keyword Research & Competitor Analysis
    </h3>

    <p className="mt-4 text-white/70">
      Effective SEO starts with in-depth <strong>keyword research</strong> and <strong>competitor analysis</strong>. We identify high-volume, low-competition keywords that can drive targeted traffic to your website.
    </p>

    <p className="mt-4 text-white/70">
      By analyzing your competitors, we understand their strategies and identify opportunities to outperform them. This helps us create a data-driven SEO strategy tailored to your business goals.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Local SEO & Google Ranking Optimization
    </h3>

    <p className="mt-4 text-white/70">
      If you want to attract local customers, <strong>local SEO</strong> is essential. We optimize your website for location-based keywords and improve your visibility in Google Maps and local search results.
    </p>

    <p className="mt-4 text-white/70">
      Our local SEO services include Google Business Profile optimization, local citations, reviews management, and location-based keyword targeting. This helps your business rank higher for searches like “SEO services near me” and “SEO company in India.”
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      SEO Tools & Performance Tracking
    </h3>

    <p className="mt-4 text-white/70">
      We use industry-leading tools such as <strong>SEMrush</strong>, <strong>Ahrefs</strong>, <strong>Google Analytics</strong>, and <strong>Google Search Console</strong> to track and measure SEO performance.
    </p>

    <p className="mt-4 text-white/70">
      These tools help us monitor keyword rankings, website traffic, backlinks, and user behavior. Based on the data, we continuously optimize your SEO campaigns to achieve better results.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Our SEO Services?
    </h3>

    <p className="mt-4 text-white/70">
      Our SEO services are designed to deliver long-term results. We focus on ethical, data-driven, and result-oriented strategies to help your business grow online.
    </p>

    <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
      <li>Expert team in <strong>technical SEO</strong>, <strong>on-page SEO</strong>, and <strong>link building</strong></li>
      <li>Customized SEO strategies for your business</li>
      <li>White-hat SEO practices</li>
      <li>Improved rankings and organic traffic</li>
      <li>Transparent reporting and performance tracking</li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Grow Your Business with SEO
    </h3>

    <p className="mt-4 text-white/70">
      SEO is a long-term investment that delivers sustainable growth. With the right SEO strategy, your website can attract high-quality traffic, generate leads, and increase conversions.
    </p>

    <p className="mt-4 text-white/70">
      Our goal is to help your business achieve higher rankings on Google, improve online visibility, and stay ahead of the competition. By combining <strong>technical SEO</strong>, <strong>on-page SEO</strong>, and <strong>off-page SEO</strong>, we create a complete optimization strategy that delivers real results.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Get Started with Professional SEO Services
    </h3>

    <p className="mt-4 text-white/70">
      If you are looking for a reliable <strong>SEO company</strong> to improve your website rankings, we are here to help. Our team of experts will analyze your website, identify opportunities, and implement strategies that drive growth.
    </p>

    <p className="mt-4 text-white/70">
      Contact us today to boost your online presence with our <strong>SEO services</strong>, <strong>link building strategies</strong>, and <strong>website optimization solutions</strong>.
    </p>

  </div>
</section>
<Allinone/>

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