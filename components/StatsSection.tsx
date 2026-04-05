"use client";

const stats = [
  {
    title: "50+",
    label: "Projects Completed",
    icon: "🚀",
  },
  {
    title: "10+",
    label: "Countries Served",
    icon: "🌍",
  },
  {
    title: "40%",
    label: "Avg Performance Boost",
    icon: "⚡",
  },
];

export default function StatsSection() {
  return (
    <section className="mb-24 border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
       

        {/* Container */}
        <div className="relative">

          <div className="grid grid-cols-1 md:grid-cols-3 text-center">

            {stats.map((item, i) => (
              <div
                key={i}
                className="relative py-10 px-6 flex flex-col items-center"
              >

                {/* Icon */}
                

                {/* Number */}
                <h3 className="text-5xl font-semibold text-white">
                  {item.title}
                </h3>

                {/* Label */}
                <p className="text-white/60 mt-2 text-sm">
                  {item.label}
                </p>

                {/* Divider */}
                {i !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10"></div>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}