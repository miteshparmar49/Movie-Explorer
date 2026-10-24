



// import Image from "next/image";
// import type { Metadata } from "next";
// import Services from "@/components/services";
// import TechStack from "@/components/tech";
// import WhyChooseMe from "@/components/whyme";
// import LatestProjects from "@/components/letestproject";
// import ContactUs from "@/components/contactus";
// import AboutUs from "@/components/About";
// import Link from "next/link";
// import ClientReviews from "@/components/ClientReviews";
// import StatsSection from "@/components/StatsSection";
// import BlogSlider from "./blog/page";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.mvpinfotech.in"),
//   title: "Ecommerce Website Development Company | MVP InfoTech",
//   description:
//     "Grow your business with Shopify, Neto, WordPress & BigCommerce development, SEO and custom eCommerce solutions from MVP InfoTech.",
//   alternates: {
//     canonical: "https://www.mvpinfotech.in",
//   },
//   openGraph: {
//     title: "Ecommerce Website Development Company | MVP InfoTech",
//     description:
//       "Grow your business with Shopify, Neto, WordPress & BigCommerce development, SEO and custom eCommerce solutions from MVP InfoTech.",
//     url: "https://www.mvpinfotech.in",
//     siteName: "MVP InfoTech",
//     type: "website",
//     images: [
//       {
//         url: "https://www.mvpinfotech.in/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Ecommerce Website Development Company",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Ecommerce Website Development Company | MVP InfoTech",
//     description:
//       "Grow your business with Shopify, Neto, WordPress & BigCommerce development, SEO and custom eCommerce solutions from MVP InfoTech.",
//     images: ["https://www.mvpinfotech.in/og-image.png"],
//   },
//   robots: { index: true, follow: true },
// };

// // Platforms shown in the animated pill row
// const platforms = [
//   { name: "Neto / Maropost", color: "#3b82f6" },
//   { name: "Shopify", color: "#96bf48" },
//   { name: "WordPress", color: "#21759B" },
//   { name: "BigCommerce", color: "#f97316" },
//   { name: "Next.js", color: "#a855f7" },
//   { name: "React.js", color: "#06b6d4" },
// ];

// export default function Home() {
//   return (
//     <>
//       {/* ══════════════════════════════════════════
//           HERO
//       ══════════════════════════════════════════ */}
//       <section
//         id="hero"
//         className="relative overflow-hidden bg-[#080d17] min-h-[92vh] flex items-center"
//       >
//         {/* ── Background layers ── */}
//         {/* Mesh gradient */}
//         <div
//           className="absolute inset-0 -z-10"
//           style={{
//             background:
//               "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(99,102,241,0.13) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(139,92,246,0.10) 0%, transparent 55%), radial-gradient(ellipse 100% 80% at 50% 0%, rgba(15,23,42,1) 0%, transparent 70%)",
//           }}
//         />

//         {/* Grid texture */}
//         <div
//           className="absolute inset-0 -z-10 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
//             backgroundSize: "60px 60px",
//           }}
//         />

//         {/* Top accent line */}
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

//         {/* Glow orbs */}
//         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[140px] pointer-events-none" />
//         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />

//         <div className="relative w-full max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

//           {/* ── LEFT ── */}
//           <div>
//             {/* Availability badge */}
//             <div className="inline-flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
//               </span>
//               <span className="text-green-400 text-xs font-semibold tracking-wide">
//                 Available for new projects
//               </span>
//             </div>

//             {/* H1 — SEO optimised, clean */}
//             <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-[-2px] mb-6">
//               High-Converting <br/> E-Commerce Stores
//               <br />
//               <span
//                 className="text-transparent bg-clip-text"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #60a5fa 100%)",
//                 }}
//               >
//                Built for Speed
//               </span>
//               <br />
//                Scale & Revenue
//             </h1>

//           <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-[480px] font-light">
//   Specialist full-stack development and seamless ecommerce migrations on{" "}
//   <span className="text-white font-medium">Neto by Maropost</span>,{" "}
//   <span className="text-white font-medium">Shopify</span>,{" "}
//   <span className="text-white font-medium">WordPress</span>,{" "}
//   <span className="text-white font-medium">BigCommerce</span> and{" "}
//   <span className="text-white font-medium">Next.js</span>. We help ambitious retail and B2B brands across Australia, the US and the UK turn slow stores into fast-loading sales machines.
// </p>

           
//             <div className="flex gap-3 flex-wrap">
//               <Link
//                 href="/contact"
//                 className="group relative inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
//               >
//                 Get Your Free Store Audit
//                 <svg
//                   className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>

//               <Link
//                 href="/ourwork"
//                 className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
//               >
//                 Explore Live Client Stores
//               </Link>

          

//               <p className="mt-4 text-sm text-gray-400 leading-relaxed">
//   Free 15-point speed & UX review <span className="text-gray-600">·</span>{" "}
//   Direct senior developer access <span className="text-gray-600">·</span>{" "}
//   Reply within 24 hours
// </p>
//             </div>

//             {/* Mini trust row */}
//             <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/8">
//               <div className="text-center">
//                 <div className="text-2xl font-extrabold text-white">12+</div>
//                 <div className="text-xs text-gray-500 mt-0.5">Years E-Commerce Experience.</div>
//               </div>
//               <div className="w-px h-8 bg-white/10" />
//               <div className="text-center">
//                 <div className="text-2xl font-extrabold text-white">149+</div>
//                 <div className="text-xs text-gray-500 mt-0.5">Stores Built & Optimised</div>
//               </div>
//               <div className="w-px h-8 bg-white/10" />
//               <div className="text-center">
//                 <div className="text-2xl font-extrabold text-white">10+</div>
//                 <div className="text-xs text-gray-500 mt-0.5">Countries</div>
//               </div>
//               <div className="w-px h-8 bg-white/10" />
//               <div className="flex items-center gap-1.5">
//                 <span className="text-yellow-400 text-sm">★★★★★</span>
//                 <span className="text-xs text-gray-500">5.0 rated</span>
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT — Image with overlays ── */}
//           <div className="hidden md:block relative">
//             {/* Glow behind image */}
//             <div className="absolute inset-0 bg-indigo-500/15 blur-[60px] rounded-3xl scale-90" />

//             {/* Main image */}
//             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
//               <Image
//                 src="/hero.jpg"
//                 alt="Full-Stack Ecommerce Developer working on Neto, Shopify, WordPress and BigCommerce"
//                 width={700}
//                 height={470}
//                 className="object-cover w-full"
//                 quality={80}
//                 priority
//               />
//               {/* Image overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-[#080d17]/60 via-transparent to-transparent" />
//             </div>

//             {/* Floating card — top left */}
//             <div className="absolute -top-5 -left-5 bg-[#0f1729] border border-white/10 rounded-2xl p-4 shadow-xl shadow-black/40 backdrop-blur-sm">
//               <div className="flex items-center gap-3">
//                 <div className="w-9 h-9 rounded-xl bg-green-500/15 flex items-center justify-center text-lg">
//                   ⚡
//                 </div>
//                 <div>
//                   <div className="text-white text-xs font-bold">PageSpeed</div>
//                   <div className="text-green-400 text-lg font-extrabold leading-none mt-0.5">98/100</div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating card — bottom right */}
//             <div className="absolute -bottom-5 -right-5 bg-[#0f1729] border border-white/10 rounded-2xl p-4 shadow-xl shadow-black/40 backdrop-blur-sm">
//               <div className="text-xs text-gray-500 mb-1">Projects delivered</div>
//               <div className="flex items-end gap-1">
//                 <span className="text-white text-2xl font-extrabold leading-none">149</span>
//                 <span className="text-indigo-400 text-sm font-bold mb-0.5">+</span>
//               </div>
//               <div className="flex gap-0.5 mt-2">
//                 {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
//                   <div
//                     key={i}
//                     className="w-2 rounded-sm bg-indigo-500/60"
//                     style={{ height: `${h * 0.3}px` }}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Floating card — top right */}
//             <div className="absolute top-4 -right-5 bg-[#0f1729] border border-white/10 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-sm">
//               <div className="text-xs text-gray-500 mb-1">Client rating</div>
//               <div className="flex items-center gap-1.5">
//                 <span className="text-yellow-400 text-sm">★★★★★</span>
//                 <span className="text-white font-extrabold text-sm">5.0</span>
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Bottom fade */}
//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080d17] to-transparent pointer-events-none" />
//       </section>

//       {/* ── REST OF PAGE ── */}
   
//       <AboutUs />
//       <Services />
//       <TechStack />
//       <WhyChooseMe />
//       <LatestProjects />
//       <ClientReviews />
//       <BlogSlider />
//       <ContactUs />
//     </>
//   );
// }




import Image from "next/image";
import type { Metadata } from "next";
import Services from "@/components/services";
import TechStack from "@/components/tech";
import WhyChooseMe from "@/components/whyme";
import LatestProjects from "@/components/letestproject";
import ContactUs from "@/components/contactus";
import AboutUs from "@/components/About";
import Link from "next/link";
import ClientReviews from "@/components/ClientReviews";
import StatsSection from "@/components/StatsSection";
import BlogSlider from "./blog/page";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),
  title: "Neto by Maropost, Shopify & Headless E-Commerce Agency | MVP InfoTech",
  description:
    "Specialist full-stack e-commerce development & zero-loss migrations on Neto by Maropost, Shopify, BigCommerce & Next.js. Serving AU, US, UK & CA brands.",
  alternates: {
    canonical: "https://www.mvpinfotech.in",
  },
  openGraph: {
    title: "Neto by Maropost, Shopify & Headless E-Commerce Agency | MVP InfoTech",
    description:
      "We help ambitious retail and B2B brands turn slow stores into fast-loading sales machines on Neto, Shopify, BigCommerce & Next.js.",
    url: "https://www.mvpinfotech.in",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MVP InfoTech - E-Commerce Website Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neto by Maropost, Shopify & Headless E-Commerce Agency | MVP InfoTech",
    description:
      "Specialist full-stack e-commerce development & zero-loss migrations on Neto by Maropost, Shopify, BigCommerce & Next.js.",
    images: ["https://www.mvpinfotech.in/og-image.png"],
  },
  robots: { index: true, follow: true },
};

// Clickable Platform Pills for better UX & Internal Linking SEO
const platforms = [
  { name: "Neto / Maropost", href: "/neto-by-maropost-development", color: "#3b82f6", tag: "AU B2B" },
  { name: "Shopify", href: "/shopify-development-services", color: "#96bf48", tag: "D2C & Plus" },
  { name: "BigCommerce", href: "/bigcommerce-development-services", color: "#f97316", tag: "Enterprise" },
  { name: "WordPress / Woo", href: "/wordpress-development-services", color: "#21759B", tag: "Custom" },
  { name: "Next.js", href: "/next-js-development", color: "#a855f7", tag: "Headless" },
  { name: "React.js", href: "/react-js-development", color: "#06b6d4", tag: "Frontend" },
];

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — 2026 MODERN BENTO & SAAS ARCHITECTURE
      ══════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#060911] min-h-[94vh] flex items-center pt-10 pb-24"
      >
        {/* ── 2026 Ambient Background Layers ── */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 15% 30%, rgba(99,102,241,0.16) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 65%, rgba(139,92,246,0.12) 0%, transparent 55%), radial-gradient(ellipse 100% 80% at 50% 0%, rgba(15,23,42,0.95) 0%, transparent 70%)",
          }}
        />

        {/* Subtle Architectural Grid Texture */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Top Laser Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/5 w-[480px] h-[480px] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/5 w-[420px] h-[420px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ── LEFT COLUMN (7 Cols) ── */}
          <div className="lg:col-span-7">
            
            {/* 2026 Trust & Timezone Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-full pl-3.5 pr-4 py-1.5 mb-7 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-xs font-semibold tracking-wide">
                Available for New Projects
              </span>
              <span className="text-white/20 text-xs">|</span>
              <span className="text-gray-300 text-xs font-medium">
                🇦🇺 AU · 🇺🇸 US · 🇬🇧 UK · 🇨🇦 CA Time Zones
              </span>
            </div>

            {/* H1 — High-Impact Typography */}
            <h1 className="text-4xl sm:text-5xl xl:text-[62px] font-extrabold text-white leading-[1.06] tracking-[-1.8px] mb-6">
              High-Converting <br className="hidden sm:block" />
              E-Commerce Stores{" "}
              <span
                className="text-transparent bg-clip-text block sm:inline"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #38bdf8 100%)",
                }}
              >
                Built for Speed,
              </span>{" "}
              Scale & Revenue
            </h1>

            {/* Value Proposition Sub-headline */}
            <p className="text-gray-300/90 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl font-light">
              Specialist full-stack development and zero-loss migrations on{" "}
              <strong className="text-white font-semibold">Neto by Maropost</strong>,{" "}
              <strong className="text-white font-semibold">Shopify</strong>,{" "}
              <strong className="text-white font-semibold">BigCommerce</strong>,{" "}
              <strong className="text-white font-semibold">WordPress</strong>, and{" "}
              <strong className="text-white font-semibold">Next.js</strong>. We help ambitious retail and B2B brands turn slow storefronts into sub-2-second sales machines.
            </p>

            {/* Interactive Platform Pills (Internal SEO Links) */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {platforms.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span
                    className="w-2 h-2 rounded-full transition-transform group-hover:scale-125"
                    style={{ backgroundColor: p.color }}
                  />
                  <span>{p.name}</span>
                  <span className="text-[10px] text-gray-500 group-hover:text-gray-300 border-l border-white/10 pl-1.5">
                    {p.tag}
                  </span>
                </Link>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-7 py-4 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                <span>Get Your Free Store Audit</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/ourwork"
                className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 text-white/85 hover:text-white px-7 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Live Client Stores
              </Link>
            </div>

            {/* Micro-Copy Risk Reversal */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Free 15-point speed & UX review
              </span>
              <span className="text-gray-700 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Direct senior developer access
              </span>
              <span className="text-gray-700 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span> Reply within 24 hours
              </span>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">12+</div>
                <div className="text-xs text-gray-400 mt-0.5">Years E-Commerce Exp.</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">149+</div>
                <div className="text-xs text-gray-400 mt-0.5">Stores Built & Scaled</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">98/100</div>
                <div className="text-xs text-gray-400 mt-0.5">Avg. PageSpeed Score</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 text-base sm:text-lg font-bold">
                  ★★★★★ <span className="text-white text-xl sm:text-2xl font-extrabold ml-1">5.0</span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">Verified Client Rating</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — 2026 Dashboard & Showcase Frame (5 Cols) ── */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Ambient Backlight */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-violet-500/15 to-cyan-500/20 blur-[60px] rounded-3xl -z-10" />

            {/* Modern Browser / Code Window Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0c1322]/90 shadow-2xl shadow-black/70 backdrop-blur-xl">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#080d17]/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-gray-400 bg-white/[0.04] border border-white/10 rounded-md px-3 py-0.5 flex items-center gap-1.5">
                  <span className="text-emerald-400">🔒</span> store-performance-audit.app
                </div>
                <div className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wider">
                  Core Vitals: PASS
                </div>
              </div>

              {/* Hero Image Container */}
              <div className="relative">
                <Image
                  src="/hero.jpg"
                  alt="Full-Stack Ecommerce Developer working on Neto by Maropost, Shopify, WordPress and BigCommerce"
                  width={700}
                  height={480}
                  className="object-cover w-full h-[400px]"
                  quality={85}
                  priority
                />
                {/* Subtle Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d17] via-[#080d17]/20 to-transparent" />

                {/* Inside-Frame Bottom Badge: Tech Capabilities */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0b1120]/90 border border-white/10 backdrop-blur-md rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-indigo-400 font-semibold uppercase tracking-wider">
                      Enterprise Ready Architecture
                    </div>
                    <div className="text-xs text-gray-300 mt-0.5">
                      B@SE Templates · MYOB/Xero/Cin7 · Shopify Plus · Headless
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold shrink-0">
                    &lt; 1.8s Load
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Bento Card 1 — Top Left (Core Web Vitals) */}
            <div className="absolute -top-6 -left-6 bg-[#0f172a]/95 border border-white/15 rounded-2xl p-4 shadow-2xl shadow-black/60 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-lg">
                  ⚡
                </div>
                <div>
                  <div className="text-gray-400 text-[11px] font-medium">Google PageSpeed</div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-emerald-400 text-xl font-extrabold leading-none">
                      98/100
                    </span>
                    <span className="text-[10px] text-emerald-300/80 font-semibold">
                      A+ Grade
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Bento Card 2 — Bottom Right (Projects & Conversion Lift) */}
            <div className="absolute -bottom-6 -right-5 bg-[#0f172a]/95 border border-white/15 rounded-2xl p-4 shadow-2xl shadow-black/60 backdrop-blur-md">
              <div className="flex items-center justify-between gap-4 mb-1.5">
                <span className="text-xs text-gray-400 font-medium">Stores Delivered</span>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-semibold">
                  +40% Avg. CRO
                </span>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-white text-2xl font-extrabold leading-none">149</span>
                  <span className="text-indigo-400 text-base font-bold">+</span>
                </div>
                {/* Fixed Mini Bar Chart */}
                <div className="flex items-end gap-1 h-7">
                  {[40, 65, 50, 80, 60, 90, 100].map((h, i) => (
                    <div
                      key={i}
                      className="w-2 rounded-t-sm bg-gradient-to-t from-indigo-600 to-indigo-400"
                      style={{ height: `${Math.round(h * 0.28)}px` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Smooth Transition Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#080d17] to-transparent pointer-events-none" />
      </section>

      {/* ── REST OF PAGE ── */}
      <AboutUs />
      <Services />
      <TechStack />
      <WhyChooseMe />
      <LatestProjects />
      <ClientReviews />
      <BlogSlider />
      <ContactUs />
    </>
  );
}
