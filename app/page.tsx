// import Image from "next/image";
// import Services from "@/components/services";
// import TechStack from "@/components/tech";
// import WhyChooseMe from "@/components/whyme";
// import LatestProjects from "@/components/letestproject";
// import ContactUs from "@/components/contactus";
// import AboutUs from "@/components/About";
// import Link from "next/link";
// import ClientReviews from "@/components/ClientReviews";
// import StatsSection from "@/components/StatsSection";
// import ClientLogosSlider from "@/components/ClientLogosSlider";
// import BlogSlider from "./blog/page";


// export default function Home() {
//   return (
//     <>
//       {/* HERO */}
//       <section id="hero" className="relative overflow-hidden py-28">
//         {/* background glow */}
//         <div className="absolute inset-0 -z-10">
//           <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full
//             bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 blur-[120px]" />
//         </div>

//         <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Full-Stack Ecommerce Developer for
//               Neto By Maropost, Shopify, wordpress & BigCommerce
//             </h1>

//             <p className="mt-6 text-lg text-white/70">
//               I help businesses build fast, scalable and SEO-friendly
//               ecommerce and web platforms using Next.js, React, Vue.js
//               and Node.js.
//             </p>

//             <div className="mt-8 flex gap-4">
//               {/* <Link
//                 href="ourwork"
//                 className="bg-white text-black px-6 py-3 rounded-md font-medium"
//               >
//                 View Work
//               </Link> */}

//               <Link
//                 href="contact"
//                 className="border border-white/20 px-6 py-3 rounded-md"
//               >
//               Get Free Consultation
//               </Link>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="hidden md:block aspect-video rounded-xl overflow-hidden border border-white/10 relative">
//             <Image
//               src="/hero.jpg"
//               alt="Full-Stack Ecommerce Developer working on Neto, Maropost, Shopify & BigCommerce platforms"
//               fill
//               className=""
//               quality={70}
//               sizes="(max-width: 768px) 100vw, 50vw"
//               priority
//             />
//           </div>

//         </div>
//       </section>
// <StatsSection />  
//  {/* <ClientLogosSlider /> */}
//       {/* SERVICES */}
    
//     <AboutUs/>
//         <Services />
//       <TechStack/>
//     <WhyChooseMe/>


//       {/* PORTFOLIO */}
//       <LatestProjects/>
// <ClientReviews/>
// <BlogSlider/>
//       {/* CONTACT */}
//         <ContactUs />
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
  title: "Full-Stack Ecommerce Developer | Neto, Shopify, WordPress & BigCommerce | MVP InfoTech",
  description:
    "Expert full-stack ecommerce developer specialising in Neto by Maropost, Shopify, WordPress and BigCommerce. 12+ years experience, 2,000+ projects delivered worldwide. Fast, SEO-friendly and conversion-focused.",
  alternates: {
    canonical: "https://www.mvpinfotech.in",
  },
  openGraph: {
    title: "Full-Stack Ecommerce Developer | MVP InfoTech",
    description:
      "Neto, Shopify, WordPress and BigCommerce expert. 12+ years experience building fast, SEO-friendly ecommerce stores worldwide.",
    url: "https://www.mvpinfotech.in",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MVP InfoTech — Full-Stack Ecommerce Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Ecommerce Developer | MVP InfoTech",
    description:
      "Neto, Shopify, WordPress and BigCommerce expert. Fast, SEO-friendly ecommerce development worldwide.",
    images: ["https://www.mvpinfotech.in/og-image.png"],
  },
  robots: { index: true, follow: true },
};

// Platforms shown in the animated pill row
const platforms = [
  { name: "Neto / Maropost", color: "#3b82f6" },
  { name: "Shopify", color: "#96bf48" },
  { name: "WordPress", color: "#21759B" },
  { name: "BigCommerce", color: "#f97316" },
  { name: "Next.js", color: "#a855f7" },
  { name: "React.js", color: "#06b6d4" },
];

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#080d17] min-h-[92vh] flex items-center"
      >
        {/* ── Background layers ── */}
        {/* Mesh gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(99,102,241,0.13) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(139,92,246,0.10) 0%, transparent 55%), radial-gradient(ellipse 100% 80% at 50% 0%, rgba(15,23,42,1) 0%, transparent 70%)",
          }}
        />

        {/* Grid texture */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-green-400 text-xs font-semibold tracking-wide">
                Available for new projects
              </span>
            </div>

            {/* H1 — SEO optimised, clean */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-[-2px] mb-6">
              We Build 
              <br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #60a5fa 100%)",
                }}
              >
               E-commerce 
              </span>
              <br />
              Stores That Sell
            </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-[480px] font-light">
            Fast, scalable and SEO-friendly ecommerce stores on{" "}
            <span className="text-white font-medium">Neto</span>,{" "}
            <span className="text-white font-medium">Shopify</span>,{" "}
            <span className="text-white font-medium">WordPress</span> and{" "}
            <span className="text-white font-medium">BigCommerce</span> —{" "}
            <span className="text-white font-medium">built to rank and convert.</span>
          </p>

            {/* Platform pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {platforms.map((p) => (
                <span
                  key={p.name}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{
                    color: p.color,
                    borderColor: p.color + "33",
                    background: p.color + "12",
                  }}
                >
                  {p.name}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                Get Free Consultation
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/ourwork"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                View Our Work
              </Link>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919574927922?text=Hi%2C%20I%20need%20a%20developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-green-500/25 hover:border-green-500/50 bg-green-500/8 hover:bg-green-500/15 text-green-400 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Mini trust row */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/8">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">12+</div>
                <div className="text-xs text-gray-500 mt-0.5">Years Exp.</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">2,000+</div>
                <div className="text-xs text-gray-500 mt-0.5">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-white">10+</div>
                <div className="text-xs text-gray-500 mt-0.5">Countries</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-xs text-gray-500">5.0 rated</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Image with overlays ── */}
          <div className="hidden md:block relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-indigo-500/15 blur-[60px] rounded-3xl scale-90" />

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <Image
                src="/hero.jpg"
                alt="Full-Stack Ecommerce Developer working on Neto, Shopify, WordPress and BigCommerce"
                width={700}
                height={470}
                className="object-cover w-full"
                quality={80}
                priority
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d17]/60 via-transparent to-transparent" />
            </div>

            {/* Floating card — top left */}
            <div className="absolute -top-5 -left-5 bg-[#0f1729] border border-white/10 rounded-2xl p-4 shadow-xl shadow-black/40 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-500/15 flex items-center justify-center text-lg">
                  ⚡
                </div>
                <div>
                  <div className="text-white text-xs font-bold">PageSpeed</div>
                  <div className="text-green-400 text-lg font-extrabold leading-none mt-0.5">98/100</div>
                </div>
              </div>
            </div>

            {/* Floating card — bottom right */}
            <div className="absolute -bottom-5 -right-5 bg-[#0f1729] border border-white/10 rounded-2xl p-4 shadow-xl shadow-black/40 backdrop-blur-sm">
              <div className="text-xs text-gray-500 mb-1">Projects delivered</div>
              <div className="flex items-end gap-1">
                <span className="text-white text-2xl font-extrabold leading-none">2,000</span>
                <span className="text-indigo-400 text-sm font-bold mb-0.5">+</span>
              </div>
              <div className="flex gap-0.5 mt-2">
                {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-sm bg-indigo-500/60"
                    style={{ height: `${h * 0.3}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Floating card — top right */}
            <div className="absolute top-4 -right-5 bg-[#0f1729] border border-white/10 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-sm">
              <div className="text-xs text-gray-500 mb-1">Client rating</div>
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-white font-extrabold text-sm">5.0</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080d17] to-transparent pointer-events-none" />
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
