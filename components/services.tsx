// import {
//   HiOutlineShoppingBag,
//   HiOutlineCode,
//   HiOutlineServer,
//   HiOutlineSwitchHorizontal,
//   HiOutlineSearch,
//   HiOutlineColorSwatch,
//   HiOutlineChartBar,
//   HiOutlineSpeakerphone
// } from "react-icons/hi";

// const services = [
//   {
//     title: "Ecommerce Development",
//     desc: "Neto By Maropost, Shopify, BigCommerce, WordPress",
//     icon: HiOutlineShoppingBag,
//     color: "text-blue-400",
//   },
//   {
//     title: "Frontend Development",
//     desc: "Vue, React, Next.js",
//     icon: HiOutlineCode,
//     color: "text-cyan-400",
//   },
//   {
//     title: "Backend Development",
//     desc: "Node.js, Express",
//     icon: HiOutlineServer,
//     color: "text-green-400",
//   },
//   {
//     title: "Store Migrations & Integrations",
//     desc: "Platform migrations and third-party integrations",
//     icon: HiOutlineSwitchHorizontal,
//     color: "text-emerald-400",
//   },
//   {
//     title: "Performance & SEO",
//     desc: "Core Web Vitals & technical SEO",
//     icon: HiOutlineSearch,
//     color: "text-orange-400",
//   },
//   {
//     title: "UI/UX Enhancements",
//     desc: "Modern, conversion-focused interfaces",
//     icon: HiOutlineColorSwatch,
//     color: "text-pink-400",
//   },
//   {
//   title: "Amazon PPC",
//   desc: "Amazon sponsored ads & product sales growth",
//   icon: HiOutlineChartBar,
//   color: "text-yellow-400",
// },
// {
//   title: "Meta Ads",
//   desc: "Facebook & Instagram advertising campaigns",
//   icon: HiOutlineSpeakerphone,
//   color: "text-blue-500",
// },
// {
//   title: "Google Ads",
//   desc: "Search, Shopping & Display advertising",
//   icon: HiOutlineChartBar,
//   color: "text-red-400",
// }
// ];

// export default function Services() {
//   return (
//     <section id="services" className=" relative">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Services
//           </h2>
//         </div>

//         {/* cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((item) => {
//             const Icon = item.icon;

//             return (
//               <article
//                 key={item.title}
//                 className="
//                   relative rounded-xl border border-white/10
//                   bg-white/5 backdrop-blur-md
//                   px-6 py-5
//                   transition hover:-translate-y-1 hover:border-white/20
//                 "
//               >
//                 <div className="flex items-start gap-4">
//                   <div
//                     className={`
//                       h-11 w-11 rounded-lg flex items-center justify-center
//                       bg-white/10
//                       ${item.color}
//                     `}
//                   >
//                     <Icon className="text-22" size={22} />
//                   </div>

//                   <div>
//                     <h3 className="font-semibold text-base">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-white/60 mt-1">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import {
  HiOutlineShoppingBag,
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineSwitchHorizontal,
  HiOutlineSearch,
  HiOutlineColorSwatch,
  HiOutlineChartBar,
  HiOutlineSpeakerphone,
} from "react-icons/hi";

const services = [
  {
    title: "Ecommerce Development",
    desc: "Build high-converting online stores on Neto, Shopify, BigCommerce and WordPress — fast, scalable and SEO-ready.",
    icon: HiOutlineShoppingBag,
    color: "#3b82f6",
    href: "/shopify-development-services",
    tag: "Most Popular",
  },
  {
    title: "Frontend Development",
    desc: "Modern, pixel-perfect UIs built with Vue.js, React and Next.js for blazing-fast user experiences.",
    icon: HiOutlineCode,
    color: "#06b6d4",
    href: "/react-js-development",
  },
  {
    title: "Backend Development",
    desc: "Robust, scalable APIs and server-side solutions using Node.js and Express for any commerce platform.",
    icon: HiOutlineServer,
    color: "#22c55e",
    href: "/node-js-development",
  },
  {
    title: "Store Migrations",
    desc: "Zero-downtime platform migrations and third-party integrations — move stores without losing SEO or data.",
    icon: HiOutlineSwitchHorizontal,
    color: "#10b981",
    href: "/neto-by-maropost-development",
  },
  {
    title: "Performance & SEO",
    desc: "Core Web Vitals optimisation, technical SEO audits and schema markup to rank higher and load faster.",
    icon: HiOutlineSearch,
    color: "#f97316",
    href: "/seo-services",
  },
  {
    title: "UI/UX Enhancements",
    desc: "Conversion-focused interface redesigns that turn more visitors into paying customers.",
    icon: HiOutlineColorSwatch,
    color: "#ec4899",
    href: "/ourwork",
  },
  {
    title: "Amazon PPC",
    desc: "Amazon Sponsored Ads management that maximises product visibility and drives consistent sales growth.",
    icon: HiOutlineChartBar,
    color: "#eab308",
    href: "/amazon-ppc-services",
  },
  {
    title: "Meta Ads",
    desc: "Facebook and Instagram advertising campaigns that build brand awareness and drive ecommerce revenue.",
    icon: HiOutlineSpeakerphone,
    color: "#6366f1",
    href: "/meta-ads-services",
  },
  {
    title: "Google Ads",
    desc: "Search, Shopping and Display campaigns designed to bring qualified traffic and maximise ROI.",
    icon: HiOutlineChartBar,
    color: "#ef4444",
    href: "/google-ads-services",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* Subtle noise pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-400 mb-4">
              <span className="w-8 h-px bg-indigo-500 inline-block" />
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
              Services built for
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #60a5fa 100%)",
                }}
              >
                real results
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed md:text-right font-light">
            Every service is designed to help your ecommerce business grow faster,
            rank higher and convert better.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            // First card spans 2 columns on large screens
            const isFeatured = i === 0;

            return (
              <Link
                key={svc.title}
                href={svc.href}
                className={`group relative rounded-2xl border p-7 transition-all duration-300
                  hover:-translate-y-1.5 hover:shadow-2xl overflow-hidden
                  ${isFeatured ? "lg:col-span-2" : ""}
                `}
                style={{
                  background: `linear-gradient(135deg, ${svc.color}0a 0%, transparent 60%)`,
                  borderColor: svc.color + "25",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 50%, ${svc.color}12 0%, transparent 70%)`,
                  }}
                />

                {/* Top border accent on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${svc.color}80, transparent)`,
                  }}
                />

                <div className={`relative flex ${isFeatured ? "md:flex-row md:items-center md:gap-10" : "flex-col"} gap-5`}>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: svc.color + "18",
                      border: `1px solid ${svc.color}30`,
                    }}
                  >
                    <Icon size={26} style={{ color: svc.color }} />
                  </div>

                  <div className="flex-1">
                    {/* Tag */}
                    {svc.tag && (
                      <span
                        className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3"
                        style={{
                          background: svc.color + "20",
                          color: svc.color,
                          border: `1px solid ${svc.color}30`,
                        }}
                      >
                        {svc.tag}
                      </span>
                    )}

                    <h3 className="font-bold text-white text-base mb-2 group-hover:text-white transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {svc.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="self-end md:self-center flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
                    style={{ background: svc.color + "25", color: svc.color }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-gray-500 text-xs mt-3">Free consultation · No obligation · Fast response</p>
        </div>

      </div>
    </section>
  );
}