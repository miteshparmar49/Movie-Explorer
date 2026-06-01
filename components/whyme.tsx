// import {
//   HiOutlineBadgeCheck,
//   HiOutlineBriefcase,
//   HiOutlineCode,
//   HiOutlineLightningBolt,
//   HiOutlineSupport,
// } from "react-icons/hi";
// const reasons = [
//   {
//     title: "9+ Years of Experience",
//     desc: "Professional experience delivering scalable ecommerce and web solutions for global clients.",
//     icon: HiOutlineBriefcase,
//     color: "text-sky-400",
//   },
//   {
//     title: "Ecommerce Specialist",
//     desc: "Specialized in Neto, Maropost, Shopify and BigCommerce platforms.",
//     icon: HiOutlineBadgeCheck,
//     color: "text-indigo-400",
//   },
//   {
//     title: "Clean & Scalable Code",
//     desc: "Well-structured, maintainable and future-ready codebase for long-term growth.",
//     icon: HiOutlineCode,
//     color: "text-emerald-400",
//   },
//   {
//     title: "Fast & Reliable Delivery",
//     desc: "On-time delivery with proper testing and clear communication throughout the project.",
//     icon: HiOutlineLightningBolt,
//     color: "text-yellow-400",
//   },
//   {
//     title: "Clear Communication",
//     desc: "Regular updates, transparent progress and easy collaboration throughout the project.",
//     icon: HiOutlineSupport,
//     color: "text-pink-400",
//   },
//   {
//     title: "Long-Term Support",
//     desc: "Post-launch support, performance optimization and continuous improvements when required.",
//     icon: HiOutlineBadgeCheck,
//     color: "text-purple-400",
//   },
// ];


// export default function WhyChooseMe() {
//   return (
//     <section id="why-choose-me" className="pt-24 relative">
//       <div className="mx-auto max-w-7xl px-6">

//         {/* heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Why Choose Me?
//           </h2>
//           <p className="mt-3 text-white/60 text-sm md:text-base">
//             A reliable full-stack ecommerce developer focused on performance, scalability and
//             long-term business success.
//           </p>
//         </div>

//         {/* cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {reasons.map((item) => {
//             const Icon = item.icon;

//             return (
//               <article
//                 key={item.title}
//                 className="
//                   rounded-xl border border-white/10
//                   bg-white/5 backdrop-blur-md
//                   px-6 py-6
//                   transition hover:-translate-y-1 hover:border-white/20
//                 "
//               >
//                 <div className="flex items-start gap-4">
//                   <div
//                     className={`
//                       h-11 w-11 rounded-lg
//                       flex items-center justify-center
//                       bg-white/10
//                       ${item.color}
//                     `}
//                   >
//                     <Icon size={22} />
//                   </div>

//                   <div>
//                     <h3 className="font-semibold text-base">
//                       {item.title}
//                     </h3>
//                     <p className="mt-1 text-sm text-white/60">
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


import {
  HiOutlineBadgeCheck,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineSupport,
  HiOutlineStar,
} from "react-icons/hi";
import Link from "next/link";

const reasons = [
  {
    title: "12+ Years of Experience",
    desc: "Over a decade delivering scalable ecommerce and web solutions for global clients across Australia, USA, UK, Canada and UAE. We have worked across retail, automotive, healthcare, fashion, industrial and B2B industries — building stores that don't just look great but consistently rank, convert and grow. With 2,000+ projects shipped and a 5.0 client rating, we bring the kind of experience that only comes from solving real problems for real businesses at scale.",
    icon: HiOutlineBriefcase,
    color: "#38bdf8",
    stat: "12+",
    statLabel: "Years",
  },
  {
    title: "Ecommerce Specialist",
    desc: "Deep expertise in Neto, Maropost Commerce Cloud, Shopify, BigCommerce and WordPress — not a generalist, a specialist.",
    icon: HiOutlineBadgeCheck,
    color: "#818cf8",
    stat: "4",
    statLabel: "Platforms",
  },
  {
    title: "Clean & Scalable Code",
    desc: "Well-structured, maintainable and future-ready code architecture designed for long-term growth and easy handover.",
    icon: HiOutlineCode,
    color: "#34d399",
    stat: "100%",
    statLabel: "Clean code",
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "On-time project delivery with thorough testing, proper QA and transparent communication at every stage.",
    icon: HiOutlineLightningBolt,
    color: "#fbbf24",
    stat: "98%",
    statLabel: "On-time rate",
  },
  {
    title: "Clear Communication",
    desc: "Regular progress updates, easy collaboration and full transparency — you always know exactly where your project stands.",
    icon: HiOutlineSupport,
    color: "#f472b6",
    stat: "24h",
    statLabel: "Response time",
  },
  {
    title: "Long-Term Support",
    desc: "Post-launch support, performance monitoring and continuous improvements to keep your store growing after go-live.",
    icon: HiOutlineStar,
    color: "#a78bfa",
    stat: "∞",
    statLabel: "Support",
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="relative py-28 overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        {/* Dark panel behind content */}
        <div className="absolute inset-0 bg-[#060b14]" />
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-indigo-600/6 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[300px] bg-violet-600/6 blur-[130px] rounded-full pointer-events-none" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="grid md:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-400 mb-4">
              <span className="w-8 h-px bg-indigo-500 inline-block" />
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight">
              The difference
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #60a5fa 100%)",
                }}
              >
                you'll feel
              </span>
            </h2>
          </div>
          <div>
            <p className="text-gray-400 leading-relaxed font-light mb-6">
              A reliable full-stack ecommerce developer focused on performance,
              scalability and your long-term business success — not just closing tickets.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20"
            >
              Start Working Together →
            </Link>
          </div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            const isFeatured = i === 0; // First card larger

            return (
              <article
                key={item.title}
                className={`group relative rounded-2xl border p-7 transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-default
                  ${isFeatured ? "lg:row-span-2" : ""}
                `}
                style={{
                  borderColor: item.color + "25",
                  background: `linear-gradient(135deg, ${item.color}08 0%, transparent 60%)`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${item.color}12 0%, transparent 65%)`,
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}80, transparent)`,
                  }}
                />

                {/* Stat — top right */}
                <div className="absolute top-6 right-6 text-right">
                  <div
                    className="text-2xl font-extrabold leading-none"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium mt-0.5">
                    {item.statLabel}
                  </div>
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: item.color + "18",
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon size={26} style={{ color: item.color }} />
                </div>

                {/* Content */}
                <h3 className="font-bold text-white text-base mb-3 pr-16">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>

                {/* Check mark bottom */}
                <div
                  className="absolute bottom-6 right-6 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                  style={{
                    background: item.color + "20",
                    color: item.color,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

              </article>
            );
          })}
        </div>

        {/* ── Bottom trust strip ── */}
        <div className="mt-14 rounded-2xl border border-white/8 bg-white/3 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="text-yellow-400 text-lg">★★★★★</div>
            <div>
              <div className="text-white font-bold text-sm">5.0 Client Rating</div>
              <div className="text-gray-500 text-xs">Across 50+ delivered projects</div>
            </div>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <div className="text-gray-400 text-sm text-center font-light">
            Trusted by businesses in{" "}
            <span className="text-white font-medium">🇦🇺 Australia · 🇺🇸 USA · 🇬🇧 UK · 🇨🇦 Canada · 🇦🇪 UAE</span>
          </div>
          <div className="w-px h-10 bg-white/10 hidden md:block" />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/15 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-white/70 hover:text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all whitespace-nowrap"
          >
            Get Free Quote →
          </Link>
        </div>

      </div>
    </section>
  );
}