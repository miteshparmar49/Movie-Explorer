// "use client";
// import { useState, useEffect } from "react";

// export default function OfferPopup() {
//   const [show, setShow] = useState<boolean>(false);

//   const popupDelay = 3000;
//   const expireTime = 30 * 60 * 1000;

//   useEffect(() => {
//     const closedTime = localStorage.getItem("offerClosedTime");

//     if (!closedTime) {
//       setTimeout(() => setShow(true), popupDelay);
//     } else {
//       const now = Date.now();
//       const savedTime = parseInt(closedTime, 10);

//       if (now - savedTime > expireTime) {
//         localStorage.removeItem("offerClosedTime");
//         setTimeout(() => setShow(true), popupDelay);
//       }
//     }
//   }, []);

//   const closePopup = () => {
//     localStorage.setItem("offerClosedTime", Date.now().toString());
//     setShow(false);
//   };

//   if (!show) return null;

//   return (
//     <div className="side-popup">
//       <button className="popup-close" onClick={closePopup}>✕</button>

      
//       <p className="popup-subtext">
//           Get <b>20% OFF</b> your first project <br />
//           <span className="highlight">Save up to $150</span>
//         </p>

//       <a href="/contact" className="popup-btn" onClick={closePopup}>
//         Claim Offer
//       </a>
//     </div>
//   );
// }


"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function OfferPopup() {
  const [show, setShow] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(14 * 60 + 59);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const POPUP_DELAY = 3000;
  const EXPIRE_TIME = 30 * 60 * 1000;

  useEffect(() => {
    const closedTime = localStorage.getItem("offerClosedTime");
    const shouldShow = !closedTime || Date.now() - parseInt(closedTime, 10) > EXPIRE_TIME;

    if (shouldShow) {
      if (closedTime) localStorage.removeItem("offerClosedTime");
      setTimeout(() => setShow(true), POPUP_DELAY);
    }
  }, []);

  useEffect(() => {
    if (!show) return;
    timerRef.current = setInterval(() => {
      setSeconds((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [show]);

  const closePopup = () => {
    localStorage.setItem("offerClosedTime", Date.now().toString());
    if (timerRef.current) clearInterval(timerRef.current);
    setShow(false);
  };

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[320px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">

      {/* Header — urgency bar */}
      <div className="bg-[#13103a] px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-[#13103a] text-[10px] font-semibold px-2 py-0.5 rounded">
            LIMITED OFFER
          </span>
          <span className="text-white/50 text-xs">Ends in</span>
        </div>
        <div className="flex items-center gap-1 font-mono">
          <span className="bg-white/10 text-white text-xs font-semibold px-2 py-0.5 rounded tabular-nums">
            {mins}
          </span>
          <span className="text-white/40 text-xs">:</span>
          <span className="bg-white/10 text-white text-xs font-semibold px-2 py-0.5 rounded tabular-nums">
            {secs}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="bg-[#0f0c29] px-5 pt-5 pb-4 relative">

        <button
          onClick={closePopup}
          aria-label="Close offer"
          className="absolute top-3 right-4 text-white/30 hover:text-white/70 transition-colors text-base leading-none"
        >
          ✕
        </button>

        {/* Headline */}
        <p className="text-white text-xl font-semibold leading-snug mb-1">
          Get{" "}
          <span className="text-indigo-400">20% off</span>{" "}
          your first project
        </p>
        <p className="text-white/55 text-sm leading-relaxed mb-4">
          Save up to{" "}
          <strong className="text-white">$150 AUD</strong>{" "}
          on a custom Neto by maropost Shopify, WordPress or WooCommerce website.
        </p>

        {/* Micro benefits */}
        <div className="flex flex-wrap gap-2 mb-4">
          {["Fast delivery", "No lock-in", "Free audit"].map((b) => (
            <span
              key={b}
              className="flex items-center gap-1 bg-white/8 rounded-full px-3 py-1 text-[11px] text-white/60"
            >
              <span className="text-green-400 text-[10px]">✓</span>
              {b}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          onClick={closePopup}
          className="block w-full text-center bg-indigo-500 hover:bg-indigo-400 transition-colors text-white font-medium text-sm py-3 rounded-xl mb-3"
        >
          Claim my 20% discount →
        </Link>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex">
            {["JM", "SR", "AK", "PL"].map((initials) => (
              <div
                key={initials}
                className="w-5 h-5 rounded-full bg-indigo-900 border-2 border-[#0f0c29] -ml-1 first:ml-0 flex items-center justify-center text-[8px] font-medium text-indigo-300"
              >
                {initials}
              </div>
            ))}
          </div>
          <span className="text-[11px] text-white/40">
            47 businesses claimed this month
          </span>
        </div>

        {/* Trust line */}
        <p className="text-center text-[10px] text-white/25">
          No credit card required · We reply within 2 hours
        </p>

      </div>
    </div>
  );
}