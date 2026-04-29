import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";

import {
  FaShopify,
  FaWordpress,
  FaSearch,
  FaGoogle,
} from "react-icons/fa";
import {
  SiBigcommerce,
  SiMeta,
} from "react-icons/si";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title:
    "Shopify Development Services Worldwide | Shopify Experts & Ecommerce Solutions",

  description:
    "Hire expert Shopify developers for custom store development, theme customization, app integration, and performance optimization worldwide.",

  keywords: [
    "shopify developer",
    "hire shopify developer",
    "shopify development services",
    "shopify expert",
    "shopify development company",
    "shopify ecommerce developer",

    // 🌍 Country targeting
    "shopify developer australia",
    "shopify developer usa",
    "shopify developer uk",
    "shopify developer canada",
    "shopify developer uae",
    "shopify developer india",
    "hire shopify developer australia",
    "hire shopify expert worldwide",

    // 🛠 Services
    "shopify store development",
    "shopify theme customization",
    "shopify app integration",
    "shopify custom development",
    "shopify speed optimization",
    "shopify bug fixing",
    "shopify maintenance services",
    "shopify support services",

    // 💰 Business intent
    "hire shopify freelancer",
    "shopify agency worldwide",
    "shopify development agency",
    "shopify experts for ecommerce",
    "shopify b2b ecommerce development",
    "shopify plus development",
    "shopify migration services",
    "woocommerce to shopify migration",
    "magento to shopify migration",

    // 🔥 Advanced
    "shopify seo optimization",
    "shopify conversion optimization",
    "shopify performance optimization",
    "shopify custom checkout",
    "shopify liquid expert",
    "shopify headless commerce",
    "shopify api integration",
    "shopify private app development",
  ],

  alternates: {
    canonical: "https://www.mvpinfotech.in/shopify-development-services",
  },

  openGraph: {
    title:
      "Shopify Development Services Worldwide | Shopify Experts",
    description:
      "Expert Shopify developers for custom ecommerce solutions, integrations, and high-performance stores.",
    url: "https://www.mvpinfotech.in/shopify-development-services",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/shopify.png",
        width: 1200,
        height: 630,
        alt: "Shopify Development Services Worldwide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Services | MVP InfoTech",
    description:
      "Hire Shopify experts for scalable ecommerce development and optimization.",
    images: ["https://www.mvpinfotech.in/shopify.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ShopifyServicePage() {
  return (
    <main className="">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Shopify Development Services",
      provider: {
        "@type": "Organization",
        name: "MVP Infotech",
        url: "https://www.mvpinfotech.in",
      },
    }),
  }}
/>

 <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-400 inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]">
        <Link href="/">Home</Link> / shopify-development-services
      </div>
      {/* HERO */}
      <section className="relative py-24">
       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#95BF47] via-[#22c55e] to-[#1e3a8a] opacity-90" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Shopify Development Services 
            </h1>

            <p className="mt-6 text-white/80">
              We provide Shopify development services worldwide including Australia,
              USA, UK, Canada, UAE and India, helping businesses build high-performing ecommerce stores.
            </p>

            <p className="mt-4 text-white/70">
              From store setup to custom development, SEO optimisation and performance improvements.
            </p>

            <div className="mt-8">
              <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-md">
                Get Free Consultation
              </Link>
            </div>
          </div>

          <div>
            <Image
              src="/shopify.png"
              alt="Shopify development"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-semibold">
              Build Stunning Shopify Stores
            </h2>

            <p className="mt-6 text-white/70">
              We create modern Shopify stores with strong UI/UX and high conversions.
            </p>

            <ul className="mt-6 space-y-3 text-white/70">
              <li>🚀 Conversion focused design</li>
              <li>⚡ Fast performance</li>
              <li>📱 Mobile friendly layout</li>
              <li>🎯 SEO optimized</li>
            </ul>
          </div>

          <div>
            <Image
              src="/mobile-ui.png"
              alt="Mobile ecommerce"
              width={500}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20  max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">
          Our Shopify Services
        </h2>

       <div className="mt-10 grid md:grid-cols-3 gap-6">
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
      className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 hover:scale-105 hover:shadow-xl transition duration-300 flex items-start gap-3"
    >
      <span className="text-indigo-400 text-lg">✓</span>
      <p className="text-white/80 text-sm">{item}</p>
    </div>
  ))}
</div>
      </section>

      {/* ANALYTICS SECTION */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <Image
              src="/dashboard.png"
              alt="Analytics dashboard"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold">
              Track & Grow Your Business
            </h2>

            <p className="mt-6 text-white/70">
              Monitor performance, track sales and optimise conversions using powerful analytics tools.
            </p>

            <ul className="mt-6 space-y-3 text-white/70">
              <li>📊 Sales tracking</li>
              <li>📈 Growth insights</li>
              <li>🎯 Conversion analytics</li>
              <li>⚡ Performance monitoring</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SEO CONTENT */}
     <section className="py-20 max-w-7xl mx-auto px-6">
  
  <h2 className="text-3xl font-semibold">
    Shopify Ecommerce Development Services for Global Businesses
  </h2>

  <p className="mt-6 text-white/70">
    <strong>Shopify ecommerce development</strong> is one of the most effective ways to build a scalable, high-performing and conversion-focused online store. 
    <strong>Shopify</strong> is a leading ecommerce platform trusted by millions of businesses worldwide, from startups to enterprise-level brands. 
    It offers a powerful combination of flexibility, security and ease of use, allowing businesses to create professional online stores without technical complexity. 
    With built-in features, seamless integrations and a vast app ecosystem, <strong>Shopify store development</strong> helps businesses launch and grow faster in today’s competitive digital market.
  </p>

  <p className="mt-4 text-white/70">
    Our <strong>Shopify development services</strong> are designed to help businesses build fully customised, high-converting and SEO-friendly ecommerce websites. 
    Whether you need a brand-new store or want to improve an existing one, our expert <strong>Shopify developers</strong> deliver tailored solutions that match your business goals. 
    We specialise in <strong>custom Shopify theme development</strong>, <strong>Shopify store setup</strong>, <strong>Shopify app integration</strong>, 
    <strong>Shopify SEO optimisation</strong> and performance enhancement to ensure your store stands out and generates consistent sales.
  </p>

  <h3 className="mt-10 text-2xl font-semibold">
    Why Choose Shopify for Ecommerce Development?
  </h3>

  <p className="mt-4 text-white/70">
    <strong>Shopify website development</strong> is the preferred choice for businesses because of its reliability and scalability. 
    It provides a secure environment with built-in hosting, SSL certification and fast loading speeds. 
    The platform supports multiple payment gateways, making it easy to accept payments globally. 
    With its user-friendly dashboard, managing products, orders and customers becomes simple even for non-technical users.
  </p>

  <p className="mt-4 text-white/70">
    Another major advantage of <strong>Shopify ecommerce solutions</strong> is its flexibility. 
    Businesses can customise their stores using <strong>Shopify themes</strong>, apps and APIs to create unique shopping experiences. 
    From small online stores to large-scale ecommerce platforms, Shopify adapts to your needs and supports business growth efficiently.
  </p>

  <h3 className="mt-10 text-2xl font-semibold">
    Our Shopify Development Services
  </h3>

  <p className="mt-4 text-white/70">
    We offer complete <strong>Shopify ecommerce development services</strong> to help businesses succeed online. 
    Our services include <strong>Shopify store setup</strong>, <strong>custom Shopify design</strong>, 
    <strong>Shopify theme customization</strong>, <strong>Shopify app development</strong>, 
    <strong>Shopify API integration</strong> and <strong>Shopify performance optimisation</strong>.
  </p>

  <p className="mt-4 text-white/70">
    Our team of experienced <strong>Shopify experts</strong> ensures that every store we build is mobile-responsive, fast-loading and conversion-optimised. 
    We focus on delivering seamless user experiences that improve engagement and increase sales. 
    From homepage design to checkout optimisation, every element is crafted to maximise results.
  </p>

  <h3 className="mt-10 text-2xl font-semibold">
    Custom Shopify Theme Development
  </h3>

  <p className="mt-4 text-white/70">
    A unique design plays a crucial role in ecommerce success. Our <strong>custom Shopify theme development</strong> services ensure that your store reflects your brand identity. 
    We create visually appealing, user-friendly and SEO-optimised themes that enhance user experience and improve conversions. 
    Whether you need a completely custom design or modifications to an existing theme, our <strong>Shopify theme developers</strong> deliver high-quality results.
  </p>

  <h3 className="mt-10 text-2xl font-semibold">
    Shopify SEO Optimisation Services
  </h3>

  <p className="mt-4 text-white/70">
    Building a store is not enough — it needs visibility. Our <strong>Shopify SEO services</strong> help your website rank higher on search engines. 
    We optimise product pages, meta tags, URLs, images and site structure to improve organic traffic. 
    With advanced <strong>ecommerce SEO strategies</strong>, we ensure your Shopify store attracts the right audience and generates consistent leads.
  </p>

  <h3 className="mt-10 text-2xl font-semibold">
    Shopify App Integration & Custom Development
  </h3>

  <p className="mt-4 text-white/70">
    Shopify offers thousands of apps, but choosing and integrating the right ones is critical. 
    Our <strong>Shopify app integration services</strong> help you extend your store’s functionality with tools for marketing, inventory, analytics and more. 
    We also provide <strong>custom Shopify app development</strong> to build unique features tailored to your business requirements.
  </p>

  <h3 className="mt-10 text-2xl font-semibold">
    Shopify Store Migration Services
  </h3>

  <p className="mt-4 text-white/70">
    Looking to move your existing store to Shopify? Our <strong>Shopify migration services</strong> ensure a smooth and secure transition from platforms like WooCommerce, Magento or Neto. 
    We migrate products, customers, orders and SEO data without affecting performance or rankings.
  </p>

  <h3 className="mt-10 text-2xl font-semibold">
    Global Shopify Development Solutions
  </h3>

  <p className="mt-4 text-white/70">
    We provide <strong>Shopify development services worldwide</strong> including Australia, USA, UK, Canada, UAE and India. 
    Our team works with international clients to deliver scalable ecommerce solutions tailored to global markets. 
    Whether you are targeting local customers or expanding globally, our <strong>Shopify ecommerce experts</strong> help you achieve your business goals.
  </p>

  <h3 className="mt-10 text-2xl font-semibold">
    Why Choose Our Shopify Developers?
  </h3>

  <p className="mt-4 text-white/70">
    Choosing the right development partner is crucial. Our <strong>Shopify developers</strong> bring years of experience in building high-performance ecommerce stores. 
    We focus on quality, performance and long-term success. With a deep understanding of <strong>Shopify ecommerce development</strong>, 
    we deliver solutions that drive traffic, improve conversions and increase revenue.
  </p>

  <p className="mt-4 text-white/70">
    We follow best practices in design, development and SEO to ensure your store performs exceptionally well. 
    From strategy to execution, our team supports you at every stage of your ecommerce journey.
  </p>


  <h2 className="mt-10 text-2xl font-semibold">Shopify in 2026: What’s New and What to Expect</h2>

<p className="mt-4 text-white/70">Shopify continues to dominate the ecommerce industry in 2026 by introducing powerful features, improved performance, and advanced tools that help businesses grow faster. Whether you are a beginner or an established brand, Shopify’s latest updates make it easier than ever to build, manage, and scale an online store.</p>

<p className="mt-4 text-white/70">In 2026, Shopify is not just an ecommerce platform—it has evolved into a complete business ecosystem. From AI-powered tools to advanced customization, Shopify is setting new standards in the online retail space.</p>

<h3 className="mt-10 text-2xl font-semibold">AI-Powered Store Management</h3>
<p className="mt-4 text-white/70">One of the biggest updates in Shopify 2026 is the integration of Artificial Intelligence (AI). Shopify now offers AI-driven product recommendations, automated content generation, and smart inventory management.</p>

<p className="mt-4 text-white/70">With AI, store owners can create product descriptions, optimize SEO, and personalize customer experiences without needing advanced technical skills. This saves time and improves efficiency.</p>

<h3 className="mt-10 text-2xl font-semibold">Improved Performance and Speed</h3>
<p className="mt-4 text-white/70">Website speed is a crucial factor for both user experience and SEO. Shopify has significantly improved its performance in 2026 with faster loading times and better server optimization.</p>

<p className="mt-4 text-white/70">Faster websites lead to lower bounce rates and higher conversions, making Shopify an ideal choice for ecommerce businesses.</p>

<h3 className="mt-10 text-2xl font-semibold">Enhanced Customization with Headless Commerce</h3>
<p className="mt-4 text-white/70">Shopify now supports advanced <strong>headless commerce</strong> solutions, allowing developers to create highly customized storefronts.</p>

<p className="mt-4 text-white/70">This flexibility enables businesses to design unique user experiences while maintaining Shopify’s powerful backend.</p>

<h3 className="mt-10 text-2xl font-semibold">Better Mobile Experience</h3>
<p className="mt-4 text-white/70">Mobile commerce continues to grow rapidly, and Shopify has focused heavily on mobile optimization in 2026. Themes are more responsive, and checkout experiences are smoother than ever.</p>

<p className="mt-4 text-white/70">This ensures that customers can shop بسهولة on any device, improving engagement and sales.</p>

<h3 className="mt-10 text-2xl font-semibold">Expanded App Ecosystem</h3>
<p className="mt-4 text-white/70">Shopify’s app store has grown significantly, offering thousands of apps for marketing, SEO, analytics, and customer support.</p>

<p className="mt-4 text-white/70">Businesses can easily integrate tools to enhance functionality and automate operations.</p>

<h3 className="mt-10 text-2xl font-semibold">Advanced Payment Options</h3>
<p className="mt-4 text-white/70">Shopify now supports a wider range of payment methods, including digital wallets, Buy Now Pay Later (BNPL), and global payment gateways.</p>

<p className="mt-4 text-white/70">This flexibility improves customer convenience and increases conversion rates.</p>

<h3 className="mt-10 text-2xl font-semibold">Stronger SEO and Marketing Tools</h3>
<p className="mt-4 text-white/70">Shopify has improved its built-in SEO features, making it easier for store owners to rank higher on search engines.</p>

<p className="mt-4 text-white/70">With better meta management, structured data support, and marketing integrations, businesses can attract more organic traffic.</p>
 <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">
        Our Ecommerce Development Services
      </h2>

      <p className="text-gray-300 mb-6">
        We offer a wide range of ecommerce development services:
      </p>

      <ul className="space-y-4">

        {/* Neto */}
        <li className="flex items-start gap-3">
          <span className="text-blue-400 text-lg mt-1">⚙️</span>
          <p className="text-gray-300">
            <Link href="/neto-by-maropost-development" className="text-blue-400 hover:underline">
              Neto by Maropost Development Services
            </Link>{" "}
            – Custom Neto ecommerce development, theme customisation and performance optimisation
          </p>
        </li>

        {/* Shopify */}
      

        {/* WordPress */}
        <li className="flex items-start gap-3">
          <FaWordpress className="text-blue-500 text-lg mt-1" />
          <p className="text-gray-300">
            <Link href="/wordpress-development-services" className="text-blue-400 hover:underline">
              WordPress Development
            </Link>{" "}
            – SEO-friendly websites
          </p>
        </li>

        {/* BigCommerce */}
        <li className="flex items-start gap-3">
          <SiBigcommerce className="text-orange-400 text-lg mt-1" />
          <p className="text-gray-300">
            <Link href="/bigcommerce-development-services" className="text-blue-400 hover:underline">
              BigCommerce Development
            </Link>{" "}
            – Scalable ecommerce platforms
          </p>
        </li>

        {/* SEO */}
        <li className="flex items-start gap-3">
          <FaSearch className="text-yellow-400 text-lg mt-1" />
          <p className="text-gray-300">
            <Link href="/seo-services" className="text-blue-400 hover:underline">
              SEO Services
            </Link>{" "}
            – Improve rankings and traffic
          </p>
        </li>

        {/* Google Ads */}
        <li className="flex items-start gap-3">
          <FaGoogle className="text-red-400 text-lg mt-1" />
          <p className="text-gray-300">
            <Link href="/google-ads-services" className="text-blue-400 hover:underline">
              Google Ads
            </Link>{" "}
            – Lead generation campaigns
          </p>
        </li>

        {/* Meta Ads */}
        <li className="flex items-start gap-3">
          <SiMeta className="text-blue-400 text-lg mt-1" />
          <p className="text-gray-300">
            <Link href="/meta-ads-services" className="text-blue-400 hover:underline">
              Meta Ads
            </Link>{" "}
            – Facebook & Instagram marketing
          </p>
        </li>

      </ul>
    </div>


  <h3 className="mt-10 text-2xl font-semibold">
    Conclusion
  </h3>

  <p className="mt-4 text-white/70">
    <strong>Shopify ecommerce development</strong> is the perfect solution for businesses looking to build a powerful online presence. 
    With our expert <strong>Shopify development services</strong>, you can create a professional, scalable and high-performing ecommerce store that drives growth and success. 
    Whether you need <strong>Shopify store setup</strong>, <strong>custom development</strong>, <strong>SEO optimisation</strong> or ongoing support, 
    we are here to help you achieve your ecommerce goals.
  </p>

</section>
<Allinone/>

      {/* FAQ */}
      <section className="pb-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold">Shopify FAQs</h2>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold">What is Shopify development?</h3>
            <p className="text-white/70">
              Shopify development includes building and customizing ecommerce stores.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Do you work globally?</h3>
            <p className="text-white/70">
              Yes, we work worldwide including USA, UK and Australia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Do you provide SEO?</h3>
            <p className="text-white/70">
              Yes, we optimise stores for better ranking.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-600 to-indigo-600">
        <h2 className="text-3xl font-semibold">
          Start Your Shopify Project Today
        </h2>

        <p className="mt-4 text-white/80">
          Build your ecommerce store with expert Shopify developers.
        </p>

        <div className="mt-6">
          <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-md">
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
}