import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";

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

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is BigCommerce development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BigCommerce development involves building, customizing and optimizing ecommerce websites using the BigCommerce platform to create scalable and high-performance online stores."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose BigCommerce for ecommerce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BigCommerce is a powerful SaaS ecommerce platform that offers scalability, built-in features, SEO capabilities, and high performance for growing online businesses."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide custom BigCommerce development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide custom BigCommerce development services including theme development, API integrations, store optimization and advanced ecommerce functionality."
          }
        },
        {
          "@type": "Question",
          "name": "Can you migrate my store to BigCommerce?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer BigCommerce migration services from Shopify, WooCommerce and other platforms without losing data or SEO rankings."
          }
        },
        {
          "@type": "Question",
          "name": "Is BigCommerce SEO friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, BigCommerce is SEO-friendly and supports features like clean URLs, meta tags, fast loading speed and mobile optimization to improve search rankings."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a BigCommerce website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The development time depends on project complexity, but most BigCommerce websites take between 2 to 6 weeks to complete."
          }
        }
      ]
    })
  }}
/>

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
      {/* SEO CONTENT */}
<section className="py-24 border-t border-white/10">
  <div className="mx-auto max-w-4xl px-6">

    <h2 className="text-3xl font-semibold">
      Professional BigCommerce Ecommerce Development Services
    </h2>

    <p className="mt-6 text-white/70">
      <strong className="text-white font-semibold">BigCommerce ecommerce development</strong> is one of the most powerful solutions for businesses looking to build scalable, high-performance online stores. BigCommerce is a robust SaaS-based ecommerce platform designed to support businesses of all sizes, from startups to enterprise-level brands. With advanced built-in features, flexibility, and seamless integrations, BigCommerce allows businesses to manage products, payments, shipping, and marketing from a single platform.
    </p>

    <p className="mt-4 text-white/70">
      If you are looking for a reliable <strong className="text-white font-semibold">BigCommerce development company</strong>, our team provides end-to-end ecommerce solutions tailored to your business needs. We create fast, secure, SEO-friendly, and conversion-optimized ecommerce websites that help you grow your online business and increase revenue.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Custom BigCommerce Website Development
    </h3>

    <p className="mt-4 text-white/70">
      Our <strong className="text-white font-semibold">custom BigCommerce development services</strong> focus on building unique ecommerce websites that reflect your brand identity and deliver a seamless user experience. We do not rely on generic templates—instead, we design and develop fully customized BigCommerce stores that are optimized for performance and scalability.
    </p>

    <p className="mt-4 text-white/70">
      A custom BigCommerce website ensures better performance, improved SEO rankings, and higher conversion rates. Our developers use modern technologies and best practices to create ecommerce stores that are fast-loading, mobile-responsive, and easy to manage.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      BigCommerce Theme Development & Customization
    </h3>

    <p className="mt-4 text-white/70">
      We specialize in <strong className="text-white font-semibold">BigCommerce theme development</strong> and customization to create visually appealing and user-friendly ecommerce stores. Our design approach focuses on UI/UX optimization, ensuring that your website provides an engaging and intuitive shopping experience.
    </p>

    <p className="mt-4 text-white/70">
      Whether you need a new theme or want to customize an existing one, we deliver designs that are optimized for both users and search engines. A well-designed ecommerce website can significantly improve customer engagement and sales.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      BigCommerce SEO Optimization
    </h3>

    <p className="mt-4 text-white/70">
      <strong className="text-white font-semibold">BigCommerce SEO services</strong> are essential for improving your website’s visibility on search engines like Google. We optimize your ecommerce store with proper keyword targeting, meta tags, URL structure, and schema markup to improve rankings.
    </p>

    <p className="mt-4 text-white/70">
      Our SEO strategy includes targeting keywords such as <strong className="text-white font-semibold">BigCommerce development</strong>, <strong className="text-white font-semibold">ecommerce website development</strong>, <strong className="text-white font-semibold">BigCommerce experts</strong>, and <strong className="text-white font-semibold">online store development</strong>. These keywords are naturally integrated into your website content to boost search engine rankings.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      BigCommerce Speed Optimization & Performance
    </h3>

    <p className="mt-4 text-white/70">
      Website speed is a critical factor in ecommerce success. Slow-loading websites lead to higher bounce rates and lower conversions. Our <strong className="text-white font-semibold">BigCommerce speed optimization</strong> services ensure your store loads quickly and performs efficiently across all devices.
    </p>

    <p className="mt-4 text-white/70">
      We optimize images, scripts, and code to improve loading speed and enhance user experience. A fast ecommerce website not only improves SEO rankings but also increases customer satisfaction and sales.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      BigCommerce API Integration & Custom Functionality
    </h3>

    <p className="mt-4 text-white/70">
      Our <strong className="text-white font-semibold">BigCommerce API integration services</strong> allow you to extend your store’s functionality with third-party tools and systems. We integrate payment gateways, CRM systems, ERP solutions, and marketing tools to streamline your business operations.
    </p>

    <p className="mt-4 text-white/70">
      Custom functionality ensures your ecommerce website meets your unique business requirements. Whether you need advanced product filters, custom checkout processes, or automation features, we deliver scalable solutions.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      BigCommerce Migration Services
    </h3>

    <p className="mt-4 text-white/70">
      Looking to switch platforms? Our <strong className="text-white font-semibold">BigCommerce migration services</strong> help you move your existing store from platforms like Shopify, WooCommerce, or Magento without losing data or SEO rankings.
    </p>

    <p className="mt-4 text-white/70">
      We ensure a smooth migration process, including product data transfer, URL redirects, SEO preservation, and performance optimization.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Conversion-Focused Ecommerce Design
    </h3>

    <p className="mt-4 text-white/70">
      A successful ecommerce website is not just about design—it’s about conversions. Our <strong className="text-white font-semibold">conversion-focused ecommerce development</strong> approach ensures your website is optimized to turn visitors into customers.
    </p>

    <p className="mt-4 text-white/70">
      We implement clear call-to-actions, optimized product pages, user-friendly navigation, and streamlined checkout processes to maximize conversions and increase revenue.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Our BigCommerce Development Services?
    </h3>

    <p className="mt-4 text-white/70">
      Choosing the right <strong className="text-white font-semibold">BigCommerce development agency</strong> is crucial for your online success. Our team delivers high-quality, performance-driven ecommerce solutions tailored to your business needs.
    </p>

    <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
      <li>Experienced <strong className="text-white font-semibold">BigCommerce developers</strong></li>
      <li>Custom ecommerce website development</li>
      <li>SEO-friendly and mobile-responsive design</li>
      <li>Fast loading speed and performance optimization</li>
      <li>Advanced integrations and custom features</li>
      <li>Ongoing support and maintenance</li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Grow Your Ecommerce Business with BigCommerce
    </h3>

    <p className="mt-4 text-white/70">
      A professionally developed BigCommerce website can transform your online business. It helps you attract more customers, improve user experience, and increase sales. With the right combination of design, development, and SEO, your ecommerce store becomes a powerful revenue-generating platform.
    </p>

    <p className="mt-4 text-white/70">
      Our goal is to help you achieve higher rankings, better performance, and increased conversions through <strong className="text-white font-semibold">BigCommerce ecommerce development</strong> strategies.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Get Started with BigCommerce Development Today
    </h3>

    <p className="mt-4 text-white/70">
      If you are looking for expert <strong className="text-white font-semibold">BigCommerce development services</strong>, we are here to help. From custom store design to advanced integrations and SEO optimization, we provide complete ecommerce solutions.
    </p>

    <p className="mt-4 text-white/70">
      Contact us today to build a high-performance BigCommerce store that drives traffic, boosts sales, and grows your business online.
    </p>

  </div>
</section>
<Allinone/>
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