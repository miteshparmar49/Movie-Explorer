"use client";
import { useState, useEffect } from "react";

export default function OfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const closed = localStorage.getItem("offerClosed");

    if (!closed) {
      setTimeout(() => {
        setShow(true);
      }, 3000);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("offerClosed", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        <button className="popup-close" onClick={closePopup}>✕</button>

        <h2>🎉 Welcome Offer</h2>

        <p>
          Get <strong>20% OFF</strong> on your development project.
        </p>

        <a href="/contact" className="popup-btn" onClick={closePopup}>
          Claim Offer
        </a>

      </div>
    </div>
  );
}

