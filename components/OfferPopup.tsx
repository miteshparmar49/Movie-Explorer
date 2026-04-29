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

      <h3 className="text-blue-600">Get 5 Hours of FREE Website Development</h3>
<p>New customers only — No upfront cost
Test our work before you pay anything</p>
      <p className="popup-subtext">
          Get <b>20% OFF</b> your first project <br />
          <span className="highlight">Save up to $150</span>
        </p>

      <a href="/contact" className="popup-btn" onClick={closePopup}>
        Claim Offer
      </a>
    </div>
  );
}