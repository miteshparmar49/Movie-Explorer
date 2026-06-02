// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// const reviews = [
//   {
//     name: "David Lee",
//     role: "BigCommerce Client",
//     review:
//       "Professional team with deep technical knowledge. They handled our complex requirements with ease.",
//     image: "/OIP.jpg",
//   },
//   {
//     name: "Sarah Williams",
//     role: "Shopify Store Owner",
//     review:
//       "Amazing experience! Fast delivery and great communication. Highly recommended!",
//    image: "/OIP.jpg",
//   },
//   {
//     name: "John Smith",
//     role: "Neto Client",
//     review:
//       "They optimized our store performance and improved conversions significantly.",
//     image: "/OIP.jpg",
//   },
//   {
//     name: "Emma Brown",
//     role: "WordPress Client",
//     review: "Super smooth experience. Their UI work is top-notch!",
//     image: "/OIP.jpg",
//   },
//   {
//     name: "Michael Clark",
//     role: "eCommerce Owner",
//     review: "Sales improved drastically after their optimization.",
//     image: "/OIP.jpg",
//   },
// ];

// export default function ClientReviews() {
//   return (
//     <section className="pt-24">
//       <div className="max-w-6xl mx-auto px-6 text-center">

//         <h2 className="text-4xl font-semibold">What Clients Say</h2>
//         <p className="text-white/60 mt-3">
//           Real feedback from real clients 🚀
//         </p>

//         <div className="mt-14">

//           <Swiper
//             modules={[Autoplay, Pagination]}
//             spaceBetween={20}
//             slidesPerView={3}
//             loop={true}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {reviews.map((r, i) => (
//               <SwiperSlide key={i}>
                
//                 {/* CARD */}
//                 <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 h-[300px] flex flex-col">

//                   {/* REVIEW */}
//                   <p className="text-white/90 flex-grow">
//                     “{r.review}”
//                   </p>

//                   {/* STARS */}
//                   <div className="text-yellow-400 mt-3">
//                     ★★★★★
//                   </div>

//                   {/* PROFILE (CENTER) */}
//                   <div className="flex flex-col items-center mt-5 text-center">

//                     <img
//                       src={r.image}
//                       alt={r.name}
//                       className="w-12 h-12 rounded-full object-cover"
//                     />

//                     <h4 className="mt-2 font-semibold">{r.name}</h4>
//                     <p className="text-sm text-white/60">{r.role}</p>

//                   </div>

//                 </div>

//               </SwiperSlide>
//             ))}
//           </Swiper>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "David Lee",
    role: "BigCommerce Client",
    country: "🇦🇺 Australia",
    platform: "BigCommerce",
    result: "Page speed improved by 65%",
    review:
      "Professional team with deep technical knowledge. They handled our complex BigCommerce requirements with ease and delivered on time. Highly impressed with the quality of work.",
    initials: "DL",
    color: "from-blue-500 to-blue-700",
    verified: true,
  },
  {
    name: "Sarah Williams",
    role: "Shopify Store Owner",
    country: "🇬🇧 United Kingdom",
    platform: "Shopify",
    result: "Conversions up 40% in 30 days",
    review:
      "Amazing experience! Fast delivery and great communication throughout the entire project. The Shopify store looks stunning and performs even better. Highly recommended!",
    initials: "SW",
    color: "from-green-500 to-green-700",
    verified: true,
  },
  {
    name: "John Smith",
    role: "Neto Client",
    country: "🇦🇺 Australia",
    platform: "Neto / Maropost",
    result: "Bounce rate reduced from 72% to 38%",
    review:
      "They optimised our Neto store performance and improved conversions significantly. Very knowledgeable about the Maropost platform — one of the best developers we have worked with.",
    initials: "JS",
    color: "from-purple-500 to-purple-700",
    verified: true,
  },
  {
    name: "Emma Brown",
    role: "WordPress Client",
    country: "🇨🇦 Canada",
    platform: "WordPress",
    result: "Load time dropped to 1.8 seconds",
    review:
      "Super smooth experience from start to finish. Their UI work is top-notch and the WordPress site they built for us has generated more leads than our previous site ever did.",
    initials: "EB",
    color: "from-pink-500 to-pink-700",
    verified: true,
  },
  {
    name: "Michael Clark",
    role: "eCommerce Owner",
    country: "🇺🇸 United States",
    platform: "Shopify",
    result: "Revenue increased by 55% in 60 days",
    review:
      "Sales improved drastically after their optimisation work. They genuinely care about results, not just completing tasks. Will be working with them long term without a doubt.",
    initials: "MC",
    color: "from-orange-500 to-orange-700",
    verified: true,
  },
];

// Platform badge colours
const platformColor: Record<string, string> = {
  BigCommerce: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  Shopify: "bg-green-500/15 text-green-400 border-green-500/20",
  "Neto / Maropost": "bg-blue-500/15 text-blue-400 border-blue-500/20",
  WordPress: "bg-purple-500/15 text-purple-400 border-purple-500/20",
};

export default function ClientReviews() {
  return (
    <section className="py-24 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
            ★ Client Reviews
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-white/50 mt-3 text-sm">
            Real results from real clients across Australia, UK, USA and Canada
          </p>

          {/* Trust bar */}
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold">
              <span>★★★★★</span>
              <span className="text-white/60 font-normal">5.0 average rating</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="text-white/50 text-sm">
              ✓ <span className="text-white/70 font-medium">50+ projects</span> delivered worldwide
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="text-white/50 text-sm">
              ✓ <span className="text-white/70 font-medium">10+ countries</span> served
            </div>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-xl rounded-3xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 h-full">

                {/* Top row — platform badge + verified */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${platformColor[r.platform] ?? "bg-white/10 text-white/60 border-white/10"}`}
                  >
                    {r.platform}
                  </span>
                  {r.verified && (
                    <span className="flex items-center gap-1 text-[11px] text-green-400 font-medium">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="text-yellow-400 text-sm tracking-wider">★★★★★</div>

                {/* Review text */}
                <p className="text-white/80 text-sm leading-relaxed flex-grow">
                  "{r.review}"
                </p>

                {/* Result highlight */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2 text-xs text-green-400 font-semibold">
                  📈 {r.result}
                </div>

                {/* Divider */}
                <div className="border-t border-white/8" />

                {/* Profile */}
                <div className="flex items-center gap-3">
                  {/* Avatar with initials — no fake photo */}
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg`}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{r.name}</h4>
                    <p className="text-xs text-white/50">{r.role}</p>
                    <p className="text-xs text-white/40 mt-0.5">{r.country}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom CTA */}
        <div className="text-center mt-4">
          <p className="text-white/40 text-xs">
            Want results like these?{" "}
            <a href="/contact" className="text-indigo-400 hover:underline font-medium">
              Start your project today →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}