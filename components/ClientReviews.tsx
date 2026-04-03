"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    name: "David Lee",
    role: "BigCommerce Client",
    review:
      "Professional team with deep technical knowledge. They handled our complex requirements with ease.",
    image: "/favicon_icon.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Shopify Store Owner",
    review:
      "Amazing experience! Fast delivery and great communication. Highly recommended!",
    image: "/bricksmasons_store_logo.jpg",
  },
  {
    name: "John Smith",
    role: "Neto Client",
    review:
      "They optimized our store performance and improved conversions significantly.",
    image: "/whitevision.png",
  },
];

export default function ClientReviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const r = reviews[active];

  return (
    <section className="pt-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-semibold tracking-tight">
          What Clients Say
        </h2>
        <p className="text-white/60 mt-3">
          Real feedback from real clients 🚀
        </p>

        {/* Glass Card */}
        <div className="mt-14 relative">

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl opacity-20"></div>

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-xl">

            {/* Quote */}
            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              “{r.review}”
            </p>

            {/* Stars */}
            <div className="flex justify-center mt-5 text-yellow-400 text-xl">
              {"★★★★★"}
            </div>

            {/* Profile */}
            <div className="mt-6 flex flex-col items-center">

              <img
                src={r.image}
                alt={r.name}
                className="w-14 h-14 rounded-full border border-white/20"
              />

              <h4 className="mt-3 font-semibold">{r.name}</h4>
              <p className="text-sm text-white/60">{r.role}</p>

            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-3 w-3 rounded-full transition ${
                i === active
                  ? "bg-purple-500 scale-125"
                  : "bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}