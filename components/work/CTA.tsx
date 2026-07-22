"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28 border-t border-white/[0.06] relative overflow-hidden">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/[0.06] blur-3xl rounded-full"
          animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-1/4 w-[400px] h-[300px] bg-violet-500/[0.04] blur-3xl rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">
            Now accepting new projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[42px] md:text-[60px] lg:text-[72px] font-black leading-[1.0] text-white mb-6 tracking-tight"
        >
          Let&apos;s build your{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            next project
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[15px] md:text-[17px] text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Free consultation. Fixed-price quote. No lock-in contracts.
          Whether you need a Neto store, Shopify build, SaaS product or digital strategy — let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-cyan-400 text-[#06080e] font-black rounded-xl px-10 py-4 text-[15px] hover:bg-cyan-300 transition-colors"
          >
            Start your project →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/10 rounded-xl px-10 py-4 text-[15px] text-white/50 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
          >
            View all services
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[11px] text-white/20 tracking-wide"
        >
          No credit card &nbsp;·&nbsp; Reply within 48 hours &nbsp;·&nbsp; Australian market expertise
        </motion.p>
      </div>
    </section>
  );
}
