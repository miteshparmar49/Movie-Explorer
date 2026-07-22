"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section className="py-20 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-2">Case Studies</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-black text-white max-w-md leading-tight">
              Featured projects in depth
            </h2>
            <p className="text-[13px] text-white/35 max-w-xs leading-relaxed">
              Deep dives into our most impactful client work — with real results.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`group grid md:grid-cols-[1fr_420px] gap-0 rounded-2xl border border-white/[0.08] overflow-hidden bg-gradient-to-br ${project.gradient ?? "from-white/[0.02] to-transparent"}`}
            >
              {/* Content side */}
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  {/* Tags row */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 rounded-full px-3 py-1">
                      Featured
                    </span>
                    <span className="text-[10px] font-semibold border border-white/10 text-white/40 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-semibold border border-white/10 text-white/40 rounded-full px-3 py-1">
                      {project.industry}
                    </span>
                  </div>

                  <h3 className="text-[24px] md:text-[28px] font-black text-white leading-snug mb-3">
                    {project.title}
                  </h3>

                  {project.client && (
                    <p className="text-[12px] text-white/30 mb-4 font-semibold uppercase tracking-wider">
                      {project.client}
                    </p>
                  )}

                  <p className="text-[14px] text-white/50 leading-relaxed mb-6 max-w-md">{project.description}</p>

                  {/* Results */}
                  {project.results && (
                    <ul className="space-y-2 mb-6">
                      {project.results.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-[13px] text-white/55">
                          <span className="text-cyan-400 mt-0.5 flex-shrink-0 text-[10px]">✓</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-4 mb-6 text-[12px] text-white/30">
                    {project.timeline && (
                      <span>⏱ {project.timeline}</span>
                    )}
                    {project.tags.slice(0, 3).map((t) => (
                      <span key={t} className="border border-white/[0.07] rounded-full px-2.5 py-0.5 text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/[0.06]">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <p className="text-[22px] font-black text-cyan-400">{s.value}</p>
                        <p className="text-[10px] text-white/30 mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] font-bold bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white rounded-lg px-5 py-2.5 transition-colors"
                  >
                    View Live ↗
                  </a>
                  {project.caseStudyUrl && (
                    <a
                      href={project.caseStudyUrl}
                      className="inline-flex items-center gap-1.5 text-[12px] font-bold border border-cyan-500/25 hover:border-cyan-500/50 text-cyan-400 rounded-lg px-5 py-2.5 transition-colors"
                    >
                      Case Study →
                    </a>
                  )}
                </div>
              </div>

              {/* Image side */}
              <div className="relative min-h-[280px] md:min-h-0 overflow-hidden order-first md:order-last">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 420px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#06080e]/60 md:block hidden" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
