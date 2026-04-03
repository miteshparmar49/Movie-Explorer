import Image from "next/image";
import Services from "@/components/services";
import TechStack from "@/components/tech";
import WhyChooseMe from "@/components/whyme";
import LatestProjects from "@/components/letestproject";
import ContactUs from "@/components/contactus";
import AboutUs from "@/components/About";
import Link from "next/link";
import ClientReviews from "@/components/ClientReviews";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden py-28">
        {/* background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full
            bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Full-Stack Ecommerce Developer for
              Neto By Maropost, Shopify, wordpress & BigCommerce
            </h1>

            <p className="mt-6 text-lg text-white/70">
              I help businesses build fast, scalable and SEO-friendly
              ecommerce and web platforms using Next.js, React, Vue.js
              and Node.js.
            </p>

            <div className="mt-8 flex gap-4">
              {/* <Link
                href="ourwork"
                className="bg-white text-black px-6 py-3 rounded-md font-medium"
              >
                View Work
              </Link> */}

              <Link
                href="contact"
                className="border border-white/20 px-6 py-3 rounded-md"
              >
              Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block aspect-video rounded-xl overflow-hidden border border-white/10 relative">
            <Image
              src="/hero.jpg"
              alt="Full-Stack Ecommerce Developer working on Neto, Maropost, Shopify & BigCommerce platforms"
              fill
              className="object-cover"
              quality={70}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
    
    <AboutUs/>
        <Services />
      <TechStack/>
    <WhyChooseMe/>


      {/* PORTFOLIO */}
      <LatestProjects/>
<ClientReviews/>
      {/* CONTACT */}
        <ContactUs />
    </>
  );
}
