export const metadata = {
  title: "Services | MVP Infotech – Full-Stack Ecommerce Development",
  description:
    "Professional ecommerce development services including Neto, Maropost, Shopify, BigCommerce, frontend, backend, migrations, performance optimization and technical SEO by MVP Infotech.",
};
import Link from "next/link";
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
  } from "react-icons/si";
  
  const techStack = [
    { name: "Neto By Maropost", icon: SiGoogle, color: "text-blue-400" },
    { name: "Shopify", icon: SiShopify, color: "text-green-400" },
    { name: "BigCommerce", icon: SiBigcommerce, color: "text-purple-400" },
    { name: "WordPress", icon: SiWordpress, color: "text-sky-400" },
    { name: "SEO", icon: SiGoogle, color: "text-yellow-400" },
    { name: "Vue.js", icon: SiVuedotjs, color: "text-green-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Express", icon: SiExpress, color: "text-gray-300" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  
    // platforms
   
  ];


// export default function ServicesPage() {
//   return (
//     <section className="relative pt-24">
//       <div className="mx-auto max-w-5xl px-6">

//         <h1 className="text-3xl md:text-4xl font-semibold text-center">
//           Our Services
//         </h1>

//         <p className="mt-5 text-white/70 leading-relaxed max-w-3xl mx-auto text-center">
//           At MVP Infotech, we provide complete full-stack ecommerce development services focused on
//           performance, scalability and long-term business growth. Our services are designed to
//           support modern ecommerce platforms such as Neto, Maropost Commerce Cloud, Shopify and
//           BigCommerce.
//         </p>

//         <div className="mt-14 grid gap-10 md:grid-cols-2">

//           {/* Ecommerce Development */}
//           <div>
//             <h3 className="text-lg font-semibold">Ecommerce Development</h3>
//             <p className="mt-3 text-white/70 leading-relaxed">
//               We build custom, scalable and secure ecommerce websites for businesses using modern
//               development frameworks and enterprise-grade platforms. Our ecommerce development
//               services include complete store setup, custom features, performance optimization
//               and conversion-focused storefront development for Neto, Maropost Commerce Cloud,
//               Shopify and BigCommerce.
//             </p>
//           </div>

//           {/* Frontend Development */}
//           <div>
//             <h3 className="text-lg font-semibold">Frontend Development</h3>
//             <p className="mt-3 text-white/70 leading-relaxed">
//               We create fast, responsive and visually modern user interfaces using Vue.js, React.js
//               and Next.js. Our frontend development focuses on smooth user experience, clean
//               component architecture and optimized rendering to deliver fast page loads and
//               better Core Web Vitals for ecommerce websites.
//             </p>
//           </div>

//           {/* Backend Development */}
//           <div>
//             <h3 className="text-lg font-semibold">Backend Development</h3>
//             <p className="mt-3 text-white/70 leading-relaxed">
//               Our backend development services include API development, system integrations and
//               scalable server-side architecture using Node.js and Express. We build secure and
//               maintainable backend systems that support complex ecommerce workflows, integrations
//               and high-traffic environments.
//             </p>
//           </div>

//           {/* Store Migrations & Integrations */}
//           <div>
//             <h3 className="text-lg font-semibold">Store Migrations & Integrations</h3>
//             <p className="mt-3 text-white/70 leading-relaxed">
//               We provide safe and SEO-friendly ecommerce migration services from legacy platforms
//               to Neto, Maropost, Shopify and BigCommerce. Our migration process preserves products,
//               customers, orders, URLs and search engine rankings. We also integrate payment
//               gateways, shipping systems, ERP, CRM and third-party business tools.
//             </p>
//           </div>

//           {/* Performance & SEO */}
//           <div>
//             <h3 className="text-lg font-semibold">Performance & SEO</h3>
//             <p className="mt-3 text-white/70 leading-relaxed">
//               We optimize ecommerce websites for speed, stability and search engine visibility.
//               Our performance and technical SEO services include Core Web Vitals optimization,
//               clean site architecture, structured data, page speed improvements and SEO-ready
//               storefront development to help businesses achieve better organic rankings.
//             </p>
//           </div>

//           {/* UI/UX Enhancements */}
//           <div>
//             <h3 className="text-lg font-semibold">UI / UX Enhancements</h3>
//             <p className="mt-3 text-white/70 leading-relaxed">
//               We improve existing ecommerce websites with modern UI and conversion-focused UX
//               enhancements. Our design improvements focus on navigation flow, product discovery,
//               checkout experience and mobile usability to reduce cart abandonment and increase
//               sales performance.
//             </p>
//           </div>

//         </div>

//         {/* SEO helper */}
//         <p className="sr-only">
//           Ecommerce development services, frontend development Vue React Next.js, backend development Node Express,
//           Neto ecommerce developers, Maropost Commerce Cloud developers, Shopify developers,
//           BigCommerce developers, ecommerce migration services, store integrations,
//           technical SEO services, ecommerce performance optimization, UI UX improvements for ecommerce websites.
//         </p>

//       </div>
//     </section>
//   );
// }

import Image from "next/image";

{/* HERO */}


export default function ServicesPage() {
  const services = [
    {
      title: "Ecommerce Website Development",
      desc: "High-performance online stores using Neto, Maropost Commerce Cloud, Shopify and BigCommerce with clean UI, fast loading and scalable architecture.",
      points: [
        "Custom theme development",
        "Store setup & configuration",
        "Checkout & payment integration",
        "Mobile-first responsive design",
      ],
    },
    {
      title: "Neto & Maropost Specialist Services",
      desc: "Expert development and customization for Neto and Maropost Commerce Cloud stores for Australian and international businesses.",
      points: [
        "Template & layout customisation",
        "API integrations",
        "Custom features & modules",
        "Performance optimisation",
      ],
    },
    {
      title: "Store Migration & Re-platforming",
      desc: "Safe migration from Neto, Shopify, WooCommerce or custom systems without losing SEO, data or customers.",
      points: [
        "Products, customers & orders migration",
        "URL & SEO preservation",
        "Theme rebuild on new platform",
        "Post-migration support",
      ],
    },
    {
      title: "Frontend Development",
      desc: "Modern, fast and SEO-friendly frontend using Next.js, React and Vue for ecommerce and business websites.",
      points: [
        "Landing pages & marketing sites",
        "Headless ecommerce frontends",
        "UI performance optimisation",
        "Accessibility & responsiveness",
      ],
    },
    {
      title: "Backend & API Integrations",
      desc: "Robust backend services and third-party integrations to automate and scale your ecommerce operations.",
      points: [
        "Node.js & Express APIs",
        "ERP / CRM integration",
        "Payment & shipping services",
        "Webhook & automation setup",
      ],
    },
    {
      title: "SEO & Performance Optimisation",
      desc: "Improve store visibility, speed and conversions with technical SEO and performance tuning.",
      points: [
        "Core Web Vitals improvement",
        "On-page technical SEO",
        "Image & asset optimisation",
        "Conversion-focused UX",
      ],
    },
  ];

  return (
    <main className="relative overflow-hidden">

      {/* Hero */}

       <section id="hero" className="relative overflow-hidden py-24">
              {/* background glow */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full
                  bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 blur-[120px]" />
              </div>
      
              <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
      
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Developer for Neto, Maropost, Shopify, wordpress & BigCommerce
                  </h1>
      
                  <p className="mt-6 text-lg text-white/70">
                    I help businesses build fast, scalable and SEO-friendly
                    ecommerce and web platforms using Next.js, React, Vue.js
                    and Node.js.
                  </p>
      
                  <div className="mt-8 flex gap-4">
                    <a
                      href="#portfolio"
                      className="bg-white text-black px-6 py-3 rounded-md font-medium"
                    >
                      View Work
                    </a>
      
                    <a
                      href="#contact"
                      className="border border-white/20 px-6 py-3 rounded-md"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
      
                {/* Hero Image */}
                <div className="hidden md:block aspect-video rounded-xl overflow-hidden border border-white/10 relative">
                  <Image
                    src="/service.jpg" // replace with your actual image
                    alt="Full-Stack Ecommerce Developer working on Neto, Maropost, Shopify & BigCommerce platforms"
                    fill
                    className="object-cover"
                    priority={true} // loads immediately for SEO
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
      
              </div>
            </section>
      
 <section id="tech-stack" className="relative">
      <div className="mx-auto max-w-7xl px-6">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Tech Stack & Platforms
          </h2>
          <p className="mt-3 text-white/60 text-sm md:text-base">
            Technologies and ecommerce platforms I use to build fast, scalable and SEO-friendly web
            and ecommerce solutions.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {techStack.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.name}
                className="
                  flex flex-col items-center justify-center gap-3
                  rounded-xl border border-white/10
                  bg-white/5 backdrop-blur-md
                  px-4 py-6
                  transition hover:-translate-y-1 hover:border-white/20
                "
              >
                <Icon className={`text-4xl ${item.color}`} />

                <h3 className="text-sm font-medium text-white/90">
                  {item.name}
                </h3>
              </article>
            );
          })}
        </div>

      </div>
    </section>


      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8
                           hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                             bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10"
                />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-white/70">
                    {service.desc}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-white/80">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-indigo-400">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold text-center">
            How I Work
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">

            {[
              {
                title: "Discovery",
                desc: "Understand your business, customers and technical requirements.",
              },
              {
                title: "Design & Planning",
                desc: "Architecture, UX structure and performance planning.",
              },
              {
                title: "Development",
                desc: "Clean, scalable and secure implementation.",
              },
              {
                title: "Launch & Support",
                desc: "Testing, deployment and ongoing improvements.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="text-sm text-indigo-400 font-medium">
                  Step {i + 1}
                </div>

                <h3 className="mt-2 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-white/70 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Let’s build your ecommerce platform
          </h2>

          <p className="mt-6 text-white/70">
            Need a Neto, Maropost, Shopify or custom ecommerce solution?
            Let’s discuss your project.
          </p>

          <div className="mt-10 flex justify-center gap-4">
           
<Link className="bg-white text-black px-8 py-3 rounded-md font-medium
                         hover:bg-indigo-500 hover:text-white transition" href="/contact">Contact Us</Link>
           
            <Link className="border border-white/20 px-8 py-3 rounded-md
                         hover:border-white/40 transition" href="/ourwork">Our Work</Link>
          </div>
        </div>
      </section>

    </main>
  );
}