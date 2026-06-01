// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const projects = [
//   {
//     title: "Boat Hardware Shop",
//     platform: "Neto",
//     badgeColor: "bg-sky-500",
//     image: "/Pro-1.png",
//   },
//   {
//     title: "Automotive Lighting Solutions",
//     platform: "Shopify",
//     badgeColor: "bg-green-500",
//     image: "/pro-2.png",
//   },
//   {
//     title: "Independent Living and Mobility Equipment",
//     platform: "BigCommerce",
//     badgeColor: "bg-indigo-500",
//     image: "/pro-3.png",
//   },
//   {
//     title: "Automative Part",
//     platform: "Maropost",
//     badgeColor: "bg-pink-500",
//     image: "/pro-4.png",
//   },
// ];

// export default function LatestProjects() {
//   return (
//     <section id="portfolio" className="pt-24 relative">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Latest Projects
//           </h2>
//           <p className="mt-3 text-white/60">
//             Selected ecommerce projects built using Neto, Shopify, BigCommerce and Maropost.
//           </p>
//         </div>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={24}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {projects.map((project) => (
//             <SwiperSlide key={project.title}>
//               <article
//                 className="
//                   group relative overflow-hidden rounded-xl
//                   border border-white/10
//                   bg-white/5 backdrop-blur-md
//                   transition hover:-translate-y-1 hover:border-white/20
//                 "
//               >
//                 {/* image */}
//           <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
//   <Image
//     src={project.image}
//     alt={`${project.title} ecommerce website built using ${project.platform}`}
//     fill
//     sizes="(max-width:768px) 100vw, 33vw"
//     className=" w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
//   />
// </div>

//                 {/* badge */}
//                 <span
//                   className={`
//                     absolute top-3 left-3
//                     text-xs font-medium text-white
//                     px-3 py-1 rounded-full
//                     ${project.badgeColor}
//                   `}
//                 >
//                   {project.platform}
//                 </span>

//                 {/* content */}
//                 <div className="p-5">
//                   <h3 className="text-base font-semibold">
//                     {project.title}
//                   </h3>

//                   <p className="mt-1 text-sm text-white/60">
//                     Ecommerce store optimized for performance, UX and SEO.
//                   </p>
//                 </div>
//               </article>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

import "swiper/css";

// ─── data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "Boat Hardware Shop",
    platform: "Neto",
    description:
      "Full-featured marine hardware store with custom product filtering and real-time shipping rates.",
    tags: ["Performance", "SEO", "UX"],
    image: "/Pro-1.png",
    dotColor: "#0ea5e9",
    badgeBg: "bg-sky-500/90",
    category: "eCommerce",
  },
  {
    title: "Automotive Lighting Solutions",
    platform: "Shopify",
    description:
      "Custom Shopify theme with advanced variant selection and B2B pricing integrations.",
    tags: ["Custom Theme", "B2B", "Integrations"],
    image: "/pro-2.png",
    dotColor: "#22c55e",
    badgeBg: "bg-green-500/90",
    category: "eCommerce",
  },
  {
    title: "Independent Living & Mobility",
    platform: "BigCommerce",
    description:
      "Accessible ecommerce platform with WCAG 2.1 AA compliance and faceted product search.",
    tags: ["Accessibility", "Search", "UX"],
    image: "/pro-3.png",
    dotColor: "#6366f1",
    badgeBg: "bg-indigo-500/90",
    category: "eCommerce",
  },
  {
    title: "Automotive Parts Store",
    platform: "Maropost",
    description:
      "High-SKU automotive parts catalogue with year/make/model compatibility finder.",
    tags: ["High SKU", "Fitment", "Performance"],
    image: "/pro-4.png",
    dotColor: "#ec4899",
    badgeBg: "bg-pink-500/90",
    category: "eCommerce",
  },
];

// ─── component ────────────────────────────────────────────────────────────────

export default function LatestProjects() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const slidePrev = () => swiperRef.current?.slidePrev();
  const slideNext = () => swiperRef.current?.slideNext();
  const slideTo   = (i: number) => swiperRef.current?.slideTo(i);

  return (
    <section id="portfolio" className="relative pt-24 pb-20 overflow-hidden">

      {/* ── ambient glows ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/6 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/6 blur-[120px]" />
      </div>

      {/* ── noise texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* ── heading ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span className="text-[10px] font-semibold tracking-[.22em] uppercase text-indigo-400">
              Portfolio
            </span>
          </div>

          <h2 className="font-extrabold tracking-tight text-4xl md:text-5xl text-white leading-[1.08]">
            Latest{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-sm text-white/45 max-w-lg mx-auto leading-relaxed font-light">
            Selected ecommerce builds across Neto, Shopify, BigCommerce and
            Maropost — engineered for speed, SEO, and conversion.
          </p>
        </div>

        {/* ── swiper ── */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640:  { slidesPerView: 1.3 },
            768:  { slidesPerView: 2   },
            1024: { slidesPerView: 3   },
          }}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.title}>
              <ProjectCard project={p} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── nav + dots — fully custom, no Swiper injection ── */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={slidePrev}
            disabled={isBeginning}
            aria-label="Previous project"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/15 hover:text-indigo-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <HiArrowLeft className="w-4 h-4" />
          </button>

          {/* dots */}
          <div className="flex items-center gap-1.5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => slideTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className="transition-all duration-300 rounded-full cursor-pointer"
                style={{
                  width:      i === activeIndex ? "20px" : "6px",
                  height:     "6px",
                  borderRadius: i === activeIndex ? "3px" : "9999px",
                  background: i === activeIndex
                    ? "linear-gradient(90deg,#6366f1,#a855f7)"
                    : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>

          <button
            onClick={slideNext}
            disabled={isEnd}
            aria-label="Next project"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/15 hover:text-indigo-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <HiArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── CTA strip ── */}
        <div className="text-center mt-14 flex flex-col items-center gap-3">
          <Link
            href="/ourwork"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
          >
            View All Projects
            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="text-xs text-white/38 hover:text-white/65 transition-colors"
          >
            Have a project in mind? Let&apos;s talk →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── card ─────────────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e1120] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-950/40">

      {/* image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} ecommerce website built using ${project.platform}`}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04] mvp_infotech_img"
        />

        {/* gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1120]/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* platform badge */}
        <span
          className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[10.5px] font-semibold tracking-wide text-white ${project.badgeBg}`}
        >
          {project.platform}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5">
        {/* meta row */}
        <div className="mb-2.5 flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: project.dotColor }}
          />
          <span className="text-[10px] font-semibold uppercase tracking-[.08em] text-white/35">
            {project.platform} · {project.category}
          </span>
        </div>

        <h3 className="mb-2 text-[15px] font-bold leading-snug tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mb-4 flex-1 text-[12px] font-light leading-relaxed text-white/42">
          {project.description}
        </p>

        {/* tags + arrow */}
        <div className="flex items-center justify-between gap-2 border-t border-white/[0.05] pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-[6px] border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/35"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-indigo-500/25 bg-indigo-500/10 text-indigo-400 transition-all duration-200 group-hover:border-indigo-400/50 group-hover:bg-indigo-500/25">
            <HiArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </article>
  );
}