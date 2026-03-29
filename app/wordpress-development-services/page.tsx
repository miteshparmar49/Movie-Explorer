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
    canonical: "https://www.mvpinfotech.in/wordpress-development-services",
  },

  openGraph: {
    title: "WordPress Development Services | MVP InfoTech",
    description:
      "Expert WordPress developers building fast, SEO-friendly and high-converting websites using Elementor and WooCommerce.",
    url: "https://www.mvpinfotech.in/wordpress-development-services",
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
      Professional WordPress Website Development Services
    </h2>

    <p className="mt-6 text-white/70">
      WordPress is the world’s most popular content management system (CMS), powering over 40% of all websites globally. From small business websites to enterprise-level platforms, WordPress offers unmatched flexibility, scalability, and ease of use. Businesses across industries rely on WordPress development services to build high-performance websites that are easy to manage and optimized for search engines like Google.
    </p>

    <p className="mt-4 text-white/70">
      If you are looking for a powerful, user-friendly, and SEO-friendly website, our WordPress development services are the perfect solution. We specialize in creating custom WordPress websites that are fast, secure, mobile-responsive, and designed to convert visitors into customers. Whether you need a corporate website, business website, portfolio website, or a fully functional eCommerce store using WooCommerce, our expert WordPress developers deliver tailored solutions to meet your goals.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Custom WordPress Website Development
    </h3>

    <p className="mt-4 text-white/70">
      Our custom WordPress website development services are focused on building unique and scalable websites that reflect your brand identity. We do not rely on generic templates—instead, we create custom designs using modern tools like Elementor Pro and advanced WordPress frameworks. This ensures your website stands out in a competitive digital landscape.
    </p>

    <p className="mt-4 text-white/70">
      A custom WordPress website not only improves user experience but also enhances SEO performance. With clean code, optimized structure, and fast loading speed, your website becomes more visible on search engines, helping you attract organic traffic and generate leads.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      WooCommerce Development for eCommerce Growth
    </h3>

    <p className="mt-4 text-white/70">
      WooCommerce is the most powerful eCommerce plugin for WordPress, enabling businesses to sell products and services online efficiently. Our WooCommerce development services include creating fully customized online stores with secure payment gateways, product management systems, and conversion-focused checkout experiences.
    </p>

    <p className="mt-4 text-white/70">
      We build WooCommerce websites that are optimized for performance, SEO, and user experience. From product page optimization to mobile-friendly checkout design, every element is designed to increase conversions and boost online sales.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      SEO Optimized WordPress Websites
    </h3>

    <p className="mt-4 text-white/70">
      Search engine optimization (SEO) is a critical part of any successful website. Our WordPress SEO services ensure your website is fully optimized for Google ranking. We implement keyword research, on-page SEO optimization, meta tags, schema markup, and internal linking strategies to improve visibility.
    </p>

    <p className="mt-4 text-white/70">
      We focus on high-ranking keywords such as WordPress development services, WordPress developer, WooCommerce development, custom WordPress website, and SEO WordPress services. By strategically placing these keywords throughout your content, we help your website rank higher in search engine results.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      WordPress Speed Optimization & Performance
    </h3>

    <p className="mt-4 text-white/70">
      Website speed plays a crucial role in both SEO ranking and user experience. Slow-loading websites lead to higher bounce rates and lower conversions. Our WordPress speed optimization services ensure your website loads quickly across all devices.
    </p>

    <p className="mt-4 text-white/70">
      We optimize images, minimize CSS and JavaScript, implement caching solutions, and use CDN integration to improve website performance. A fast WordPress website not only ranks better on Google but also provides a seamless experience for your users.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Secure and Scalable WordPress Solutions
    </h3>

    <p className="mt-4 text-white/70">
      Security is a top priority in WordPress development. Our team implements advanced security measures such as SSL certificates, firewall protection, malware scanning, and regular updates to keep your website safe from threats.
    </p>

    <p className="mt-4 text-white/70">
      We also ensure your website is scalable, allowing it to grow with your business. Whether you are adding new features, expanding your product catalog, or increasing traffic, our WordPress solutions are designed to handle it all efficiently.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      WordPress Website Redesign & Maintenance
    </h3>

    <p className="mt-4 text-white/70">
      If your existing website is outdated or not performing well, our WordPress redesign services can transform it into a modern, high-performing platform. We improve UI/UX design, enhance speed, and optimize SEO to deliver better results.
    </p>

    <p className="mt-4 text-white/70">
      Our WordPress maintenance services include regular updates, backups, bug fixes, and performance monitoring. This ensures your website remains secure, fast, and up-to-date at all times.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Our WordPress Development Services?
    </h3>

    <p className="mt-4 text-white/70">
      Choosing the right WordPress development company can make a significant difference in your online success. Our team of experienced WordPress developers focuses on delivering high-quality, result-driven solutions tailored to your business needs.
    </p>

    <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
      <li>Expert WordPress developers with years of experience</li>
      <li>Custom website design and development</li>
      <li>SEO-friendly and mobile-responsive websites</li>
      <li>Fast loading speed and performance optimization</li>
      <li>WooCommerce and eCommerce expertise</li>
      <li>Affordable pricing and ongoing support</li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Grow Your Business with WordPress
    </h3>

    <p className="mt-4 text-white/70">
      A professionally developed WordPress website can significantly improve your online presence. It helps you attract more visitors, generate leads, and increase conversions. With the right combination of design, development, and SEO strategies, your website becomes a powerful marketing tool.
    </p>

    <p className="mt-4 text-white/70">
      Whether you are a startup, small business, or enterprise, our WordPress development services are designed to help you achieve your digital goals. We focus on delivering websites that not only look great but also perform exceptionally well in search engine rankings.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Get Started with WordPress Development Today
    </h3>

    <p className="mt-4 text-white/70">
      If you are looking for reliable WordPress development services, our team is here to help. We combine creativity, technology, and SEO expertise to build websites that drive real business results.
    </p>

    <p className="mt-4 text-white/70">
      Contact us today to discuss your project and take the first step toward building a high-performance WordPress website that grows your business online.
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