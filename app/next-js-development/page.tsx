import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title:
    "Hire Next.js Developer Australia | Next.js Expert & SEO Web Specialist",

  description:
    "Hire expert Next.js developers for fast, SEO-friendly and scalable web applications. Custom development, SSR, API integration and performance optimization worldwide.",

  keywords: [
    "next js developer",
    "hire nextjs developer",
    "next js expert",
    "seo web development",
    "next js services",

    // 🌍 Country targeting
    "next js developer australia",
    "next js developer usa",
    "next js developer uk",
    "hire next js developer worldwide",
    "seo developer next js australia",

    // 🛠 Services
    "next js web development",
    "next js frontend development",
    "next js ssr development",
    "next js api routes development",
    "next js performance optimization",
    "next js bug fixing",
    "next js maintenance services",
    "next js support services",

    // 💰 Business intent
    "hire next js freelancer",
    "next js development agency",
    "frontend development agency",
    "next js expert for hire",
    "hire frontend developer next js",

    // 🔥 Advanced
    "next js server side rendering",
    "next js static site generation",
    "next js app router development",
    "next js seo optimization",
    "next js scalable architecture",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.mvpinfotech.in/next-js-development",
  },

  // ✅ Open Graph
  openGraph: {
    title:
      "Hire Next.js Developer Australia | SEO & Performance Experts",
    description:
      "Expert Next.js developers for scalable, SEO-friendly and high-performance web applications.",
    url: "https://www.mvpinfotech.in/next-js-development",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/next.png",
        width: 1200,
        height: 630,
        alt: "Next.js Development Services",
      },
    ],
  },

  // ✅ Twitter
  twitter: {
    card: "summary_large_image",
    title: "Next.js Developer | MVP InfoTech",
    description:
      "Hire expert Next.js developers for SEO-friendly web applications.",
    images: ["https://www.mvpinfotech.in/next.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function NextjsServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#000000] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hire Next.js Developer (Fullstack Expert)
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Build fast, SEO-friendly and scalable web applications using Next.js.
            </p>

            <p className="mt-4 text-white/70">
              I develop high-performance apps with SSR, SSG and modern architecture.
            </p>

            <div className="mt-6 text-white/80 text-sm">
              ✔ 10+ Years Next.js Experience <br />
              ✔ SSR / SSG Optimization <br />
              ✔ API Routes & Backend Logic <br />
              ✔ SEO Friendly Development
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-md">
                Get Free Consultation
              </Link>

              <Link href="/ourwork" className="border border-white/20 px-6 py-3 rounded-md">
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/next.png"
                alt="Next.js development"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold">
            Next.js Development Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "SEO Optimized Websites",
              "SSR / SSG Development",
              "Fullstack Web Apps",
              "API Routes Development",
              "Performance Optimization",
              "Image Optimization",
              "Authentication Systems",
              "Deployment (Vercel / Server)",
              "Maintenance & Scaling",
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex gap-3">
                  <span className="text-gray-300 font-semibold">✓</span>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 border-t border-white/10">
  <div className="mx-auto max-w-4xl px-6">

    <h2 className="text-3xl font-semibold">
      Hire Next.js Developer for High-Performance Web Applications
    </h2>

    <p className="mt-6 text-white/70">
      <strong>Next.js development</strong> is one of the most advanced solutions for building fast, SEO-friendly and scalable web applications. 
      <strong>Next.js</strong> is a powerful React framework that enables features like server-side rendering (SSR), static site generation (SSG) and API routes. 
      With its modern architecture and performance optimization capabilities, <strong>Next.js web development</strong> helps businesses create high-performing websites and applications.
    </p>

    <p className="mt-4 text-white/70">
      Our <strong>Next.js development services</strong> are focused on building lightning-fast, SEO-optimized and scalable applications. 
      Whether you need a SaaS platform, landing page, ecommerce frontend or enterprise application, our expert <strong>Next.js developers</strong> deliver custom solutions tailored to your business needs.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Next.js for Web Development?
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Next.js development</strong> offers significant advantages in terms of performance and SEO. 
      With server-side rendering and static generation, websites load faster and rank better on search engines. 
      This makes <strong>Next.js website development</strong> ideal for businesses looking to improve visibility and user experience.
    </p>

    <p className="mt-4 text-white/70">
      Another key benefit of <strong>Next.js framework</strong> is its flexibility. 
      It allows developers to build both static and dynamic applications with ease. 
      Features like automatic code splitting, image optimization and API routes make development faster and more efficient.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Custom Next.js Development Services
    </h3>

    <p className="mt-4 text-white/70">
      We offer complete <strong>Next.js development services</strong> tailored to your business requirements. 
      Our services include <strong>Next.js web application development</strong>, <strong>Next.js SaaS development</strong>, 
      <strong>custom frontend development</strong>, and <strong>Next.js landing page development</strong>.
    </p>

    <p className="mt-4 text-white/70">
      Our experienced <strong>Next.js developers</strong> focus on building scalable, maintainable and high-performance applications. 
      We follow best practices to ensure your application delivers exceptional speed and user experience.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Next.js Frontend Development for SEO & Performance
    </h3>

    <p className="mt-4 text-white/70">
      One of the biggest advantages of <strong>Next.js frontend development</strong> is its SEO capability. 
      With server-side rendering, search engines can easily crawl and index your content, improving rankings.
    </p>

    <p className="mt-4 text-white/70">
      We build responsive, fast-loading and SEO-optimized interfaces using modern design principles. 
      Our <strong>Next.js developers</strong> ensure your website provides a seamless user experience across all devices.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Next.js API Routes & Backend Integration
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Next.js</strong> also supports backend functionality through API routes. 
      Our <strong>Next.js development services</strong> include building APIs, integrating third-party services and connecting frontend with backend systems.
    </p>

    <p className="mt-4 text-white/70">
      Whether you are building a SaaS application or enterprise platform, our <strong>Next.js developers</strong> ensure seamless data handling and integration.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Next.js Performance Optimization
    </h3>

    <p className="mt-4 text-white/70">
      Performance is a key factor in modern web development. Our <strong>Next.js performance optimization</strong> services ensure your application loads quickly and runs efficiently. 
      We implement techniques like code splitting, lazy loading, caching and image optimization.
    </p>

    <p className="mt-4 text-white/70">
      A fast-loading <strong>Next.js application</strong> improves user engagement, reduces bounce rate and enhances SEO performance.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Scalable Next.js Application Development
    </h3>

    <p className="mt-4 text-white/70">
      Our <strong>Next.js application development</strong> focuses on scalability and long-term growth. 
      We build applications that can handle high traffic, complex features and business expansion without performance issues.
    </p>

    <p className="mt-4 text-white/70">
      From startup MVPs to enterprise-level solutions, our <strong>Next.js developers</strong> deliver scalable and reliable applications tailored to your needs.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Global Next.js Development Services
    </h3>

    <p className="mt-4 text-white/70">
      We provide <strong>Next.js development services worldwide</strong> including Australia, USA, UK, Canada, UAE and India. 
      Our team works with international clients to deliver high-quality applications that meet global standards.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Hire Our Next.js Developers?
    </h3>

    <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
      <li><strong>Experienced Next.js developers</strong> with React expertise</li>
      <li><strong>Custom web application development</strong></li>
      <li><strong>SEO-friendly and high-performance solutions</strong></li>
      <li><strong>Fast loading speed and optimization</strong></li>
      <li><strong>API integration and scalable architecture</strong></li>
      <li><strong>Affordable pricing and ongoing support</strong></li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Conclusion
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Next.js development</strong> is the perfect choice for building fast, SEO-optimized and scalable web applications. 
      With our expert <strong>Next.js development services</strong>, you can create high-performance applications that deliver exceptional user experiences. 
      Whether you need a SaaS platform, landing page or enterprise solution, our team is ready to help you achieve your business goals.
    </p>

  </div>
</section>
<Allinone/>
      {/* CTA */}
      <section className="pt-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start Your Next.js Project Today
          </h2>

          <div className="mt-10 flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-md">
              Contact Now
            </Link>

            <Link href="/services" className="border border-white/20 px-8 py-3 rounded-md">
              View Services
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}