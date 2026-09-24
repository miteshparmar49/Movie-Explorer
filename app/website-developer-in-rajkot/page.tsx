// import Image from "next/image";
// import type { Metadata } from "next";
// import Link from "next/link";
// import Allinone from "@/components/allinobe";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.mvpinfotech.in"),

//   title: "Website Developer in Rajkot | Web Development Company",

//   description:
//     "Trusted website development company in Rajkot. From website design to ecommerce, we build fast, SEO-friendly sites that convert. Free consultation today.",

//   keywords: [
//     "website developer in rajkot",
//     "website development company in rajkot",
//     "web development company in rajkot",
//     "rajkot web design company",
//     "website design company in rajkot",

//     // 🌍 Local variations
//     "best website development company in rajkot",
//     "best web design company in rajkot",
//     "rajkot web design",
//     "website design in rajkot",
//     "website designer rajkot",
//     "website developers in rajkot",
//     "website development in rajkot",

//     // 🛠 Services
//     "ecommerce website development rajkot",
//     "next js developer rajkot",
//     "seo friendly website rajkot",
//     "website redesign rajkot",

//     // 💰 Business intent
//     "hire website developer rajkot",
//     "affordable website development rajkot",
//     "local website developer rajkot",
//   ],

//   // ✅ Canonical
//   alternates: {
//     canonical: "https://www.mvpinfotech.in/website-developer-in-rajkot",
//   },

//   // ✅ Open Graph
//   openGraph: {
//     title: "Website Developer in Rajkot | MVP InfoTech",
//     description:
//       "Fast, SEO-friendly websites & ecommerce stores built by a Rajkot-based web development company using Next.js & TypeScript.",
//     url: "https://www.mvpinfotech.in/website-developer-in-rajkot",
//     siteName: "MVP InfoTech",
//     type: "website",
//     images: [
//       {
//         url: "https://www.mvpinfotech.in/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Website Developer in Rajkot",
//       },
//     ],
//   },

//   // ✅ Twitter
//   twitter: {
//     card: "summary_large_image",
//     title: "Website Developer in Rajkot | MVP InfoTech",
//     description:
//       "Trusted website development company in Rajkot building fast, SEO-friendly websites & ecommerce stores.",
//     images: ["https://www.mvpinfotech.in/og-image.png"],
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// // ✅ JSON-LD — LocalBusiness schema for local SEO (Rajkot targeting)
// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   name: "MVP InfoTech",
//   image: "https://www.mvpinfotech.in/og-image.png",
//   url: "https://www.mvpinfotech.in/website-developer-in-rajkot",
//   telephone: "+91-9574927922",
//   address: {
//     "@type": "PostalAddress",
//     addressLocality: "Rajkot",
//     addressRegion: "Gujarat",
//     addressCountry: "IN",
//   },
//   areaServed: "Rajkot, Gujarat",
//   priceRange: "$$",
// };

// export default function WebsiteDeveloperRajkotPage() {
//   return (
//     <main className="relative overflow-hidden">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-400 inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]">
//         <Link href="/">Home</Link> / website-developer-in-rajkot
//       </div>

//       {/* HERO */}
//       <section className="relative py-24">
//         <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]" />

//         <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Website Developer in Rajkot
//             </h1>

//             <p className="mt-6 text-lg text-white/70">
//               Building fast, modern and SEO-friendly websites for businesses
//               in Rajkot and beyond.
//             </p>

//             <p className="mt-4 text-white/70">
//               We are a Rajkot-based website development company specializing
//               in Next.js, TypeScript and modern ecommerce platforms — helping
//               local businesses get online with websites that actually rank
//               and convert.
//             </p>

//             <div className="mt-6 text-white/80 text-sm">
//               ✔ Based in Rajkot, Gujarat <br />
//               ✔ Next.js &amp; TypeScript Development <br />
//               ✔ SEO-Friendly &amp; Fast Loading <br />
//               ✔ Ecommerce &amp; Business Websites
//             </div>

//             <div className="mt-8 flex gap-4">
//               <Link
//                 href="/contact"
//                 className="bg-white text-black px-6 py-3 rounded-md"
//               >
//                 Get Free Consultation
//               </Link>

//               <Link
//                 href="/ourwork"
//                 className="border border-white/20 px-6 py-3 rounded-md"
//               >
//                 View Our Work
//               </Link>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
//               <Image
//                 src="/website-developer-rajkot.png"
//                 alt="Website developer in Rajkot"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-6">
//           <h2 className="text-3xl font-semibold">
//             Our Website Development Services in Rajkot
//           </h2>

//           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               "Business Websites",
//               "Ecommerce Stores (Shopify, WordPress, BigCommerce)",
//               "Next.js & TypeScript Web Apps",
//               "Website Redesign & Migration",
//               "SEO-Friendly Website Development",
//               "Landing Pages & Portfolio Websites",
//               "Website Maintenance & Support",
//               "API Integration",
//               "Performance Optimization",
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

//       {/* CONTENT */}
//       <section className="py-24 border-t border-white/10">
//         <div className="mx-auto max-w-7xl px-6">
//           <h2 className="text-3xl font-semibold">
//             Looking for a Reliable Website Developer in Rajkot?
//           </h2>

//           <p className="mt-6 text-white/70">
//             If you are searching for a <strong>website developer in Rajkot</strong>,
//             you need more than just someone who can build a site — you need a
//             partner who understands both design and technology that actually
//             performs. As a <strong>website development company in Rajkot</strong>,
//             we combine local accessibility with modern web technologies like{" "}
//             <strong>Next.js and TypeScript</strong> to build websites that are
//             fast, secure and built to grow with your business.
//           </p>

//           <p className="mt-4 text-white/70">
//             Whether you&apos;re looking for a{" "}
//             <strong>web development company in Rajkot</strong> to build a
//             business website, or a{" "}
//             <strong>website design company in Rajkot</strong> to redesign
//             your existing site, our team builds solutions tailored to your
//             specific goals — not generic templates.
//           </p>

//           <h3 className="mt-10 text-2xl font-semibold">
//             MVP InfoTech — A Trusted Rajkot Web Design Company
//           </h3>

//           <p className="mt-4 text-white/70">
//             As a <strong>Rajkot web design company</strong>, we&apos;ve
//             worked with local businesses across industries — retail,
//             services, manufacturing and more — to build websites that
//             don&apos;t just look good but actually bring in leads and sales.
//             Being a <strong>website design company in Rajkot</strong>, we
//             understand the local market and what makes Rajkot customers
//             click, browse and buy.
//           </p>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Why Choose a Local Website Developer in Rajkot?
//           </h3>

//           <p className="mt-4 text-white/70">
//             Working with a website developer based in Rajkot means faster
//             communication, better understanding of the local market, and the
//             convenience of in-person meetings when needed. We understand what
//             Rajkot businesses need to stand out — from local SEO to
//             fast-loading mobile-friendly designs that convert visitors into
//             customers.
//           </p>

//           <p className="mt-4 text-white/70">
//             Unlike generic agencies, we take time to understand your business
//             before writing a single line of code, ensuring the final website
//             actually supports your goals — more leads, more sales or more
//             visibility.
//           </p>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Modern Website Development Using Next.js &amp; TypeScript
//           </h3>

//           <p className="mt-4 text-white/70">
//             We build websites using Next.js and TypeScript — two of the most
//             powerful and reliable technologies in modern web development.
//             Next.js gives your website excellent SEO performance through
//             server-side rendering, while TypeScript ensures your codebase is
//             stable, error-free and easy to maintain long-term.
//           </p>

//           <p className="mt-4 text-white/70">
//             This combination means your website loads fast, ranks well on
//             Google, and remains bug-free as it grows — something older
//             WordPress-only setups often struggle with.
//           </p>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Ecommerce Website Development in Rajkot
//           </h3>

//           <p className="mt-4 text-white/70">
//             Along with business websites, we also build full-featured
//             ecommerce stores for Rajkot businesses using Shopify, WordPress
//             and BigCommerce. From product catalogs to secure checkout and
//             payment integration, we handle every part of setting up your
//             online store — so you can start selling online with confidence.
//           </p>

//           <h3 className="mt-10 text-2xl font-semibold">
//             SEO-Friendly Website Development
//           </h3>

//           <p className="mt-4 text-white/70">
//             A website is only useful if people can find it. Every website we
//             build in Rajkot is developed with SEO best practices from day one
//             — clean code structure, fast loading speed, mobile responsiveness
//             and proper on-page SEO. This gives your business a real chance to
//             rank on Google for the searches that matter to you.
//           </p>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Affordable Website Development for Rajkot Businesses
//           </h3>

//           <p className="mt-4 text-white/70">
//             We understand that budget matters, especially for local
//             businesses and startups. As a{" "}
//             <strong>web development company in Rajkot</strong>, our website
//             development packages are priced to deliver real value — without
//             compromising on quality, performance or design.
//           </p>

//           <h3 className="mt-10 text-2xl font-semibold">
//             One Team for Web Development, Design &amp; Ecommerce
//           </h3>

//           <p className="mt-4 text-white/70">
//             Unlike many single-service providers, we work as a complete{" "}
//             <strong>website development company in Rajkot</strong> —
//             covering everything from initial design to development, SEO and
//             ongoing support. Whether you need a{" "}
//             <strong>website developer in Rajkot</strong> for a quick project
//             or an established{" "}
//             <strong>web development company in Rajkot</strong> for a
//             long-term partnership, we adapt to your needs.
//           </p>

//           <h3 className="mt-10 text-2xl font-semibold">
//             Why Hire Us as Your Website Developer in Rajkot?
//           </h3>

//           <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">
//             <li>
//               <strong>Local team based in Rajkot, Gujarat</strong>
//             </li>
//             <li>
//               <strong>Next.js &amp; TypeScript development expertise</strong>
//             </li>
//             <li>
//               <strong>12+ years of overall development experience</strong>
//             </li>
//             <li>
//               <strong>2,000+ projects delivered globally</strong>
//             </li>
//             <li>
//               <strong>SEO-friendly, fast-loading websites</strong>
//             </li>
//             <li>
//               <strong>Transparent pricing &amp; clear communication</strong>
//             </li>
//             <li>
//               <strong>Post-launch support &amp; maintenance</strong>
//             </li>
//           </ul>

//           <h3 className="mt-10 text-2xl font-semibold">Conclusion</h3>

//           <p className="mt-4 text-white/70">
//             If you&apos;re looking for a trusted{" "}
//             <strong>website developer in Rajkot</strong>, a reliable{" "}
//             <strong>website development company in Rajkot</strong>, or a
//             creative <strong>website design company in Rajkot</strong>, MVP
//             InfoTech combines local understanding with modern technology to
//             build websites that perform. As a complete{" "}
//             <strong>Rajkot web design company</strong>, we handle everything
//             from design to development, SEO and long-term support — whether
//             you need a business website, an ecommerce store, or a custom web
//             application built on Next.js and TypeScript.
//           </p>
//         </div>
//       </section>

//       <Allinone />

//       {/* CTA */}
//       <section className="pt-24 border-t border-white/10">
//         <div className="mx-auto max-w-4xl px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Start Your Website Project Today
//           </h2>

//           <div className="mt-10 flex justify-center gap-4">
//             <Link
//               href="/contact"
//               className="bg-white text-black px-8 py-3 rounded-md"
//             >
//               Contact Now
//             </Link>

//             <Link
//               href="/services"
//               className="border border-white/20 px-8 py-3 rounded-md"
//             >
//               View Services
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

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title: "Website Developer in Rajkot | MVP InfoTech",

  description:
    "MVP InfoTech is a website development company in Rajkot offering business websites, ecommerce, Shopify, WordPress and Next.js development with SEO-friendly, fast-loading solutions.",

  alternates: {
    canonical:
      "https://www.mvpinfotech.in/website-developer-in-rajkot",
  },

  openGraph: {
    title: "Website Developer in Rajkot | MVP InfoTech",

    description:
      "MVP InfoTech provides website development, ecommerce, Shopify, WordPress and Next.js development services in Rajkot.",

    url: "https://www.mvpinfotech.in/website-developer-in-rajkot",

    siteName: "MVP InfoTech",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://www.mvpinfotech.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MVP InfoTech - Website Developer in Rajkot",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Website Developer in Rajkot | MVP InfoTech",

    description:
      "MVP InfoTech provides website development, ecommerce, Shopify, WordPress and Next.js development services in Rajkot.",

    images: ["https://www.mvpinfotech.in/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


/* =========================================================
   LOCAL BUSINESS SCHEMA
========================================================= */

const localBusinessJsonLd = {
  "@context": "https://schema.org",

  "@type": "LocalBusiness",

  "@id": "https://www.mvpinfotech.in/#business",

  name: "MVP InfoTech",

  description:
    "MVP InfoTech is a website development company in Rajkot providing business websites, ecommerce, Shopify, WordPress and Next.js development services.",

  url: "https://www.mvpinfotech.in/",

  telephone: "+91-9574927922",

  image: "https://www.mvpinfotech.in/og-image.png",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "City",
    name: "Rajkot",
  },

  priceRange: "$$",

  serviceType: [
    "Website Development",
    "Ecommerce Website Development",
    "Shopify Development",
    "WordPress Development",
    "Next.js Development",
    "Website Design",
    "Website Redesign",
    "SEO-Friendly Website Development",
  ],
};


/* =========================================================
   WEBSITE / ORGANIZATION SCHEMA
========================================================= */

const organizationJsonLd = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id": "https://www.mvpinfotech.in/#organization",

  name: "MVP InfoTech",

  url: "https://www.mvpinfotech.in/",

  logo: {
    "@type": "ImageObject",
    url: "https://www.mvpinfotech.in/og-image.png",
  },

  telephone: "+91-9574927922",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
};


/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbJsonLd = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.mvpinfotech.in/",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "Website Developer in Rajkot",
      item:
        "https://www.mvpinfotech.in/website-developer-in-rajkot",
    },
  ],
};


/* =========================================================
   FAQ SCHEMA
========================================================= */

const faqJsonLd = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",

      name: "Who is a website developer in Rajkot?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "MVP InfoTech is a Rajkot-based website development company providing business websites, ecommerce stores, Shopify, WordPress and Next.js development services.",
      },
    },

    {
      "@type": "Question",

      name: "What website development services do you provide in Rajkot?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "MVP InfoTech develops business websites, ecommerce stores, Shopify and WordPress websites, Next.js applications, landing pages, website redesigns, API integrations and performance-optimized websites.",
      },
    },

    {
      "@type": "Question",

      name: "Do you develop Shopify websites in Rajkot?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. MVP InfoTech provides Shopify development services including store setup, customization, theme development, product setup and ecommerce functionality.",
      },
    },

    {
      "@type": "Question",

      name: "Do you develop WordPress websites?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. MVP InfoTech develops WordPress business websites, landing pages, ecommerce websites and customized WordPress solutions.",
      },
    },

    {
      "@type": "Question",

      name: "Do you provide SEO-friendly website development?",

      acceptedAnswer: {
        "@type": "Answer",

        text:
          "Yes. MVP InfoTech develops websites using technical SEO practices, responsive design, performance optimization, semantic HTML and search-engine-friendly page structures.",
      },
    },
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function WebsiteDeveloperRajkotPage() {
  return (
    <main className="relative overflow-hidden">

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />


      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-gray-400 inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]">

        <Link href="/" className="hover:text-white">
          Home
        </Link>

        <span className="mx-2">/</span>

        <span>Website Developer in Rajkot</span>

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative py-24">

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Website Developer in Rajkot
            </h1>

            <p className="mt-6 text-lg text-white/70">
              MVP InfoTech provides modern, fast and SEO-friendly
              website development services for businesses in Rajkot
              and clients across India and beyond.
            </p>

            <p className="mt-4 text-white/70">
              We are a Rajkot-based website development company
              specializing in Next.js, TypeScript, ecommerce platforms,
              Shopify and WordPress. We build websites designed around
              your business goals, customers and long-term growth.
            </p>

            <div className="mt-6 text-white/80 text-sm">

              <div>✔ Based in Rajkot, Gujarat</div>

              <div>✔ Next.js &amp; TypeScript Development</div>

              <div>✔ SEO-Friendly &amp; Performance-Focused</div>

              <div>✔ Ecommerce &amp; Business Websites</div>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="bg-white text-black px-6 py-3 rounded-md"
              >
                Get Free Consultation
              </Link>

              <Link
                href="/ourwork"
                className="border border-white/20 px-6 py-3 rounded-md"
              >
                View Our Work
              </Link>

            </div>

          </div>


          <div className="relative">

            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">

              <Image
                src="/website-developer-rajkot.png"
                alt="MVP InfoTech website developer in Rajkot"
                fill
                className="object-cover"
                priority
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold">
            Website Development Services in Rajkot
          </h2>

          <p className="mt-4 max-w-3xl text-white/70">
            Our website development services cover business websites,
            ecommerce stores, custom web applications and ongoing
            website support.
          </p>


          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Business Websites",
              "Ecommerce Stores (Shopify, WordPress, BigCommerce)",
              "Next.js & TypeScript Web Apps",
              "Website Redesign & Migration",
              "SEO-Friendly Website Development",
              "Landing Pages & Portfolio Websites",
              "Website Maintenance & Support",
              "API Integration",
              "Performance Optimization",
            ].map((item, i) => (

              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >

                <div className="flex gap-3">

                  <span className="text-indigo-400 font-semibold">
                    ✓
                  </span>

                  <span className="text-white/80 text-sm">
                    {item}
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT MVP INFOTECH
      ===================================================== */}

      <section className="py-20 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold">
            About MVP InfoTech
          </h2>

          <p className="mt-6 max-w-4xl text-white/70">
            MVP InfoTech is a web development company based in Rajkot,
            Gujarat, India. We provide website development, ecommerce
            development, Shopify, WordPress, Next.js, TypeScript and
            SEO-friendly website development services.
          </p>

          <p className="mt-4 max-w-4xl text-white/70">
            Our team works with businesses, startups and organizations
            to create websites that are responsive, maintainable,
            performance-focused and aligned with their business goals.
          </p>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="py-24 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold">
            Looking for a Website Developer in Rajkot?
          </h2>

          <p className="mt-6 text-white/70">

            If you are searching for a website developer in Rajkot,
            you need more than someone who can build a website. You
            need a development partner who understands design,
            technology, performance and business requirements.

            As a website development company in Rajkot, MVP InfoTech
            combines modern technologies such as Next.js and
            TypeScript with responsive design and technical SEO
            practices.

          </p>


          <p className="mt-4 text-white/70">

            Whether you need a business website, ecommerce store,
            landing page or custom web application, we build solutions
            around your specific requirements instead of relying only
            on generic templates.

          </p>


          {/* ===================================================
              WHY CHOOSE
          =================================================== */}

          <h3 className="mt-10 text-2xl font-semibold">
            Why Choose MVP InfoTech?
          </h3>

          <p className="mt-4 text-white/70">

            MVP InfoTech works with businesses across different
            industries including retail, services and manufacturing.
            Our focus is on building websites that provide a clear
            user experience and support business objectives such as
            leads, sales and online visibility.

          </p>


          {/* ===================================================
              LOCAL DEVELOPMENT
          =================================================== */}

          <h3 className="mt-10 text-2xl font-semibold">
            Why Work With a Local Website Developer in Rajkot?
          </h3>

          <p className="mt-4 text-white/70">

            Working with a website developer based in Rajkot can make
            communication easier and provide better understanding of
            local business requirements. We work with businesses
            looking for responsive, mobile-friendly and
            performance-focused websites.

          </p>


          {/* ===================================================
              TECHNOLOGY
          =================================================== */}

          <h3 className="mt-10 text-2xl font-semibold">
            Modern Website Development Using Next.js &amp; TypeScript
          </h3>

          <p className="mt-4 text-white/70">

            We use Next.js and TypeScript to build modern,
            maintainable and scalable web applications. Next.js
            provides capabilities that can support server-rendered
            and search-engine-friendly websites, while TypeScript
            helps teams maintain structured and maintainable code.

          </p>

          <p className="mt-4 text-white/70">

            Website performance and search visibility depend on many
            factors, including technical SEO, content quality,
            page experience, internal linking and overall website
            architecture.

          </p>


          {/* ===================================================
              ECOMMERCE
          =================================================== */}

          <h3 className="mt-10 text-2xl font-semibold">
            Ecommerce Website Development in Rajkot
          </h3>

          <p className="mt-4 text-white/70">

            We also build ecommerce stores using platforms such as
            Shopify, WordPress and BigCommerce. Ecommerce projects can
            include product catalogs, payment integration, checkout
            functionality, responsive design and custom features.

          </p>


          {/* ===================================================
              SEO
          =================================================== */}

          <h3 className="mt-10 text-2xl font-semibold">
            SEO-Friendly Website Development
          </h3>

          <p className="mt-4 text-white/70">

            A website needs to be technically accessible and useful
            to both users and search engines. Our development process
            can include responsive layouts, clean HTML structure,
            performance optimization, metadata, internal linking and
            other technical SEO practices.

          </p>


          {/* ===================================================
              AFFORDABLE
          =================================================== */}

          <h3 className="mt-10 text-2xl font-semibold">
            Website Development for Rajkot Businesses
          </h3>

          <p className="mt-4 text-white/70">

            We understand that businesses have different budgets and
            requirements. Our website development projects are
            planned according to the required features, design,
            technology and long-term maintenance needs.

          </p>


          {/* ===================================================
              SERVICES + SUPPORT
          =================================================== */}

          <h3 className="mt-10 text-2xl font-semibold">
            One Team for Web Development, Design &amp; Ecommerce
          </h3>

          <p className="mt-4 text-white/70">

            MVP InfoTech provides website design, development,
            ecommerce development, technical SEO support and ongoing
            website maintenance. This allows businesses to work with
            one development team for multiple stages of their website
            project.

          </p>


          {/* ===================================================
              EXPERIENCE
          =================================================== */}

          <h3 className="mt-10 text-2xl font-semibold">
            Why Hire MVP InfoTech?
          </h3>

          <ul className="mt-4 list-disc pl-6 text-white/70 space-y-2">

            <li>
              <strong>Local team based in Rajkot, Gujarat</strong>
            </li>

            <li>
              <strong>
                Next.js &amp; TypeScript development expertise
              </strong>
            </li>

            <li>
              <strong>
                12+ years of overall development experience
              </strong>
            </li>

            <li>
              <strong>
                2,000+ projects delivered globally
              </strong>
            </li>

            <li>
              <strong>
                SEO-friendly and performance-focused websites
              </strong>
            </li>

            <li>
              <strong>
                Transparent communication and project planning
              </strong>
            </li>

            <li>
              <strong>
                Post-launch support and maintenance
              </strong>
            </li>

          </ul>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="py-20 border-t border-white/10">

        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-3xl font-semibold">
            Frequently Asked Questions About Website Development
            in Rajkot
          </h2>


          <div className="mt-10 space-y-8">


            <div>

              <h3 className="text-xl font-semibold">
                Who is a website developer in Rajkot?
              </h3>

              <p className="mt-3 text-white/70">
                MVP InfoTech is a Rajkot-based website development
                company providing business websites, ecommerce stores,
                Shopify, WordPress and Next.js development services.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold">
                What website development services do you provide in
                Rajkot?
              </h3>

              <p className="mt-3 text-white/70">
                We develop business websites, ecommerce stores,
                Shopify and WordPress websites, Next.js applications,
                landing pages, website redesigns, API integrations
                and performance-focused websites.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold">
                Do you develop Shopify websites in Rajkot?
              </h3>

              <p className="mt-3 text-white/70">
                Yes. MVP InfoTech provides Shopify development
                services including store setup, customization, theme
                development, product setup and ecommerce functionality.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold">
                Do you develop WordPress websites?
              </h3>

              <p className="mt-3 text-white/70">
                Yes. We develop WordPress business websites, landing
                pages, ecommerce websites and customized WordPress
                solutions.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold">
                Do you provide SEO-friendly website development?
              </h3>

              <p className="mt-3 text-white/70">
                Yes. Our websites can be developed with technical SEO
                practices, responsive design, performance optimization,
                semantic HTML and search-engine-friendly page
                structures.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold">
                How can I contact MVP InfoTech?
              </h3>

              <p className="mt-3 text-white/70">
                You can contact MVP InfoTech through the contact page
                to discuss your website development, ecommerce or
                custom web development requirements.
              </p>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          ALL IN ONE
      ===================================================== */}

      <Allinone />


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="pt-24 border-t border-white/10">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start Your Website Project Today
          </h2>

          <p className="mt-4 text-white/70">
            Discuss your website, ecommerce or custom development
            requirements with MVP InfoTech.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md"
            >
              Contact Now
            </Link>

            <Link
              href="/services"
              className="border border-white/20 px-8 py-3 rounded-md"
            >
              View Services
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}