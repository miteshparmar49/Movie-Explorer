import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Amazon PPC Expert Australia | Amazon Ads Specialist",
  description:
    "Hire an Amazon PPC expert to increase sales, reduce ACoS and optimize your Amazon advertising campaigns.",
  keywords: [
    "amazon ppc expert",
    "amazon ads specialist",
    "amazon advertising services",
    "amazon campaign management",
    "amazon marketing",
  ],
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
            Grow Your Amazon Sales with PPC
          </h2>

          <p className="mt-6 text-white/80">
            Amazon PPC is essential for increasing visibility and driving sales.
          </p>

          <p className="mt-4 text-white/80">
            I manage and optimize campaigns to maximize ROI and minimize wasted spend.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Data-Driven Amazon Advertising
          </h2>

          <p className="mt-4 text-white/80">
            Every decision is based on data analysis, ensuring consistent growth and performance.
          </p>

        </div>
      </section>

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