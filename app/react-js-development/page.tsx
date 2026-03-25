import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire React.js Developer Australia | React Expert",
  description:
    "Hire expert React.js developers for fast, scalable web apps. Custom React development, UI, API integration and performance optimization.",
  keywords: [
    "react js developer",
    "hire react developer",
    "react frontend developer",
    "react js expert",
    "react development services",
  ],
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
            Hire React.js Developer for Modern Web Applications
          </h2>

          <p className="mt-6 text-white/70">
            React.js is one of the most popular frontend libraries for building dynamic user interfaces.
          </p>

          <p className="mt-4 text-white/70">
            I build scalable React applications including SaaS platforms, dashboards and custom web apps.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Custom React Development Solutions
          </h2>

          <p className="mt-4 text-white/70">
            Every project is unique. I create custom React solutions tailored to your business needs.
          </p>

        </div>
      </section>

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