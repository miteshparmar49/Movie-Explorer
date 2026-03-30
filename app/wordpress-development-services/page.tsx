import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";

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
      WordPress Website Development Services for High-Performance Business Growth
    </h2>

    <p className="mt-6 text-white/70">
      <strong>WordPress development services</strong> are one of the most powerful solutions for building scalable, SEO-friendly and high-performance websites. 
      <strong>WordPress</strong> powers more than 40% of websites globally, making it the most popular content management system (CMS). 
      From business websites to complex enterprise platforms, <strong>WordPress website development</strong> provides flexibility, customization and ease of management. 
      Whether you are a startup, small business or large enterprise, a professionally developed <strong>WordPress website</strong> helps you establish a strong online presence and generate consistent leads.
    </p>

    <p className="mt-4 text-white/70">
      Our <strong>WordPress development services</strong> focus on building fast, secure, mobile-responsive and SEO-optimized websites tailored to your business goals. 
      We specialise in <strong>custom WordPress website development</strong>, <strong>WordPress theme customization</strong>, 
      <strong>WooCommerce development</strong>, <strong>WordPress SEO optimization</strong> and performance enhancement. 
      Our goal is to deliver websites that not only look professional but also rank higher on Google and drive conversions.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose WordPress for Website Development?
    </h3>

    <p className="mt-4 text-white/70">
      <strong>WordPress website development</strong> is highly preferred because of its flexibility and scalability. 
      It allows businesses to create fully customized websites with thousands of themes and plugins. 
      With built-in SEO features and easy content management, <strong>WordPress CMS development</strong> enables businesses to update content without technical knowledge.
    </p>

    <p className="mt-4 text-white/70">
      Another major advantage of <strong>WordPress development</strong> is its SEO capability. 
      With proper <strong>on-page SEO optimization</strong>, fast loading speed and clean code structure, WordPress websites rank higher in search engine results. 
      It also supports integrations with tools like Google Analytics, Search Console and marketing automation platforms.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Custom WordPress Website Development
    </h3>

    <p className="mt-4 text-white/70">
      Our <strong>custom WordPress website development</strong> services are designed to create unique, scalable and user-friendly websites. 
      We do not rely on generic templates — instead, we build fully customised designs that reflect your brand identity. 
      Using modern tools and frameworks, our <strong>WordPress developers</strong> ensure your website stands out in a competitive market.
    </p>

    <p className="mt-4 text-white/70">
      A custom website improves user experience, engagement and conversions. With clean code, optimized structure and mobile responsiveness, 
      our <strong>WordPress web development</strong> ensures better SEO performance and higher visibility on Google.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      WooCommerce Development for eCommerce Websites
    </h3>

    <p className="mt-4 text-white/70">
      <strong>WooCommerce development</strong> is the best solution for building powerful ecommerce websites using WordPress. 
      Our <strong>WooCommerce developers</strong> create fully customized online stores with secure payment gateways, product management systems and optimized checkout experiences.
    </p>

    <p className="mt-4 text-white/70">
      We build <strong>WooCommerce ecommerce websites</strong> that are fast, scalable and conversion-focused. 
      From product page design to mobile optimization, every element is crafted to increase sales and improve user experience.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      WordPress SEO Optimization Services
    </h3>

    <p className="mt-4 text-white/70">
      Our <strong>WordPress SEO services</strong> help your website rank higher on search engines. 
      We optimise meta tags, URLs, images, content structure and internal linking to improve visibility. 
      Using advanced <strong>SEO strategies</strong>, we target keywords like <strong>WordPress developer</strong>, 
      <strong>WordPress development company</strong>, <strong>WooCommerce development services</strong> and more.
    </p>

    <p className="mt-4 text-white/70">
      We also implement <strong>schema markup</strong>, technical SEO and performance optimization to ensure your website performs well in search rankings. 
      Our SEO-focused development approach ensures long-term growth and consistent organic traffic.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      WordPress Speed Optimization & Performance
    </h3>

    <p className="mt-4 text-white/70">
      Website speed is a critical factor for SEO and user experience. Our <strong>WordPress speed optimization services</strong> ensure your website loads quickly across all devices. 
      We optimize images, reduce CSS and JavaScript, implement caching and use CDN integration to improve performance.
    </p>

    <p className="mt-4 text-white/70">
      A fast-loading <strong>WordPress website</strong> improves user engagement, reduces bounce rate and increases conversion rates. 
      Google also prioritizes fast websites in search rankings, making speed optimization essential.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Secure and Scalable WordPress Development
    </h3>

    <p className="mt-4 text-white/70">
      Security is a top priority in <strong>WordPress development</strong>. 
      We implement advanced security measures such as SSL, firewalls, malware protection and regular updates to keep your website safe. 
      Our <strong>WordPress security services</strong> ensure your website is protected from threats and vulnerabilities.
    </p>

    <p className="mt-4 text-white/70">
      We also build scalable websites that grow with your business. Whether you are increasing traffic, adding features or expanding globally, 
      our <strong>WordPress solutions</strong> are designed for long-term success.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      WordPress Website Redesign & Maintenance
    </h3>

    <p className="mt-4 text-white/70">
      If your website is outdated, our <strong>WordPress redesign services</strong> can transform it into a modern, high-performing platform. 
      We improve UI/UX design, speed, SEO and overall performance to deliver better results.
    </p>

    <p className="mt-4 text-white/70">
      Our <strong>WordPress maintenance services</strong> include updates, backups, bug fixes and performance monitoring. 
      This ensures your website remains secure, fast and fully functional at all times.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Global WordPress Development Services
    </h3>

    <p className="mt-4 text-white/70">
      We provide <strong>WordPress development services worldwide</strong> including Australia, USA, UK, Canada, UAE and India. 
      Our team works with global clients to deliver high-quality, scalable and SEO-optimized websites tailored to different markets.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Our WordPress Developers?
    </h3>

    <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
      <li><strong>Experienced WordPress developers</strong> with proven expertise</li>
      <li><strong>Custom website design and development</strong></li>
      <li><strong>SEO-friendly and mobile-responsive websites</strong></li>
      <li><strong>Fast loading speed and performance optimization</strong></li>
      <li><strong>WooCommerce ecommerce expertise</strong></li>
      <li><strong>Affordable pricing and ongoing support</strong></li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Conclusion
    </h3>

    <p className="mt-4 text-white/70">
      <strong>WordPress website development</strong> is the ideal solution for businesses looking to build a strong online presence. 
      With our expert <strong>WordPress development services</strong>, you can create a scalable, high-performing and SEO-optimized website that drives growth and success. 
      Whether you need a business website, ecommerce store or custom solution, our team is here to help you achieve your digital goals.
    </p>

  </div>
</section>
<Allinone/>
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