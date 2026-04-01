import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.mvpinfotech.in"),

  title:
    "Google Ads Expert Australia | PPC Specialist & High-Converting Campaigns",

  description:
    "Hire a Google Ads expert to run high-converting PPC campaigns. Increase leads, traffic and ROI with data-driven Google Ads strategies worldwide.",

  keywords: [
    "google ads expert",
    "ppc specialist",
    "google advertising services",
    "search ads expert",
    "google ppc management",

    // 🌍 Country targeting
    "google ads expert australia",
    "google ads expert usa",
    "google ads expert uk",
    "google ads expert canada",
    "hire google ads expert worldwide",

    // 🛠 Services
    "google ads campaign management",
    "google ads optimization",
    "google ads setup service",
    "google ads audit",
    "ppc campaign optimization",
    "conversion tracking google ads",
    "google ads keyword research",
    "google ads bid optimization",

    // 💰 Business intent
    "hire google ads freelancer",
    "google ads agency worldwide",
    "ppc management services",
    "increase leads with google ads",
    "google ads lead generation",
    "reduce cost per click google ads",

    // 🔥 Advanced
    "google search ads",
    "google display ads",
    "youtube ads expert",
    "google remarketing ads",
    "google performance max campaigns",
    "google ads conversion optimization",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "/google-ads-services",
  },

  // ✅ Open Graph
  openGraph: {
    title:
      "Google Ads Expert Australia | PPC & Lead Generation Specialist",
    description:
      "Expert Google Ads management to increase leads, traffic and ROI with high-performing PPC campaigns.",
    url: "https://www.mvpinfotech.in/google-ads-services",
    siteName: "MVP InfoTech",
    type: "website",
    images: [
      {
        url: "https://www.mvpinfotech.in/google.png",
        width: 1200,
        height: 630,
        alt: "Google Ads Expert Services",
      },
    ],
  },

  // ✅ Twitter
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Expert | MVP InfoTech",
    description:
      "Scale your business with expert Google Ads campaigns and PPC optimization.",
    images: ["https://www.mvpinfotech.in/google.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function GoogleAdsPage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#4285F4] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Google Ads Expert (PPC Specialist)
            </h1>

            <p className="mt-6 text-lg text-white/80">
              Drive high-quality traffic and leads with optimized Google Ads campaigns.
            </p>

            <p className="mt-4 text-white/80">
              I create and manage PPC campaigns that maximize ROI and conversions.
            </p>

            <div className="mt-6 text-white/90 text-sm">
              ✔ Search, Display & YouTube Ads <br />
              ✔ Keyword & Bidding Strategy <br />
              ✔ Conversion Tracking Setup <br />
              ✔ ROI Focused Campaigns
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
                src="/google.png"
                alt="Google Ads Services"
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
            Google Ads Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Search Ads Campaign Setup",
              "Display Advertising",
              "YouTube Ads",
              "Keyword Research",
              "Bid Optimization",
              "Conversion Tracking",
              "Remarketing Campaigns",
              "Landing Page Optimization",
              "Performance Scaling",
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="flex gap-3">
                  <span className="text-blue-400 font-semibold">✓</span>
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
      Google Ads Management Services to Generate High-Quality Leads & Sales
    </h2>

    <p className="mt-6 text-white/80">
      <strong>Google Ads management</strong> is one of the most powerful digital marketing strategies to generate high-quality leads, increase website traffic and drive sales. 
      <strong>Google Ads</strong> allows businesses to appear at the top of search results, targeting users who are actively searching for products or services. 
      With the right <strong>PPC (Pay-Per-Click) strategy</strong>, businesses can achieve instant visibility and measurable results.
    </p>

    <p className="mt-4 text-white/80">
      Our <strong>Google Ads services</strong> focus on creating high-performing, conversion-driven campaigns that maximise ROI and minimise wasted ad spend. 
      Whether you want to generate leads, increase ecommerce sales or promote your services, our expert <strong>Google Ads specialists</strong> deliver tailored strategies based on your business goals.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Google Ads is Important for Your Business
    </h3>

    <p className="mt-4 text-white/80">
      <strong>Google Ads advertising</strong> helps businesses reach customers at the exact moment they are searching for solutions. 
      This makes it one of the highest-converting marketing channels. With proper <strong>keyword targeting</strong> and ad optimization, businesses can drive relevant traffic and increase conversions.
    </p>

    <p className="mt-4 text-white/80">
      Another advantage of <strong>Google PPC campaigns</strong> is full control over budget and targeting. 
      You can scale campaigns based on performance and achieve consistent growth. With the right strategy, <strong>Google Ads management</strong> delivers long-term profitability.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Our Google Ads Management Services
    </h3>

    <p className="mt-4 text-white/80">
      We provide complete <strong>Google Ads management services</strong> including <strong>campaign setup</strong>, 
      <strong>keyword research</strong>, <strong>ad copy creation</strong>, 
      <strong>bid management</strong>, <strong>conversion tracking</strong> and ongoing optimization.
    </p>

    <p className="mt-4 text-white/80">
      Our experienced <strong>Google Ads experts</strong> continuously monitor and optimize campaigns to improve performance. 
      We focus on increasing conversions while reducing cost per click (CPC) and cost per acquisition (CPA).
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Keyword Research & Targeting Strategy
    </h3>

    <p className="mt-4 text-white/80">
      Successful campaigns start with the right keywords. Our <strong>Google Ads keyword research</strong> identifies high-intent keywords that drive conversions. 
      We use data-driven insights to target keywords that generate maximum ROI.
    </p>

    <p className="mt-4 text-white/80">
      Our <strong>PPC strategy</strong> includes search ads, display ads and remarketing campaigns to capture users at different stages of the buying journey.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      High-Converting Ad Copy & Landing Pages
    </h3>

    <p className="mt-4 text-white/80">
      Ad copy plays a crucial role in campaign success. Our <strong>Google Ads copywriting</strong> focuses on creating compelling headlines and descriptions that drive clicks and conversions. 
      We also optimise landing pages to ensure a seamless user experience.
    </p>

    <p className="mt-4 text-white/80">
      By aligning ad messaging with landing page content, we improve quality score and reduce cost per click.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Data-Driven Campaign Optimization
    </h3>

    <p className="mt-4 text-white/80">
      Our <strong>data-driven Google Ads strategy</strong> ensures continuous improvement and performance growth. 
      We analyse metrics such as CTR, conversion rate, CPC, CPA and ROI to optimize campaigns.
    </p>

    <p className="mt-4 text-white/80">
      We scale high-performing campaigns and eliminate underperforming ones to maximise results.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Google Ads for Lead Generation & Ecommerce
    </h3>

    <p className="mt-4 text-white/80">
      Our <strong>Google Ads services</strong> are designed for both lead generation and ecommerce businesses. 
      We create targeted campaigns that generate high-quality leads and drive sales.
    </p>

    <p className="mt-4 text-white/80">
      Whether you are promoting services or selling products, our <strong>Google PPC management</strong> ensures measurable and scalable results.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Global Google Ads Services
    </h3>

    <p className="mt-4 text-white/80">
      We provide <strong>Google Ads services worldwide</strong> including USA, UK, Canada, Australia, UAE and India. 
      Our team works with global clients to deliver high-performing campaigns tailored to different markets.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Our Google Ads Experts?
    </h3>

    <ul className="mt-4 list-disc pl-6 text-white/80 space-y-2">
      <li><strong>Experienced Google Ads specialists</strong></li>
      <li><strong>Data-driven PPC campaign strategy</strong></li>
      <li><strong>Advanced keyword targeting and optimization</strong></li>
      <li><strong>High-converting ad copy and landing pages</strong></li>
      <li><strong>ROI-focused campaign management</strong></li>
      <li><strong>Affordable pricing and ongoing support</strong></li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Conclusion
    </h3>

    <p className="mt-4 text-white/80">
      <strong>Google Ads management</strong> is one of the fastest ways to grow your business and generate leads. 
      With our expert <strong>Google Ads services</strong>, you can run high-performing campaigns that deliver measurable results. 
      Whether you want to increase traffic, generate leads or boost sales, our team is ready to help you succeed.
    </p>

  </div>
</section>
<Allinone/>
      {/* CTA */}
      <section className="pt-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start Your Google Ads Campaign Today
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