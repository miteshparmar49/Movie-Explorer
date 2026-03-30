import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Allinone from "@/components/allinobe";

export const metadata: Metadata = {
  title: "Meta Ads Expert Australia | Facebook & Instagram Ads Specialist",
  description:
    "Hire Meta Ads expert to run high-converting Facebook & Instagram campaigns. Increase leads, sales and ROI.",
  keywords: [
    "meta ads expert",
    "facebook ads specialist",
    "instagram ads marketing",
    "social media advertising",
    "meta ads services",
  ],
};

export default function MetaAdsPage() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1020] via-[#1877f2] to-[#0b1020]" />

        <div className="mx-auto max-w-7xl px-6 grid items-center gap-12 md:grid-cols-2">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Meta Ads Expert (Facebook & Instagram)
            </h1>

            <p className="mt-6 text-lg text-white/80">
              Grow your business with high-converting Meta Ads campaigns.
            </p>

            <p className="mt-4 text-white/80">
              I create and manage Facebook & Instagram ads that drive leads and sales.
            </p>

            <div className="mt-6 text-white/90 text-sm">
              ✔ Facebook & Instagram Ads <br />
              ✔ Audience Targeting Strategy <br />
              ✔ Conversion Optimization <br />
              ✔ ROI Focused Campaigns
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-md">
                Get Free Strategy Call
              </Link>

              <Link href="/ourwork" className="border border-white/30 px-6 py-3 rounded-md">
                View Results
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/meta.png"
                alt="Meta Ads Services"
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
            Meta Ads Services
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Facebook Ads Campaign Setup",
              "Instagram Ads Management",
              "Audience Targeting & Retargeting",
              "Conversion Tracking Setup",
              "Ad Creative Strategy",
              "A/B Testing",
              "Lead Generation Campaigns",
              "Ecommerce Ads Scaling",
              "Performance Optimization",
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
      Meta Ads Services (Facebook & Instagram Advertising) to Grow Your Business Faster
    </h2>

    <p className="mt-6 text-white/80">
      <strong>Meta Ads management</strong> (Facebook Ads and Instagram Ads) is one of the most powerful digital marketing strategies to reach targeted audiences, generate leads and increase sales. 
      With billions of active users, platforms like Facebook and Instagram provide unmatched opportunities for businesses to connect with their ideal customers. 
      <strong>Meta advertising</strong> allows you to run highly targeted campaigns based on demographics, interests, behaviour and location.
    </p>

    <p className="mt-4 text-white/80">
      Our <strong>Meta Ads services</strong> focus on creating high-converting, data-driven campaigns that maximise ROI and minimise wasted ad spend. 
      Whether you want to generate leads, increase ecommerce sales or build brand awareness, our expert <strong>Facebook Ads specialists</strong> deliver strategies tailored to your business goals.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Meta Ads are Important for Your Business
    </h3>

    <p className="mt-4 text-white/80">
      <strong>Facebook and Instagram advertising</strong> help businesses reach the right audience at the right time. 
      With advanced targeting options, you can show your ads to users who are most likely to convert. 
      This makes <strong>Meta Ads management</strong> one of the most cost-effective marketing strategies.
    </p>

    <p className="mt-4 text-white/80">
      Another major advantage of <strong>Meta advertising campaigns</strong> is scalability. 
      You can start with a small budget and scale campaigns based on performance. 
      With proper optimisation, businesses can achieve consistent growth and high ROI.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Our Meta Ads Management Services
    </h3>

    <p className="mt-4 text-white/80">
      We provide complete <strong>Meta Ads management services</strong> including <strong>Facebook Ads setup</strong>, 
      <strong>Instagram Ads campaigns</strong>, <strong>audience targeting</strong>, 
      <strong>creative ad design</strong>, <strong>campaign optimization</strong> and performance tracking.
    </p>

    <p className="mt-4 text-white/80">
      Our experienced <strong>Meta Ads experts</strong> continuously monitor and optimise campaigns to improve results. 
      We focus on increasing conversions while reducing cost per lead (CPL) and cost per acquisition (CPA).
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Audience Targeting & Retargeting Strategy
    </h3>

    <p className="mt-4 text-white/80">
      Targeting the right audience is key to success. Our <strong>Meta Ads targeting strategy</strong> includes custom audiences, lookalike audiences and interest-based targeting. 
      We ensure your ads reach users who are most likely to engage and convert.
    </p>

    <p className="mt-4 text-white/80">
      We also implement <strong>retargeting campaigns</strong> to re-engage users who have visited your website or interacted with your brand. 
      This helps increase conversions and maximise ROI.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      High-Converting Ad Creatives & Copy
    </h3>

    <p className="mt-4 text-white/80">
      Creative plays a major role in ad performance. Our <strong>Facebook and Instagram ad creatives</strong> are designed to capture attention and drive action. 
      We create engaging visuals, compelling ad copy and strong call-to-actions that improve click-through rates and conversions.
    </p>

    <p className="mt-4 text-white/80">
      Our team tests multiple creatives and variations to identify what works best for your audience.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Data-Driven Campaign Optimization
    </h3>

    <p className="mt-4 text-white/80">
      Every decision we make is based on data. Our <strong>data-driven Meta Ads strategy</strong> focuses on analysing performance metrics such as CTR, conversion rate, CPA and ROI. 
      We continuously optimise campaigns to improve results.
    </p>

    <p className="mt-4 text-white/80">
      By scaling high-performing ads and eliminating underperforming ones, we ensure consistent growth and profitability.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Meta Ads for Lead Generation & Ecommerce
    </h3>

    <p className="mt-4 text-white/80">
      Our <strong>Meta Ads services</strong> are designed for both lead generation and ecommerce growth. 
      We create lead generation campaigns that capture high-quality leads and ecommerce campaigns that drive sales and revenue.
    </p>

    <p className="mt-4 text-white/80">
      Whether you are promoting services or selling products, our <strong>Meta advertising strategies</strong> deliver measurable results.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Global Meta Ads Services
    </h3>

    <p className="mt-4 text-white/80">
      We provide <strong>Meta Ads services worldwide</strong> including USA, UK, Canada, Australia, UAE and India. 
      Our team works with global clients to deliver high-performing campaigns tailored to different markets.
    </p>

    <h3 className="mt-10 text-2xl font-semibold">
      Why Choose Our Meta Ads Experts?
    </h3>

    <ul className="mt-4 list-disc pl-6 text-white/80 space-y-2">
      <li><strong>Experienced Facebook & Instagram Ads specialists</strong></li>
      <li><strong>Data-driven campaign strategy</strong></li>
      <li><strong>Advanced audience targeting and retargeting</strong></li>
      <li><strong>High-converting ad creatives</strong></li>
      <li><strong>ROI-focused campaign optimization</strong></li>
      <li><strong>Affordable pricing and ongoing support</strong></li>
    </ul>

    <h3 className="mt-10 text-2xl font-semibold">
      Conclusion
    </h3>

    <p className="mt-4 text-white/80">
      <strong>Meta Ads management</strong> is a powerful way to grow your business, generate leads and increase sales. 
      With our expert <strong>Meta Ads services</strong>, you can run high-performing campaigns that deliver measurable results. 
      Whether you want to scale your business or improve your marketing performance, our team is ready to help you succeed.
    </p>

  </div>
</section>
<Allinone/>
      {/* CTA */}
      <section className="pt-24 border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold">
            Start Your Meta Ads Campaign Today
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