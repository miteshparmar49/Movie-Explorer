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
  SiAmazon
} from "react-icons/si";

import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

const techStack = [
  { name: "Neto By Maropost", icon: SiGoogle, color: "text-blue-400", href: "/neto" },
  { name: "Shopify", icon: SiShopify, color: "text-green-400", href: "/shopify"  },
  { name: "BigCommerce", icon: SiBigcommerce, color: "text-purple-400", href: "/bigcommerce"},
  { name: "WordPress", icon: SiWordpress, color: "text-sky-400", href: "/wordpress" },
  { name: "SEO", icon: SiGoogle, color: "text-yellow-400", href: "/seo"  },
  { name: "Vue.js", icon: SiVuedotjs, color: "text-green-400" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },

  // New Marketing Platforms
  { name: "Amazon PPC", icon: SiAmazon, color: "text-yellow-500" },
  { name: "Meta Ads", icon: FaFacebook, color: "text-blue-500" },
  { name: "Google Ads", icon: SiGoogle, color: "text-red-500" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="pt-24 relative">
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

            const card = (
              <article
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

            // 👉 Only wrap with Link if href exists
            return item.href ? (
              <Link key={item.name} href={item.href}>
                {card}
              </Link>
            ) : (
              <div key={item.name}>{card}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
}