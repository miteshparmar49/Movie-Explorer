// import Image from "next/image";
// import Link from "next/link";

// export default function WorkPage() {
//   const projects = [
//     {
//       title: "Neto Ecommerce Store",
//       platform: "Neto",
//       desc: "Custom theme development, performance optimisation and checkout improvements.",
//       image: "/mvpinfo.png",
//     },
//     {
//       title: "Maropost Commerce Cloud Store",
//       platform: "Maropost",
//       desc: "Custom frontend, API integrations and scalable store architecture.",
//       image: "/pro-2.png",
//     },
//     {
//       title: "Shopify Storefront",
//       platform: "Shopify",
//       desc: "Modern UI, conversion focused design and app integrations.",
//       image: "/pro-3.png",
//     },
//     {
//       title: "BigCommerce Website",
//       platform: "BigCommerce",
//       desc: "Fast storefront, custom templates and SEO optimisation.",
//       image: "/pro-4.png",
//     },
//     {
//       title: "Headless Ecommerce Website",
//       platform: "Next.js + API",
//       desc: "Headless frontend using Next.js with custom backend integrations.",
//       image: "/mvpinfo.png",
//     },
//     {
//       title: "Store Migration Project",
//       platform: "Neto / Shopify",
//       desc: "SEO safe migration, data transfer and theme rebuild.",
//       image: "/pro-2.png",
//     },
//   ];

//   return (
//     <main className="relative overflow-hidden">

//       {/* Hero */}
//        <section id="hero" className="relative overflow-hidden py-24">
//                     {/* background glow */}
//                     <div className="absolute inset-0 -z-10">
//                       <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full
//                         bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 blur-[120px]" />
//                     </div>
            
//                     <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
            
//                       <div>
//                         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//                           Our work
//                         </h1>
            
//                         <p className="mt-6 text-lg text-white/70">
//                         A selection of ecommerce projects built using Neto, Maropost Commerce Cloud, Shopify, BigCommerce and modern frameworks like Next.js and React.
//                         </p>
            
                      
//                       </div>
            
//                       {/* Hero Image */}
//                       <div className="hidden md:block aspect-video rounded-xl overflow-hidden border border-white/10 relative">
//                         <Image
//                           src="/ourwork.png" // replace with your actual image
//                           alt="Full-Stack Ecommerce Developer working on Neto, Maropost, Shopify & BigCommerce platforms"
//                           fill
//                           className="object-cover"
//                           priority={true} // loads immediately for SEO
//                           sizes="(max-width: 768px) 100vw, 50vw"
//                         />
//                       </div>
            
//                     </div>
//                   </section>

//       {/* Projects */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-6">

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
//               >
//                 {/* Image */}
//                 <div className="relative aspect-[16/11] overflow-hidden">
//                     <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                     sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
//                   />

//                   {/* overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="relative p-6">
//                   <span className="text-sm text-indigo-400">
//                     {project.platform}
//                   </span>

//                   <h3 className="mt-2 text-lg font-semibold">
//                     {project.title}
//                   </h3>

//                   <p className="mt-3 text-sm text-white/70">
//                     {project.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="pt-24 border-t border-white/10">
//         <div className="mx-auto max-w-4xl px-6 text-center">

//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Want a similar ecommerce project?
//           </h2>

//           <p className="mt-6 text-white/70">
//             Let’s build a fast, scalable and SEO-friendly ecommerce
//             platform for your business.
//           </p>

//           <div className="mt-10 flex justify-center gap-4">
//             <Link
//               href="/contact"
//               className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-white/90 transition"
//             >
//               Start a Project
//             </Link>

//              <Link  className="border border-white/20 px-8 py-3 rounded-md hover:border-white/40 transition" href="/services"> View Services</Link>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }





// import Image from "next/image";
// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.mvpinfotech.in"),
//   title: "Our Work | Ecommerce Projects — MVP InfoTech",
//   description:
//     "Browse our portfolio of Neto, Shopify, BigCommerce and WordPress ecommerce projects built for Australian and international clients.",
//   alternates: {
//     canonical: "https://www.mvpinfotech.in/ourwork",
//   },
//   openGraph: {
//     title: "Our Work | MVP InfoTech Portfolio",
//     description:
//       "Neto, Shopify, BigCommerce and WordPress projects — built for speed, SEO and conversions.",
//     url: "https://www.mvpinfotech.in/ourwork",
//     siteName: "MVP InfoTech",
//     type: "website",
//   },
//   robots: { index: true, follow: true },
// };

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const projects = [
//   {
//     title: "Neto B2B Wholesale Store",
//     platform: "Neto / Maropost",
//     category: "Ecommerce",
//     tags: ["Theme Dev", "B2B", "API"],
//     result: "+64% conversion rate",
//     resultColor: "text-cyan-400",
//     desc: "Custom theme development, B2B pricing rules, API integrations and checkout performance improvements.",
//     image: "/mvpinfo.png",
//     accent: "cyan",
//     featured: true,
//   },
//   {
//     title: "Maropost Commerce Cloud Store",
//     platform: "Maropost",
//     category: "Ecommerce",
//     tags: ["Frontend", "API", "Scale"],
//     result: "3x faster load time",
//     resultColor: "text-violet-400",
//     desc: "Custom frontend architecture, third-party API integrations and a scalable catalogue structure.",
//     image: "/pro-2.png",
//     accent: "violet",
//     featured: true,
//   },
//   {
//     title: "Shopify Fashion Storefront",
//     platform: "Shopify",
//     category: "Ecommerce",
//     tags: ["UI/UX", "CRO", "Mobile"],
//     result: "+38% add-to-cart",
//     resultColor: "text-emerald-400",
//     desc: "Modern conversion-focused UI, mobile-first design and seamless app integrations.",
//     image: "/pro-3.png",
//     accent: "emerald",
//     featured: false,
//   },
//   {
//     title: "BigCommerce Trade Website",
//     platform: "BigCommerce",
//     category: "Ecommerce",
//     tags: ["SEO", "Speed", "Templates"],
//     result: "Page 1 Google in 60 days",
//     resultColor: "text-amber-400",
//     desc: "Fast custom storefront, SEO-optimised templates and performance tuning.",
//     image: "/pro-4.png",
//     accent: "amber",
//     featured: false,
//   },
//   {
//     title: "Headless Ecommerce Platform",
//     platform: "Next.js + API",
//     category: "Headless",
//     tags: ["Next.js", "Headless", "React"],
//     result: "99 Lighthouse score",
//     resultColor: "text-blue-400",
//     desc: "Headless frontend built with Next.js App Router, connected to a custom backend API layer.",
//     image: "/mvpinfo.png",
//     accent: "blue",
//     featured: false,
//   },
//   {
//     title: "Platform Migration Project",
//     platform: "Neto → Shopify",
//     category: "Migration",
//     tags: ["Migration", "SEO", "Rebuild"],
//     result: "Zero SEO ranking loss",
//     resultColor: "text-rose-400",
//     desc: "SEO-safe platform migration, full data transfer, 301 redirects and complete theme rebuild.",
//     image: "/pro-2.png",
//     accent: "rose",
//     featured: false,
//   },
// ];

// const stats = [
//   { value: "100+", label: "Projects delivered" },
//   { value: "2,000+", label: "Websites built" },
//   { value: "12+", label: "Years experience" },
//   { value: "AU", label: "Market focus" },
// ];

// const accentMap: Record<string, { border: string; bg: string; tag: string; dot: string }> = {
//   cyan:    { border: "border-cyan-500/30",    bg: "group-hover:bg-cyan-500/[0.04]",    tag: "bg-cyan-500/10 text-cyan-300",    dot: "bg-cyan-400" },
//   violet:  { border: "border-violet-500/30",  bg: "group-hover:bg-violet-500/[0.04]",  tag: "bg-violet-500/10 text-violet-300",  dot: "bg-violet-400" },
//   emerald: { border: "border-emerald-500/30", bg: "group-hover:bg-emerald-500/[0.04]", tag: "bg-emerald-500/10 text-emerald-300", dot: "bg-emerald-400" },
//   amber:   { border: "border-amber-500/30",   bg: "group-hover:bg-amber-500/[0.04]",   tag: "bg-amber-500/10 text-amber-300",   dot: "bg-amber-400" },
//   blue:    { border: "border-blue-500/30",    bg: "group-hover:bg-blue-500/[0.04]",    tag: "bg-blue-500/10 text-blue-300",    dot: "bg-blue-400" },
//   rose:    { border: "border-rose-500/30",    bg: "group-hover:bg-rose-500/[0.04]",    tag: "bg-rose-500/10 text-rose-300",    dot: "bg-rose-400" },
// };

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function WorkPage() {
//   const featured = projects.filter((p) => p.featured);
//   const rest = projects.filter((p) => !p.featured);

//   return (
//     <main className="bg-[#06080e] text-white antialiased min-h-screen">

//       {/* ── NAV ── */}
//       <nav className="sticky top-0 z-50 border-b border-white/[0.05] bg-[#06080e]/90 backdrop-blur-xl">
//         <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
//           <Link href="/" className="text-[15px] font-black tracking-tight">
//             MVP<span className="text-cyan-400">InfoTech</span>
//           </Link>
//           <div className="hidden md:flex items-center gap-7 text-[13px] text-white/40">
//             <Link href="/about" className="hover:text-white transition-colors">About</Link>
//             <Link href="/services" className="hover:text-white transition-colors">Services</Link>
//             <Link href="/ourwork" className="text-white">Portfolio</Link>
//             <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
//           </div>
//           <Link
//             href="/contact"
//             className="bg-cyan-400 text-[#06080e] rounded-lg px-5 py-2 text-[13px] font-black hover:bg-cyan-300 transition-colors"
//           >
//             Start a project
//           </Link>
//         </div>
//       </nav>

//       {/* ── BREADCRUMB ── */}
//       <div className="mx-auto max-w-7xl px-6 py-3 flex items-center gap-2 text-[11px] text-white/25">
//         <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
//         <span>/</span>
//         <span className="text-white/40">Our work</span>
//       </div>

//       {/* ══════════════════════════════════════════
//           HERO
//       ══════════════════════════════════════════ */}
//       <section className="relative pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden">

//         {/* Dot grid */}
//         <div
//           className="pointer-events-none absolute inset-0 -z-10"
//           style={{
//             backgroundImage: "radial-gradient(circle, rgba(34,211,238,0.08) 1px, transparent 1px)",
//             backgroundSize: "28px 28px",
//           }}
//         />
//         <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] -z-10 bg-cyan-500/[0.05] blur-3xl rounded-full" />

//         <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center">
//           <div>
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.07] px-4 py-1.5">
//               <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
//               <span className="text-[11px] font-bold tracking-widest text-cyan-300 uppercase">Real projects. Real results.</span>
//             </div>

//             <h1 className="text-[44px] md:text-[56px] font-black leading-[1.05] tracking-tight">
//               Work that<br />
//               <span className="text-cyan-400">speaks for itself</span>
//             </h1>

//             <p className="mt-5 text-[15px] text-white/50 leading-relaxed max-w-md">
//               Ecommerce projects built on Neto, Maropost, Shopify, BigCommerce and Next.js —
//               designed for speed, SEO and genuine business growth.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-cyan-400 text-[#06080e] font-black rounded-xl px-7 py-3.5 text-[13px] hover:bg-cyan-300 transition-colors"
//               >
//                 Start a similar project →
//               </Link>
//               <Link
//                 href="/services"
//                 className="inline-flex items-center gap-2 border border-white/10 rounded-xl px-7 py-3.5 text-[13px] text-white/55 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
//               >
//                 View services
//               </Link>
//             </div>
//           </div>

//           {/* Hero image */}
//           <div className="hidden md:block relative">
//             <div className="absolute -inset-6 bg-cyan-500/[0.05] blur-3xl rounded-full" />
//             <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/[0.08]">
//               <Image
//                 src="/ourwork.png"
//                 alt="MVP InfoTech ecommerce portfolio — Neto, Shopify, BigCommerce projects"
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//               {/* Overlay label */}
//               <div className="absolute bottom-4 left-4 bg-[#06080e]/80 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
//                 <p className="text-[10px] text-white/35 uppercase tracking-wider mb-0.5">Portfolio</p>
//                 <p className="text-[13px] font-bold text-white">100+ projects delivered</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── STAT BAR ── */}
//       <div className="border-y border-white/[0.06] bg-white/[0.015]">
//         <div className="mx-auto max-w-7xl px-6 py-7 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
//           {stats.map((s) => (
//             <div key={s.label} className="text-center py-1">
//               <p className="text-2xl font-black text-cyan-400">{s.value}</p>
//               <p className="mt-0.5 text-[11px] text-white/35">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ══════════════════════════════════════════
//           FEATURED PROJECTS (2-col, large)
//       ══════════════════════════════════════════ */}
//       <section className="py-20 md:py-24">
//         <div className="mx-auto max-w-7xl px-6">

//           <div className="flex items-end justify-between mb-10">
//             <div>
//               <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-2">Featured</p>
//               <h2 className="text-2xl md:text-3xl font-black">Headline projects</h2>
//             </div>
//             <span className="text-[12px] text-white/30 hidden md:block">Neto · Maropost</span>
//           </div>

//           <div className="grid md:grid-cols-2 gap-5">
//             {featured.map((p) => {
//               const a = accentMap[p.accent];
//               return (
//                 <div
//                   key={p.title}
//                   className={`group relative rounded-2xl border ${a.border} bg-white/[0.02] overflow-hidden transition-all duration-300 ${a.bg} cursor-default`}
//                 >
//                   {/* Image */}
//                   <div className="relative aspect-[16/10] overflow-hidden">
//                     <Image
//                       src={p.image}
//                       alt={p.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                       sizes="(max-width: 768px) 100vw, 50vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-[#06080e]/30 to-transparent" />

//                     {/* Platform badge */}
//                     <div className="absolute top-4 left-4">
//                       <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 bg-[#06080e]/70 ${p.resultColor}`}>
//                         {p.platform}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     {/* Result pill */}
//                     <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-4 ${a.tag} text-[11px] font-bold`}>
//                       <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
//                       {p.result}
//                     </div>

//                     <h3 className="text-[18px] font-black leading-snug mb-2">{p.title}</h3>
//                     <p className="text-[13px] text-white/45 leading-relaxed mb-4">{p.desc}</p>

//                     <div className="flex flex-wrap gap-2">
//                       {p.tags.map((t) => (
//                         <span key={t} className="text-[10px] font-medium border border-white/[0.08] text-white/35 rounded-full px-2.5 py-1">
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           ALL PROJECTS (3-col grid)
//       ══════════════════════════════════════════ */}
//       <section className="py-4 pb-24">
//         <div className="mx-auto max-w-7xl px-6">

//           <div className="flex items-end justify-between mb-10">
//             <div>
//               <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-2">More work</p>
//               <h2 className="text-2xl md:text-3xl font-black">All projects</h2>
//             </div>
//             <span className="text-[12px] text-white/30 hidden md:block">Shopify · BigCommerce · Next.js</span>
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {rest.map((p) => {
//               const a = accentMap[p.accent];
//               return (
//                 <div
//                   key={p.title}
//                   className={`group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/[0.12] cursor-default flex flex-col`}
//                 >
//                   {/* Image */}
//                   <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
//                     <Image
//                       src={p.image}
//                       alt={p.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#06080e] via-[#06080e]/20 to-transparent" />

//                     {/* Platform badge */}
//                     <div className="absolute top-3 left-3">
//                       <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#06080e]/80 backdrop-blur-sm border border-white/10 ${p.resultColor}`}>
//                         {p.platform}
//                       </span>
//                     </div>

//                     {/* Category top-right */}
//                     <div className="absolute top-3 right-3">
//                       <span className="text-[9px] font-medium border border-white/10 text-white/30 rounded-full px-2.5 py-1 bg-[#06080e]/70 backdrop-blur-sm">
//                         {p.category}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-5 flex flex-col flex-1">
//                     {/* Result */}
//                     <div className={`inline-flex items-center gap-1.5 mb-3 ${a.tag} rounded-full px-2.5 py-1 text-[10px] font-bold w-fit`}>
//                       <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.dot}`} />
//                       {p.result}
//                     </div>

//                     <h3 className="text-[15px] font-black leading-snug mb-2">{p.title}</h3>
//                     <p className="text-[12px] text-white/40 leading-relaxed flex-1">{p.desc}</p>

//                     <div className="flex flex-wrap gap-1.5 mt-4">
//                       {p.tags.map((t) => (
//                         <span key={t} className="text-[9px] font-medium border border-white/[0.07] text-white/30 rounded-full px-2 py-0.5">
//                           {t}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           PLATFORMS WE WORK ON
//       ══════════════════════════════════════════ */}
//       <section className="py-16 border-t border-white/[0.06]">
//         <div className="mx-auto max-w-7xl px-6">
//           <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 text-center mb-8">
//             Platforms we build on
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-3">
//             {[
//               { label: "Neto / Maropost", color: "text-cyan-400", border: "border-cyan-500/20", bg: "bg-cyan-500/[0.05]" },
//               { label: "Shopify", color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/[0.05]" },
//               { label: "BigCommerce", color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/[0.05]" },
//               { label: "WordPress", color: "text-sky-400", border: "border-sky-500/20", bg: "bg-sky-500/[0.05]" },
//               { label: "WooCommerce", color: "text-violet-400", border: "border-violet-500/20", bg: "bg-violet-500/[0.05]" },
//               { label: "Next.js", color: "text-white/70", border: "border-white/10", bg: "bg-white/[0.03]" },
//             ].map((pl) => (
//               <span
//                 key={pl.label}
//                 className={`text-[12px] font-semibold border ${pl.border} ${pl.bg} ${pl.color} rounded-full px-4 py-2`}
//               >
//                 {pl.label}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           CTA
//       ══════════════════════════════════════════ */}
//       <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
//         <div className="pointer-events-none absolute inset-0 -z-10">
//           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/[0.05] blur-3xl rounded-full" />
//         </div>

//         <div className="mx-auto max-w-3xl px-6 text-center">

//           <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-4 py-1.5">
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
//             <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wide">Now accepting new projects</span>
//           </div>

//           <h2 className="text-4xl md:text-5xl font-black leading-[1.05] mb-5">
//             Want a similar<br />
//             <span className="text-cyan-400">ecommerce project?</span>
//           </h2>

//           <p className="text-[15px] text-white/40 leading-relaxed max-w-xl mx-auto mb-10">
//             Let&apos;s build a fast, scalable and SEO-friendly ecommerce store that drives real growth for your business.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">
//             <Link
//               href="/contact"
//               className="bg-cyan-400 text-[#06080e] font-black rounded-xl px-9 py-4 text-[14px] hover:bg-cyan-300 transition-colors"
//             >
//               Start a project →
//             </Link>
//             <Link
//               href="/services"
//               className="border border-white/10 rounded-xl px-9 py-4 text-[14px] text-white/50 hover:border-white/20 hover:bg-white/[0.03] transition-colors"
//             >
//               View all services
//             </Link>
//           </div>

//           <p className="mt-6 text-[11px] text-white/20">
//             Free consultation &nbsp;·&nbsp; Fixed-price quotes &nbsp;·&nbsp; No lock-in contracts
//           </p>
//         </div>
//       </section>

//     </main>
//   );
// }

import type { Metadata } from "next";
import Hero from "@/components/work/Hero";
import FeaturedProjects from "@/components/work/FeaturedProjects";
import PortfolioGrid from "@/components/work/PortfolioGrid";
import Stats from "@/components/work/Stats";
import Testimonials from "@/components/work/Testimonials";
import Process from "@/components/work/Process";
import CTA from "@/components/work/CTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),
  title: "Our Work | Portfolio — MVP InfoTech",
  description:
    "Browse 250+ ecommerce projects — Neto, Shopify, BigCommerce, Next.js and WordPress websites built for Australian and global businesses.",
  alternates: {
    canonical: "https://www.mvpinfotech.in/ourwork",
  },
  openGraph: {
    title: "Our Work | Portfolio — MVP InfoTech",
    description:
      "Real projects. Real results. 250+ ecommerce builds across Neto, Shopify, BigCommerce and Next.js.",
    url: "https://www.mvpinfotech.in/ourwork",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/ourwork.png",
        width: 1200,
        height: 630,
        alt: "MVP InfoTech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Portfolio — MVP InfoTech",
    description: "250+ projects. Neto, Shopify, BigCommerce and Next.js.",
    images: ["https://www.mvpinfotech.in/ourwork.png"],
  },
  robots: { index: true, follow: true },
};

export default function WorkPage() {
  return (
    <main className="bg-[#06080e] text-white antialiased overflow-hidden">

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "MVP InfoTech Portfolio",
            url: "https://www.mvpinfotech.in/ourwork",
            description: "Portfolio of ecommerce and web development projects built by MVP InfoTech.",
            provider: {
              "@type": "Organization",
              name: "MVP InfoTech",
              url: "https://www.mvpinfotech.in",
            },
          }),
        }}
      />

      <Hero />
      <Stats />
      <FeaturedProjects />
      <PortfolioGrid />
      <Testimonials />
      <Process />
      <CTA />
    </main>
  );
}
