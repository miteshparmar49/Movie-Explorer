// import {
//   SiVuedotjs,
//   SiReact,
//   SiNextdotjs,
//   SiExpress,
//   SiNodedotjs,
//   SiShopify,
//   SiWordpress,
//   SiBigcommerce,
//   SiGoogle,
//   SiAmazon
// } from "react-icons/si";

// import { FaFacebook } from "react-icons/fa";
// import Link from "next/link";

// const techStack = [
//   { name: "Neto By Maropost", icon: SiGoogle, color: "text-blue-400", href: "/neto-by-maropost-development" },
//   { name: "Shopify", icon: SiShopify, color: "text-green-400", href: "/shopify-development-services" },
//   { name: "BigCommerce", icon: SiBigcommerce, color: "text-purple-400", href: "/bigcommerce-development-services" },
//   { name: "WordPress", icon: SiWordpress, color: "text-sky-400", href: "/wordpress-development-services" },
//   { name: "SEO", icon: SiGoogle, color: "text-yellow-400", href: "/seo-services" },

//   { name: "Vue.js", icon: SiVuedotjs, color: "text-green-400", href: "/vue-js-development" },
//   { name: "React", icon: SiReact, color: "text-cyan-400", href: "/react-js-development" },
//   { name: "Next.js", icon: SiNextdotjs, color: "text-white", href: "/next-js-development" },
//   { name: "Express", icon: SiExpress, color: "text-gray-300", href: "/express-js-development" },
//   { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", href: "/node-js-development" },

//   // Marketing Platforms
//   { name: "Amazon PPC", icon: SiAmazon, color: "text-yellow-500", href: "/amazon-ppc-services" },
//   { name: "Meta Ads", icon: FaFacebook, color: "text-blue-500", href: "/meta-ads-services" },
//   { name: "Google Ads", icon: SiGoogle, color: "text-red-500", href: "/google-ads-services" },
// ];

// export default function TechStack() {
//   return (
//     <section id="tech-stack" className="pt-24 relative">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Tech Stack & Platforms
//           </h2>
//           <p className="mt-3 text-white/60 text-sm md:text-base">
//             Technologies and ecommerce platforms I use to build fast, scalable and SEO-friendly web
//             and ecommerce solutions.
//           </p>
//         </div>

//         {/* grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
//           {techStack.map((item) => {
//             const Icon = item.icon;

//             const card = (
//               <article
//                 className="
//                   flex flex-col items-center justify-center gap-3
//                   rounded-xl border border-white/10
//                   bg-white/5 backdrop-blur-md
//                   px-4 py-6
//                   transition hover:-translate-y-1 hover:border-white/20
//                 "
//               >
//                 <Icon className={`text-4xl ${item.color}`} />
//                 <h3 className="text-sm font-medium text-white/90">
//                   {item.name}
//                 </h3>
//               </article>
//             );

//             // 👉 Only wrap with Link if href exists
//             return item.href ? (
//               <Link key={item.name} href={item.href}>
//                 {card}
//               </Link>
//             ) : (
//               <div key={item.name}>{card}</div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }


import {
  SiVuedotjs,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiShopify,
  SiWordpress,
  SiBigcommerce,
  SiGoogle,
  SiAmazon,
} from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const categories = [
  {
    label: "Ecommerce Platforms",
    color: "#3b82f6",
    items: [
      { name: "Neto / Maropost", icon: SiGoogle, color: "#3b82f6", href: "/neto-by-maropost-development", desc: "AU #1 platform" },
      { name: "Shopify", icon: SiShopify, color: "#96bf48", href: "/shopify-development-services", desc: "Global leader" },
      { name: "BigCommerce", icon: SiBigcommerce, color: "#a855f7", href: "/bigcommerce-development-services", desc: "Enterprise grade" },
      { name: "WordPress", icon: SiWordpress, color: "#21759B", href: "/wordpress-development-services", desc: "40% of the web" },
    ],
  },
  {
    label: "Frontend & Backend",
    color: "#06b6d4",
    items: [
      { name: "React.js", icon: SiReact, color: "#06b6d4", href: "/react-js-development", desc: "UI library" },
      { name: "Next.js", icon: SiNextdotjs, color: "#a855f7", href: "/next-js-development", desc: "Full-stack React" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#42b883", href: "/vue-js-development", desc: "Progressive JS" },
      { name: "Node.js", icon: SiNodedotjs, color: "#84cc16", href: "/node-js-development", desc: "Server runtime" },
      { name: "Express.js", icon: SiExpress, color: "#94a3b8", href: "/express-js-development", desc: "API framework" },
    ],
  },
  {
    label: "Marketing & Ads",
    color: "#f97316",
    items: [
      { name: "SEO", icon: SiGoogle, color: "#eab308", href: "/seo-services", desc: "Organic growth" },
      { name: "Google Ads", icon: SiGoogle, color: "#ef4444", href: "/google-ads-services", desc: "Search & Shopping" },
      { name: "Meta Ads", icon: FaFacebook, color: "#6366f1", href: "/meta-ads-services", desc: "FB & Instagram" },
      { name: "Amazon PPC", icon: SiAmazon, color: "#f59e0b", href: "/amazon-ppc-services", desc: "Marketplace ads" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-28 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] -translate-y-1/2 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] -translate-y-1/2 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="text-center mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-4">
            <span className="w-8 h-px bg-cyan-500 inline-block" />
            Tech Stack
            <span className="w-8 h-px bg-cyan-500 inline-block" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.08] mb-4">
            Platforms & tools
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #67e8f9 0%, #818cf8 50%, #a78bfa 100%)",
              }}
            >
              we master
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto font-light leading-relaxed">
            A carefully chosen stack of technologies and platforms to build fast,
            scalable and SEO-friendly ecommerce solutions.
          </p>
        </div>

        {/* ── Categories ── */}
        <div className="flex flex-col gap-12 mt-14">
          {categories.map((cat) => (
            <div key={cat.label}>

              {/* Category label */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-5 w-1 rounded-full flex-shrink-0"
                  style={{ background: cat.color }}
                />
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                  {cat.label}
                </span>
                <div className="h-px flex-1 bg-white/8" />
              </div>

              {/* Tech cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group relative rounded-2xl border p-5 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                      style={{
                        borderColor: item.color + "25",
                        background: `linear-gradient(135deg, ${item.color}0a 0%, transparent 70%)`,
                      }}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at 50% 40%, ${item.color}18 0%, transparent 70%)`,
                        }}
                      />

                      {/* Top accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${item.color}90, transparent)`,
                        }}
                      />

                      {/* Icon container */}
                      <div
                        className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: item.color + "18",
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        <Icon size={28} style={{ color: item.color }} />
                      </div>

                      {/* Name */}
                      <div>
                        <h3 className="font-bold text-white text-sm group-hover:text-white transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-gray-500 mt-0.5 group-hover:text-gray-400 transition-colors">
                          {item.desc}
                        </p>
                      </div>

                      {/* Arrow appears on hover */}
                      <div
                        className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0"
                        style={{ color: item.color }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>

                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom stats strip ── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: "13", label: "Technologies mastered", color: "#818cf8" },
            { num: "12+", label: "Years building ecommerce", color: "#06b6d4" },
            { num: "2,000+", label: "Projects shipped", color: "#42b883" },
            { num: "98", label: "Avg PageSpeed score", color: "#f97316" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/8 bg-white/3 px-5 py-5 text-center"
            >
              <div
                className="text-3xl font-extrabold leading-none mb-1"
                style={{ color: s.color }}
              >
                {s.num}
              </div>
              <div className="text-xs text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}