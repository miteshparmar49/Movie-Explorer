import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

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
            Grow Faster with Meta Advertising
          </h2>

          <p className="mt-6 text-white/80">
            Meta Ads (Facebook & Instagram) are powerful tools to reach targeted audiences.
          </p>

          <p className="mt-4 text-white/80">
            I create high-performing campaigns that generate leads, sales and brand awareness.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Data-Driven Ad Strategy
          </h2>

          <p className="mt-4 text-white/80">
            Every campaign is optimized using real data for maximum ROI and consistent growth.
          </p>

        </div>
      </section>

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