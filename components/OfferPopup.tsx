
"use client";

import { useState, useEffect } from "react";

export default function OfferPopup() {
  const [show, setShow] = useState<boolean>(false);

  const POPUP_DELAY = 3000;
  const EXPIRE_TIME = 30 * 60 * 1000;

  useEffect(() => {
    const closedTime = localStorage.getItem("offerClosedTime");

    const shouldShow =
      !closedTime ||
      Date.now() - parseInt(closedTime, 10) > EXPIRE_TIME;

    let timeout: ReturnType<typeof setTimeout>;

    if (shouldShow) {
      if (closedTime) {
        localStorage.removeItem("offerClosedTime");
      }

      timeout = setTimeout(() => {
        setShow(true);
      }, POPUP_DELAY);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const closePopup = () => {
    localStorage.setItem("offerClosedTime", Date.now().toString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#0f0c29] shadow-2xl">

        {/* Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white text-xl"
        >
          &times;
        </button>

        {/* Popup Content */}
        <div className="px-8 py-12 text-center">

          {/* Icon */}
          {/* MVP InfoTech Logo */}
<div className="mx-auto mb-5 flex h-[110px] w-[150px] items-center justify-center">
  <img
    src="/mvp-logo.png"
    alt="MVP InfoTech Logo"
    className="h-full w-full object-contain"
  />
</div>

          {/* Heading */}
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Free Social Media Tool
          </h2>

          {/* Description */}
          <p className="mb-8 text-sm leading-relaxed text-white/60">
            Manage, schedule and track all your social media
            accounts in one place. Start using our free
            social media management tool today!
          </p>

          {/* CTA Button */}
          <a
            href="https://demo.mvpinfotech.in/"
            onClick={closePopup}
            className="block w-full rounded-xl bg-indigo-500 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
          >
            Explore Free Social Media Tool →
          </a>

          {/* Footer */}
          <p className="mt-5 text-xs text-white/35">
            Powered by MVP InfoTech
          </p>

        </div>
      </div>
    </div>
  );
}
