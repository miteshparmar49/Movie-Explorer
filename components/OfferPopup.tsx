"use client";
import { useState, useEffect } from "react";

export default function OfferPopup() {
  const [show, setShow] = useState<boolean>(false);

  const popupDelay = 3000;
  const expireTime = 30 * 60 * 1000;

  useEffect(() => {
    const closedTime = localStorage.getItem("offerClosedTime");

    if (!closedTime) {
      setTimeout(() => setShow(true), popupDelay);
    } else {
      const now = Date.now();
      const savedTime = parseInt(closedTime, 10);

      if (now - savedTime > expireTime) {
        localStorage.removeItem("offerClosedTime");
        setTimeout(() => setShow(true), popupDelay);
      }
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("offerClosedTime", Date.now().toString());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="side-popup">
      <button className="popup-close" onClick={closePopup}>✕</button>

      <h3>🚀 Special Offer</h3>

      <p>
        Get <b>20% OFF</b> on your website development project.
      </p>

      <a href="/contact" className="popup-btn" onClick={closePopup}>
        Claim Offer
      </a>
    </div>
  );
}