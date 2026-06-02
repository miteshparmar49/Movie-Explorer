// "use client";

// import { useState } from "react";

// export default function ContactUs() {

//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<"success" | "error" | null>(null);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const payload = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       company: formData.get("company") as string,
//       phone: formData.get("phone") as string,
//       message: formData.get("message") as string,
//     };

//     try {
//       setStatus(null);
//       setLoading(true);

//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setStatus("success");
//         form.reset();
//       } else {
//         setStatus("error");
//       }

//     } catch (err) {
//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="pt-24">
//       <div className="mx-auto max-w-5xl px-6">

//         <h2 className="text-3xl md:text-4xl font-semibold text-center">
//           Get In Touch
//         </h2>

//         <p className="mt-3 text-center text-white/60">
//           Have a project in Neto, Maropost, Shopify, BigCommerce or Next.js?
//         </p>

//         <form
//           className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6"
//           onSubmit={handleSubmit}
//         >

//           {/* Your Name */}
//           <div>
//             <label className="block mb-2 text-sm">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               required
//               className="w-full rounded-full px-6 py-4 bg-white text-black outline-none"
//             />
//           </div>

//           {/* Your Email */}
//           <div>
//             <label className="block mb-2 text-sm">Your Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email address"
//               required
//               className="w-full rounded-full px-6 py-4 bg-white text-black outline-none"
//             />
//           </div>

//           {/* Company Name */}
//           <div>
//             <label className="block mb-2 text-sm">Company Name</label>
//             <input
//               type="text"
//               name="company"
//               placeholder="Enter your company name"
//               className="w-full rounded-full px-6 py-4 bg-white text-black outline-none"
//             />
//           </div>

//           {/* Contact No */}
//           <div>
//             <label className="block mb-2 text-sm">Contact No.</label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your contact number"
//               className="w-full rounded-full px-6 py-4 bg-white text-black outline-none"
//             />
//           </div>

//           {/* Message */}
//           <div className="md:col-span-2">
//             <label className="block mb-2 text-sm">Your Message</label>
//             <textarea
//               name="message"
//               rows={5}
//               placeholder="Write your message here"
//               required
//               className="w-full rounded-3xl px-6 py-4 bg-white text-black outline-none resize-none"
//             />
//           </div>

//           {/* Button + status message */}
//           <div className="md:col-span-2 flex flex-col items-center mt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:opacity-90 transition disabled:opacity-60"
//             >
//               {loading ? "Sending..." : "Get Free Consultation"}
//             </button>

//             {status === "success" && (
//               <p className="mt-3 text-sm text-green-400 text-center">
//                 ✅ Your message has been sent successfully.
//               </p>
//             )}

//             {status === "error" && (
//               <p className="mt-3 text-sm text-red-400 text-center">
//                 ❌ Failed to send message. Please try again.
//               </p>
//             )}
//           </div>

//         </form>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiMail, FiPhone, FiMapPin, FiLock, FiShield, FiClock, FiStar,
} from "react-icons/fi";
import {
  FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

// ─── static data ──────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: <FiMail size={15} />,
    label: "Email",
    value: "mvpinfotechmitesh@gmail.com",
    href: "mailto:mvpinfotechmitesh@gmail.com",
  },
  {
    icon: <FiPhone size={15} />,
    label: "Phone",
    value: "+91 9574927922",
    href: "tel:+919574927922",
  },
  {
    icon: <FiMapPin size={15} />,
    label: "Location",
    value: "Rajkot, Gujarat, India",
    href: null,
  },
  {
    icon: <FaWhatsapp size={15} />,
    label: "WhatsApp",
    value: "Chat instantly on WhatsApp",
    href: "https://wa.me/919574927922?text=Hi%2C%20I%20need%20help%20with%20my%20eCommerce%20store",
  },
];

const socials = [
  { icon: <FaLinkedinIn size={13} />, label: "LinkedIn",  href: "https://www.linkedin.com/in/mvp-infotech/", hover: "hover:border-[#0077B5]/50 hover:bg-[#0077B5]/15 hover:text-[#93c5fd]" },
  { icon: <FaInstagram size={13} />, label: "Instagram", href: "https://www.instagram.com/mvp_infotech/",   hover: "hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-300" },
  { icon: <FaFacebookF size={13} />, label: "Facebook",  href: "https://www.facebook.com/mvpinfotech",      hover: "hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300" },
  { icon: <FaTwitter   size={13} />, label: "Twitter",   href: "https://x.com/mvpinfotech",                hover: "hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-sky-300" },
];

const trustBadges = [
  { icon: <FiClock  size={13} />, label: "Replies within 24h"      },
  { icon: <FiShield size={13} />, label: "Free consultation"        },
  { icon: <FiStar   size={13} />, label: "2000+ projects delivered"   },
];

// ─── component ────────────────────────────────────────────────────────────────

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name:    formData.get("name")    as string,
      email:   formData.get("email")   as string,
      company: formData.get("company") as string,
      phone:   formData.get("phone")   as string,
      message: formData.get("message") as string,
    };

    try {
      setStatus(null);
      setLoading(true);
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); form.reset(); }
      else               { setStatus("error"); }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative pt-24 pb-20 overflow-hidden">

      {/* ── ambient glows ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[440px] w-[440px] rounded-full bg-indigo-600/6 blur-[130px]" />
        <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-600/6 blur-[110px]" />
      </div>

      {/* ── dot-grid ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #a5b4fc 1px, transparent 1px)",
          backgroundSize:  "28px 28px",
        }}
      />

      <div className="mx-auto max-w-5xl px-6">

        {/* ── heading ── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span className="text-[10px] font-semibold tracking-[.22em] uppercase text-indigo-400">
              Contact
            </span>
          </div>

          <h2 className="font-extrabold tracking-tight text-4xl md:text-5xl text-white leading-[1.08]">
            Get In{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mt-4 text-sm text-white/42 max-w-lg mx-auto leading-relaxed font-light">
            Have a project in Neto, Maropost, Shopify, BigCommerce or Next.js? Let&apos;s talk.
          </p>
        </div>

        {/* ── trust badges ── */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12">
          {trustBadges.map(({ icon, label }, i) => (
            <div key={label} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:block h-4 w-px bg-white/10" />}
              <span className="flex items-center gap-1.5 text-[11.5px] text-white/38 font-light">
                <span className="text-indigo-400">{icon}</span>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── main card ── */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0e1120] grid grid-cols-1 lg:grid-cols-[1fr_2fr]">

          {/* left panel */}
          <div className="flex flex-col gap-7 border-b lg:border-b-0 lg:border-r border-white/[0.06] bg-gradient-to-b from-[#0d1228] to-[#0a0e1c] p-8">
            <div>
              <p className="text-[15px] font-bold text-white mb-2 leading-snug">
                Let&apos;s build something great
              </p>
              <p className="text-[12px] text-white/35 font-light leading-relaxed">
                Reach out and we&apos;ll respond within one business day.
              </p>
            </div>

            {contactInfo.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-indigo-500/22 bg-indigo-500/10 text-indigo-400">
                  {icon}
                </div>
                <div>
                  <p className="text-[9.5px] font-semibold uppercase tracking-[.08em] text-white/28 mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[12px] text-white/55 hover:text-white transition-colors break-all leading-relaxed"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[12px] text-white/55 leading-relaxed">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* socials */}
            <div className="mt-auto flex gap-2 pt-2">
              {socials.map(({ icon, label, href, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-8 w-8 items-center justify-center rounded-[9px] border border-white/10 bg-white/[0.03] text-white/45 transition-all duration-200 ${hover}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* right panel — form */}
          <div className="p-8">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <Field label="Your name" htmlFor="name">
                <input
                  id="name" name="name" type="text" required
                  placeholder="Full name"
                  className={inputCls}
                />
              </Field>

              <Field label="Email address" htmlFor="email">
                <input
                  id="email" name="email" type="email" required
                  placeholder="you@company.com"
                  className={inputCls}
                />
              </Field>

              <Field label="Company" htmlFor="company">
                <input
                  id="company" name="company" type="text"
                  placeholder="Company name"
                  className={inputCls}
                />
              </Field>

              <Field label="Phone" htmlFor="phone">
                <input
                  id="phone" name="phone" type="tel"
                  placeholder="+91 00000 00000"
                  className={inputCls}
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Your message" htmlFor="message">
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="Describe your project — platform, goals, timeline..."
                    className={`${inputCls} resize-none rounded-xl`}
                  />
                </Field>
              </div>

              {/* submit row */}
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Get Free Consultation
                      <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="flex items-center gap-1.5 text-[10.5px] text-white/22 font-light">
                  <FiLock size={11} className="text-indigo-500/60" />
                  Your data is private and never shared.
                </p>
              </div>

              {/* status messages */}
              {status === "success" && (
                <div className="sm:col-span-2 flex items-center gap-2.5 rounded-xl border border-green-500/20 bg-green-500/8 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-green-400 shrink-0" />
                  <p className="text-[12.5px] text-green-300 font-light">
                    Your message has been sent successfully. We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="sm:col-span-2 flex items-center gap-2.5 rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-red-400 shrink-0" />
                  <p className="text-[12.5px] text-red-300 font-light">
                    Failed to send your message. Please try again or email us directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── helpers ──────────────────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-[10px] border border-white/[0.08] bg-[#131828] px-4 py-3 text-[13px] text-white placeholder:text-white/20 outline-none transition-all duration-200 focus:border-indigo-500/50 focus:bg-[#161d32] font-light";

function Field({
  label, htmlFor, children,
}: {
  label: string; htmlFor: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-[10px] font-semibold uppercase tracking-[.1em] text-white/32"
      >
        {label}
      </label>
      {children}
    </div>
  );
}