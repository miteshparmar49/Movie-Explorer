"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

interface ProjectCardProps {
  project: Project;
  index: number;
}

const accentColors: Record<string, { tag: string; dot: string; border: string }> = {
  Ecommerce:   { tag: "bg-cyan-500/10 text-cyan-300",    dot: "bg-cyan-400",    border: "hover:border-cyan-500/30" },
  Website:     { tag: "bg-emerald-500/10 text-emerald-300", dot: "bg-emerald-400", border: "hover:border-emerald-500/30" },
  "Web App":   { tag: "bg-violet-500/10 text-violet-300",  dot: "bg-violet-400",  border: "hover:border-violet-500/30" },
  "Mobile App":{ tag: "bg-amber-500/10 text-amber-300",   dot: "bg-amber-400",   border: "hover:border-amber-500/30" },
  "UI/UX":     { tag: "bg-rose-500/10 text-rose-300",     dot: "bg-rose-400",    border: "hover:border-rose-500/30" },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const accent = accentColors[project.category] ?? accentColors["Website"];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
      className={`group relative flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025] overflow-hidden transition-all duration-300 ${accent.border} hover:bg-white/[0.04]`}
    >
      {/* Image */}
      <div
  className={`relative mvp_info aspect-[16/10] overflow-hidden flex-shrink-0 ${project.id}`}
>
 <Image
  src={
    project.id === "1"
      ? "/pro-2.png"
      : project.id === "2"
      ? "/mvp_1288.png"
      : project.image
  }
  alt={project.title}
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  loading="lazy"
/>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-[#06080e]/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide rounded-full px-3 py-1 backdrop-blur-sm bg-[#06080e]/70 border border-white/10 ${accent.tag.split(" ")[1]}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
            {project.category}
          </span>
        </div>

        {/* Industry badge */}
        {project.industry && (
          <div className="absolute top-3 right-3">
            <span className="text-[9px] font-medium border border-white/10 text-white/35 rounded-full px-2.5 py-1 bg-[#06080e]/70 backdrop-blur-sm">
              {project.industry}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[15px] font-black leading-snug mb-2 text-white group-hover:text-cyan-100 transition-colors">
          {project.title}
        </h3>

        {project.client && (
          <p className="text-[11px] text-white/30 mb-2 font-medium">{project.client}</p>
        )}

        <p className="text-[12px] text-white/45 leading-relaxed flex-1 mb-4">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-[9px] font-semibold border border-white/[0.07] text-white/35 rounded-full px-2.5 py-1">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[9px] font-semibold border border-white/[0.07] text-white/25 rounded-full px-2.5 py-1">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-[11px] font-bold bg-white/[0.06] hover:bg-white/[0.1] text-white/70 hover:text-white rounded-lg py-2.5 transition-colors"
          >
            View Live ↗
          </a>
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              className="flex-1 text-center text-[11px] font-bold border border-cyan-500/20 hover:border-cyan-500/40 text-cyan-400/70 hover:text-cyan-400 rounded-lg py-2.5 transition-colors"
            >
              Case Study →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
