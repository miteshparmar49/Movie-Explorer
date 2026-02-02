"use client";

import { useState } from "react";

export default function ContactUs() {

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
    <section id="contact" className="pt-24">
      <div className="mx-auto max-w-5xl px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          Get In Touch
        </h2>

        <p className="mt-3 text-center text-white/60">
          Have a project in Neto, Maropost, Shopify, BigCommerce or Next.js?
        </p>

        <form
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >

          {/* Your Name */}
          <div>
            <label className="block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full rounded-full px-6 py-4 bg-white text-black outline-none"
            />
          </div>

          {/* Your Email */}
          <div>
            <label className="block mb-2 text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full rounded-full px-6 py-4 bg-white text-black outline-none"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block mb-2 text-sm">Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Enter your company name"
              className="w-full rounded-full px-6 py-4 bg-white text-black outline-none"
            />
          </div>

          {/* Contact No */}
          <div>
            <label className="block mb-2 text-sm">Contact No.</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your contact number"
              className="w-full rounded-full px-6 py-4 bg-white text-black outline-none"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm">Your Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message here"
              required
              className="w-full rounded-3xl px-6 py-4 bg-white text-black outline-none resize-none"
            />
          </div>

          {/* Button + status message */}
          <div className="md:col-span-2 flex flex-col items-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/30 hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {status === "success" && (
              <p className="mt-3 text-sm text-green-400 text-center">
                ✅ Your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="mt-3 text-sm text-red-400 text-center">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </div>

        </form>
      </div>
    </section>
  );
}
