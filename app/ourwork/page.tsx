import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
  const projects = [
    {
      title: "Neto Ecommerce Store",
      platform: "Neto",
      desc: "Custom theme development, performance optimisation and checkout improvements.",
      image: "/pro-1.png",
    },
    {
      title: "Maropost Commerce Cloud Store",
      platform: "Maropost",
      desc: "Custom frontend, API integrations and scalable store architecture.",
      image: "/pro-2.png",
    },
    {
      title: "Shopify Storefront",
      platform: "Shopify",
      desc: "Modern UI, conversion focused design and app integrations.",
      image: "/pro-3.png",
    },
    {
      title: "BigCommerce Website",
      platform: "BigCommerce",
      desc: "Fast storefront, custom templates and SEO optimisation.",
      image: "/pro-4.png",
    },
    {
      title: "Headless Ecommerce Website",
      platform: "Next.js + API",
      desc: "Headless frontend using Next.js with custom backend integrations.",
      image: "/pro-1.png",
    },
    {
      title: "Store Migration Project",
      platform: "Neto / Shopify",
      desc: "SEO safe migration, data transfer and theme rebuild.",
      image: "/pro-2.png",
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
                          Our work
                        </h1>
            
                        <p className="mt-6 text-lg text-white/70">
                        A selection of ecommerce projects built using Neto, Maropost Commerce Cloud, Shopify, BigCommerce and modern frameworks like Next.js and React.
                        </p>
            
                      
                      </div>
            
                      {/* Hero Image */}
                      <div className="hidden md:block aspect-video rounded-xl overflow-hidden border border-white/10 relative">
                        <Image
                          src="/ourwork.png" // replace with your actual image
                          alt="Full-Stack Ecommerce Developer working on Neto, Maropost, Shopify & BigCommerce platforms"
                          fill
                          className="object-cover"
                          priority={true} // loads immediately for SEO
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
            
                    </div>
                  </section>

      {/* Projects */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <span className="text-sm text-indigo-400">
                    {project.platform}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/70">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Want a similar ecommerce project?
          </h2>

          <p className="mt-6 text-white/70">
            Let’s build a fast, scalable and SEO-friendly ecommerce
            platform for your business.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-white/90 transition"
            >
              Start a Project
            </Link>

             <Link  className="border border-white/20 px-8 py-3 rounded-md hover:border-white/40 transition" href="/services"> View Services</Link>
          </div>
        </div>
      </section>

    </main>
  );
}