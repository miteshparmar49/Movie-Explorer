import {
  HiOutlineShoppingBag,
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineSwitchHorizontal,
  HiOutlineSearch,
  HiOutlineColorSwatch,
} from "react-icons/hi";

const services = [
  {
    title: "Ecommerce Development",
    desc: "Neto By Maropost, Shopify, BigCommerce, WordPress",
    icon: HiOutlineShoppingBag,
    color: "text-blue-400",
  },
  {
    title: "Frontend Development",
    desc: "Vue, React, Next.js",
    icon: HiOutlineCode,
    color: "text-cyan-400",
  },
  {
    title: "Backend Development",
    desc: "Node.js, Express",
    icon: HiOutlineServer,
    color: "text-green-400",
  },
  {
    title: "Store Migrations & Integrations",
    desc: "Platform migrations and third-party integrations",
    icon: HiOutlineSwitchHorizontal,
    color: "text-emerald-400",
  },
  {
    title: "Performance & SEO",
    desc: "Core Web Vitals & technical SEO",
    icon: HiOutlineSearch,
    color: "text-orange-400",
  },
  {
    title: "UI/UX Enhancements",
    desc: "Modern, conversion-focused interfaces",
    icon: HiOutlineColorSwatch,
    color: "text-pink-400",
  },
];

export default function Services() {
  return (
    <section id="services" className=" relative">
      <div className="mx-auto max-w-7xl px-6">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Services
          </h2>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  relative rounded-xl border border-white/10
                  bg-white/5 backdrop-blur-md
                  px-6 py-5
                  transition hover:-translate-y-1 hover:border-white/20
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`
                      h-11 w-11 rounded-lg flex items-center justify-center
                      bg-white/10
                      ${item.color}
                    `}
                  >
                    <Icon className="text-22" size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
