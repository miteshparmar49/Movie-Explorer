import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

const blogs = [
  {
    title: "10 Shopify SEO Tips to Boost Sales",
    slug: "shopify-seo-tips",
    description:
      "Improve your Shopify store ranking with proven SEO strategies.",
    image: "/shopify_blogs.png",
    date: "March 20, 2026",
    readTime: "5 min read",
    content: `
<h2>10 Shopify SEO Tips to Boost Sales</h2>

<p >Running a successful Shopify store requires more than just great products. You need strong <strong>Shopify SEO strategies</strong> to rank higher on Google, drive organic traffic, and increase conversions.</p>

<h3>1. Perform Keyword Research</h3>
<p >Start by identifying <strong>high-intent keywords</strong> your customers are searching for.</p>

<h3>2. Optimize Product Titles</h3>
<p >Use <strong>SEO-friendly product titles</strong> with relevant keywords.</p>

<h3>3. Improve Site Speed</h3>
<p ><strong>Shopify speed optimization</strong> helps reduce bounce rate.</p>

<h3>4. SEO-Friendly URLs</h3>
<p >Use clean URLs like <strong>/shopify-seo-tips</strong>.</p>

<h3>5. Image Optimization</h3>
<p >Add <strong>alt text to images</strong> for better ranking.</p>

<h3>6. Mobile Optimization</h3>
<p >Ensure your store is <strong>mobile-friendly</strong>.</p>

<h3>7. Content Marketing</h3>
<p >Write blogs to improve <strong>Shopify SEO</strong>.</p>

<h3>8. Internal Linking</h3>
<p >Use <strong>internal links</strong> for better navigation.</p>

<h3>9. Meta Tags</h3>
<p >Optimize <strong>meta title & description</strong>.</p>

<h3>10. Build Backlinks</h3>
<p >Focus on <strong>high-quality backlinks</strong>.</p>

<h3>Conclusion</h3>
<p >Apply these <strong>Shopify SEO tips</strong> to boost traffic and sales.</p>
`,
  },
  {
    title: "Neto to Shopify Migration Guide",
    slug: "neto-to-shopify",
    description:
      "Step-by-step guide to migrate your store without losing SEO.",
    image: "/netotoshopify.png",
    date: "March 15, 2026",
    readTime: "6 min read",
    content: "<p >Migration content here...</p>",
  },
  {
    title: "Top eCommerce Trends 2026",
    slug: "ecommerce-trends",
    description: "Discover what’s shaping the future of online stores.",
    image: "/top_eccomce.png",
    date: "March 10, 2026",
    readTime: "4 min read",
    content: "<p >Trends content here...</p>",
  },
  {
    title: "Conversion Rate Optimization Tips",
    slug: "cro-tips",
    description: "Increase your store conversions with these strategies.",
    image: "/conver.png",
    date: "March 5, 2026",
    readTime: "5 min read",
    content: "<p >CRO content here...</p>",
  },
];


import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return {};

  return {
    title: blog.title + " | MVP Infotech",
    description: blog.description,

    keywords: [
      "Shopify SEO",
      "Shopify SEO tips",
      "ecommerce SEO",
      "SEO for Shopify store",
      "increase Shopify sales",
    ],

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.mvpinfotech.in/blog/${blog.slug}`,
      siteName: "MVP Infotech",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;

//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) return notFound();

//   return (
//     <main className="relative">

//       {/* HERO */}
//       <section className="py-20 border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//           {/* Text */}
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold">
//               {blog.title}
//             </h1>

//             <p className="mt-4 text-white/70 text-lg">
//               {blog.description}
//             </p>

//             <div className="mt-6 text-sm text-gray-400">
//               {blog.date} • {blog.readTime}
//             </div>

//             <div className="mt-6">
//               <Link
//                 href="/contact"
//                 className="border border-white/20 px-6 py-3 rounded-md"
//               >
//                 Get Free Consultation
//               </Link>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               fill
//               priority
//             />
//           </div>

//         </div>
//       </section>

//       {/* BLOG CONTENT */}
//       <section className="py-16">
//         <div className="max-w-4xl mx-auto px-4 blog-content">

//           <div
//             className="prose prose-invert max-w-none"
//             dangerouslySetInnerHTML={{ __html: blog.content }}
//           />

//         </div>
//       </section>

//     </main>
//   );
// }

export default async function Page({
   params,
 }: {
   params: Promise<{ slug: string }>;
 }) {
   const { slug } = await params;

   const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <main className="bg-[#0b1020] text-white">

      {/* 🔹 Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-400">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / {blog.title}
      </div>

      {/* 🔹 HERO */}
      <section className="py-12 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>

          <p className="mt-4 text-gray-400">
            {blog.description}
          </p>

          <div className="mt-4 text-sm text-gray-500">
            {blog.date} • {blog.readTime}
          </div>

          <Link
            href="/contact"
            className="inline-block mt-6 border border-white/20 px-6 py-3 rounded-md"
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
          <Image src={blog.image} alt={blog.title} fill className="" />
        </div>

      </section>

      {/* 🔹 CONTENT + SIDEBAR */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* 📝 MAIN CONTENT */}
        <div className="md:col-span-2">

          <div
            className="
              text-white leading-7 space-y-4

              [&_h2]:text-3xl [&_h2]:font-semibold
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6
              [&_p]:text-gray-300
              [&_strong]:text-white
              [&_a]:text-blue-400
            "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* 🚀 CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-xl">
            <h3 className="text-xl font-semibold">
              🚀 Want to rank your Shopify store?
            </h3>
            <p className="text-gray-400 mt-2">
              We help increase traffic, rankings & conversions.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-white text-black px-6 py-2 rounded-md"
            >
              Get Free Consultation
            </Link>
          </div>

        </div>

        {/* 📌 SIDEBAR */}
        <aside className="space-y-6">

          {/* 🔥 TOC */}
          <div className="top-20 bg-white/5 p-5 rounded-xl border border-white/10">
            <h4 className="font-semibold mb-3">Table of Contents</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Keyword Research</li>
              <li>Product Optimization</li>
              <li>Site Speed</li>
              <li>Backlinks</li>
            </ul>
          </div>

          {/* 👤 Author */}
          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h4 className="font-semibold">About Author</h4>
            <p className="text-gray-400 text-sm mt-2">
              MVP Infotech – Shopify & SEO Experts helping brands grow.
            </p>
          </div>

          {/* 🔗 Related */}
          <div className="bg-white/5 p-5 rounded-xl border border-white/10">
            <h4 className="font-semibold mb-4">Related Blogs</h4>

            {blogs.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="block text-sm text-gray-300 hover:text-white mb-2"
              >
                → {item.title}
              </Link>
            ))}
          </div>

        </aside>

      </section>

    </main>
  );
}


 