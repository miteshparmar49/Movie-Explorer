"use client";

import { motion } from "framer-motion";
import type { ProjectCategory } from "@/types/project";

const FILTERS: ProjectCategory[] = [
  "All",
  "Neto by Maropost",
  "Shopify",
  "WordPress",
  "Web App",
  "Mobile App",
  "UI/UX",
];

interface FilterProps {
  active: ProjectCategory;
  onChange: (cat: ProjectCategory) => void;
  counts: Record<string, number>;
}

export default function Filter({ active, onChange, counts }: FilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-6">
      {FILTERS.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="relative rounded-full px-5 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-cyan-400"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-[#06080e]" : "text-white/50 hover:text-white"}`}>
              {cat}
              {counts[cat] !== undefined && (
                <span className={`ml-1.5 text-[10px] ${isActive ? "text-[#06080e]/60" : "text-white/25"}`}>
                  {counts[cat]}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
