import Image from "next/image";

export default function NetoServicePage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#2b1e4f] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Maropost (Neto) Ecommerce Development
            </h1>

            <p className="mt-6 text-lg text-white/70">
              Need expert help with your Maropost (Neto) store from start to finish?
            </p>

            <p className="mt-4 text-white/70">
              I professionally set up, customize and optimise your Maropost (Neto)
              ecommerce store to make it fully functional, user-friendly and ready
              to convert.
            </p>

            <p className="mt-4 text-white/70">
              From homepage layout improvements to product setup and performance
              optimisation – I handle everything so you can focus on growing your
              business.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/#contact"
                className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-white/90 transition"
              >
                Get a Free Consultation
              </a>

              <a
                href="/work"
                className="border border-white/20 px-6 py-3 rounded-md hover:border-white/40 transition"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Banner image */}
          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/neto1.png"
                alt="Maropost Neto ecommerce development service"
                fill
                priority
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />
          </div>

        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold">
            What’s Included
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Maropost / Neto store setup from scratch",
              "Homepage and layout customisation",
              "Theme styling (CSS / HTML tweaks)",
              "Product categories, listings and filters setup",
              "Shipping, payments and tax configuration",
              "Mobile responsiveness improvements",
              "Performance and speed optimisation",
              "Basic SEO (meta tags, image optimisation, URLs)",
              "Troubleshooting and bug fixes",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex gap-3">
                  <span className="text-indigo-400 font-semibold">✓</span>
                  <span className="text-white/80 text-sm">
                    {item}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold">
            Perfect For
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              "New Neto store owners needing a full professional setup",
              "Existing stores needing layout or performance improvements",
              "Businesses migrating to Maropost",
              "Ecommerce brands looking to optimise for conversions",
              "Australian retailers using Neto for omnichannel selling",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/80 text-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-semibold">
            Why Work With Me?
          </h2>

          <p className="mt-6 text-white/70">
            I have hands-on experience working with the Maropost / Neto platform
            and understand what it takes to build a smooth, fast and
            conversion-ready online store.
          </p>

          <p className="mt-4 text-white/70">
            Whether you are starting from scratch, improving an existing store
            or fixing technical issues, I focus on performance, clean structure
            and real business results.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Let’s build or improve your Neto store
          </h2>

          <p className="mt-6 text-white/70">
            Get expert Maropost (Neto) development support and make your store
            faster, easier to manage and ready to convert more customers.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/#contact"
              className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-white/90 transition"
            >
              Start Your Project
            </a>

            <a
              href="/services"
              className="border border-white/20 px-8 py-3 rounded-md hover:border-white/40 transition"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}