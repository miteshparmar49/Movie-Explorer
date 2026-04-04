"use client";

import Image from "next/image";

const logos = [
  {
    src: "/logos/shopify.svg",
    url: "https://www.shopify.com",
  },
  {
    src: "/logos/bigcommerce.svg",
    url: "https://www.bigcommerce.com",
  },
  {
    src: "/logos/neto.svg",
    url: "https://www.maropost.com/commerce",
  },
  {
    src: "/logos/wordpress.svg",
    url: "https://wordpress.org",
  },
  {
    src: "/logos/google.svg",
    url: "https://ads.google.com",
  },
  {
    src: "/logos/meta.svg",
    url: "https://www.facebook.com/business",
  },
];

// duplicate for infinite loop
const loopLogos = [...logos, ...logos];

export default function ClientLogosSlider() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold">
          Trusted by Leading Platforms
        </h2>

        <p className="text-white/60 mt-2 text-sm">
          Working with top ecommerce & marketing technologies
        </p>

        <div className="mt-10 relative">

          <div className="flex w-max animate-scroll gap-12">

            {loopLogos.map((logo, i) => (
              <a
                key={i}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={logo.src}
                  alt="client logo"
                  width={100}
                  height={40}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}