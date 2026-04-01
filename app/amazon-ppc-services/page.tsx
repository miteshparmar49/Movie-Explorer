import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title:
    "Amazon PPC Expert Australia | Amazon Ads Specialist & Campaign Management",

  description:
    "Hire an Amazon PPC expert to increase sales, reduce ACoS and optimize Amazon advertising campaigns across Australia, USA, UK, and global marketplaces.",

  keywords: [
    "amazon ppc expert",
    "amazon ads specialist",
    "amazon advertising services",
    "amazon campaign management",
    "amazon marketing expert",

    // 🌍 Country targeting
    "amazon ppc expert australia",
    "amazon ppc expert usa",
    "amazon ppc expert uk",
    "amazon ads specialist australia",
    "hire amazon ppc expert worldwide",

    // 🛠 Services
    "amazon ppc management services",
    "amazon ads optimization",
    "amazon sponsored ads expert",
    "amazon keyword research",
    "amazon bid optimization",
    "amazon campaign setup",
    "amazon listing optimization",
    "amazon ads audit",

    // 💰 Business intent
    "hire amazon ppc freelancer",
    "amazon ppc agency",
    "amazon ads agency worldwide",
    "amazon growth expert",
    "increase amazon sales",
    "reduce acos amazon",

    // 🔥 Advanced
    "amazon dsp advertising",
    "amazon sponsored products ads",
    "amazon sponsored brands ads",
    "amazon sponsored display ads",
    "amazon ppc strategy",
    "amazon conversion optimization",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.mvpinfotech.in/amazon-ppc-services",
  },

  // ✅ Open Graph
  openGraph: {
    title:
      "Amazon PPC Expert Australia | Increase Sales & Reduce ACoS",
    description:
      "Expert Amazon PPC management to scale your sales, optimize campaigns and improve ROI.",
    url: "https://www.mvpinfotech.in/amazon-ppc-services",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/amazon.png",
        width: 1200,
        height: 630,
        alt: "Amazon PPC Expert Services",
      },
    ],
  },

  // ✅ Twitter
  twitter: {
    card: "summary_large_image",
    title: "Amazon PPC Expert | MVP InfoTech",
    description:
      "Scale your Amazon sales with expert PPC management and campaign optimization.",
    images: ["https://www.mvpinfotech.in/amazon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AmazonPPCPage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#ff9900] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Amazon PPC Expert (Ads Specialist)
            </h1>

            <p className="mt-6 text-lg text-white/80">
              Increase your Amazon sales with optimized PPC campaigns.
            </p>

            <p className="mt-4 text-white/80">
              I help sellers scale profitably with data-driven advertising strategies.
            </p>

            <div className="mt-6 text-white/90 text-sm">
              ✔ ACoS Optimization <br />
              ✔ Keyword Research & Bidding <br />
              ✔ Sponsored Ads (SP, SB, SD) <br />
              ✔ Campaign Scaling Strategy
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-md">
                Get Free Audit
              </Link>

              <Link href="/ourwork" className="border border-white/30 px-6 py-3 rounded-md">
                View Case Studies
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/amazon.png"
                alt="Amazon PPC Services"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-3xl font-semibold">
            Amazon PPC Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Amazon Campaign Setup",
              "Keyword Research",
              "Bid Optimization",
              "ACoS Reduction Strategy",
              "Sponsored Products Ads",
              "Sponsored Brands Ads",
              "Sponsored Display Ads",
              "Competitor Analysis",
              "Campaign Scaling",
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex gap-3">
                  <span className="text-yellow-400 font-semibold">✓</span>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 border-t border-white/10">
  <div className="mx-auto max-w-4xl px-6">

    <h2 className="text-3xl font-semibold">
      Amazon PPC Management Services to Boost Sales & ROI
    </h2>

    <p className="mt-6 text-white/80">
      <strong>Amazon PPC management</strong> is one of the most effective ways to increase product visibility, drive targeted traffic and boost sales on Amazon. 
      With millions of products competing for attention, running optimized <strong>Amazon advertising campaigns</strong> is essential for success. 
      <strong>Amazon PPC (Pay-Per-Click)</strong> allows sellers to promote their products through sponsored ads and appear at the top of search results.
    </p>

    <p className="mt-4 text-white/80">
      Our <strong>Amazon PPC services</strong> focus on creating high-performing, data-driven campaigns that maximise ROI and minimise wasted ad spend. 
      Whether you are launching a new product or scaling an existing brand, our expert <strong>Amazon PPC specialists</strong> help you achieve consistent growth and higher profitability.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Amazon PPC is Important for Your Business
    </h3>

    <p className="mt-4 text-white/80">
      <strong>Amazon PPC advertising</strong> is essential because it increases product visibility and improves organic rankings. 
      When your ads perform well, your products gain more clicks, conversions and reviews, which helps boost your ranking in Amazon search results.
    </p>

    <p className="mt-4 text-white/80">
      With the right <strong>Amazon advertising strategy</strong>, you can target high-intent customers who are ready to buy. 
      This makes <strong>Amazon PPC management</strong> one of the most powerful tools for driving sales and growing your ecommerce business.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Our Amazon PPC Management Services
    </h3>

    <p className="mt-4 text-white/80">
      We provide complete <strong>Amazon PPC management services</strong> tailored to your business goals. 
      Our services include <strong>Amazon campaign setup</strong>, <strong>keyword research</strong>, 
      <strong>bid optimization</strong>, <strong>ad copy optimization</strong> and ongoing campaign management.
    </p>

    <p className="mt-4 text-white/80">
      Our experienced <strong>Amazon PPC experts</strong> continuously monitor and optimise campaigns to improve performance. 
      We focus on reducing ACoS (Advertising Cost of Sales) while increasing conversions and revenue.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Amazon Keyword Research & Targeting
    </h3>

    <p className="mt-4 text-white/80">
      Effective keyword targeting is the foundation of successful campaigns. Our <strong>Amazon keyword research</strong> identifies high-converting keywords that drive relevant traffic. 
      We use advanced tools and data analysis to find profitable keywords and eliminate wasteful spending.
    </p>

    <p className="mt-4 text-white/80">
      Our <strong>Amazon PPC strategy</strong> includes exact match, phrase match and broad match targeting to maximise reach and conversions.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Amazon Campaign Optimization
    </h3>

    <p className="mt-4 text-white/80">
      Running campaigns is not enough — continuous optimization is key. Our <strong>Amazon PPC optimization services</strong> focus on improving campaign performance through data-driven decisions. 
      We adjust bids, pause underperforming keywords and scale profitable campaigns.
    </p>

    <p className="mt-4 text-white/80">
      By analysing performance metrics like CTR, conversion rate and ACoS, we ensure your campaigns deliver maximum ROI.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Sponsored Ads Management (Sponsored Products, Brands & Display)
    </h3>

    <p className="mt-4 text-white/80">
      We manage all types of <strong>Amazon sponsored ads</strong> including <strong>Sponsored Products</strong>, 
      <strong>Sponsored Brands</strong> and <strong>Sponsored Display Ads</strong>. 
      Each ad type plays a unique role in your advertising strategy, helping you reach customers at different stages of the buying journey.
    </p>

    <p className="mt-4 text-white/80">
      Our <strong>Amazon PPC specialists</strong> create targeted campaigns that increase visibility, brand awareness and conversions.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Data-Driven Amazon Advertising Strategy
    </h3>

    <p className="mt-4 text-white/80">
      Every decision we make is based on data. Our <strong>data-driven Amazon PPC strategy</strong> ensures consistent growth and performance. 
      We analyse campaign data, customer behaviour and market trends to optimise your advertising efforts.
    </p>

    <p className="mt-4 text-white/80">
      With continuous testing and improvement, we help you scale your campaigns while maintaining profitability.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Amazon PPC for Product Launch & Scaling
    </h3>

    <p className="mt-4 text-white/80">
      <strong>Amazon PPC campaigns</strong> are crucial for launching new products. 
      We create launch strategies that generate initial sales, improve ranking and build momentum.
    </p>

    <p className="mt-4 text-white/80">
      For existing products, our <strong>Amazon PPC management services</strong> focus on scaling campaigns to increase sales and profitability.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Global Amazon PPC Services
    </h3>

    <p className="mt-4 text-white/80">
      We provide <strong>Amazon PPC services worldwide</strong> including USA, UK, Canada, Australia, UAE and India. 
      Our team works with global sellers to deliver high-performing campaigns tailored to different marketplaces.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Our Amazon PPC Experts?
    </h3>

    <ul className="mt-4 list-disc pl-6 text-white/80 space-y-2">
      <li><strong>Experienced Amazon PPC specialists</strong></li>
      <li><strong>Data-driven campaign management</strong></li>
      <li><strong>ACoS reduction and ROI optimization</strong></li>
      <li><strong>Advanced keyword research and targeting</strong></li>
      <li><strong>Continuous campaign optimization</strong></li>
      <li><strong>Affordable pricing and ongoing support</strong></li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Conclusion
    </h3>

    <p className="mt-4 text-white/80">
      <strong>Amazon PPC management</strong> is essential for growing your sales and staying competitive in the marketplace. 
      With our expert <strong>Amazon PPC services</strong>, you can create high-performing campaigns that drive traffic, increase conversions and maximise ROI. 
      Whether you are launching a product or scaling your brand, our team is ready to help you succeed on Amazon.
    </p>

  </div>
</section>
<Allinone/>

      {/* CTA */}
      <section className="pt-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start Scaling Your Amazon Business Today
          </h2>

          <div className="mt-10 flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-black px-8 py-3 rounded-md">
              Contact Now
            </Link>

            <Link href="/services" className="border border-white/30 px-8 py-3 rounded-md">
              View Services
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}