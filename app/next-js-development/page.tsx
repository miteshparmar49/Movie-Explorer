import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire Next.js Developer Australia | Next.js Expert",
  description:
    "Hire expert Next.js developers for fast, SEO-friendly and scalable web applications.",
  keywords: [
    "next js developer",
    "hire nextjs developer",
    "next js expert",
    "seo web development",
    "next js services",
  ],
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
            Hire Next.js Developer for High Performance Apps
          </h2>

          <p className="mt-6 text-white/70">
            Next.js provides powerful features like server-side rendering and static generation.
          </p>

          <p className="mt-4 text-white/70">
            I build scalable applications including SaaS platforms, landing pages and enterprise apps.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Custom Next.js Solutions
          </h2>

          <p className="mt-4 text-white/70">
            Every project is optimized for performance, SEO and scalability.
          </p>

        </div>
      </section>

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