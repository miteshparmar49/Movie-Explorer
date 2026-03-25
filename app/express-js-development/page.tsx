import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire Express.js Developer Australia | Express Backend Expert",
  description:
    "Hire expert Express.js developers for fast, secure and scalable backend applications and APIs.",
  keywords: [
    "express js developer",
    "hire express developer",
    "node express backend",
    "express api development",
    "express js services",
  ],
};

export default function ExpressServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#1e293b] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hire Express.js Developer (Backend Expert)
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Build fast, scalable and secure backend applications using Express.js.
            </p>

            <p className="mt-4 text-white/70">
              I develop REST APIs, server-side logic and backend systems with clean architecture.
            </p>

            <div className="mt-6 text-white/80 text-sm">
              ✔ 5+ Years Express.js Experience <br />
              ✔ REST API Development <br />
              ✔ Middleware & Security <br />
              ✔ Scalable Backend Architecture
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
                src="/express.png"
                alt="Express.js development"
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
            Express.js Development Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "REST API Development",
              "Middleware Development",
              "Authentication & Authorization",
              "Database Integration",
              "Microservices Architecture",
              "Performance Optimization",
              "Third-party API Integration",
              "Security Implementation",
              "Maintenance & Support",
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
            Hire Express.js Developer for Backend Solutions
          </h2>

          <p className="mt-6 text-white/70">
            Express.js is a fast and minimal Node.js framework used for building APIs and backend systems.
          </p>

          <p className="mt-4 text-white/70">
            I build scalable backend solutions including SaaS platforms, dashboards and enterprise apps.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Custom Express.js Development
          </h2>

          <p className="mt-4 text-white/70">
            Every backend system is optimized for performance, security and scalability.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="pt-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start Your Express.js Project Today
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