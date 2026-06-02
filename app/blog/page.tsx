// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // ⚠️ NOTE: metadata should NOT be inside client component
// // Move metadata to page.tsx (App Router)

// interface Blog {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   slug: string;
//   date: string;
//   readTime: string;
// }

// const blogs: Blog[] = [
//   {
//     id: 1,
//     title: "10 Shopify SEO Tips to Boost Sales",
//     description: "Improve your Shopify store ranking with proven SEO strategies.",
//     image: "/shopify_blogs.png",
//     slug: "shopify-seo-tips",
//     date: "March 20, 2026",
//     readTime: "5 min read",
//   },
//   {
//     id: 2,
//     title: "Neto to Shopify Migration Guide",
//     description: "Step-by-step guide to migrate your store without losing SEO.",
//     image: "/netotoshopify.png",
//     slug: "neto-to-shopify",
//     date: "March 15, 2026",
//     readTime: "6 min read",
//   },
//   {
//     id: 3,
//     title: "Top eCommerce Trends 2026",
//     description: "Discover  what’s shaping the future of online stores.",
//     image: "/top_eccomce.png",
//     slug: "ecommerce-trends",
//     date: "March 10, 2026",
//     readTime: "4 min read",
//   },
//   {
//     id: 4,
//     title: "Conversion Rate Optimization Tips",
//     description: "Increase your store conversions with these strategies.",
//     image: "/conver.png",
//     slug: "cro-tips",
//     date: "March 5, 2026",
//     readTime: "5 min read",
//   },
//    {
//     id: 5,
//     title: "Shopify & WordPress Development ",
//     description: "Looking for Shopify and WordPress development in Rajkot? Get SEO-friendly websites that generate leads and sales.",
//     image: "/shopify_wordpress_rajkot.png",
//     slug: "shopify-wordpress-rajkot",
//     date: "March 30, 2026",
//     readTime: "5 min read",
//   },
//   {
//     id: 6,
//     title: "Neto vs Shopify in 2026? ",
//     description: "Compare Neto vs Shopify for your eCommerce business. Discover features, pricing, SEO benefits, and which platform is best for your online store in 2026.",
//     image: "/neto-vs-shopify.png",
//     slug: "neto-vs-shopify",
//     date: "May 14, 2026",
//     readTime: "5 min read",
//   },
//    {
//     id: 7,
//     title: "Google Core Updates 2026",
//     description: "Learn how Google's latest Core Updates impact website rankings, EEAT, Helpful Content, and SEO performance in 2026.",
//     image:"/google-core-updates-2026.png",
//     slug: "google-core-updates-2026",
//     date: "June 1, 2026",
//     readTime: "5 min read",
//   },
// ];

// export default function BlogSlider() {
//   return (
//     <section className="pt-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold">Latest Insights</h2>
//           <p className="text-gray-500 mt-3">
//             Expert tips, trends & guides for eCommerce growth
//           </p>
//         </div>

//         {/* Slider */}
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={3}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {blogs.map((blog) => (
//             <SwiperSlide key={blog.id}>

//               <div className="blog-card bg-white rounded-2xl overflow-hidden group">

//                 {/* Image */}
//                 <div className="relative h-56 overflow-hidden">
//                   <Image
//                     src={blog.image}
//                     alt={blog.title}
//                     fill
//                     className="group-hover:scale-110 transition duration-500"
//                   />

//                   {/* Gradient overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  
              
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="flex justify-between text-xs text-gray-400 mb-2">
//                     <span>{blog.date}</span>
//                     <span>{blog.readTime}</span>
//                   </div>

//                   <h3 className="text-xl font-semibold mb-3 text-black cursor-pointer group-hover:text-blue-600 transition">
//                     {blog.title}
//                   </h3>

//                   <p className="text-gray-600 text-sm mb-4 h-[40px] overflow-hidden">
//                           {blog.description}
//                         </p>

//                   <Link
//                     href={`/blog/${blog.slug}`}
//                     className="font-semibold text-blue-600 inline-flex items-center gap-1"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </div>

//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Button */}
//         <div className="text-center mt-12">
//           <Link
//             href="/blog"
//             className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
//           >
//             View All Blogs
//           </Link>
//         </div>

//         {/* Schema JSON-LD */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Blog",
//               name: "MVP InfoTech Blog",
//               url: "https://www.mvpinfotech.in/blog",
//               blogPost: blogs.map((blog) => ({
//                 "@type": "BlogPosting",
//                 headline: blog.title,
//                 datePublished: blog.date,
//                 description: blog.description,
//                 url: `https://www.mvpinfotech.in/blog/${blog.slug}`,
//                 image: `https://www.mvpinfotech.in${blog.image}`,
//               })),
//             }),
//           }}
//         />

//       </div>

//       {/* Custom CSS */}
//       <style jsx global>{`
//         .blog-card {
//           transition: all 0.3s ease;
//         }

//         .blog-card:hover {
//           transform: translateY(-8px) scale(1.02);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.15);
//         }

//         .swiper-button-next,
//         .swiper-button-prev {
//           color: #000;
//           background: #fff;
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           box-shadow: 0 5px 20px rgba(0,0,0,0.1);
//         }

//         .swiper-pagination-bullet {
//           background: #ccc;
//           opacity: 1;
//         }

//         .swiper-pagination-bullet-active {
//           background: #000;
//         }
//       `}</style>

//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

import "swiper/css";

// ─── data ─────────────────────────────────────────────────────────────────────

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "10 Shopify SEO Tips to Boost Sales",
    description: "Improve your Shopify store ranking with proven SEO strategies that drive real revenue.",
    image: "/shopify_blogs.png",
    slug: "shopify-seo-tips",
    date: "March 20, 2026",
    readTime: "5 min read",
    tag: "SEO",
    tagColor: "bg-green-500/85",
  },
  {
    id: 2,
    title: "Neto to Shopify Migration Guide",
    description: "Step-by-step guide to migrate your store without losing SEO rankings or data.",
    image: "/netotoshopify.png",
    slug: "neto-to-shopify",
    date: "March 15, 2026",
    readTime: "6 min read",
    tag: "Migration",
    tagColor: "bg-sky-500/85",
  },
  {
    id: 3,
    title: "Top eCommerce Trends 2026",
    description: "Discover what's shaping the future of online stores and how to stay ahead.",
    image: "/top_eccomce.png",
    slug: "ecommerce-trends",
    date: "March 10, 2026",
    readTime: "4 min read",
    tag: "Trends",
    tagColor: "bg-violet-500/85",
  },
  {
    id: 4,
    title: "Conversion Rate Optimization Tips",
    description: "Increase your store conversions with these proven CRO strategies.",
    image: "/conver.png",
    slug: "cro-tips",
    date: "March 5, 2026",
    readTime: "5 min read",
    tag: "CRO",
    tagColor: "bg-orange-500/85",
  },
  {
    id: 5,
    title: "Shopify & WordPress Development",
    description: "Looking for Shopify and WordPress development in Rajkot? Get SEO-friendly websites that generate leads.",
    image: "/shopify_wordpress_rajkot.png",
    slug: "shopify-wordpress-rajkot",
    date: "March 30, 2026",
    readTime: "5 min read",
    tag: "Development",
    tagColor: "bg-indigo-500/85",
  },
  {
    id: 6,
    title: "Neto vs Shopify in 2026",
    description: "Compare Neto vs Shopify: features, pricing, SEO benefits, and which platform suits your business.",
    image: "/neto-vs-shopify.png",
    slug: "neto-vs-shopify",
    date: "May 14, 2026",
    readTime: "5 min read",
    tag: "Compare",
    tagColor: "bg-pink-500/85",
  },
  {
    id: 7,
    title: "Google Core Updates 2026",
    description: "How Google's latest Core Updates impact rankings, EEAT, Helpful Content, and SEO performance.",
    image: "/google-core-updates-2026.png",
    slug: "google-core-updates-2026",
    date: "June 1, 2026",
    readTime: "5 min read",
    tag: "SEO",
    tagColor: "bg-emerald-500/85",
  },
];

// ─── Schema JSON-LD (moved outside client component render) ──────────────────

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "MVP InfoTech Blog",
  url: "https://www.mvpinfotech.in/blog",
  blogPost: blogs.map((blog) => ({
    "@type": "BlogPosting",
    headline: blog.title,
    datePublished: blog.date,
    description: blog.description,
    url: `https://www.mvpinfotech.in/blog/${blog.slug}`,
    image: `https://www.mvpinfotech.in${blog.image}`,
  })),
};

// ─── component ────────────────────────────────────────────────────────────────

export default function BlogSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // total page count depends on slidesPerView — approximate as ceil(total/3)
  const pageCount = Math.ceil(blogs.length / 3);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const slidePrev = () => swiperRef.current?.slidePrev();
  const slideNext = () => swiperRef.current?.slideNext();
  const slideTo   = (i: number) => swiperRef.current?.slideTo(i * 3);

  // Which page dot is active (0-based)
  const activePage = Math.floor(activeIndex / 3);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">

      {/* ── ambient glows ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-indigo-600/6 blur-[130px]" />
        <div className="absolute -right-24 bottom-10 h-[360px] w-[360px] rounded-full bg-violet-600/6 blur-[110px]" />
      </div>

      {/* ── noise texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6">

        {/* ── heading ── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span className="text-[10px] font-semibold tracking-[.22em] uppercase text-indigo-400">
              Blog
            </span>
          </div>

          <h2 className="font-extrabold tracking-tight text-4xl md:text-5xl text-white leading-[1.08]">
            Latest{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h2>

          <p className="mt-4 text-sm text-white/42 max-w-md mx-auto leading-relaxed font-light">
            Expert tips, trends &amp; guides for eCommerce growth
          </p>
        </div>

        {/* ── swiper ── */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          spaceBetween={18}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640:  { slidesPerView: 1.3 },
            768:  { slidesPerView: 2   },
            1024: { slidesPerView: 3   },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── nav + page dots ── */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={slidePrev}
            disabled={isBeginning}
            aria-label="Previous blogs"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/15 hover:text-indigo-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <HiArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => slideTo(i)}
                aria-label={`Go to page ${i + 1}`}
                className="transition-all duration-300 rounded-full cursor-pointer"
                style={{
                  width:        i === activePage ? "20px" : "6px",
                  height:       "6px",
                  borderRadius: i === activePage ? "3px" : "9999px",
                  background:   i === activePage
                    ? "linear-gradient(90deg,#6366f1,#a855f7)"
                    : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>

          <button
            onClick={slideNext}
            disabled={isEnd}
            aria-label="Next blogs"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/15 hover:text-indigo-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <HiArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-12 flex flex-col items-center gap-3">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
          >
            View All Blogs
            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <span className="text-xs text-white/28">
            {blogs.length} articles &amp; counting
          </span>
        </div>
      </div>

      {/* ── Schema JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </section>
  );
}

// ─── card ─────────────────────────────────────────────────────────────────────

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group block">
      <article className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e1120] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-950/50">

        {/* image */}
        <div className="relative h-65 w-full overflow-hidden bg-[#111629]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />

          {/* hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1120]/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* topic tag */}
          <span
            className={`absolute left-2.5 top-2.5 z-10 rounded-full px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-white ${blog.tagColor}`}
          >
            {blog.tag}
          </span>

          {/* read time pill */}
          <span className="absolute bottom-2.5 right-2.5 z-10 rounded-[6px] bg-black/50 px-2 py-0.5 text-[9.5px] text-white/65 backdrop-blur-sm">
            {blog.readTime}
          </span>
        </div>

        {/* body */}
        <div className="flex flex-1 flex-col p-5">
          <p className="mb-2.5 text-[10.5px] font-light text-white/30">
            {blog.date}
          </p>

          <h3 className="mb-2 text-[14.5px] font-bold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-indigo-300">
            {blog.title}
          </h3>

          <p className="mb-4 flex-1 text-[12px] font-light leading-relaxed text-white/40 line-clamp-2">
            {blog.description}
          </p>

          {/* footer */}
          <div className="flex items-center justify-between border-t border-white/[0.05] pt-3.5">
            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-indigo-400 transition-all duration-200 group-hover:gap-2.5">
              <HiArrowRight className="w-3.5 h-3.5" />
              Read more
            </span>

            <div className="flex h-6 w-6 items-center justify-center rounded-[7px] border border-indigo-500/25 bg-indigo-500/10 text-indigo-400 transition-all duration-200 group-hover:border-indigo-400/50 group-hover:bg-indigo-500/25">
              <HiArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}