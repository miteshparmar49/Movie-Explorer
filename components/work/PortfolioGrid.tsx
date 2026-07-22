"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Filter from "./Filter";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/project";

export default function PortfolioGrid() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered = useMemo(
    () => active === "All" ? projects : projects.filter((p) => p.category === active),
    [active]
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      map[p.category] = (map[p.category] ?? 0) + 1;
    });
    return map;
  }, []);

  return (
    <section id="portfolio" className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-black text-white">All projects</h2>
        </motion.div>

        {/* Filter */}
        <Filter active={active} onChange={setActive} counts={counts} />

        {/* Count */}
        <p className="text-[12px] text-white/25 text-center mb-8">
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-white/30"
          >
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-[14px]">No projects in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
