// import Image from "next/image";
// import Link from "next/link";
// import {
//   FiMail,
//   FiPhone,
//   FiMapPin,
// } from "react-icons/fi";
// import {
//   FaLinkedinIn,
//   FaWhatsapp,
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
// } from "react-icons/fa";

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="relative mt-24 overflow-hidden bg-[#0a0f1f] border-t border-white/10">

//       {/* soft glow – same style as other sections */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-[-160px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
//       </div>

//       <div>

//       <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-[2.2fr_1fr_1fr_1.2fr] md:grid-cols-2">

//           {/* Left */}
//           <div>
//             <Link href="/" className="inline-flex items-center">
//               <Image
//                 src="/mvp_logo-removebg-preview.png"
//                 alt="MVP Infotech – Full Stack Ecommerce Developer"
//                 width={160}
//                 height={48}
//                 className="h-[52px] w-auto object-contain"
//               />
//             </Link>

//             <p className="mt-5 text-sm text-white/70 leading-relaxed">
//                I am a <strong className="text-white">full-stack eCommerce developer</strong> specializing in <strong className="text-white"> Neto, Maropost Commerce Cloud, Shopify, BigCommerce, and WordPress</strong>, 
//         building <strong className="text-white">fast, responsive, and SEO-friendly online stores</strong> using <strong className="text-white">Next.js, React, Vue.js, and Node.js</strong>. I also provide 
//         <strong className="text-white"> platform migration services</strong>, moving stores from Neto or other platforms 
//         without losing SEO, data, or performance, helping businesses <strong className="text-white">boost sales, improve user experience, and grow online efficiently</strong>.
//             </p>
//           </div>

//           {/* Quick links */}
//           <nav aria-label="Footer navigation">
//             <p className="font-semibold mb-5 text-white">HELP & INFO</p>

//             <ul className="space-y-3 text-sm text-white/70">
//               <li>
//                 <Link href="/about" className="hover:text-white transition">
//                  About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="hover:text-white transition">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/ourwork" className="hover:text-white transition">
//                   Our Work
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-white transition">
//                   Contact Us
//                 </Link>
//               </li>
//                <li>
//                 <Link href="/next-js-development" className="hover:text-white transition">
//                   Next js
//                 </Link>
//               </li>
//                <li>
//                 <Link href="/express-js-development" className="hover:text-white transition">
//                 Express js
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/amazon-ppc-services" className="hover:text-white transition">
//                Amazon ppc
//                 </Link>
//               </li>
//                 <li>
//                 <Link href="/meta-ads-services" className="hover:text-white transition">
//                Meta Ads
//                 </Link>
//               </li>
//                  <li>
//                 <Link href="/google-ads-services" className="hover:text-white transition">
//              Google-Ads
//                 </Link>
//               </li>
//             </ul>
//           </nav>






//         <nav aria-label="Footer navigation">
//             <p className="font-semibold mb-5 text-white">Our Services</p>

//             <ul className="space-y-3 text-sm text-white/70">
//               <li>
//                 <Link href="/neto-by-maropost-development" className="hover:text-white transition">
//                  Neto by Maropost
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/shopify-development-services" className="hover:text-white transition">
//                   Shopify
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/wordpress-development-services" className="hover:text-white transition">
//                  wordpress
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/bigcommerce-development-services" className="hover:text-white transition">
//                   Bigcommerce
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/seo-services" className="hover:text-white transition">
//                   SEO-services
//                 </Link>
//               </li>
//                <li>
//                 <Link href="/vue-js-development" className="hover:text-white transition">
//                   vue js
//                 </Link>
//               </li>
//                <li>
//                 <Link href="/react-js-development" className="hover:text-white transition">
//                   React js
//                 </Link>
//               </li>
//                <li>
//                 <Link href="/node-js-development" className="hover:text-white transition">
//                 Node js
//                 </Link>
//               </li>
//             </ul>
//           </nav>




//           {/* Contact */}
//           <address className="not-italic">
//             <p className="font-semibold mb-5 text-white">Contact</p>

//             <ul className="space-y-4 text-sm text-white/70">

//               <li className="flex items-center gap-3">
//                 <FiMail className="text-white/80" />
//                 <a
//                   href="mailto:support@mvpinfotech.in"
//                   className="hover:text-white transition"
//                 >
//                   support@mvpinfotech.in
//                 </a>
//               </li>

//               <li className="flex items-center gap-3">
//                 <FiPhone className="text-white/80" />
//                 <span>+91 9574927922</span>
//               </li>

//               <li className="flex items-center gap-3">
//                 <FiMapPin className="text-white/80"   />
//                 <span>MVP InfoTech, Maldhari Society, Block no 5, RTO Road, Rajkot, Gujarat 360003, India</span>
//               </li>
//             </ul>

//             {/* Social icons */}
//             <div className="mt-6 flex items-center gap-3">
  
//   {/* LinkedIn */}
//   <a
//     href="https://www.linkedin.com/in/mvp-infotech/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="h-9 w-9 rounded-lg bg-black border border-black flex items-center justify-center hover:bg-gray-800 transition"
//     aria-label="LinkedIn"
//   >
//     <FaLinkedinIn className="text-white" />
//   </a>

 

//   {/* Instagram */}
//   <a
//     href="https://www.instagram.com/mvp_infotech/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="h-9 w-9 rounded-lg bg-black border border-black flex items-center justify-center hover:bg-gray-800 transition"
//     aria-label="Instagram"
//   >
//     <FaInstagram className="text-white" />
//   </a>

//   {/* Facebook */}
//   <a
//     href="https://www.facebook.com/mvpinfotech"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="h-9 w-9 rounded-lg bg-black border border-black flex items-center justify-center hover:bg-gray-800 transition"
//     aria-label="Facebook"
//   >
//     <FaFacebookF className="text-white" />
//   </a>

//   {/* Twitter / X */}
//   <a
//     href="https://x.com/mvpinfotech"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="h-9 w-9 rounded-lg bg-black border border-black flex items-center justify-center hover:bg-gray-800 transition"
//     aria-label="Twitter"
//   >
//     <FaTwitter className="text-white" />
//   </a>
//  {/* WhatsApp */}
//   <a
//     href="https://wa.me/919574927922?text=Hi%2C%20I%20need%20Neto%20developer"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="h-9 w-9 rounded-lg bg-black border border-black flex items-center justify-center hover:bg-gray-800 transition"
//     aria-label="WhatsApp"
//   >
//     <FaWhatsapp className="text-white" />
//   </a>
// </div>
//           </address>
//         </div>

    
// {/* bottom bar */}
// <div className="border-t border-white/10">
//   <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row gap-4 justify-between">
//     <p>Copyright © {year} MVP InfoTech. All Rights Reserved.</p>

//     <div className="flex flex-wrap gap-x-4 gap-y-2">
//       <a href="https://www.mvpinfotech.in/privacy-policy" className="hover:text-white transition-colors">
//         Privacy Policy
//       </a>

//       <a href="/terms-of-service" className="hover:text-white transition-colors">
//         Terms of Service
//       </a>

//       <a href="/data-deletion" className="hover:text-white transition-colors">
//         Data Deletion
//       </a>

//       <a href="/social-tool" className="hover:text-white transition-colors">
//         Social Tool
//       </a>
//     </div>
//   </div>
// </div>


//       </div>
//     </footer>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const platformLinks = [
  { name: "Neto by Maropost", href: "/neto-by-maropost-development", badge: "AU Specialist" },
  { name: "Shopify & Shopify Plus", href: "/shopify-development-services" },
  { name: "BigCommerce", href: "/bigcommerce-development-services" },
  { name: "WordPress & WooCommerce", href: "/wordpress-development-services" },
  { name: "Next.js Headless", href: "/next-js-development" },
  { name: "React.js Development", href: "/react-js-development" },
  { name: "Vue.js Development", href: "/vue-js-development" },
];

const growthAndStackLinks = [
  { name: "Node.js Backend", href: "/node-js-development" },
  { name: "Express.js APIs", href: "/express-js-development" },
  { name: "Technical SEO Services", href: "/seo-services" },
  { name: "Google Ads Management", href: "/google-ads-services" },
  { name: "Meta Ads (FB & IG)", href: "/meta-ads-services" },
  { name: "Amazon PPC Management", href: "/amazon-ppc-services" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "All Services", href: "/services" },
  { name: "Case Studies (Our Work)", href: "/ourwork" },
  { name: "E-Commerce Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mvp-infotech/",
    icon: FaLinkedinIn,
    hoverColor: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919574927922?text=Hi%20MVP%20InfoTech%2C%20I%27d%20like%20to%20discuss%20an%20eCommerce%20project.",
    icon: FaWhatsapp,
    hoverColor: "hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mvp_infotech/",
    icon: FaInstagram,
    hoverColor: "hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mvpinfotech",
    icon: FaFacebookF,
    hoverColor: "hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/mvpinfotech",
    icon: FaTwitter,
    hoverColor: "hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-[#060911] border-t border-white/10 text-gray-400">
      {/* ── Ambient Background Glows ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-indigo-600/8 blur-[130px]" />
        <div className="absolute right-1/4 bottom-0 h-[320px] w-[320px] translate-x-1/2 rounded-full bg-violet-600/8 blur-[120px]" />
      </div>

      {/* ── Top Laser Accent Line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        
        {/* ── PRE-FOOTER CRO BANNER (High-Converting Lead Magnet) ── */}
        <div className="py-10 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Ready to scale your store?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get a Free 15-Point Speed & Conversion Audit
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Actionable technical roadmap for Neto by Maropost, Shopify, or BigCommerce stores—delivered within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              Request Free Audit
              <FiArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919574927922?text=Hi%20MVP%20InfoTech%2C%20I%27d%20like%20a%20free%20store%20audit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-white px-5 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-emerald-400 text-base" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* ── MAIN FOOTER GRID ── */}
        <div className="py-16 grid gap-12 lg:grid-cols-12 md:grid-cols-2">
          
          {/* Column 1: Brand & Trust (4 Cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/mvp_logo-removebg-preview.png"
                alt="MVP InfoTech – E-Commerce Development Studio"
                width={165}
                height={50}
                className="h-[50px] w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm text-gray-400 leading-relaxed pr-2">
              <strong className="text-white font-semibold">MVP InfoTech</strong> is a specialist full-stack e-commerce development studio. We engineer sub-2-second, high-converting online stores and seamless migrations on{" "}
              <strong className="text-gray-200 font-medium">
                Neto by Maropost, Shopify, BigCommerce, WordPress, and Next.js
              </strong>.
            </p>

            {/* Global Regions Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-gray-300">
              <span>🌍 Trusted by brands in</span>
              <span className="font-semibold text-white">AU · US · UK · CA</span>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`h-10 w-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-200 hover:-translate-y-0.5 ${social.hoverColor}`}
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: E-Commerce Platforms (3 Cols) */}
          <nav aria-label="E-Commerce Platforms" className="lg:col-span-3">
            <p className="text-xs font-bold tracking-widest uppercase text-white mb-5">
              E-Commerce & Frontend
            </p>
            <ul className="space-y-3 text-sm">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Backend & Growth + Company (2 Cols) */}
          <nav aria-label="Growth and Company" className="lg:col-span-2">
            <p className="text-xs font-bold tracking-widest uppercase text-white mb-5">
              Backend & Growth
            </p>
            <ul className="space-y-3 text-sm mb-8">
              {growthAndStackLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-xs font-bold tracking-widest uppercase text-white mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Direct Contact & Local SEO NAP (3 Cols) */}
          <address className="not-italic lg:col-span-3">
            <p className="text-xs font-bold tracking-widest uppercase text-white mb-5">
              Get In Touch
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <FiMail className="text-sm" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email Us (24h Reply)</div>
                  <a
                    href="mailto:support@mvpinfotech.in"
                    className="text-gray-200 hover:text-indigo-400 font-medium transition-colors break-all"
                  >
                    support@mvpinfotech.in
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <FiPhone className="text-sm" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Call or WhatsApp</div>
                  <a
                    href="tel:+919574927922"
                    className="text-gray-200 hover:text-emerald-400 font-medium transition-colors"
                  >
                    +91 95749 27922
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 mt-0.5">
                  <FiMapPin className="text-sm" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Development Studio</div>
                  <span className="text-gray-300 leading-relaxed block text-xs">
                    MVP InfoTech, Maldhari Society, Block No. 5, RTO Road, Rajkot, Gujarat 360003, India
                  </span>
                </div>
              </li>
            </ul>
          </address>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/10 py-6 text-xs text-gray-500 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p>© {year} MVP InfoTech. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/data-deletion" className="hover:text-gray-300 transition-colors">
              Data Deletion
            </Link>
            <Link href="/social-tool" className="hover:text-gray-300 transition-colors">
              Social Tool
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}