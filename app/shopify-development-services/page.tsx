import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),
  title:
    "Shopify Development Services Worldwide | Shopify Experts & Ecommerce Solutions",
  description:
    "We provide Shopify development services worldwide including Australia, USA, UK, Canada, UAE and India.",
};

export default function ShopifyServicePage() {
  return (
    <main className="bg-[#0b1020] text-white">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-blue-600 to-purple-700 opacity-90" />

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
      <section className="py-20 bg-[#0b1020] max-w-7xl mx-auto px-6">
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
     <section className="pt-20 max-w-4xl mx-auto px-6">
  <h2 className="text-3xl font-semibold">
    Shopify Ecommerce Development for Global Businesses
  </h2>

  <p className="mt-6 text-white/70">
    Shopify is one of the most powerful and widely used ecommerce platforms in the world,
    enabling businesses to build, manage and scale online stores with ease. Whether you are
    a startup, small business or enterprise brand, Shopify provides flexible tools and
    features to create a high-performing ecommerce website. With its user-friendly interface,
    secure payment gateways and extensive app ecosystem, Shopify allows businesses to deliver
    seamless shopping experiences to customers across the globe.
  </p>

  <p className="mt-4 text-white/70">
    Our Shopify development services focus on creating fast, responsive and conversion-driven
    ecommerce stores tailored to your business needs. We specialise in custom Shopify theme
    development, store setup, product management, app integrations and Shopify SEO optimisation.
    Our goal is to ensure your online store not only looks professional but also performs
    exceptionally well in search engines and drives maximum sales.
  </p>

  <p className="mt-4 text-white/70">
    We provide Shopify development services worldwide including Australia, USA, UK, Canada,
    UAE and India. Our team works with international clients to deliver scalable ecommerce
    solutions that help businesses expand their reach and grow globally. From dropshipping
    store setup to advanced Shopify customisation, we handle every aspect of ecommerce development
    with precision and expertise.
  </p>

  <p className="mt-4 text-white/70">
    By combining modern design, performance optimisation and SEO best practices, we help your
    Shopify store stand out in a competitive market. Whether you need a brand new store or want
    to improve your existing Shopify website, our expert developers ensure long-term success
    with reliable, scalable and high-quality ecommerce solutions.
  </p>
  <p className="mt-4 text-white/70">
  We provide professional Shopify development services worldwide including Australia, USA, UK, Canada, UAE and India, helping businesses build scalable, high-performing and SEO-optimized ecommerce stores.
  </p>
</section>
      {/* FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-6">
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