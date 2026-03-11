// import Link from "next/link";

// export default function AboutUs() {
//   const skills = [
//     "Neto By Maropost",
//     "Shopify",
//     "WordPress",
//     "BigCommerce",
//      "SEO",
//     "Vue.js",
//     "React.js",
//     "Node.js",
//     "Next.js",
//     "Express.js",
//   ];

//   return (
//     <section
//       id="about"
//       className="relative pb-24"
//     >
//       <div className="mx-auto max-w-5xl px-6 text-center">

//         <h2 className="text-3xl md:text-4xl font-semibold">
//           About Us
//         </h2>

//         <p className="mt-5 text-white/70 leading-relaxed max-w-3xl mx-auto">
//           We are a results-driven <strong className="text-white">full-stack eCommerce development team</strong> specializing in modern web technologies and leading commerce platforms.
//           We help businesses build <strong className="text-white">high-performance, scalable and SEO-friendly online stores</strong> using the latest frontend and backend frameworks.
//         </p>

//         <p className="mt-4 text-white/70 leading-relaxed max-w-3xl mx-auto">
//           Our expertise covers custom eCommerce development, platform integrations, performance optimization
//           and conversion-focused UI/UX for brands running on
//           <strong className="text-white">
//             {" "}Neto, Maropost Commerce Cloud, Shopify and BigCommerce
//           </strong>. 
//           We focus on clean architecture, fast loading experiences and long-term maintainability.
//         </p>

//         {/* Skills */}
//         <div className="mt-10 flex flex-wrap justify-center gap-3">
//           {skills.map((skill) => (

//             <span
//               key={skill}
//               className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80
//                          hover:bg-white/10 hover:text-white transition"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>

//         {/* SEO helper line */}
//         <p className="sr-only">
//           Vue.js developer, React.js developer, Next.js developer, Node.js and Express.js backend developer,
//           Neto ecommerce developer, Maropost commerce cloud expert, Shopify developer, BigCommerce developer,
//           WordPress developer and technical SEO specialist.
//         </p>

//       </div>
//     </section>
//   );
// }
import Link from "next/link";

export default function AboutUs() {
  const skills = [
    "Neto By Maropost",
    "Shopify",
    "WordPress",
    "BigCommerce",
    "SEO",
    "Vue.js",
    "React.js",
    "Node.js",
    "Next.js",
    "Express.js",
    "Amazon PPC",
    "Meta Ads",
    "Google Ads",
  ];

  // Only skills you want to link
  const skillLinks: Record<string, string> = {
    "Neto By Maropost": "/neto",
    "Vue.js": "/services/vue-js",
  };

  return (
    <section id="about" className="relative pb-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">About Us</h2>

        <p className="mt-5 text-white/70 leading-relaxed max-w-3xl mx-auto">
          We are a results-driven{" "}
          <strong className="text-white">
            full-stack eCommerce development team
          </strong>{" "}
          specializing in modern web technologies and leading commerce
          platforms. We help businesses build{" "}
          <strong className="text-white">
            high-performance, scalable and SEO-friendly online stores
          </strong>{" "}
          using the latest frontend and backend frameworks.
        </p>

        <p className="mt-4 text-white/70 leading-relaxed max-w-3xl mx-auto">
          Our expertise covers custom eCommerce development, platform
          integrations, performance optimization and conversion-focused UI/UX
          for brands running on
          <strong className="text-white">
            {" "}
            Neto, Maropost Commerce Cloud, Shopify and BigCommerce
          </strong>
          . We focus on clean architecture, fast loading experiences and
          long-term maintainability.
        </p>

        {/* Skills */}
       <div className="mt-10 flex flex-wrap justify-center gap-3">
  {skills.map((skill) => {
    const href = skillLinks[skill];

    const badge = (
      <span
        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80
                   hover:bg-white/10 hover:text-white transition"
      >
        {skill}
      </span>
    );

    return href ? (
      <Link key={skill} href={href} aria-label={skill}>
        {badge}
      </Link>
    ) : (
      <span className="mb-2" key={skill}>{badge}</span>
    );
  })}
</div>

        {/* SEO helper line */}
        <p className="sr-only">
          Vue.js developer, React.js developer, Next.js developer, Node.js and
          Express.js backend developer, Neto ecommerce developer, Maropost
          commerce cloud expert, Shopify developer, BigCommerce developer,
          WordPress developer and technical SEO specialist.
        </p>
      </div>
    </section>
  );
}