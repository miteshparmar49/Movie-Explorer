// import Header from "@/components/Header";
// import Footer from "@/components/Footer";



// export default function AboutUs() {
//   const skills = [
//     "Neto By Maropost",
//     "Shopify",
//     "WordPress",
//     "BigCommerce",
//     "Vue.js",
//     "React.js",
//     "Node.js",
//     "Next.js",
//     "Express.js",
//     "SEO",
   
//   ];

//   return (
//     <section
//       id="about"
//       className="relative pt-24"
//     >
//       <div className="mx-auto max-w-5xl px-6 text-left">

//         <h2 className="text-3xl md:text-4xl font-semibold">
//           About Us
//         </h2>

//         <p className="mt-5 text-white/70 leading-relaxed ">
//   We are a dedicated and results-driven <strong className="text-white">full-stack eCommerce development team</strong>
//   helping businesses design, build and scale powerful online stores that are fast, secure and search-engine optimized.
//   Our mission is to create modern digital commerce experiences that combine high performance, clean architecture
//   and conversion-focused user experience. We work closely with startups, growing brands and established businesses
//   to deliver reliable eCommerce solutions that support long-term growth and higher online revenue.
// </p>

// <p className="mt-4 text-white/70 leading-relaxed ">
//   Our technical expertise covers the complete eCommerce development lifecycle, from UI and frontend engineering
//   to backend development, API integrations and cloud-ready architectures. We build advanced storefronts using
//   <strong className="text-white"> Next.js, React.js and Vue.js</strong> and create scalable backend systems using
//   <strong className="text-white"> Node.js and Express.js</strong>. This modern technology stack allows us to deliver
//   lightning-fast websites, improved Core Web Vitals and highly maintainable codebases that support future business needs.
// </p>

// <p className="mt-4 text-white/70 leading-relaxed ">
//   We specialize in enterprise-grade eCommerce platforms including
//   <strong className="text-white"> Neto, Maropost Commerce Cloud, Shopify and BigCommerce</strong>.
//   Our team helps merchants launch new online stores, redesign existing websites and migrate stores from legacy
//   platforms without losing critical business data, customer records or SEO rankings. We carefully plan and execute
//   each eCommerce migration to preserve URLs, metadata, product catalogs and structured data, ensuring a smooth and
//   risk-free transition to modern platforms.
// </p>

// <p className="mt-4 text-white/70 leading-relaxed ">
//   Performance optimization and technical SEO are core parts of our development process. We focus on improving
//   website loading speed, server response times and frontend performance by using modern rendering techniques,
//   optimized images and efficient component structures. Our SEO-friendly development approach helps businesses
//   achieve better visibility in search engines, higher organic traffic and stronger online brand presence.
// </p>

// <p className="mt-4 text-white/70 leading-relaxed ">
//   In addition to custom development, we provide complete eCommerce consulting, platform integrations and automation
//   services. We integrate payment gateways, shipping providers, ERP systems, CRM platforms and marketing tools to
//   streamline business operations and improve order management workflows. Our solutions are designed to support
//   multi-store, multi-currency and multi-region business models for international growth.
// </p>

// <p className="mt-4 text-white/70 leading-relaxed ">
//   We strongly believe that successful eCommerce projects are built on a combination of clean code, thoughtful user
//   interface design and data-driven decision making. Our team focuses on conversion-focused UI and UX design that
//   improves customer engagement, reduces cart abandonment and increases overall sales performance. Every project
//   is developed with accessibility, usability and long-term scalability in mind.
// </p>

// <p className="mt-4 text-white/70 leading-relaxed ">
//   Whether you are launching a new brand, expanding your existing online store or modernizing your current
//   eCommerce infrastructure, our full-stack development team is ready to help you build a future-proof platform
//   that delivers real business results. We partner with our clients to provide transparent communication,
//   ongoing technical support and continuous optimization to ensure sustainable digital growth.
// </p>

// {/* SEO helper line */}
// <p className="sr-only">
//   Full stack ecommerce development team, ecommerce website development services, Next.js ecommerce developers,
//   React ecommerce developers, Vue.js ecommerce developers, Node.js and Express backend developers,
//   Neto ecommerce developers, Maropost Commerce Cloud specialists, Shopify expert developers,
//   BigCommerce ecommerce developers, WordPress ecommerce developers, ecommerce platform migration services,
//   technical SEO for ecommerce websites, ecommerce performance optimization, Core Web Vitals optimization,
//   headless ecommerce development, custom ecommerce solutions, ecommerce UI UX design and conversion rate optimization services.
// </p>
//  <div className="mt-10 flex flex-wrap justify-center gap-3">
//           {skills.map((skill) => (
//             <span
//               key={skill}
//               className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80
//                          hover:bg-white/10 hover:text-white transition"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),
  title:
    "About MVP InfoTech | Ecommerce Development Company & SEO Experts",
  description:
    "MVP InfoTech is a leading ecommerce development company offering Shopify, WordPress, BigCommerce and SEO services.",
  keywords: [
    "ecommerce development company",
    "shopify developers",
    "wordpress development services",
    "seo services",
    "bigcommerce development",
  ],
  alternates: {
    canonical: "/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What services does MVP InfoTech provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide Shopify, WordPress, BigCommerce development and SEO services.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer custom ecommerce development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we build custom ecommerce websites tailored to your business needs.",
                },
              },
            ],
          }),
        }}
      />

      <section className="pt-24">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-3xl md:text-4xl font-semibold">
            About MVP InfoTech
          </h1>

          <h2 className="mt-10 text-2xl font-semibold">
            Ecommerce Development & SEO Experts
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            MVP InfoTech is a leading <strong className="text-white">ecommerce development company</strong> dedicated to helping businesses build, scale and grow their online presence. 
            We specialise in developing high-performance ecommerce websites that are fast, secure and conversion-focused. 
            Our expertise includes <strong className="text-white">Shopify development</strong>, 
            <strong className="text-white"> WordPress development</strong>, 
            <strong className="text-white"> BigCommerce development</strong> and 
            <strong className="text-white"> SEO services</strong> designed to drive measurable results.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            We work with startups, small businesses and enterprise brands across the globe to create scalable digital solutions. 
            Our mission is to build websites that not only look great but also perform exceptionally well in search engines and generate revenue.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            Who We Are
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            We are a team of experienced developers, designers and digital marketing experts focused on delivering high-quality solutions. 
            As a <strong className="text-white">full stack development company</strong>, we use modern technologies like 
            <strong className="text-white"> React.js, Next.js, Vue.js, Node.js and Express.js</strong> 
            to build powerful web applications.
          </p>

          <p className="mt-4 text-white/70 leading-relaxed">
            Our approach is simple — we combine technology, design and strategy to create solutions that help businesses grow. 
            Every project we work on is tailored to meet specific business goals.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            Our Ecommerce Development Services
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            We offer a wide range of <strong className="text-white">ecommerce development services</strong>:
          </p>

          <ul className="mt-4 text-white/70 list-disc pl-6 space-y-2">
         <li>
            <a href="/neto-by-maropost-development" className="underline">
              Neto by Maropost Development Services
            </a> – Custom Neto ecommerce development, theme customisation and performance optimisation
          </li>
            <li><a href="/shopify-development-services" className="underline">Shopify Development</a> – Custom store design and optimisation</li>
            <li><a href="/wordpress-development-services" className="underline">WordPress Development</a> – SEO-friendly websites</li>
            <li><a href="/bigcommerce-development-services" className="underline">BigCommerce Development</a> – Scalable ecommerce platforms</li>
            <li><a href="/seo-services" className="underline">SEO Services</a> – Improve rankings and traffic</li>
            <li><a href="/google-ads-services" className="underline">Google Ads</a> – Lead generation campaigns</li>
            <li><a href="/meta-ads-services" className="underline">Meta Ads</a> – Facebook & Instagram marketing</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold">
            Full Stack Development Expertise
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            Our team specialises in <strong className="text-white">frontend and backend development</strong>, ensuring complete control over project architecture. 
            We build fast-loading applications with clean code, optimised performance and high scalability.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            SEO & Performance Optimisation
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            We provide advanced <strong className="text-white">SEO optimisation services</strong> including technical SEO, on-page optimisation and speed improvements. 
            Our goal is to help your website rank higher on Google and attract organic traffic.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            Digital Marketing Expertise
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            In addition to development, we offer <strong className="text-white">digital marketing services</strong> including Google Ads, Meta Ads and Amazon PPC. 
            Our strategies are data-driven and focused on maximising ROI.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            Why Choose MVP InfoTech
          </h2>

          <ul className="mt-4 text-white/70 list-disc pl-6 space-y-2">
            <li><strong className="text-white">10+ years experience</strong></li>
            <li><strong className="text-white">SEO-focused approach</strong></li>
            <li><strong className="text-white">Fast and scalable solutions</strong></li>
            <li><strong className="text-white">Global client base</strong></li>
            <li><strong className="text-white">Conversion-driven design</strong></li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold">
            Our Mission & Vision
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            Our mission is to help businesses succeed online by building powerful digital solutions. 
            Our vision is to become a global leader in ecommerce development and digital services.
          </p>

          <h2 className="mt-10 text-2xl font-semibold">
            Get Started Today
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            Looking for a reliable <strong className="text-white">web development company</strong>? 
            Contact MVP InfoTech today and grow your business with expert ecommerce solutions.
          </p>

        </div>
      </section>
    </>
  );
}