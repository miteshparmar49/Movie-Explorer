import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Ads Expert Australia | PPC & Search Ads Specialist",
  description:
    "Hire Google Ads expert to run high-converting PPC campaigns. Increase leads, traffic and ROI with data-driven strategies.",
  keywords: [
    "google ads expert",
    "ppc specialist",
    "google advertising services",
    "search ads expert",
    "google ppc management",
  ],
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
            Grow Your Business with Google Ads
          </h2>

          <p className="mt-6 text-white/80">
            Google Ads is one of the most powerful platforms to generate high-quality leads and traffic.
          </p>

          <p className="mt-4 text-white/80">
            I manage campaigns that focus on conversions, ROI and long-term growth.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Data-Driven PPC Strategy
          </h2>

          <p className="mt-4 text-white/80">
            Every campaign is optimized using analytics and performance data for best results.
          </p>

        </div>
      </section>

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