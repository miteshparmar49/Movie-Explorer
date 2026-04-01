import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";
export const metadata: Metadata = {
  title: "Hire Node.js Developer Australia | Backend Expert",
  description:
    "Hire expert Node.js developers for scalable backend applications, APIs, and high-performance systems.",

 keywords: [
  "node js developer",
  "hire node developer",
  "backend developer",
  "node js api development",
  "node js expert",

  // 🌍 Country targeting
  "node js developer australia",
  "node js developer usa",
  "node js developer uk",
  "node js developer canada",
  "hire node js developer worldwide",

  // 🛠 Services
  "node js backend development",
  "node js api development services",
  "node js microservices development",
  "node js rest api development",
  "node js performance optimization",
  "node js bug fixing",
  "node js maintenance services",
  "node js support services",

  // 💰 Business intent
  "hire node js freelancer",
  "node js development agency",
  "backend development agency",
  "node js expert for hire",
  "hire backend developer node js",

  // 🔥 Advanced
  "node js scalable architecture",
  "node js server optimization",
  "node js api integration",
  "node js authentication system",
  "node js high performance backend",
],

  // ✅ VERY IMPORTANT (Canonical Fix)
  alternates: {
    canonical: "https://www.mvpinfotech.in/node-js-development",
  },

  // ✅ Open Graph (for social + SEO boost)
  openGraph: {
    title: "Hire Node.js Developer Australia",
    description:
      "Expert Node.js developers for scalable backend systems and APIs.",
    url: "https://www.mvpinfotech.in/node-js-development",
    siteName: "MVP Infotech",
    type: "website",
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "Hire Node.js Developer Australia",
    description:
      "Hire expert Node.js developers for scalable backend applications.",
  },
};


export default function NodeServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#14532d] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hire Node.js Developer (Backend Expert)
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Build scalable, secure and high-performance backend systems using Node.js.
            </p>

            <p className="mt-4 text-white/70">
              I develop APIs, real-time apps and server-side solutions with clean architecture.
            </p>

            <div className="mt-6 text-white/80 text-sm">
              ✔ 10+ Years Node.js Experience <br />
              ✔ REST API & Backend Systems <br />
              ✔ Database Design (PostgreSQL) <br />
              ✔ Scalable & Secure Code
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
                src="/nodejs.png"
                alt="Node.js development"
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
            Node.js Development Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "REST API Development",
              "GraphQL APIs",
              "Real-time Apps (Socket.io)",
              "Backend Architecture",
              "Database Design",
              "Authentication & Security",
              "Microservices Development",
              "Third-party API Integration",
              "Maintenance & Optimization",
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex gap-3">
                  <span className="text-green-400 font-semibold">✓</span>
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
      Hire Node.js Developer for Scalable Backend Development Solutions
    </h2>

    <p className="mt-6 text-white/70">
      <strong>Node.js development</strong> is one of the most powerful solutions for building fast, scalable and high-performance backend systems. 
      <strong>Node.js</strong> is a JavaScript runtime built on Chrome’s V8 engine, widely used for developing server-side applications, APIs and real-time platforms. 
      With its non-blocking, event-driven architecture, <strong>Node.js backend development</strong> allows businesses to handle multiple requests efficiently and deliver seamless user experiences.
    </p>

    <p className="mt-4 text-white/70">
      Our <strong>Node.js development services</strong> are designed to build secure, scalable and performance-driven backend systems. 
      Whether you need a SaaS application, REST API, enterprise backend or real-time system, our expert <strong>Node.js developers</strong> deliver tailored solutions based on your business requirements.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Node.js for Backend Development?
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Node.js backend development</strong> is highly preferred because of its speed and scalability. 
      Its event-driven architecture enables handling thousands of concurrent requests without performance issues. 
      This makes <strong>Node.js application development</strong> ideal for real-time applications such as chat apps, SaaS platforms and APIs.
    </p>

    <p className="mt-4 text-white/70">
      Another advantage of <strong>Node.js development</strong> is its ability to use JavaScript for both frontend and backend. 
      This reduces development time and improves efficiency. It also integrates seamlessly with databases, APIs and third-party services.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Custom Node.js Development Services
    </h3>

    <p className="mt-4 text-white/70">
      We provide complete <strong>Node.js development services</strong> tailored to your business needs. 
      Our services include <strong>Node.js API development</strong>, <strong>custom backend development</strong>, 
      <strong>Node.js SaaS development</strong>, and <strong>enterprise backend solutions</strong>.
    </p>

    <p className="mt-4 text-white/70">
      Our experienced <strong>Node.js developers</strong> focus on building scalable, secure and maintainable systems. 
      We follow modern development practices to ensure high performance and reliability.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Node.js API Development & Integration
    </h3>

    <p className="mt-4 text-white/70">
      APIs are the backbone of modern applications. Our <strong>Node.js API development services</strong> help you build fast, secure and scalable APIs. 
      We develop RESTful APIs, GraphQL APIs and microservices architectures for modern applications.
    </p>

    <p className="mt-4 text-white/70">
      We also provide <strong>API integration services</strong> to connect your application with third-party services, payment gateways and external systems.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Real-Time Application Development with Node.js
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Node.js</strong> is widely used for real-time applications such as chat apps, live dashboards and streaming platforms. 
      Our <strong>Node.js developers</strong> build real-time systems using technologies like WebSockets and event-based architecture.
    </p>

    <p className="mt-4 text-white/70">
      This ensures instant data updates and seamless user experience across all devices.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Node.js Performance Optimization
    </h3>

    <p className="mt-4 text-white/70">
      Performance is critical for backend systems. Our <strong>Node.js performance optimization</strong> services ensure your application runs efficiently under high load. 
      We optimize database queries, implement caching, and improve server performance.
    </p>

    <p className="mt-4 text-white/70">
      A fast backend improves overall application performance, reduces response time and enhances user experience.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Secure Node.js Backend Development
    </h3>

    <p className="mt-4 text-white/70">
      Security is a top priority in backend development. Our <strong>Node.js development services</strong> include implementing authentication, authorization, encryption and security best practices. 
      We ensure your backend systems are protected against vulnerabilities and cyber threats.
    </p>

    <p className="mt-4 text-white/70">
      From data protection to secure API development, we build robust systems that ensure safety and reliability.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Scalable Node.js Application Development
    </h3>

    <p className="mt-4 text-white/70">
      Our <strong>Node.js application development</strong> focuses on scalability and long-term performance. 
      We build systems that can handle increasing traffic, large data volumes and complex features without performance issues.
    </p>

    <p className="mt-4 text-white/70">
      Whether you are building a startup MVP or enterprise platform, our <strong>Node.js developers</strong> deliver scalable solutions tailored to your needs.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Global Node.js Development Services
    </h3>

    <p className="mt-4 text-white/70">
      We provide <strong>Node.js development services worldwide</strong> including Australia, USA, UK, Canada, UAE and India. 
      Our team works with global clients to deliver high-quality backend solutions that meet international standards.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Hire Our Node.js Developers?
    </h3>

    <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
      <li><strong>Experienced Node.js developers</strong> with backend expertise</li>
      <li><strong>Custom backend and API development</strong></li>
      <li><strong>Secure and scalable architecture</strong></li>
      <li><strong>High performance and optimization</strong></li>
      <li><strong>Real-time application development</strong></li>
      <li><strong>Affordable pricing and ongoing support</strong></li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Conclusion
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Node.js development</strong> is the ideal choice for building fast, scalable and secure backend systems. 
      With our expert <strong>Node.js development services</strong>, you can create high-performance applications that deliver exceptional user experiences. 
      Whether you need API development, SaaS backend or enterprise solutions, our team is ready to help you achieve your business goals.
    </p>

  </div>
</section>
<Allinone/>
      {/* CTA */}
      <section className="pt-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start Your Node.js Project Today
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