"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Fashion Store",
    platform: "Neto",
    badgeColor: "bg-sky-500",
    image: "/Pro-1.png",
  },
  {
    title: "Tech Gadgets Shop",
    platform: "Shopify",
    badgeColor: "bg-green-500",
    image: "/pro-2.png",
  },
  {
    title: "Home Decor Shop",
    platform: "BigCommerce",
    badgeColor: "bg-indigo-500",
    image: "/pro-3.png",
  },
  {
    title: "Electronics Store",
    platform: "Maropost",
    badgeColor: "bg-pink-500",
    image: "/pro-4.png",
  },
];

export default function LatestProjects() {
  return (
    <section id="portfolio" className="pt-24 relative">
      <div className="mx-auto max-w-7xl px-6">

        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Latest Projects
          </h2>
          <p className="mt-3 text-white/60">
            Selected ecommerce projects built using Neto, Shopify, BigCommerce and Maropost.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <article
                className="
                  group relative overflow-hidden rounded-xl
                  border border-white/10
                  bg-white/5 backdrop-blur-md
                  transition hover:-translate-y-1 hover:border-white/20
                "
              >
                {/* image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
  <Image
    src={project.image}
    alt={`${project.title} ecommerce website built using ${project.platform}`}
    fill
    sizes="(max-width:768px) 100vw, 33vw"
    className=" w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
  />
</div>

                {/* badge */}
                <span
                  className={`
                    absolute top-3 left-3
                    text-xs font-medium text-white
                    px-3 py-1 rounded-full
                    ${project.badgeColor}
                  `}
                >
                  {project.platform}
                </span>

                {/* content */}
                <div className="p-5">
                  <h3 className="text-base font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-white/60">
                    Ecommerce store optimized for performance, UX and SEO.
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
