"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

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
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
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

              <li>
                <Link
                 href="/services"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3"
                >
                  Services
                </Link>
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
