import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function AboutUs() {
  const skills = [
    "Neto By Maropost",
    "Shopify",
    "WordPress",
    "BigCommerce",
    "Vue.js",
    "React.js",
    "Node.js",
    "Next.js",
    "Express.js",
    "SEO",
   
  ];

  return (
    <section
      id="about"
      className="relative pt-24"
    >
      <div className="mx-auto max-w-5xl px-6 text-left">

        <h2 className="text-3xl md:text-4xl font-semibold">
          About Us
        </h2>

        <p className="mt-5 text-white/70 leading-relaxed ">
  We are a dedicated and results-driven <strong className="text-white">full-stack eCommerce development team</strong>
  helping businesses design, build and scale powerful online stores that are fast, secure and search-engine optimized.
  Our mission is to create modern digital commerce experiences that combine high performance, clean architecture
  and conversion-focused user experience. We work closely with startups, growing brands and established businesses
  to deliver reliable eCommerce solutions that support long-term growth and higher online revenue.
</p>

<p className="mt-4 text-white/70 leading-relaxed ">
  Our technical expertise covers the complete eCommerce development lifecycle, from UI and frontend engineering
  to backend development, API integrations and cloud-ready architectures. We build advanced storefronts using
  <strong className="text-white"> Next.js, React.js and Vue.js</strong> and create scalable backend systems using
  <strong className="text-white"> Node.js and Express.js</strong>. This modern technology stack allows us to deliver
  lightning-fast websites, improved Core Web Vitals and highly maintainable codebases that support future business needs.
</p>

<p className="mt-4 text-white/70 leading-relaxed ">
  We specialize in enterprise-grade eCommerce platforms including
  <strong className="text-white"> Neto, Maropost Commerce Cloud, Shopify and BigCommerce</strong>.
  Our team helps merchants launch new online stores, redesign existing websites and migrate stores from legacy
  platforms without losing critical business data, customer records or SEO rankings. We carefully plan and execute
  each eCommerce migration to preserve URLs, metadata, product catalogs and structured data, ensuring a smooth and
  risk-free transition to modern platforms.
</p>

<p className="mt-4 text-white/70 leading-relaxed ">
  Performance optimization and technical SEO are core parts of our development process. We focus on improving
  website loading speed, server response times and frontend performance by using modern rendering techniques,
  optimized images and efficient component structures. Our SEO-friendly development approach helps businesses
  achieve better visibility in search engines, higher organic traffic and stronger online brand presence.
</p>

<p className="mt-4 text-white/70 leading-relaxed ">
  In addition to custom development, we provide complete eCommerce consulting, platform integrations and automation
  services. We integrate payment gateways, shipping providers, ERP systems, CRM platforms and marketing tools to
  streamline business operations and improve order management workflows. Our solutions are designed to support
  multi-store, multi-currency and multi-region business models for international growth.
</p>

<p className="mt-4 text-white/70 leading-relaxed ">
  We strongly believe that successful eCommerce projects are built on a combination of clean code, thoughtful user
  interface design and data-driven decision making. Our team focuses on conversion-focused UI and UX design that
  improves customer engagement, reduces cart abandonment and increases overall sales performance. Every project
  is developed with accessibility, usability and long-term scalability in mind.
</p>

<p className="mt-4 text-white/70 leading-relaxed ">
  Whether you are launching a new brand, expanding your existing online store or modernizing your current
  eCommerce infrastructure, our full-stack development team is ready to help you build a future-proof platform
  that delivers real business results. We partner with our clients to provide transparent communication,
  ongoing technical support and continuous optimization to ensure sustainable digital growth.
</p>

{/* SEO helper line */}
<p className="sr-only">
  Full stack ecommerce development team, ecommerce website development services, Next.js ecommerce developers,
  React ecommerce developers, Vue.js ecommerce developers, Node.js and Express backend developers,
  Neto ecommerce developers, Maropost Commerce Cloud specialists, Shopify expert developers,
  BigCommerce ecommerce developers, WordPress ecommerce developers, ecommerce platform migration services,
  technical SEO for ecommerce websites, ecommerce performance optimization, Core Web Vitals optimization,
  headless ecommerce development, custom ecommerce solutions, ecommerce UI UX design and conversion rate optimization services.
</p>
 <div className="mt-10 flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80
                         hover:bg-white/10 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
