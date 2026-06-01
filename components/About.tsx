// import Link from "next/link";

// export default function AboutUs() {
//   const skills = [
//     "Neto By Maropost",
//     "Shopify",
//     "WordPress",
//     "BigCommerce",
//      "SEO",
//     "Vue.js",
//     "React.js",
//     "Node.js",
//     "Next.js",
//     "Express.js",
//   ];

//   return (
//     <section
//       id="about"
//       className="relative pb-24"
//     >
//       <div className="mx-auto max-w-5xl px-6 text-center">

//         <h2 className="text-3xl md:text-4xl font-semibold">
//           About Us
//         </h2>

//         <p className="mt-5 text-white/70 leading-relaxed max-w-3xl mx-auto">
//           We are a results-driven <strong className="text-white">full-stack eCommerce development team</strong> specializing in modern web technologies and leading commerce platforms.
//           We help businesses build <strong className="text-white">high-performance, scalable and SEO-friendly online stores</strong> using the latest frontend and backend frameworks.
//         </p>

//         <p className="mt-4 text-white/70 leading-relaxed max-w-3xl mx-auto">
//           Our expertise covers custom eCommerce development, platform integrations, performance optimization
//           and conversion-focused UI/UX for brands running on
//           <strong className="text-white">
//             {" "}Neto, Maropost Commerce Cloud, Shopify and BigCommerce
//           </strong>. 
//           We focus on clean architecture, fast loading experiences and long-term maintainability.
//         </p>

//         {/* Skills */}
//         <div className="mt-10 flex flex-wrap justify-center gap-3">
//           {skills.map((skill) => (

//             <span
//               key={skill}
//               className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80
//                          hover:bg-white/10 hover:text-white transition"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>

//         {/* SEO helper line */}
//         <p className="sr-only">
//           Vue.js developer, React.js developer, Next.js developer, Node.js and Express.js backend developer,
//           Neto ecommerce developer, Maropost commerce cloud expert, Shopify developer, BigCommerce developer,
//           WordPress developer and technical SEO specialist.
//         </p>

//       </div>
//     </section>
//   );
// }

// import Link from "next/link";

// export default function AboutUs() {
//   const skills = [
//   "Neto By Maropost",
//   "Shopify",
//   "WordPress",
//   "BigCommerce",
//   "SEO",
//   "Vue.js",
//   "React.js",
//   "Node.js",
//   "Next.js",
//   "Express.js",
//   "Amazon PPC",
//   "Meta Ads",
//   "Google Ads",
// ];

// // Updated SEO-friendly links (no /services)
// const skillLinks: Record<string, string> = {
//   "Neto By Maropost": "/neto-by-maropost-development",
//   "Shopify": "/shopify-development-services",
//   "WordPress": "/wordpress-development-services",
//   "BigCommerce": "/bigcommerce-development-services",
//   "SEO": "/seo-services",
//   "Vue.js": "/vue-js-development",
//   "React.js": "/react-js-development",
//   "Node.js": "/node-js-development",
//   "Next.js": "/next-js-development",
//   "Express.js": "/express-js-development",
//   "Amazon PPC": "/amazon-ppc-services",
//   "Meta Ads": "/meta-ads-services",
//   "Google Ads": "/google-ads-services",
// }; 

//   return (
//     <section id="about" className="relative pb-24">
//       <div className="mx-auto max-w-5xl px-6 text-center">
//         <h2 className="text-3xl md:text-4xl font-semibold">About Us</h2>

//         <p className="mt-5 text-white/70 leading-relaxed max-w-3xl mx-auto">
//           We are a results-driven{" "}
//           <strong className="text-white">
//             full-stack eCommerce development team
//           </strong>{" "}
//           specializing in modern web technologies and leading commerce
//           platforms. We help businesses build{" "}
//           <strong className="text-white">
//             high-performance, scalable and SEO-friendly online stores
//           </strong>{" "}
//           using the latest frontend and backend frameworks.
//         </p>

//         <p className="mt-4 text-white/70 leading-relaxed max-w-3xl mx-auto">
//           Our expertise covers custom eCommerce development, platform
//           integrations, performance optimization and conversion-focused UI/UX
//           for brands running on
//           <strong className="text-white">
//             {" "}
//             Neto, Maropost Commerce Cloud, Shopify and BigCommerce
//           </strong>
//           . We focus on clean architecture, fast loading experiences and
//           long-term maintainability.
//         </p>

//         {/* Skills */}
//        <div className="mt-10 flex flex-wrap justify-center gap-3 mvp_about">
//   {skills.map((skill) => {
//     const href = skillLinks[skill];

//     const badge = (
//       <span
//         className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80
//                    hover:bg-white/10 hover:text-white transition"
//       >
//         {skill}
//       </span>
//     );

//     return href ? (
//       <Link key={skill} href={href} aria-label={skill}>
//         {badge}
//       </Link>
//     ) : (
//       <span className="mb-2" key={skill}>{badge}</span>
//     );
//   })}
// </div>

//         {/* SEO helper line */}
//         <p className="sr-only">
//           Vue.js developer, React.js developer, Next.js developer, Node.js and
//           Express.js backend developer, Neto ecommerce developer, Maropost
//           commerce cloud expert, Shopify developer, BigCommerce developer,
//           WordPress developer and technical SEO specialist.
//         </p>
//       </div>
//     </section>
//   );
// }


import Link from "next/link";

const skills = [
  { name: "Neto By Maropost", href: "/neto-by-maropost-development", icon: "⚙️", color: "#3b82f6" },
  { name: "Shopify", href: "/shopify-development-services", icon: "🛍️", color: "#96bf48" },
  { name: "WordPress", href: "/wordpress-development-services", icon: "🌐", color: "#21759B" },
  { name: "BigCommerce", href: "/bigcommerce-development-services", icon: "🏬", color: "#f97316" },
  { name: "SEO", href: "/seo-services", icon: "🔍", color: "#eab308" },
  { name: "Vue.js", href: "/vue-js-development", icon: "💚", color: "#42b883" },
  { name: "React.js", href: "/react-js-development", icon: "⚛️", color: "#06b6d4" },
  { name: "Node.js", href: "/node-js-development", icon: "🟢", color: "#84cc16" },
  { name: "Next.js", href: "/next-js-development", icon: "▲", color: "#a855f7" },
  { name: "Express.js", href: "/express-js-development", icon: "🚀", color: "#6b7280" },
  { name: "Amazon PPC", href: "/amazon-ppc-services", icon: "📦", color: "#f59e0b" },
  { name: "Meta Ads", href: "/meta-ads-services", icon: "📘", color: "#3b82f6" },
  { name: "Google Ads", href: "/google-ads-services", icon: "🎯", color: "#ef4444" },
];

const highlights = [
  { num: "12+", label: "Years Experience", icon: "🏆" },
  { num: "2,000+", label: "Projects Delivered", icon: "🚀" },
  { num: "10+", label: "Countries Served", icon: "🌍" },
  { num: "98%", label: "Client Satisfaction", icon: "⭐" },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 bg-violet-600/5 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── TOP: Split layout ── */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-400 mb-5">
              <span className="w-8 h-px bg-indigo-500 inline-block" />
              About MVP InfoTech
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              We build stores
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #60a5fa 100%)",
                }}
              >
                that actually sell
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5 font-light">
              We are a results-driven{" "}
              <span className="text-white font-semibold">
                full-stack ecommerce development team
              </span>{" "}
              specialising in modern web technologies and leading commerce
              platforms. We help businesses build high-performance, scalable and
              SEO-friendly online stores using the latest frontend and backend
              frameworks.
            </p>

            <p className="text-gray-400 leading-relaxed font-light">
              Our expertise covers custom ecommerce development, platform
              integrations, performance optimisation and conversion-focused UI/UX
              for brands running on{" "}
              <span className="text-white font-semibold">
                Neto, Maropost Commerce Cloud, Shopify and BigCommerce
              </span>
              . We focus on clean architecture, fast loading experiences and
              long-term maintainability.
            </p>

            <div className="mt-8 flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20"
              >
                Work With Us →
              </Link>
              <Link
                href="/ourwork"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-default ${
                  i % 2 === 0
                    ? "bg-white/5 border-white/10 hover:border-indigo-500/30 hover:shadow-indigo-500/10"
                    : "bg-indigo-600/10 border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                }`}
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <div className="text-3xl font-extrabold text-white leading-none mb-1">
                  {h.num}
                </div>
                <div className="text-xs text-gray-400 font-medium">{h.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM: Expertise pills ── */}
        <div>
          {/* Divider label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500 px-3">
              Our Expertise
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* Skill pills grid */}
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Link
                key={skill.name}
                href={skill.href}
                aria-label={skill.name}
                className="group flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  borderColor: skill.color + "30",
                  background: skill.color + "0d",
                }}
              >
                <span className="text-base leading-none">{skill.icon}</span>
                <span className="group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </Link>
            ))}
          </div>

          {/* SEO hidden text */}
          <p className="sr-only">
            Vue.js developer, React.js developer, Next.js developer, Node.js and
            Express.js backend developer, Neto ecommerce developer, Maropost commerce
            cloud expert, Shopify developer, BigCommerce developer, WordPress developer
            and technical SEO specialist.
          </p>
        </div>

      </div>
    </section>
  );
}