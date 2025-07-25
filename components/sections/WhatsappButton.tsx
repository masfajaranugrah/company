"use client";

import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  useEffect(() => {
    const btn = document.querySelector(".whatsapp-btn") as HTMLElement;
    const tooltip = document.querySelector(".tooltip") as HTMLElement;

    if (!btn || !tooltip) return;

    // Initial bounce animation
    btn.style.transform = "scale(0)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
      btn.style.transition = "transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
    }, 500);

    setTimeout(() => {
      btn.style.transition = "all 0.3s ease";
    }, 1000);

    const interval = setInterval(() => {
      tooltip.style.display = "block";
      tooltip.style.opacity = "1";
      tooltip.style.right = "80px";

      setTimeout(() => {
        tooltip.style.opacity = "0";
        tooltip.style.right = "70px";
        setTimeout(() => {
          tooltip.style.display = "none";
        }, 300);
      }, 5000);
    }, 10000); // ← ini sebelumnya terlalu cepat (1000ms)

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="whatsapp-btn position-fixed end-0 m-4"
      style={{ bottom: "4rem", zIndex: 9999 }} // Naik dari bawah
    >
      <a
        href="https://wa.me/6287836167585?text=Hello%20Dev%20Dream"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi kami via WhatsApp"
        className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow"
        style={{
          width: "60px",
          height: "60px",
          background: "linear-gradient(135deg, #8a2be2, #9932cc)",
          position: "relative",
        }}
      >
         <FaWhatsapp size={28} color="white"  style={{position:"absolute"}} />

        <span
          className="tooltip position-absolute bg-white text-dark fw-bold small px-2 py-1 rounded shadow"
          style={{
            top: "50%",
            right: "70px",
            transform: "translateY(-50%)",
            opacity: 0,
            display: "none",
            whiteSpace: "nowrap",
          }}
        >
          Chat with Us
        </span>
      </a>
    </div>
  );
}
