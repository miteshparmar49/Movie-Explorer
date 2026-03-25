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
            Hire Vue.js Developer for Modern Web Apps
          </h2>

          <p className="mt-6 text-white/70">
            Vue.js is a powerful JavaScript framework used for building fast and interactive user interfaces.
          </p>

          <p className="mt-4 text-white/70">
            I build scalable Vue.js applications including dashboards, SaaS platforms and custom frontend solutions.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Custom Vue Development Solutions
          </h2>

          <p className="mt-4 text-white/70">
            Every project is different. I develop custom Vue.js solutions tailored to your business requirements.
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