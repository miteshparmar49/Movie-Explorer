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
//               {loading ? "Sending..." : "Send"}
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

/* ------------------------------------------------------------------ */
/*  Minimal inline icons — no external icon package required          */
/* ------------------------------------------------------------------ */

const iconCls = "w-[18px] h-[18px]";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconCls}>
    <path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconCls}>
    <path
      d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.6 21 3 12.4 3 2c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.3 1l-2 2.3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconCls}>
    <path
      d="M12 22s7-6.6 7-12a7 7 0 10-14 0c0 5.4 7 12 7 12z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className={iconCls}>
    <path
      d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M8.5 8.8c.2-.5.5-.5.8-.5h.6c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.8.1.1.1.3 0 .4-.1.2-.1.3-.3.5s-.3.3-.1.6c.2.3.9 1.5 2 2.4 1.4 1.1 2 1.2 2.3 1.1.2-.1.5-.5.6-.7.2-.2.4-.2.6-.1l1.5.7c.2.1.4.2.4.4 0 .8-.5 1.6-1.2 1.9-1.4.6-3.2.3-5.3-1.4-1.7-1.3-2.8-3-3.2-3.9-.3-.6-.6-1.3-.5-2 .1-.6.5-1.2.9-1.6z"
      fill="currentColor"
    />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5">
    <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 10V7a4 4 0 118 0v3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.9.25-1.5 1.55-1.5H16.5V4.3C16.2 4.26 15.2 4.2 14 4.2c-2.4 0-4 1.46-4 4.15V10.5H7.5v3H10V21z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20 5.9c-.6.3-1.3.5-2 .6.7-.4 1.3-1.2 1.5-2-.7.4-1.5.7-2.3.9A3.6 3.6 0 0011.5 8.8c0 .3 0 .6.1.8-3-.1-5.6-1.6-7.4-3.7-.3.5-.5 1.2-.5 1.8 0 1.2.6 2.3 1.6 3-.6 0-1.1-.2-1.6-.4v.1c0 1.7 1.2 3.2 2.9 3.5-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.4 1.8 2.5 3.4 2.5A7.2 7.2 0 014 18.4a10.2 10.2 0 005.5 1.6c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.1 1.8-1.8z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Shared field wrapper                                              */
/* ------------------------------------------------------------------ */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block mb-2 text-[11px] tracking-wide uppercase text-white/50 font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3.5 text-white placeholder-white/30 outline-none focus:border-indigo-400/60 focus:bg-white/[0.07] transition";

/* ------------------------------------------------------------------ */
/*  Contact info list (left panel)                                    */
/* ------------------------------------------------------------------ */

const CONTACT_ITEMS = [
  { icon: <MailIcon />, label: "Email", value: "mvpinfotechmitesh@gmail.com", href: "mailto:mvpinfotechmitesh@gmail.com" },
  { icon: <PhoneIcon />, label: "Phone", value: "+91 9574927922", href: "tel:+919574927922" },
  { icon: <PinIcon />, label: "Location", value: "Rajkot, Gujarat, India", href: "https://www.google.com/maps/search/?api=1&query=Rajkot%2C+Gujarat%2C+India" },
  { icon: <WhatsAppIcon />, label: "WhatsApp", value: "Chat instantly on WhatsApp", href: "https://wa.me/919574927922?text=Hi%2C%20I%20need%20Neto%20developer" },
];

const SOCIALS = [
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/mvp-infotech/" },
  { icon: <InstagramIcon />, href: "https://www.instagram.com/mvp_infotech/" },
  { icon: <FacebookIcon />, href: "https://www.facebook.com/mvpinfotech" },
  { icon: <TwitterIcon />, href: "https://x.com/mvpinfotech" },
];

/* ------------------------------------------------------------------ */
/*  Main contact section                                              */
/* ------------------------------------------------------------------ */

function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      setStatus(null);
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050507]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-[#0b0b12] grid grid-cols-1 md:grid-cols-10 overflow-hidden">
          {/* Left panel — intro + contact info (30%) */}
          <div className="md:col-span-4 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
            <h3 className="text-xl font-bold text-white">Let's build something great</h3>
            <p className="mt-2 text-sm text-white/50">
              Reach out and we'll respond within one business day.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {CONTACT_ITEMS.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3.5 group">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-500/25 transition">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block text-[11px] tracking-wide uppercase text-white/40">
                      {item.label}
                    </span>
                    <span className="block text-sm font-medium text-white group-hover:text-indigo-300 transition">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-9 flex gap-2.5">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/25 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right panel — form (70%) */}
          <div className="md:col-span-6 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Your Name">
                <input type="text" name="name" placeholder="Full name" required className={inputCls} />
              </Field>

              <Field label="Email Address">
                <input type="email" name="email" placeholder="you@company.com" required className={inputCls} />
              </Field>

              <Field label="Company">
                <input type="text" name="company" placeholder="Company name" className={inputCls} />
              </Field>

              <Field label="Phone">
                <input type="tel" name="phone" placeholder="+91 00000 00000" className={inputCls} />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Your Message">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your project — platform, goals, timeline..."
                    required
                    className={`${inputCls} resize-none`}
                  />
                </Field>
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Get Free Consultation"}
                  {!loading && <ArrowRight />}
                </button>

                <span className="inline-flex items-center gap-1.5 text-xs text-white/40">
                  <LockIcon />
                  Your data is private and never shared.
                </span>
              </div>

              {status === "success" && (
                <p className="sm:col-span-2 text-sm text-green-400">
                  ✅ Your message has been sent successfully.
                </p>
              )}
              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-red-400">
                  ❌ Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Location / map — same card language, sits below the contact card  */
/* ------------------------------------------------------------------ */

function LocationMap() {
  return (
    <section className="pb-24 bg-[#050507]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-[#0b0b12] overflow-hidden">
          <div className="flex items-center justify-between px-8 md:px-10 py-6 border-b border-white/10">
            <div className="flex items-center gap-3.5">
              <span className="shrink-0 w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center text-indigo-300">
                <PinIcon />
              </span>
              <span>
                <span className="block text-[11px] tracking-wide uppercase text-white/40">
                  Location
                </span>
                <span className="block text-sm font-medium text-white">
                  Rajkot, Gujarat, India
                </span>
              </span>
            </div>

            <a
              href="https://maps.app.goo.gl/QA1sQtvNitkoFd6g9"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:border-white/25 transition"
            >
              Get Directions
              <ArrowRight />
            </a>
          </div>

          <div className="p-4">
            <div className="rounded-xl overflow-hidden border border-white/10">
           <iframe
                title="MVP Infotech location in Rajkot, Gujarat"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.2003423501305!2d70.83409976101343!3d22.30826169770888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b73e7bb6ec95%3A0x870e0f0cacf7d2e9!2sMVP%20InfoTech!5e0!3m2!1sen!2sin!4v1784783411678!5m2!1sen!2sin"
                className="w-full h-[320px] md:h-[380px] grayscale-[60%] contrast-125"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page — renders both sections                                      */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <main className="bg-[#050507] min-h-screen">
      <ContactUs />
      <LocationMap />
    </main>
  );
}



