"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "David Lee",
    role: "BigCommerce Client",
    review:
      "Professional team with deep technical knowledge. They handled our complex requirements with ease.",
    image: "/OIP.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Shopify Store Owner",
    review:
      "Amazing experience! Fast delivery and great communication. Highly recommended!",
   image: "/OIP.jpg",
  },
  {
    name: "John Smith",
    role: "Neto Client",
    review:
      "They optimized our store performance and improved conversions significantly.",
    image: "/OIP.jpg",
  },
  {
    name: "Emma Brown",
    role: "WordPress Client",
    review: "Super smooth experience. Their UI work is top-notch!",
    image: "/OIP.jpg",
  },
  {
    name: "Michael Clark",
    role: "eCommerce Owner",
    review: "Sales improved drastically after their optimization.",
    image: "/OIP.jpg",
  },
];

export default function ClientReviews() {
  return (
    <section className="pt-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-semibold">What Clients Say</h2>
        <p className="text-white/60 mt-3">
          Real feedback from real clients 🚀
        </p>

        <div className="mt-14">

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviews.map((r, i) => (
              <SwiperSlide key={i}>
                
                {/* CARD */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 h-[300px] flex flex-col">

                  {/* REVIEW */}
                  <p className="text-white/90 flex-grow">
                    “{r.review}”
                  </p>

                  {/* STARS */}
                  <div className="text-yellow-400 mt-3">
                    ★★★★★
                  </div>

                  {/* PROFILE (CENTER) */}
                  <div className="flex flex-col items-center mt-5 text-center">

                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <h4 className="mt-2 font-semibold">{r.name}</h4>
                    <p className="text-sm text-white/60">{r.role}</p>

                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
}