import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire Vue.js Developer Australia | Vue Expert",
  description:
    "Hire expert Vue.js developers for fast, scalable and modern web applications. Vue development, UI, API integration and performance optimization.",
  keywords: [
    "vue js developer",
    "hire vue developer",
    "vue js expert",
    "vue frontend developer",
    "vue js development services",
  ],
};

export default function VueServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hire Vue.js Developer (Frontend Expert)
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Build fast, scalable and modern web apps using Vue.js.
            </p>

            <p className="mt-4 text-white/70">
              I create high-performance Vue applications with clean UI, strong architecture and smooth user experience.
            </p>

            <div className="mt-6 text-white/80 text-sm">
              ✔ 5+ Years Vue Experience <br />
              ✔ SPA & Dashboard Development <br />
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
                src="/vuejs.png"
                alt="Vue.js development"
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
            Vue.js Development Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Vue.js SPA Development",
              "Admin Dashboard Development",
              "API Integration (REST / GraphQL)",
              "Vue UI / UX Design",
              "Performance Optimization",
              "Bug Fixing & Maintenance",
              "Nuxt.js Development",
              "Component-Based Architecture",
              "Frontend Migration to Vue",
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex gap-3">
                  <span className="text-indigo-400 font-semibold">✓</span>
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
      Hire Vue.js Developer for High-Performance Web Applications
    </h2>

    <p className="mt-6 text-white/70">
      <strong>Vue.js development</strong> is one of the most efficient ways to build fast, scalable and interactive web applications. 
      <strong>Vue.js</strong> is a progressive JavaScript framework widely used for creating dynamic user interfaces and single-page applications (SPA). 
      With its lightweight architecture, flexibility and high performance, <strong>Vue.js web development</strong> has become a preferred choice for startups, SaaS businesses and enterprise-level applications.
    </p>

    <p className="mt-4 text-white/70">
      Our <strong>Vue.js development services</strong> focus on building modern, responsive and SEO-friendly frontend applications. 
      Whether you need a custom dashboard, SaaS platform or enterprise application, our expert <strong>Vue.js developers</strong> deliver high-quality solutions tailored to your business goals.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Vue.js for Web Development?
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Vue.js framework</strong> offers a perfect balance between simplicity and performance. 
      It allows developers to build reusable components, manage state efficiently and create highly interactive interfaces. 
      With features like virtual DOM, reactive data binding and component-based architecture, <strong>Vue.js application development</strong> ensures faster performance and better user experience.
    </p>

    <p className="mt-4 text-white/70">
      Another advantage of <strong>Vue.js frontend development</strong> is its flexibility. 
      It can be easily integrated with existing projects or used to build complete applications from scratch. 
      This makes Vue.js a versatile solution for both small and large-scale projects.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Custom Vue.js Development Services
    </h3>

    <p className="mt-4 text-white/70">
      We provide <strong>custom Vue.js development</strong> tailored to your specific requirements. 
      Our services include <strong>Vue.js SPA development</strong>, <strong>Vue.js UI development</strong>, 
      <strong>Vue.js dashboard development</strong>, and <strong>Vue.js SaaS application development</strong>.
    </p>

    <p className="mt-4 text-white/70">
      Our experienced <strong>Vue.js developers</strong> focus on creating scalable, maintainable and performance-driven applications. 
      We use modern tools and best practices to ensure your application is fast, secure and user-friendly.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Vue.js Frontend Development for Modern UI
    </h3>

    <p className="mt-4 text-white/70">
      A modern UI plays a critical role in user engagement. Our <strong>Vue.js frontend development services</strong> focus on building clean, responsive and interactive interfaces. 
      We create pixel-perfect designs with smooth animations and seamless user experience.
    </p>

    <p className="mt-4 text-white/70">
      Using component-based architecture, we ensure your application is easy to scale and maintain. 
      Our <strong>Vue.js UI developers</strong> deliver high-quality frontend solutions that enhance user interaction and improve performance.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Vue.js API Integration & Backend Connectivity
    </h3>

    <p className="mt-4 text-white/70">
      Modern applications require seamless backend integration. Our <strong>Vue.js API integration services</strong> ensure smooth communication between frontend and backend systems. 
      We integrate REST APIs, GraphQL APIs and third-party services to enhance functionality.
    </p>

    <p className="mt-4 text-white/70">
      Whether you are building a SaaS platform or enterprise application, our <strong>Vue.js developers</strong> ensure efficient data handling and real-time updates.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Vue.js Performance Optimization
    </h3>

    <p className="mt-4 text-white/70">
      Performance is a key factor in web development. Our <strong>Vue.js performance optimization</strong> services ensure your application loads quickly and runs smoothly. 
      We implement lazy loading, code splitting, caching and other techniques to improve speed and efficiency.
    </p>

    <p className="mt-4 text-white/70">
      A fast-loading application improves user experience and reduces bounce rates, which also positively impacts SEO performance.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Scalable Vue.js Application Development
    </h3>

    <p className="mt-4 text-white/70">
      Our <strong>Vue.js application development</strong> focuses on scalability and long-term growth. 
      We build applications that can handle increasing traffic, new features and business expansion without performance issues.
    </p>

    <p className="mt-4 text-white/70">
      From startup MVPs to enterprise solutions, our <strong>Vue.js developers</strong> deliver scalable and reliable applications tailored to your needs.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Global Vue.js Development Services
    </h3>

    <p className="mt-4 text-white/70">
      We provide <strong>Vue.js development services worldwide</strong> including Australia, USA, UK, Canada, UAE and India. 
      Our team works with international clients to deliver high-quality frontend solutions that meet global standards.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Hire Our Vue.js Developers?
    </h3>

    <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
      <li><strong>Experienced Vue.js developers</strong> with strong frontend expertise</li>
      <li><strong>Custom Vue.js application development</strong></li>
      <li><strong>Responsive and user-friendly UI design</strong></li>
      <li><strong>Fast performance and optimization</strong></li>
      <li><strong>API integration and scalable solutions</strong></li>
      <li><strong>Affordable pricing and ongoing support</strong></li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Conclusion
    </h3>

    <p className="mt-4 text-white/70">
      <strong>Vue.js development</strong> is the perfect choice for building modern, fast and scalable web applications. 
      With our expert <strong>Vue.js development services</strong>, you can create high-performance frontend solutions that deliver exceptional user experiences. 
      Whether you need a custom application, SaaS platform or UI development, our team is ready to help you achieve your goals.
    </p>

  </div>
</section>

      {/* CTA */}
      <section className="pt-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start Your Vue.js Project Today
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