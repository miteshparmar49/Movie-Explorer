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
            <li><a href="#services">Services</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#portfolio">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:opacity-90 transition disabled:opacity-60"
          >
            Hire Me
          </a>

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
                <a
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#tech-stack"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3"
                >
                  Tech Stack
                </a>
              </li>

              <li>
                <a
                  href="#portfolio"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3"
                >
                  Work
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3"
                >
                  Contact
                </a>
              </li>

              <li className="p-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-md bg-white text-black text-center py-2 font-medium"
                >
                  Hire Me
                </a>
              </li>

            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
