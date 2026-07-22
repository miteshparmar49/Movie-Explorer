"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-16">

      {/* Animated background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(34,211,238,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-1/4 w-[700px] h-[600px] -z-10 rounded-full bg-cyan-500/[0.07] blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[400px] -z-10 rounded-full bg-violet-500/[0.06] blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/25 bg-cyan-500/[0.07] px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase">
            Portfolio — Real projects, real results
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[48px] md:text-[72px] lg:text-[86px] font-black leading-[1.0] tracking-tight text-white mb-6"
        >
          Work that{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            moves the needle
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[16px] md:text-[18px] text-white/45 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          250+ projects built on Neto, Shopify, BigCommerce, Next.js and WordPress — each one designed
          to increase revenue, improve performance and outrank the competition.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan-400 text-[#06080e] font-black rounded-xl px-8 py-4 text-[14px] hover:bg-cyan-300 transition-colors"
          >
            Start your project →
          </Link>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 border border-white/10 rounded-xl px-8 py-4 text-[14px] text-white/55 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
          >
            Browse work ↓
          </a>
        </motion.div>

        {/* Mini stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          {[
            { v: "250+", l: "Projects" },
            { v: "12+", l: "Years" },
            { v: "98%", l: "Satisfaction" },
            { v: "12", l: "Countries" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.07 }}
              className="flex flex-col items-center"
            >
              <span className="text-2xl font-black text-white">{s.v}</span>
              <span className="text-[11px] text-white/30 mt-0.5">{s.l}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
