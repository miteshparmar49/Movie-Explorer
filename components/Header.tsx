"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
const [serviceOpen, setServiceOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <nav
        className="mx-auto max-w-7xl px-6 py-4"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/mvp_logo-removebg-preview.png"
              alt="MVP Infotech – Full Stack Ecommerce Developer"
              width={140}
              height={40}
              priority
              className="h-[36px] w-auto object-contain"
            />
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm" >
            <li><Link href="/about">About Us</Link></li>
            {/* <li><Link href="/services">Services</Link></li> */}
    <li className="relative cursor-pointer">

  {/* Button */}
  <button
    onClick={(e) => {
      e.stopPropagation();
      setServiceOpen(!serviceOpen);
    }}
    className="flex items-center gap-1  cursor-pointer"
  >
    Services
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`-mr-1 size-5 text-gray-400 transition ${
        serviceOpen ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  </button>

  {/* Dropdown */}
  <div
    onClick={(e) => e.stopPropagation()}
    className={`absolute left-0 top-full mt-6 w-[280px] bg-black/90 border border-white/10 rounded-xl p-3 backdrop-blur z-50 transition-all duration-200 ${
      serviceOpen
        ? "opacity-100 visible"
        : "opacity-0 invisible pointer-events-none"
    }`}
  >

    <ul className="text-sm" onClick={() => setServiceOpen(false)} >

      {/* Ecommerce */}
      

      <li className="border-b border-white/10 last:border-none">
        <Link href="/neto-by-maropost-development" className="block py-2 px-2 hover:bg-white/5 rounded"  >
          Neto by Maropost
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/shopify-development-services" className="block py-2 px-2 hover:bg-white/5 rounded">
          Shopify Development
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/wordpress-development-services" className="block py-2 px-2 hover:bg-white/5 rounded">
          WordPress Development
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/bigcommerce-development-services" className="block py-2 px-2 hover:bg-white/5 rounded">
          BigCommerce Development
        </Link>
      </li>

      {/* Development */}
      

      <li className="border-b border-white/10 last:border-none">
        <Link href="/vue-js-development" className="block py-2 px-2 hover:bg-white/5 rounded">
          Vue.js Development
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/react-js-development" className="block py-2 px-2 hover:bg-white/5 rounded">
          React.js Development
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/node-js-development" className="block py-2 px-2 hover:bg-white/5 rounded">
          Node.js Development
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/next-js-development" className="block py-2 px-2 hover:bg-white/5 rounded">
          Next.js Development
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/express-js-development" className="block py-2 px-2 hover:bg-white/5 rounded">
          Express.js Development
        </Link>
      </li>

      {/* Marketing */}
    

      <li className="border-b border-white/10 last:border-none">
        <Link href="/seo-services" className="block py-2 px-2 hover:bg-white/5 rounded">
          SEO Services
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/amazon-ppc-services" className="block py-2 px-2 hover:bg-white/5 rounded">
          Amazon PPC Services
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/meta-ads-services" className="block py-2 px-2 hover:bg-white/5 rounded">
          Meta Ads Services
        </Link>
      </li>

      <li className="border-b border-white/10 last:border-none">
        <Link href="/google-ads-services" className="block py-2 px-2 hover:bg-white/5 rounded">
          Google Ads Services
        </Link>
      </li>
 <li className="border-b border-white/10 last:border-none">
        <Link href="/blog" className="block py-2 px-2 hover:bg-white/5 rounded">
         Blog
        </Link>
      </li>
    </ul>

  </div>
</li>
           <li><Link href="/ourwork">Our Work</Link></li>
             <li><Link href="/contact">Contact Us</Link></li>
          </ul>

          {/* Desktop CTA */}
          <Link
            href="contact"
            className="hidden md:inline-flex rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:opacity-90 transition disabled:opacity-60"
          >
            Hire Me
          </Link>

          {/* Mobile button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden mt-4 rounded-xl border border-white/10 bg-black/80 backdrop-blur">
            <ul className="flex flex-col divide-y divide-white/10 text-sm">

              <li>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3"
                >
                  About Us
                </Link>
              </li>

              {/* <li>
                <Link
                 href="/services"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3"
                >
                  Services
                </Link>
              </li> */}
              <li className="px-4 py-3">

  <details className="group">

    <summary className="flex items-center justify-between cursor-pointer list-none">
      Services
      <span className="text-xs transition group-open:rotate-180"><svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`-mr-1 size-5 text-gray-400 transition ${
        serviceOpen ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg></span>
    </summary>

    <ul className="mt-3 space-y-2 text-sm pl-3">

      <li><Link href="/neto-by-maropost-development" onClick={() => setOpen(false)}>Neto by Maropost</Link></li>
      <li><Link href="/shopify-development-services" onClick={() => setOpen(false)}>Shopify Development</Link></li>
      <li><Link href="/wordpress-development-services" onClick={() => setOpen(false)}>WordPress Development</Link></li>
      <li><Link href="/bigcommerce-development-services" onClick={() => setOpen(false)}>BigCommerce Development</Link></li>

      <li><Link href="/vue-js-development" onClick={() => setOpen(false)}>Vue.js Development</Link></li>
      <li><Link href="/react-js-development" onClick={() => setOpen(false)}>React.js Development</Link></li>
      <li><Link href="/node-js-development" onClick={() => setOpen(false)}>Node.js Development</Link></li>
      <li><Link href="/next-js-development" onClick={() => setOpen(false)}>Next.js Development</Link></li>
      <li><Link href="/express-js-development" onClick={() => setOpen(false)}>Express.js Development</Link></li>

      <li><Link href="/seo-services" onClick={() => setOpen(false)}>SEO Services</Link></li>
      <li><Link href="/amazon-ppc-services" onClick={() => setOpen(false)}>Amazon PPC</Link></li>
      <li><Link href="/meta-ads-services" onClick={() => setOpen(false)}>Meta Ads</Link></li>
      <li><Link href="/google-ads-services" onClick={() => setOpen(false)}>Google Ads</Link></li>
<li><Link href="/blog" onClick={() => setOpen(false)}>Blog</Link></li>
    </ul>

  </details>

</li>

              <li>
                <Link
                  href="/ourwork"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3"
                >
                 Our Work
                </Link>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3"
                >
                  Contact Us
                </a>
              </li>

              <li className="p-4">
                <Link
                 href="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-md bg-white text-black text-center py-2 font-medium"
                >
                  Hire Me
                </Link>
              </li>

            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
