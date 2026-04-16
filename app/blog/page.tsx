"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ⚠️ NOTE: metadata should NOT be inside client component
// Move metadata to page.tsx (App Router)

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  readTime: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "10 Shopify SEO Tips to Boost Sales",
    description: "Improve your Shopify store ranking with proven SEO strategies.",
    image: "/shopify_blogs.png",
    slug: "shopify-seo-tips",
    date: "March 20, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Neto to Shopify Migration Guide",
    description: "Step-by-step guide to migrate your store without losing SEO.",
    image: "/netotoshopify.png",
    slug: "neto-to-shopify",
    date: "March 15, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Top eCommerce Trends 2026",
    description: "Discover  what’s shaping the future of online stores.",
    image: "/top_eccomce.png",
    slug: "ecommerce-trends",
    date: "March 10, 2026",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Conversion Rate Optimization Tips",
    description: "Increase your store conversions with these strategies.",
    image: "/conver.png",
    slug: "cro-tips",
    date: "March 5, 2026",
    readTime: "5 min read",
  },
];

export default function BlogSlider() {
  return (
    <section className="pt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Latest Insights</h2>
          <p className="text-gray-500 mt-3">
            Expert tips, trends & guides for eCommerce growth
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>

              <div className="blog-card bg-white rounded-2xl overflow-hidden group">

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  
              
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-black cursor-pointer group-hover:text-blue-600 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 h-[40px] overflow-hidden">
                          {blog.description}
                        </p>

                  <Link
                    href={`/blog/${blog.slug}`}
                    className="font-semibold text-blue-600 inline-flex items-center gap-1"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            View All Blogs
          </Link>
        </div>

        {/* Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />

      </div>

      {/* Custom CSS */}
      <style jsx global>{`
        .blog-card {
          transition: all 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          background: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #000;
        }
      `}</style>

    </section>
  );
}
