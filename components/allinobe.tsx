
import Link from "next/link";

export default function Allinone() {
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

// Updated SEO-friendly links (no /services)
const skillLinks: Record<string, string> = {
  "Neto By Maropost": "/neto-by-maropost-development",
  "Shopify": "/shopify-development-services",
  "WordPress": "/wordpress-development-services",
  "BigCommerce": "/bigcommerce-development-services",
  "SEO": "/seo-services",
  "Vue.js": "/vue-js-development",
  "React.js": "/react-js-development",
  "Node.js": "/node-js-development",
  "Next.js": "/next-js-development",
  "Express.js": "/express-js-development",
  "Amazon PPC": "/amazon-ppc-services",
  "Meta Ads": "/meta-ads-services",
  "Google Ads": "/google-ads-services",
}; 

  return (
    <section id="about" className="relative pb-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        
        {/* Skills */}
       <div className="mt-10 flex flex-wrap justify-center gap-3 mvp_about">
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

      </div>
    </section>
  );
}