// import Image from "next/image";
// import type { Metadata } from "next";
// import Link from "next/link";
// import Allinone from "@/components/allinobe";

// export const revalidate = 60;
// import {
//   FaShopify,
//   FaWordpress,
//   FaSearch,
//   FaGoogle,
// } from "react-icons/fa";
// import {
//   SiBigcommerce,
//   SiMeta,
// } from "react-icons/si";
// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.mvpinfotech.in"),

//   title: "Best WordPress Development Services in australia",

//   description:
//     "Professional WordPress development services including custom website design, Elementor development, WooCommerce store setup, speed optimisation and SEO-friendly websites.",

//   alternates: {
//     canonical: "https://www.mvpinfotech.in/wordpress-development-services",
//   },

//   openGraph: {
//     title: "WordPress Development Services | MVP InfoTech",
//     description:
//       "Expert WordPress developers building fast, SEO-friendly and high-converting websites using Elementor and WooCommerce.",
//     url: "https://www.mvpinfotech.in/wordpress-development-services",
//     siteName: "MVP InfoTech",
//     type: "website",
//     images: [
//       {
//         url: "https://www.mvpinfotech.in/wordpress.png",
//         width: 1200,
//         height: 630,
//         alt: "WordPress Website Development",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "WordPress Development Services | MVP InfoTech",
//     description:
//       "Custom WordPress development, Elementor design and WooCommerce ecommerce solutions.",
//     images: ["https://www.mvpinfotech.in/wordpress.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function WordPressServicePage() {
//   return (
//     <main className="relative overflow-hidden">

//       {/* SCHEMA */}
//       {/* <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Service",
//             serviceType: "WordPress Website Development",
//             provider: {
//               "@type": "Organization",
//               name: "MVP InfoTech",
//               url: "https://www.mvpinfotech.in",
//             },
//             areaServed: "Worldwide",
//             description:
//               "Professional WordPress development services including Elementor websites, WooCommerce ecommerce stores and website optimisation.",
//           }),
//         }}
//       /> */}

// <script
//   type="application/ld+json"
//   dangerouslySetInnerHTML={{
//     __html: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "Service",

//       name: "WordPress Development Services",

//       serviceType: "WordPress Website Development",

//       url: "https://www.mvpinfotech.in/wordpress-development-services",

//       provider: {
//         "@type": "Organization",
//         name: "MVP InfoTech",
//         url: "https://www.mvpinfotech.in",
//         logo: "https://www.mvpinfotech.in/logo.png",
//       },

//       image: "https://www.mvpinfotech.in/wordpress-development.jpg",

//      areaServed: {
//         "@type": "Place",
//         name: "Worldwide",
//       },

//       description:
//         "Professional WordPress development services including Elementor websites, WooCommerce ecommerce stores and website optimisation.",

//       offers: {
//         "@type": "Offer",
//         priceCurrency: "AUD",
//         availability: "https://schema.org/InStock",
//       },
//     }),
//   }}
// />

// <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-400 inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]">
//         <Link href="/">Home</Link> / wordpress-development-services
//       </div>
//       {/* HERO */}
//       <section className="relative py-24">
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#1f2937] to-[#0b1020]" />

//         <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Expert WordPress & Elementor Development Services
//             </h1>

//             <p className="mt-6 text-lg text-white/70">
//               Professional WordPress website development designed to create
//               modern, fast and high-converting websites.
//             </p>

//             <p className="mt-4 text-white/70">
//               With more than 12 years of experience and over 2000 websites
//               delivered worldwide, we specialise in building WordPress websites
//               that are mobile-responsive, SEO-friendly and easy to manage.
//             </p>

//             <div className="mt-8 flex gap-4">

//               <Link
//                 href="/contact"
//                 className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition"
//               >
//                 Get Free Consultation
//               </Link>

//               <Link
//                 href="/ourwork"
//                 className="border border-white/20 px-6 py-3 rounded-md hover:border-white/40 transition"
//               >
//                 View Portfolio
//               </Link>

//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
//               <Image
//                 src="/wordpress.png"
//                 alt="WordPress website development"
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="(max-width:768px) 100vw, 50vw"
//               />
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-6">

//           <h2 className="text-3xl font-semibold">
//             WordPress Development Services
//           </h2>

//           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//             {[
//               "Custom WordPress website development",
//               "Elementor Pro website design and landing pages",
//               "WooCommerce store setup and customization",
//               "Website redesign and UI improvements",
//               "WordPress theme customization",
//               "Plugin installation and configuration",
//               "PSD, Figma or XD to WordPress conversion",
//               "Mobile responsive website design",
//               "WordPress speed optimization",
//               "SEO-friendly website structure",
//               "Website migration and hosting transfer",
//               "Bug fixing and troubleshooting",
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="rounded-xl border border-white/10 bg-white/5 p-6"
//               >
//                 <div className="flex gap-3">
//                   <span className="text-indigo-400 font-semibold">✓</span>
//                   <span className="text-white/80 text-sm">{item}</span>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </section>

//       {/* SEO CONTENT */}
// <section className="py-24 border-t border-white/10">
//   <div className="mx-auto max-w-7xl px-6">

//     <h2 className="text-3xl font-semibold">
//       WordPress Website Development Services for High-Performance Business Growth
//     </h2>

//     <p className="mt-6 text-white/70">
//       <strong>WordPress development services</strong> are one of the most powerful solutions for building scalable, SEO-friendly and high-performance websites. 
//       <strong>WordPress</strong> powers more than 40% of websites globally, making it the most popular content management system (CMS). 
//       From business websites to complex enterprise platforms, <strong>WordPress website development</strong> provides flexibility, customization and ease of management. 
//       Whether you are a startup, small business or large enterprise, a professionally developed <strong>WordPress website</strong> helps you establish a strong online presence and generate consistent leads.
//     </p>

//     <p className="mt-4 text-white/70">
//       Our <strong>WordPress development services</strong> focus on building fast, secure, mobile-responsive and SEO-optimized websites tailored to your business goals. 
//       We specialise in <strong>custom WordPress website development</strong>, <strong>WordPress theme customization</strong>, 
//       <strong>WooCommerce development</strong>, <strong>WordPress SEO optimization</strong> and performance enhancement. 
//       Our goal is to deliver websites that not only look professional but also rank higher on Google and drive conversions.
//     </p>

//     <h3 className="mt-10 text-2xl font-semibold">
//       Why Choose WordPress for Website Development?
//     </h3>

//     <p className="mt-4 text-white/70">
//       <strong>WordPress website development</strong> is highly preferred because of its flexibility and scalability. 
//       It allows businesses to create fully customized websites with thousands of themes and plugins. 
//       With built-in SEO features and easy content management, <strong>WordPress CMS development</strong> enables businesses to update content without technical knowledge.
//     </p>

//     <p className="mt-4 text-white/70">
//       Another major advantage of <strong>WordPress development</strong> is its SEO capability. 
//       With proper <strong>on-page SEO optimization</strong>, fast loading speed and clean code structure, WordPress websites rank higher in search engine results. 
//       It also supports integrations with tools like Google Analytics, Search Console and marketing automation platforms.
//     </p>

//     <h3 className="mt-10 text-2xl font-semibold">
//       Custom WordPress Website Development
//     </h3>

//     <p className="mt-4 text-white/70">
//       Our <strong>custom WordPress website development</strong> services are designed to create unique, scalable and user-friendly websites. 
//       We do not rely on generic templates — instead, we build fully customised designs that reflect your brand identity. 
//       Using modern tools and frameworks, our <strong>WordPress developers</strong> ensure your website stands out in a competitive market.
//     </p>

//     <p className="mt-4 text-white/70">
//       A custom website improves user experience, engagement and conversions. With clean code, optimized structure and mobile responsiveness, 
//       our <strong>WordPress web development</strong> ensures better SEO performance and higher visibility on Google.
//     </p>

//     <h3 className="mt-10 text-2xl font-semibold">
//       WooCommerce Development for eCommerce Websites
//     </h3>

//     <p className="mt-4 text-white/70">
//       <strong>WooCommerce development</strong> is the best solution for building powerful ecommerce websites using WordPress. 
//       Our <strong>WooCommerce developers</strong> create fully customized online stores with secure payment gateways, product management systems and optimized checkout experiences.
//     </p>

//     <p className="mt-4 text-white/70">
//       We build <strong>WooCommerce ecommerce websites</strong> that are fast, scalable and conversion-focused. 
//       From product page design to mobile optimization, every element is crafted to increase sales and improve user experience.
//     </p>

//     <h3 className="mt-10 text-2xl font-semibold">
//       WordPress SEO Optimization Services
//     </h3>

//     <p className="mt-4 text-white/70">
//       Our <strong>WordPress SEO services</strong> help your website rank higher on search engines. 
//       We optimise meta tags, URLs, images, content structure and internal linking to improve visibility. 
//       Using advanced <strong>SEO strategies</strong>, we target keywords like <strong>WordPress developer</strong>, 
//       <strong>WordPress development company</strong>, <strong>WooCommerce development services</strong> and more.
//     </p>

//     <p className="mt-4 text-white/70">
//       We also implement <strong>schema markup</strong>, technical SEO and performance optimization to ensure your website performs well in search rankings. 
//       Our SEO-focused development approach ensures long-term growth and consistent organic traffic.
//     </p>

//     <h3 className="mt-10 text-2xl font-semibold">
//       WordPress Speed Optimization & Performance
//     </h3>

//     <p className="mt-4 text-white/70">
//       Website speed is a critical factor for SEO and user experience. Our <strong>WordPress speed optimization services</strong> ensure your website loads quickly across all devices. 
//       We optimize images, reduce CSS and JavaScript, implement caching and use CDN integration to improve performance.
//     </p>

//     <p className="mt-4 text-white/70">
//       A fast-loading <strong>WordPress website</strong> improves user engagement, reduces bounce rate and increases conversion rates. 
//       Google also prioritizes fast websites in search rankings, making speed optimization essential.
//     </p>

//     <h3 className="mt-10 text-2xl font-semibold">
//       Secure and Scalable WordPress Development
//     </h3>

//     <p className="mt-4 text-white/70">
//       Security is a top priority in <strong>WordPress development</strong>. 
//       We implement advanced security measures such as SSL, firewalls, malware protection and regular updates to keep your website safe. 
//       Our <strong>WordPress security services</strong> ensure your website is protected from threats and vulnerabilities.
//     </p>

//     <p className="mt-4 text-white/70">
//       We also build scalable websites that grow with your business. Whether you are increasing traffic, adding features or expanding globally, 
//       our <strong>WordPress solutions</strong> are designed for long-term success.
//     </p>

//     <h3 className="mt-10 text-2xl font-semibold">
//       WordPress Website Redesign & Maintenance
//     </h3>

//     <p className="mt-4 text-white/70">
//       If your website is outdated, our <strong>WordPress redesign services</strong> can transform it into a modern, high-performing platform. 
//       We improve UI/UX design, speed, SEO and overall performance to deliver better results.
//     </p>

//     <p className="mt-4 text-white/70">
//       Our <strong>WordPress maintenance services</strong> include updates, backups, bug fixes and performance monitoring. 
//       This ensures your website remains secure, fast and fully functional at all times.
//     </p>

//     <h3 className="mt-10 text-2xl font-semibold">
//       Global WordPress Development Services
//     </h3>

//     <p className="mt-4 text-white/70">
//       We provide <strong>WordPress development services worldwide</strong> including Australia, USA, UK, Canada, UAE and India. 
//       Our team works with global clients to deliver high-quality, scalable and SEO-optimized websites tailored to different markets.
//     </p>

//     <h3 className="mt-10 text-2xl font-semibold">
//       Why Choose Our WordPress Developers?
//     </h3>

//     <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
//       <li><strong>Experienced WordPress developers</strong> with proven expertise</li>
//       <li><strong>Custom website design and development</strong></li>
//       <li><strong>SEO-friendly and mobile-responsive websites</strong></li>
//       <li><strong>Fast loading speed and performance optimization</strong></li>
//       <li><strong>WooCommerce ecommerce expertise</strong></li>
//       <li><strong>Affordable pricing and ongoing support</strong></li>
//     </ul>

//     <h2  className="mt-10 text-2xl font-semibold">WordPress in 2026: What’s New and Why It Still Dominates</h2>

// <p className="mt-4 text-white/70">WordPress continues to be one of the most powerful and widely used content management systems in 2026. With constant updates, improved performance, and a massive ecosystem of plugins and themes, WordPress remains a top choice for businesses, bloggers, and developers worldwide.</p>

// <p className="mt-4 text-white/70">In 2026, WordPress has evolved beyond just a blogging platform. It now offers advanced features for ecommerce, SEO, and custom development, making it a complete solution for building modern websites.</p>

// <h3  className="mt-10 text-2xl font-semibold">AI-Powered Content Creation</h3>
// <p className="mt-4 text-white/70">One of the biggest advancements in WordPress 2026 is the integration of Artificial Intelligence. AI tools help users generate content, optimize SEO, and improve readability automatically.</p>

// <p className="mt-4 text-white/70">With AI-powered plugins, creating blog posts, product descriptions, and landing pages has become faster and more efficient.</p>

// <h3  className="mt-10 text-2xl font-semibold">Improved Performance and Speed</h3>
// <p className="mt-4 text-white/70">Website speed is crucial for both user experience and SEO. WordPress has introduced better performance optimizations in 2026, including improved caching, lightweight themes, and faster loading times.</p>

// <p className="mt-4 text-white/70">These improvements help reduce bounce rates and increase conversions.</p>

// <h3  className="mt-10 text-2xl font-semibold">Enhanced Gutenberg Editor</h3>
// <p className="mt-4 text-white/70">The Gutenberg block editor has become more powerful and flexible. In 2026, it allows users to build complex layouts without coding.</p>

// <p className="mt-4 text-white/70">With drag-and-drop functionality and reusable blocks, designing websites is easier than ever.</p>

// <h3  className="mt-10 text-2xl font-semibold">Stronger Security Features</h3>
// <p className="mt-4 text-white/70">Security is a major concern for website owners, and WordPress has improved its security features in 2026.</p>

// <p className="mt-4 text-white/70">With automatic updates, better authentication, and advanced security plugins, WordPress ensures your website remains protected from threats.</p>

// <h3  className="mt-10 text-2xl font-semibold">Headless WordPress Capabilities</h3>
// <p className="mt-4 text-white/70">WordPress now supports <strong>headless architecture</strong>, allowing developers to use modern frameworks like React or Next.js for the frontend.</p>

// <p className="mt-4 text-white/70">This provides greater flexibility and improved performance for large-scale applications.</p>

// <h3  className="mt-10 text-2xl font-semibold">SEO-Friendly Structure</h3>
// <p className="mt-4 text-white/70">WordPress remains one of the best platforms for SEO. With plugins like Yoast SEO and Rank Math, users can easily optimize their content for search engines.</p>

// <p className="mt-4 text-white/70">Features like meta tags, schema markup, and XML sitemaps help improve visibility and rankings.</p>

// <h3  className="mt-10 text-2xl font-semibold">Expanded Plugin Ecosystem</h3>
// <p className="mt-4 text-white/70">The WordPress plugin ecosystem continues to grow, offering solutions for ecommerce, marketing, analytics, and more.</p>

// <p className="mt-4 text-white/70">Businesses can easily extend functionality without complex development.</p>

// <h3  className="mt-10 text-2xl font-semibold">Mobile Optimization</h3>
// <p className="mt-4 text-white/70">In 2026, WordPress themes are fully responsive and optimized for mobile devices.</p>

// <p className="mt-4 text-white/70">This ensures a seamless experience for users across all screen sizes.</p>

// <div className="mt-10">
//       <h2 className="text-2xl font-semibold mb-4">
//         Our Ecommerce Development Services
//       </h2>

//       <p className="text-gray-300 mb-6">
//         We offer a wide range of ecommerce development services:
//       </p>

//       <ul className="space-y-4">

//         {/* Neto */}
//         <li className="flex items-start gap-3">
//           <span className="text-blue-400 text-lg mt-1">⚙️</span>
//           <p className="text-gray-300">
//             <Link href="/neto-by-maropost-development" className="text-blue-400 hover:underline">
//               Neto by Maropost Development Services
//             </Link>{" "}
//             – Custom Neto ecommerce development, theme customisation and performance optimisation
//           </p>
//         </li>

//         {/* Shopify */}
//         <li className="flex items-start gap-3">
//           <FaShopify className="text-green-400 text-lg mt-1" />
//           <p className="text-gray-300">
//             <Link href="/shopify-development-services" className="text-blue-400 hover:underline">
//               Shopify Development
//             </Link>{" "}
//             – Custom store design and optimisation
//           </p>
//         </li>

//         {/* WordPress */}
        

//         {/* BigCommerce */}
//         <li className="flex items-start gap-3">
//           <SiBigcommerce className="text-orange-400 text-lg mt-1" />
//           <p className="text-gray-300">
//             <Link href="/bigcommerce-development-services" className="text-blue-400 hover:underline">
//               BigCommerce Development
//             </Link>{" "}
//             – Scalable ecommerce platforms
//           </p>
//         </li>

//         {/* SEO */}
//         <li className="flex items-start gap-3">
//           <FaSearch className="text-yellow-400 text-lg mt-1" />
//           <p className="text-gray-300">
//             <Link href="/seo-services" className="text-blue-400 hover:underline">
//               SEO Services
//             </Link>{" "}
//             – Improve rankings and traffic
//           </p>
//         </li>

//         {/* Google Ads */}
//         <li className="flex items-start gap-3">
//           <FaGoogle className="text-red-400 text-lg mt-1" />
//           <p className="text-gray-300">
//             <Link href="/google-ads-services" className="text-blue-400 hover:underline">
//               Google Ads
//             </Link>{" "}
//             – Lead generation campaigns
//           </p>
//         </li>

//         {/* Meta Ads */}
//         <li className="flex items-start gap-3">
//           <SiMeta className="text-blue-400 text-lg mt-1" />
//           <p className="text-gray-300">
//             <Link href="/meta-ads-services" className="text-blue-400 hover:underline">
//               Meta Ads
//             </Link>{" "}
//             – Facebook & Instagram marketing
//           </p>
//         </li>

//       </ul>
//     </div>
// <h2 className="mt-10 text-2xl font-semibold">Our WordPress Development Process</h2>
// <ul>
// <li>Requirement Analysis</li>
// <li>Design</li>
// <li>Development</li>
// <li>Testing</li>
// </ul>

// <h2 className="mt-10 text-2xl font-semibold">Why Choose MVP Infotech?</h2>
// <ul data-spread="false">
// <li>12+ years of industry experience</li>
// <li>2000+ successful projects</li>
// <li>SEO-friendly development approach</li>
// <li>Fast and responsive websites</li>
// <li>Ongoing support and maintenance</li>
// </ul>
// <p className="mt-4">👉 <a className="text-blue-400 hover:underline" href="/ourwork">View our recent WordPress projects</a> </p> 
//     <h3 className="mt-10 text-2xl font-semibold">
//       Conclusion
//     </h3>

//     <p className="mt-4 text-white/70">
//       <strong>WordPress website development</strong> is the ideal solution for businesses looking to build a strong online presence. 
//       With our expert <strong>WordPress development services</strong>, you can create a scalable, high-performing and SEO-optimized website that drives growth and success. 
//       Whether you need a business website, ecommerce store or custom solution, our team is here to help you achieve your digital goals.
//     </p>

//   </div>
// </section>
// <Allinone/>
//       {/* WHY WORK WITH US */}
//       <section className="py-20 border-t border-white/10">
//         <div className="mx-auto max-w-4xl px-6 text-center">

//           <h2 className="text-3xl font-semibold">
//             Why Choose Our WordPress Development Services
//           </h2>

//           <div className="mt-10 grid md:grid-cols-2 gap-6 text-white/80 text-sm">

//             <div>✔ 12+ years WordPress development experience</div>
//             <div>✔ 2000+ websites successfully delivered</div>
//             <div>✔ Fast loading websites under 3 seconds</div>
//             <div>✔ Mobile responsive and SEO-friendly design</div>
//             <div>✔ Conversion focused landing pages</div>
//             <div>✔ Long-term website support and maintenance</div>

//           </div>

//         </div>
//       </section>



//       {/* CTA */}
//       <section className="py-24 border-t border-white/10">
//         <div className="mx-auto max-w-4xl px-6 text-center">

//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Ready to Build Your WordPress Website?
//           </h2>

//           <p className="mt-6 text-white/70">
//             Let’s create a modern, fast and high-converting WordPress website
//             that helps your business grow online.
//           </p>

//           <div className="mt-10 flex justify-center gap-4">

//             <Link
//               href="/contact"
//               className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-white/90 transition"
//             >
//               Start Your Project
//             </Link>

//             <Link
//               href="/services"
//               className="border border-white/20 px-8 py-3 rounded-md hover:border-white/40 transition"
//             >
//               View All Services
//             </Link>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }


import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";

import {
  FaShopify,
  FaWordpress,
  FaSearch,
  FaGoogle,
} from "react-icons/fa";
import {
  SiBigcommerce,
  SiMeta,
} from "react-icons/si";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  // FIX: removed clickbait "Best" and fixed "australia" capitalisation
  title: "WordPress Development Services | MVP InfoTech",

  description:
    "Professional WordPress development services including custom website design, Elementor development, WooCommerce store setup, speed optimisation and SEO-friendly websites worldwide.",

  alternates: {
    canonical: "https://www.mvpinfotech.in/wordpress-development-services",
  },

  openGraph: {
    title: "WordPress Development Services | MVP InfoTech",
    description:
      "Expert WordPress developers building fast, SEO-friendly and high-converting websites using Elementor and WooCommerce.",
    url: "https://www.mvpinfotech.in/wordpress-development-services",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/wordpress.png",
        width: 1200,
        height: 630,
        alt: "WordPress Website Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services | MVP InfoTech",
    description:
      "Custom WordPress development, Elementor design and WooCommerce ecommerce solutions worldwide.",
    images: ["https://www.mvpinfotech.in/wordpress.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ── Single source of truth for FAQ — used in schema AND visible section ──
const faqs = [
  {
    question: "What is WordPress website development?",
    answer:
      "WordPress website development is the process of designing, building and optimising websites using the WordPress content management system. It covers everything from custom theme design and plugin integration to WooCommerce ecommerce setup, speed optimisation and ongoing maintenance.",
  },
  {
    question: "Do you build custom WordPress websites or use templates?",
    answer:
      "We build fully custom WordPress websites tailored to your brand and business goals. We do not rely on generic templates — every design is created from scratch to ensure a unique, professional and high-converting website.",
  },
  {
    question: "Can you develop a WooCommerce online store?",
    answer:
      "Yes. We provide complete WooCommerce development services including store setup, product management, payment gateway integration, custom checkout design and performance optimisation. We build WooCommerce stores that are fast, secure and easy to manage.",
  },
  {
    question: "Do you offer WordPress SEO services?",
    answer:
      "Yes. Our WordPress SEO services include on-page optimisation, meta tag setup, schema markup, URL structure improvements, image optimisation, internal linking and technical SEO audits — all designed to help your website rank higher on Google and attract more organic traffic.",
  },
  {
    question: "How long does it take to build a WordPress website?",
    answer:
      "A standard WordPress website typically takes 2 to 4 weeks depending on complexity, number of pages and custom features required. WooCommerce stores or websites with advanced functionality may take longer. We provide a clear timeline before starting any project.",
  },
  {
    question: "Do you provide WordPress speed optimisation?",
    answer:
      "Yes. We optimise WordPress websites for speed by compressing images, minifying CSS and JavaScript, implementing caching, using a CDN and removing unnecessary plugins. Faster websites rank better on Google and convert more visitors into customers.",
  },
  {
    question: "Do you work with clients worldwide?",
    answer:
      "Yes. We provide WordPress development services to clients across Australia, USA, UK, Canada, UAE, New Zealand and India. Our team is experienced in working with international businesses across different time zones.",
  },
];

export default function WordPressServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* ── Service Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "WordPress Development Services",
            serviceType: "WordPress Website Development",
            url: "https://www.mvpinfotech.in/wordpress-development-services",
            description:
              "Professional WordPress development services including custom website design, Elementor development, WooCommerce store setup, speed optimisation and SEO-friendly websites for businesses worldwide.",
            // FIX: proper array of countries instead of plain "Worldwide" string
            areaServed: [
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "United Arab Emirates" },
              { "@type": "Country", name: "India" },
            ],
            // FIX: dateModified for freshness signal
            dateModified: "2026-05-01",
            provider: {
              "@type": "Organization",
              name: "MVP InfoTech",
              url: "https://www.mvpinfotech.in",
              logo: "https://www.mvpinfotech.in/logo.png",
              sameAs: [
                "https://www.instagram.com/mvp_infotech/",
                "https://www.linkedin.com/in/mvp-infotech/",
              ],
            },
            image: "https://www.mvpinfotech.in/wordpress.png",
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* ── FAQ Schema — generated from same array as visible FAQs ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />

      {/* Breadcrumb — FIX: shows readable label, not raw slug */}
      <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-400 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]">
        <Link href="/">Home</Link> / <span>WordPress Development Services</span>
      </div>

      {/* ── HERO ── */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#1f2937] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Expert WordPress & Elementor Development Services
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Professional WordPress website development designed to create
              modern, fast and high-converting websites for businesses worldwide.
            </p>

            <p className="mt-4 text-white/70">
              With more than 12 years of experience and over 2,000 websites
              delivered across Australia, USA, UK and beyond, we specialise in
              building WordPress websites that are mobile-responsive,
              SEO-friendly and easy to manage.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/ourwork"
                className="border border-white/20 px-6 py-3 rounded-md hover:border-white/40 transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/wordpress.png"
                alt="WordPress website development services by MVP InfoTech"
                fill
                priority
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID — FIX: added descriptions to each card ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold">
            Our WordPress Development Services
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl">
            From simple business websites to complex WooCommerce stores, we
            cover every aspect of WordPress development to help your business
            grow online.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom WordPress Website Development",
                desc: "Fully bespoke WordPress websites built from scratch to match your brand identity and business goals.",
              },
              {
                title: "Elementor Pro Design & Landing Pages",
                desc: "High-converting landing pages and full websites designed using Elementor Pro with pixel-perfect layouts.",
              },
              {
                title: "WooCommerce Store Setup & Customization",
                desc: "Complete WooCommerce ecommerce stores with payment gateways, product management and optimised checkout.",
              },
              {
                title: "Website Redesign & UI Improvements",
                desc: "Transform outdated websites into modern, fast and professional platforms that perform better.",
              },
              {
                title: "WordPress Theme Customization",
                desc: "Modify and extend existing WordPress themes to improve design, layout and user experience.",
              },
              {
                title: "Plugin Installation & Configuration",
                desc: "Install, configure and optimise the right plugins to extend your website's functionality safely.",
              },
              {
                title: "PSD, Figma or XD to WordPress",
                desc: "Convert your design files into pixel-perfect, fully functional WordPress websites.",
              },
              {
                title: "Mobile Responsive Website Design",
                desc: "Websites that look and perform perfectly on all devices — desktop, tablet and mobile.",
              },
              {
                title: "WordPress Speed Optimisation",
                desc: "Image compression, caching, CDN integration and code minification for sub-3-second load times.",
              },
              {
                title: "SEO-Friendly Website Structure",
                desc: "Clean URL structures, schema markup, meta tags and internal linking built in from day one.",
              },
              {
                title: "Website Migration & Hosting Transfer",
                desc: "Safe and seamless migration of your existing website to a new host without downtime or data loss.",
              },
              {
                title: "Bug Fixing & Troubleshooting",
                desc: "Diagnose and resolve any WordPress issues quickly to keep your website running smoothly.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="flex gap-3 items-start">
                  <span className="text-indigo-400 font-semibold mt-0.5">✓</span>
                  <div>
                    <p className="text-white font-medium text-sm">{item.title}</p>
                    <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ── */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold">
            WordPress Website Development Services for High-Performance Business Growth
          </h2>

          <p className="mt-6 text-white/70">
            <strong>WordPress development services</strong> are one of the most
            powerful solutions for building scalable, SEO-friendly and
            high-performance websites. WordPress powers more than 40% of
            websites globally, making it the most widely used content management
            system in the world. From simple business websites to complex
            enterprise platforms,{" "}
            <strong>WordPress website development</strong> provides the
            flexibility, customisation and ease of management that businesses of
            all sizes need. Whether you are a startup, small business or large
            enterprise, a professionally developed WordPress website helps you
            establish a strong online presence and generate consistent leads.
          </p>

          <p className="mt-4 text-white/70">
            Our <strong>WordPress development services</strong> focus on
            building fast, secure, mobile-responsive and SEO-optimised websites
            tailored to your specific business goals. We specialise in{" "}
            <strong>custom WordPress website development</strong>,{" "}
            <strong>WordPress theme customisation</strong>,{" "}
            <strong>WooCommerce development</strong>,{" "}
            <strong>WordPress SEO optimisation</strong> and performance
            enhancement. Our goal is to deliver websites that not only look
            professional but also rank higher on Google and drive meaningful
            conversions.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Why Choose WordPress for Website Development?
          </h3>

          <p className="mt-4 text-white/70">
            <strong>WordPress website development</strong> is highly preferred
            because of its flexibility and scalability. It allows businesses to
            create fully customised websites using thousands of themes and
            plugins. With built-in SEO features and an intuitive content
            management system,{" "}
            <strong>WordPress CMS development</strong> enables businesses to
            update and manage their content without any technical knowledge.
          </p>

          <p className="mt-4 text-white/70">
            Another major advantage of <strong>WordPress development</strong> is
            its SEO capability. With proper{" "}
            <strong>on-page SEO optimisation</strong>, fast loading speed and
            clean code structure, WordPress websites rank higher in search engine
            results. It also supports seamless integrations with tools like
            Google Analytics, Google Search Console and marketing automation
            platforms — giving businesses complete visibility over their online
            performance.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Custom WordPress Website Development
          </h3>

          <p className="mt-4 text-white/70">
            Our <strong>custom WordPress website development</strong> services
            are designed to create unique, scalable and user-friendly websites
            that genuinely reflect your brand. We do not rely on generic
            templates — instead, we build fully customised designs from scratch
            that help your business stand out in a competitive market. Using
            modern development tools and best practices, our{" "}
            <strong>WordPress developers</strong> ensure every website is built
            for performance, accessibility and long-term growth.
          </p>

          <p className="mt-4 text-white/70">
            A custom-built website improves user experience, increases
            engagement and drives more conversions. With clean code, optimised
            structure and full mobile responsiveness, our{" "}
            <strong>WordPress web development</strong> approach ensures better
            SEO performance and higher visibility on Google from day one.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            WooCommerce Development for eCommerce Websites
          </h3>

          <p className="mt-4 text-white/70">
            <strong>WooCommerce development</strong> is the most popular
            solution for building powerful ecommerce websites on WordPress. Our{" "}
            <strong>WooCommerce developers</strong> create fully customised
            online stores with secure payment gateways, comprehensive product
            management systems and optimised checkout experiences that reduce
            cart abandonment and increase sales.
          </p>

          <p className="mt-4 text-white/70">
            We build <strong>WooCommerce ecommerce websites</strong> that are
            fast, scalable and conversion-focused. From product page design and
            category structure to mobile optimisation and payment integration,
            every element is carefully crafted to improve user experience and
            maximise revenue for your business.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            WordPress SEO Optimisation Services
          </h3>

          <p className="mt-4 text-white/70">
            Our <strong>WordPress SEO services</strong> help your website rank
            higher on Google and other search engines. We optimise meta tags,
            URL structures, images, content hierarchy and internal linking to
            improve organic visibility. Using advanced{" "}
            <strong>SEO strategies</strong> including schema markup, technical
            SEO audits and keyword-focused content, we ensure your WordPress
            website consistently attracts the right audience and generates
            qualified leads over the long term.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            WordPress Speed Optimisation & Performance
          </h3>

          <p className="mt-4 text-white/70">
            Website speed is a critical ranking factor for SEO and a key driver
            of user experience. Our{" "}
            <strong>WordPress speed optimisation services</strong> ensure your
            website loads in under 3 seconds across all devices. We optimise
            images, minify CSS and JavaScript, implement server-side caching,
            remove bloated plugins and integrate a CDN to dramatically improve
            performance scores.
          </p>

          <p className="mt-4 text-white/70">
            A fast-loading WordPress website improves engagement, reduces bounce
            rate and increases conversion rates. Google also prioritises
            fast-loading, Core Web Vitals-compliant websites in search rankings
            — making speed optimisation an essential investment for any serious
            business.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Secure and Scalable WordPress Development
          </h3>

          <p className="mt-4 text-white/70">
            Security is a top priority in every WordPress project we deliver. We
            implement advanced security measures including SSL certificates,
            firewalls, malware protection, two-factor authentication and regular
            plugin and core updates to keep your website protected. Our{" "}
            <strong>WordPress security services</strong> ensure your site is
            defended against threats and vulnerabilities at all times.
          </p>

          <p className="mt-4 text-white/70">
            We also build scalable WordPress websites that grow with your
            business. Whether you are scaling traffic, adding new features or
            expanding into international markets, our{" "}
            <strong>WordPress solutions</strong> are architected for long-term
            reliability and performance.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            WordPress Website Redesign & Maintenance
          </h3>

          <p className="mt-4 text-white/70">
            If your existing website is outdated, slow or underperforming, our{" "}
            <strong>WordPress redesign services</strong> can transform it into a
            modern, high-converting platform. We improve UI/UX design, page
            speed, SEO structure and overall performance to deliver measurably
            better results for your business.
          </p>

          <p className="mt-4 text-white/70">
            Our <strong>WordPress maintenance services</strong> include regular
            core and plugin updates, daily backups, security monitoring, bug
            fixes and performance checks. This ensures your website remains
            secure, fast and fully functional at all times — giving you complete
            peace of mind.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Global WordPress Development Services
          </h3>

          <p className="mt-4 text-white/70">
            We provide <strong>WordPress development services worldwide</strong>{" "}
            including Australia, USA, UK, Canada, UAE, New Zealand and India.
            Our team works with global clients to deliver high-quality, scalable
            and SEO-optimised WordPress websites tailored to different markets
            and industries. We are experienced in working across different time
            zones and delivering projects on time, regardless of location.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Why Choose Our WordPress Developers?
          </h3>

          <ul className="mt-4 space-y-3 text-white/70">
            <li>✓ <strong>12+ years of WordPress development experience</strong> across hundreds of industries</li>
            <li>✓ <strong>2,000+ websites successfully delivered</strong> to clients worldwide</li>
            <li>✓ <strong>Custom design and development</strong> — no generic templates</li>
            <li>✓ <strong>SEO-friendly and mobile-responsive</strong> websites built from day one</li>
            <li>✓ <strong>Fast loading speeds</strong> with Core Web Vitals optimisation</li>
            <li>✓ <strong>WooCommerce ecommerce expertise</strong> for online stores of all sizes</li>
            <li>✓ <strong>Transparent pricing</strong> with ongoing support and maintenance</li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold">
            WordPress in 2026: What's New and Why It Still Dominates
          </h2>

          <p className="mt-4 text-white/70">
            WordPress continues to be one of the most powerful and widely used
            content management systems in 2026. With constant updates, improved
            performance and a massive ecosystem of plugins and themes, WordPress
            remains the top choice for businesses, bloggers and developers
            worldwide. In 2026, WordPress has evolved far beyond a blogging
            platform — it now offers advanced features for ecommerce, headless
            development, AI-assisted content and enterprise-grade performance.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            AI-Powered Content Creation
          </h3>

          <p className="mt-4 text-white/70">
            One of the biggest advancements in WordPress 2026 is deep
            Artificial Intelligence integration. AI-powered plugins help users
            generate SEO-optimised content, improve readability and automate
            repetitive writing tasks. Store owners and bloggers can create
            product descriptions, blog posts and landing page copy in a fraction
            of the time, allowing them to focus on strategy and business growth.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Improved Performance and Speed
          </h3>

          <p className="mt-4 text-white/70">
            WordPress has introduced significant performance improvements in
            2026, including better server-side caching, lightweight default
            themes and improved image optimisation. These enhancements directly
            reduce bounce rates, improve Core Web Vitals scores and contribute
            to higher search engine rankings — giving WordPress-powered
            businesses a clear competitive advantage.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Enhanced Gutenberg Block Editor
          </h3>

          <p className="mt-4 text-white/70">
            The Gutenberg block editor has become significantly more powerful
            and flexible in 2026. Users can now build complex, multi-column
            page layouts, full-page templates and reusable design patterns
            entirely without writing code. The drag-and-drop interface is faster
            and more intuitive, making professional website management accessible
            to non-technical users.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Stronger Security Features
          </h3>

          <p className="mt-4 text-white/70">
            WordPress has improved its core security significantly in 2026 with
            automatic background updates, improved authentication options and
            tighter plugin vetting standards. Combined with advanced third-party
            security plugins and hosting-level protections, WordPress websites
            are now more secure than ever against modern threats.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Headless WordPress Capabilities
          </h3>

          <p className="mt-4 text-white/70">
            WordPress now fully supports{" "}
            <strong>headless architecture</strong>, allowing developers to use
            modern frontend frameworks like React or Next.js while keeping
            WordPress as the content backend. This provides maximum flexibility,
            dramatically improved frontend performance and greater scalability
            for large-scale web applications and enterprise projects.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            SEO-Friendly Structure
          </h3>

          <p className="mt-4 text-white/70">
            WordPress remains one of the strongest platforms for SEO in 2026.
            With powerful plugins like Yoast SEO and Rank Math, users can easily
            manage meta tags, schema markup, XML sitemaps and canonical URLs.
            Combined with clean permalink structures and fast load times,
            WordPress gives businesses a solid SEO foundation from the very
            start.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">
            Expanded Plugin Ecosystem
          </h3>

          <p className="mt-4 text-white/70">
            The WordPress plugin ecosystem has grown substantially, now offering
            over 60,000 plugins covering ecommerce, marketing automation,
            analytics, customer support, booking systems and more. Businesses
            can extend their website's functionality quickly without complex
            custom development — reducing costs and accelerating time to market.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">Mobile Optimisation</h3>

          <p className="mt-4 text-white/70">
            In 2026, all modern WordPress themes are fully responsive and
            optimised for mobile-first indexing. With Google prioritising mobile
            performance in its ranking algorithms, having a fast, well-designed
            mobile experience is no longer optional — it is essential for any
            business that wants to rank and convert effectively.
          </p>

          {/* Related services */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">
              Our Other Digital Services
            </h2>
            <p className="text-gray-300 mb-6">
              In addition to WordPress, we offer a wide range of development and
              digital marketing services:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg mt-1">⚙️</span>
                <p className="text-gray-300">
                  <Link href="/neto-by-maropost-development" className="text-blue-400 hover:underline">
                    Neto by Maropost Development Services
                  </Link>{" "}
                  – Custom Neto ecommerce development, theme customisation and performance optimisation for Australian businesses.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaShopify className="text-green-400 text-lg mt-1" />
                <p className="text-gray-300">
                  <Link href="/shopify-development-services" className="text-blue-400 hover:underline">
                    Shopify Development
                  </Link>{" "}
                  – Custom Shopify store design, app integration and ecommerce optimisation for global businesses.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <SiBigcommerce className="text-orange-400 text-lg mt-1" />
                <p className="text-gray-300">
                  <Link href="/bigcommerce-development-services" className="text-blue-400 hover:underline">
                    BigCommerce Development
                  </Link>{" "}
                  – Scalable, enterprise-ready ecommerce platforms with advanced B2B and B2C capabilities.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaSearch className="text-yellow-400 text-lg mt-1" />
                <p className="text-gray-300">
                  <Link href="/seo-services" className="text-blue-400 hover:underline">
                    SEO Services
                  </Link>{" "}
                  – Comprehensive search engine optimisation to improve rankings, increase organic traffic and generate more leads.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaGoogle className="text-red-400 text-lg mt-1" />
                <p className="text-gray-300">
                  <Link href="/google-ads-services" className="text-blue-400 hover:underline">
                    Google Ads
                  </Link>{" "}
                  – Targeted paid search campaigns designed to drive qualified traffic and maximise return on ad spend.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <SiMeta className="text-blue-400 text-lg mt-1" />
                <p className="text-gray-300">
                  <Link href="/meta-ads-services" className="text-blue-400 hover:underline">
                    Meta Ads
                  </Link>{" "}
                  – Facebook and Instagram advertising campaigns that build brand awareness and drive ecommerce sales.
                </p>
              </li>
            </ul>
          </div>

          {/* Development Process — FIX: expanded from 4-word bullets */}
          <h2 className="mt-10 text-2xl font-semibold">
            Our WordPress Development Process
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              {
                step: "1. Requirement Analysis",
                desc: "We start by understanding your business goals, target audience, competitor landscape and technical requirements to define the right approach.",
              },
              {
                step: "2. Design",
                desc: "Our designers create custom wireframes and visual mockups in Figma or Elementor, ensuring the layout is user-friendly, on-brand and conversion-focused.",
              },
              {
                step: "3. Development",
                desc: "We build your WordPress website with clean, optimised code — integrating all required plugins, custom functionality and SEO structure.",
              },
              {
                step: "4. Testing",
                desc: "We thoroughly test across all browsers and devices for speed, responsiveness, functionality and SEO before handing over or launching.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-white font-medium">{item.step}</p>
                <p className="text-white/60 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-semibold">Why Choose MVP InfoTech?</h2>
          <ul className="mt-4 space-y-3 text-white/70">
            <li>✓ 12+ years of industry experience delivering WordPress projects worldwide</li>
            <li>✓ 2,000+ successful websites across multiple industries</li>
            <li>✓ SEO-friendly development approach from strategy to launch</li>
            <li>✓ Fast, responsive websites with Core Web Vitals optimisation</li>
            <li>✓ Transparent communication and ongoing support after launch</li>
          </ul>

          <p className="mt-6">
            👉{" "}
            <Link className="text-blue-400 hover:underline" href="/ourwork">
              View our recent WordPress projects
            </Link>
          </p>

          <h3 className="mt-10 text-2xl font-semibold">Conclusion</h3>

          <p className="mt-4 text-white/70">
            <strong>WordPress website development</strong> is the ideal solution
            for businesses looking to build a strong, scalable online presence.
            With our expert <strong>WordPress development services</strong>, you
            get a professional, fast and SEO-optimised website that drives
            consistent growth and delivers long-term results. Whether you need a
            business website, WooCommerce ecommerce store, landing page or
            complete website redesign, our team is ready to help you achieve
            your digital goals.
          </p>
        </div>
      </section>

      <Allinone />

      {/* ── FAQ — visible section, matches schema exactly ── */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-semibold">
            Frequently Asked Questions About WordPress Development
          </h2>

          <div className="mt-8 space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Why Choose Our WordPress Development Services
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6 text-white/80 text-sm">
            <div>✔ 12+ years WordPress development experience</div>
            <div>✔ 2,000+ websites successfully delivered</div>
            <div>✔ Fast loading websites under 3 seconds</div>
            <div>✔ Mobile responsive and SEO-friendly design</div>
            <div>✔ Conversion-focused landing pages</div>
            <div>✔ Long-term website support and maintenance</div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to Build Your WordPress Website?
          </h2>

          <p className="mt-6 text-white/70">
            Let's create a modern, fast and high-converting WordPress website
            that helps your business grow online. Get a free consultation and
            custom quote today.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-white/90 transition"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border border-white/20 px-8 py-3 rounded-md hover:border-white/40 transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}


