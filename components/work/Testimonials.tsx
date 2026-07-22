"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/projects";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  };

  const prev = () => goTo((index - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((index + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="py-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">What clients say</h2>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-8 md:p-12 min-h-[260px]">

          {/* Quote mark */}
          <div className="absolute top-6 left-8 text-[80px] leading-none text-cyan-500/10 font-black select-none pointer-events-none">
            "
          </div>

          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={t.id}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 40 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed mb-8 font-light relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-white/10 bg-white/[0.05] overflow-hidden flex-shrink-0">
                  <div className="w-full h-full flex items-center justify-center text-[13px] font-black text-white/40">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="text-[14px] font-black text-white">{t.name}</p>
                  <p className="text-[11px] text-white/35">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${i === index ? "w-6 h-2 bg-cyan-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-colors text-sm"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-colors text-sm"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
