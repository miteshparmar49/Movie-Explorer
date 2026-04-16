import Image from "next/image";
import { notFound } from "next/navigation";

const blogs = [
  {
    title: "10 Shopify SEO Tips to Boost Sales",
    slug: "shopify-seo-tips",
    description: "Improve your Shopify store ranking with proven SEO strategies.",
    image: "/shopify_blogs.png",
    date: "March 20, 2026",
    readTime: "5 min read",
    content: "Full SEO blog content here...",
  },
  {
    title: "Neto to Shopify Migration Guide",
    slug: "neto-to-shopify",
    description: "Step-by-step guide to migrate your store without losing SEO.",
    image: "/netotoshopify.png",
    date: "March 15, 2026",
    readTime: "6 min read",
    content: "Migration content here...",
  },
  {
    title: "Top eCommerce Trends 2026",
    slug: "ecommerce-trends",
    description: "Discover what’s shaping the future of online stores.",
    image: "/top_eccomce.png",
    date: "March 10, 2026",
    readTime: "4 min read",
    content: "Trends content here...",
  },
  {
    title: "Conversion Rate Optimization Tips",
    slug: "cro-tips",
    description: "Increase your store conversions with these strategies.",
    image: "/conver.png",
    date: "March 5, 2026",
    readTime: "5 min read",
    content: "CRO content here...",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="rounded-xl mb-6 w-full"
      />

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <div className="text-gray-500 text-sm mb-4">
        {blog.date} • {blog.readTime}
      </div>

      <p className="mb-6">{blog.description}</p>

      <div className="leading-7">{blog.content}</div>

    </div>
  );
}