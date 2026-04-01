import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title:
    "Hire React.js Developer Australia | React Expert & Frontend Specialist",

  description:
    "Hire expert React.js developers for fast, scalable web applications. Custom React development, UI design, API integration and performance optimization worldwide.",

  keywords: [
    "react js developer",
    "hire react developer",
    "react frontend developer",
    "react js expert",
    "react development services",

    // 🌍 Country targeting
    "react js developer australia",
    "react js developer usa",
    "react js developer uk",
    "hire react js developer worldwide",
    "frontend developer react australia",

    // 🛠 Services
    "react js web development",
    "react js frontend development",
    "react js ui development",
    "react js api integration",
    "react js single page application",
    "react js performance optimization",
    "react js bug fixing",
    "react js maintenance services",

    // 💰 Business intent
    "hire react js freelancer",
    "react js development agency",
    "frontend development agency",
    "react js expert for hire",
    "hire frontend developer react",

    // 🔥 Advanced
    "react js spa development",
    "react js next js development",
    "react js scalable architecture",
    "react js component development",
    "react js optimization services",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.mvpinfotech.in/react-js-development",
  },

  // ✅ Open Graph
  openGraph: {
    title:
      "Hire React.js Developer Australia | React Frontend Experts",
    description:
      "Expert React.js developers for scalable frontend applications, UI development and performance optimization.",
    url: "https://www.mvpinfotech.in/react-js-development",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/react.png",
        width: 1200,
        height: 630,
        alt: "React.js Development Services",
      },
    ],
  },

  // ✅ Twitter
  twitter: {
    card: "summary_large_image",
    title: "React.js Developer | MVP InfoTech",
    description:
      "Hire expert React.js developers for modern frontend applications.",
    images: ["https://www.mvpinfotech.in/react.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ReactServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#1f3b73] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hire React.js Developer (Frontend Expert)
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Build fast, scalable and interactive web applications using React.js.
            </p>

            <p className="mt-4 text-white/70">
              I develop modern React applications with clean UI, reusable components and high performance.
            </p>

            <div className="mt-6 text-white/80 text-sm">
              ✔ 5+ Years React Experience <br />
              ✔ SPA & Web App Development <br />
              ✔ API Integration Expert <br />
              ✔ Clean & Scalable Code
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
                src="/react.png"
                alt="React.js development"
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
            React.js Development Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "React SPA Development",
              "Custom UI Components",
              "API Integration (REST / GraphQL)",
              "Next.js Development",
              "Performance Optimization",
              "Bug Fixing & Maintenance",
              "Frontend Architecture",
              "Redux / State Management",
              "Migration to React",
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex gap-3">
                  <span className="text-blue-400 font-semibold">✓</span>
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
      Hire React.js Developer for High-Performance Web Applications
    </h2>

    <p className="mt-6 text-white/70">
      <strong>React.js development</strong> is one of the most powerful solutions for building modern, scalable and high-performance web applications. 
      <strong>React.js</strong> is a popular JavaScript library developed by Facebook, widely used for creating dynamic user interfaces and single-page applications (SPA). 
      With its component-based architecture, virtual DOM and fast rendering capabilities, <strong>React.js web development</strong> enables businesses to build interactive and user-friendly applications.
    </p>

    <p className="mt-4 text-white/70">
      Our <strong>React.js development services</strong> are designed to help businesses create fast, responsive and SEO-friendly applications. 
      Whether you need a SaaS platform, dashboard, enterprise application or custom web app, our expert <strong>React.js developers</strong> deliver tailored solutions that align with your business goals.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose React.js for Web Development?
    </h3>

    <p className="mt-4 text-white/70">
      <strong>React.js framework</strong> offers high performance and flexibility, making it ideal for building modern applications. 
      Its component-based architecture allows developers to reuse code, improve maintainability and speed up development. 
      With features like virtual DOM and efficient rendering, <strong>React.js application development</strong> ensures faster loading and smooth user experience.
    </p>

    <p className="mt-4 text-white/70">
      Another advantage of <strong>React.js frontend development</strong> is its scalability. 
      It can be used to build everything from small web applications to large enterprise systems. 
      React also integrates seamlessly with backend technologies and APIs, making it a versatile solution for modern web development.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Custom React.js Development Services
    </h3>

    <p className="mt-4 text-white/70">
      We offer complete <strong>React.js development services</strong> tailored to your business needs. 
      Our services include <strong>React.js SPA development</strong>, <strong>custom React web applications</strong>, 
      <strong>React.js dashboard development</strong>, and <strong>SaaS application development</strong>.
    </p>

    <p className="mt-4 text-white/70">
      Our experienced <strong>React developers</strong> focus on building scalable, maintainable and performance-driven applications. 
      We follow best practices and use modern tools to ensure your application is fast, secure and user-friendly.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      React.js Frontend Development for Modern UI
    </h3>

    <p className="mt-4 text-white/70">
      A high-quality UI is essential for user engagement. Our <strong>React.js frontend development services</strong> focus on creating responsive, interactive and visually appealing interfaces. 
      We build pixel-perfect designs with smooth animations and seamless user experience.
    </p>

    <p className="mt-4 text-white/70">
      Using reusable components, our <strong>React UI developers</strong> ensure your application is easy to scale and maintain. 
      We deliver frontend solutions that improve user engagement and overall performance.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      React.js API Integration & Backend Connectivity
    </h3>

    <p className="mt-4 text-white/70">
      Modern applications require strong backend connectivity. Our <strong>React.js API integration services</strong> ensure seamless communication between frontend and backend systems. 
      We integrate REST APIs, GraphQL APIs and third-party services to enhance functionality and performance.
    </p>

    <p className="mt-4 text-white/70">
      Whether you are building a SaaS platform or enterprise application, our <strong>React developers</strong> ensure efficient data handling and real-time updates.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      React.js Performance Optimization
    </h3>

    <p className="mt-4 text-white/70">
      Performance is critical for user experience and SEO. Our <strong>React.js performance optimization</strong> services ensure your application loads quickly and runs efficiently. 
      We implement code splitting, lazy loading, caching and other advanced techniques to improve speed.
    </p>

    <p className="mt-4 text-white/70">
      A fast-loading <strong>React.js application</strong> reduces bounce rates, improves engagement and enhances search engine rankings.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Scalable React.js Application Development
    </h3>

    <p className="mt-4 text-white/70">
      Our <strong>React.js application development</strong> focuses on scalability and long-term performance. 
      We build applications that can handle increasing traffic, new features and business growth without compromising performance.
    </p>

    <p className="mt-4 text-white/70">
      From startup MVPs to enterprise solutions, our <strong>React developers</strong> deliver scalable and reliable applications tailored to your needs.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Global React.js Development Services
    </h3>

    <p className="mt-4 text-white/70">
      We provide <strong>React.js development services worldwide</strong> including Australia, USA, UK, Canada, UAE and India. 
      Our team works with global clients to deliver high-quality frontend solutions that meet international standards.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Hire Our React.js Developers?
    </h3>

    <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
      <li><strong>Experienced React.js developers</strong> with strong frontend expertise</li>
      <li><strong>Custom React application development</strong></li>
      <li><strong>Responsive and user-friendly UI design</strong></li>
      <li><strong>Fast performance and optimization</strong></li>
      <li><strong>API integration and scalable solutions</strong></li>
      <li><strong>Affordable pricing and ongoing support</strong></li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Conclusion
    </h3>

    <p className="mt-4 text-white/70">
      <strong>React.js development</strong> is the ideal solution for building fast, modern and scalable web applications. 
      With our expert <strong>React.js development services</strong>, you can create high-performance applications that deliver exceptional user experiences. 
      Whether you need a SaaS platform, dashboard or custom web application, our team is ready to help you achieve your business goals.
    </p>

  </div>
</section>
<Allinone/>
      {/* CTA */}
      <section className="pt-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start Your React Project Today
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