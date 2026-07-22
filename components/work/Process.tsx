"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/projects";

export default function Process() {
  return (
    <section className="py-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-2">How we work</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Simple. Transparent. Accountable.
          </h2>
          <p className="text-[14px] text-white/40 max-w-xl mx-auto leading-relaxed">
            Every project follows a proven 5-stage process that keeps you in control and ensures on-time, on-budget delivery.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-white/[0.05] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-5">
                  <div className="w-[72px] h-[72px] rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#06080e] border border-cyan-500/40 flex items-center justify-center">
                    <span className="text-[9px] font-black text-cyan-400">{step.step}</span>
                  </div>
                </div>

                <h3 className="text-[14px] font-black text-white mb-2">{step.title}</h3>
                <p className="text-[12px] text-white/40 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
