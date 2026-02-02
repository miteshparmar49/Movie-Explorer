import {
  HiOutlineBadgeCheck,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineSupport,
} from "react-icons/hi";
const reasons = [
  {
    title: "9+ Years of Experience",
    desc: "Professional experience delivering scalable ecommerce and web solutions for global clients.",
    icon: HiOutlineBriefcase,
    color: "text-sky-400",
  },
  {
    title: "Ecommerce Specialist",
    desc: "Specialized in Neto, Maropost, Shopify and BigCommerce platforms.",
    icon: HiOutlineBadgeCheck,
    color: "text-indigo-400",
  },
  {
    title: "Clean & Scalable Code",
    desc: "Well-structured, maintainable and future-ready codebase for long-term growth.",
    icon: HiOutlineCode,
    color: "text-emerald-400",
  },
  {
    title: "Fast & Reliable Delivery",
    desc: "On-time delivery with proper testing and clear communication throughout the project.",
    icon: HiOutlineLightningBolt,
    color: "text-yellow-400",
  },
  {
    title: "Clear Communication",
    desc: "Regular updates, transparent progress and easy collaboration throughout the project.",
    icon: HiOutlineSupport,
    color: "text-pink-400",
  },
  {
    title: "Long-Term Support",
    desc: "Post-launch support, performance optimization and continuous improvements when required.",
    icon: HiOutlineBadgeCheck,
    color: "text-purple-400",
  },
];


export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="pt-24 relative">
      <div className="mx-auto max-w-7xl px-6">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why Choose Me?
          </h2>
          <p className="mt-3 text-white/60 text-sm md:text-base">
            A reliable full-stack ecommerce developer focused on performance, scalability and
            long-term business success.
          </p>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  rounded-xl border border-white/10
                  bg-white/5 backdrop-blur-md
                  px-6 py-6
                  transition hover:-translate-y-1 hover:border-white/20
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`
                      h-11 w-11 rounded-lg
                      flex items-center justify-center
                      bg-white/10
                      ${item.color}
                    `}
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">
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
