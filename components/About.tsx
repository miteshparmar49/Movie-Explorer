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
  { num: "12+", label: "Years E-Commerce Exp.", icon: "🏆", sub: "Hands-on architecture" },
  { num: "149+", label: "Stores Built & Scaled", icon: "🚀", sub: "Across retail & B2B" },
  { num: "98/100", label: "Avg. PageSpeed Score", icon: "⚡", sub: "Core Web Vitals ready" },
  { num: "5.0 ★", label: "Client Satisfaction", icon: "🌍", sub: "AU, US, UK & CA" },
];

const valuePoints = [
  {
    title: "Platform Specialists:",
    desc: "Deep expertise in Neto by Maropost, Shopify, BigCommerce, and WooCommerce.",
  },
  {
    title: "Zero-Loss Migrations:",
    desc: "Seamless replatforming with 100% SEO redirect mapping and full data integrity.",
  },
  {
    title: "Conversion-First Engineering:",
    desc: "Built for sub-2-second load times, WCAG accessibility, and higher checkout AOV.",
  },
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left — Text & Value Props (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-indigo-400 mb-5">
              <span className="w-8 h-px bg-indigo-500 inline-block" />
              About MVP InfoTech
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight mb-6">
              Your Technical Partner for{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #60a5fa 100%)",
                }}
              >
                Scalable E-Commerce Growth
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4 font-light text-base md:text-lg">
              Most agencies build stores that look fine on launch day but struggle under high SKU counts, complex B2B pricing, or custom ERP integrations.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4 font-light">
              At <strong className="text-white font-semibold">MVP InfoTech</strong>, we engineer e-commerce stores that actually sell and scale. With over 12 years of hands-on architecture experience, our team specializes in{" "}
              <strong className="text-white font-semibold">
                Neto by Maropost, Shopify Plus, BigCommerce, and custom headless builds (React, Next.js, Vue.js)
              </strong>.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6 font-light">
              Whether you are an Australian B2B wholesaler needing custom{" "}
              <span className="text-gray-200 font-medium">
                B@SE template logic and MYOB, Xero, or Cin7 integration
              </span>
              , or a US retail brand migrating to Shopify without losing hard-earned SEO rankings, we deliver clean, maintainable code built for long-term revenue.
            </p>

            {/* Key Value Bullet Points */}
            <ul className="space-y-2.5 mb-8">
              {valuePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="text-indigo-400 font-bold mt-0.5">✓</span>
                  <span>
                    <strong className="text-white font-semibold">{point.title}</strong>{" "}
                    {point.desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex gap-3.5 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20"
              >
                Get Your Free Store Audit →
              </Link>
              <Link
                href="/ourwork"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/80 hover:text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                See Real Case Studies
              </Link>
            </div>
          </div>

          {/* Right — Stat Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 sm:p-7 border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-default ${
                  i % 2 === 0
                    ? "bg-white/5 border-white/10 hover:border-indigo-500/30 hover:shadow-indigo-500/10"
                    : "bg-indigo-600/10 border-indigo-500/20 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                }`}
              >
                <div className="text-3xl mb-3">{h.icon}</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-1.5">
                  {h.num}
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-semibold mb-1">
                  {h.label}
                </div>
                <div className="text-[11px] text-gray-400 font-light">
                  {h.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM: Expertise pills ── */}
        <div>
          {/* Divider label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 px-3">
              Platforms & Technologies We Master
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* Skill pills grid */}
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Link
                key={skill.name}
                href={skill.href}
                aria-label={`${skill.name} Development Services`}
                className="group flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
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

          {/* Natural, Visible SEO Context Line (Replaces spammy sr-only keyword list) */}
          <p className="mt-8 text-center text-xs sm:text-sm text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Need a custom integration or headless architecture? We combine leading commerce engines (
            <strong className="text-gray-300 font-medium">Neto by Maropost, Shopify, BigCommerce, WordPress</strong>
            ) with modern JavaScript frameworks (
            <strong className="text-gray-300 font-medium">Next.js, React.js, Vue.js, Node.js, Express.js</strong>
            ) to build custom product finders, year/make/model fitment tools, and lightning-fast storefronts.
          </p>
        </div>
      </div>
    </section>
  );
}