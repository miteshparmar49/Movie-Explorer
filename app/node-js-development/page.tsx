import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

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
  ],
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
            Hire Node.js Developer for Scalable Backend Solutions
          </h2>

          <p className="mt-6 text-white/70">
            Node.js is ideal for building fast, scalable backend systems and APIs.
          </p>

          <p className="mt-4 text-white/70">
            I develop backend systems for SaaS apps, dashboards, and enterprise solutions.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Custom Backend Development
          </h2>

          <p className="mt-4 text-white/70">
            I create secure and optimized backend solutions tailored to your business needs.
          </p>

        </div>
      </section>

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