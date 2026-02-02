import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-[#0a0f1f] border-t border-white/10">

      {/* soft glow – same style as other sections */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-160px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div>

        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-[2fr_1fr_1fr] items-start">

          {/* Left */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/mvp_logo-removebg-preview.png"
                alt="MVP Infotech – Full Stack Ecommerce Developer"
                width={160}
                height={48}
                className="h-[52px] w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm text-white/70 leading-relaxed">
               I am a <strong className="text-white">full-stack eCommerce developer</strong> specializing in <strong className="text-white"> Neto, Maropost Commerce Cloud, Shopify, BigCommerce, and WordPress</strong>, 
        building <strong className="text-white">fast, responsive, and SEO-friendly online stores</strong> using <strong className="text-white">Next.js, React, Vue.js, and Node.js</strong>. I also provide 
        <strong className="text-white"> platform migration services</strong>, moving stores from Neto or other platforms 
        without losing SEO, data, or performance, helping businesses <strong className="text-white">boost sales, improve user experience, and grow online efficiently</strong>.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <p className="font-semibold mb-5 text-white">Our Services</p>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-white transition">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <p className="font-semibold mb-5 text-white">Contact</p>

            <ul className="space-y-4 text-sm text-white/70">

              <li className="flex items-center gap-3">
                <FiMail className="text-white/80" />
                <a
                  href="mailto:mvpinfotechmitesh@gmail.com"
                  className="hover:text-white transition"
                >
                  mvpinfotechmitesh@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="text-white/80" />
                <span>+91 9574927922</span>
              </li>

              <li className="flex items-center gap-3">
                <FiMapPin className="text-white/80" />
                <span>Rajkot, Gujarat, India</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>
          </address>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/60 flex flex-col md:flex-row gap-2 justify-between">
            <p>Copyright © {year} MVP InfoTech. All Rights Reserved.</p>
            <p>Neto · Maropost · Shopify · BigCommerce · Next.js</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
