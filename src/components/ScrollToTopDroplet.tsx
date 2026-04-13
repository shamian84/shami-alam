import React, { useEffect, useState } from "react";

const ScrollToTopDroplet: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed right-8 bottom-16 z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
      style={{ outline: "none" }}
    >
      <span className="relative flex flex-col items-center justify-center w-16 h-20">
        {/* Ripple effect */}
        <svg
          width="60"
          height="20"
          viewBox="0 0 60 20"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-ripple"
          style={{ zIndex: 0 }}
        >
          <ellipse
            cx="30"
            cy="10"
            rx="18"
            ry="5"
            fill="#06b6d4"
            opacity="0.18"
          />
        </svg>
        {/* Water droplet SVG */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg animate-bounce-wobble"
          style={{ zIndex: 1 }}
        >
          <defs>
            <radialGradient id="dropletGradient" cx="50%" cy="60%" r="60%">
              <stop offset="0%" stopColor="#e0f7fa" />
              <stop offset="60%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#06b6d4" />
            </radialGradient>
            <radialGradient id="highlightGradient" cx="30%" cy="30%" r="30%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="shadowGradient" cx="50%" cy="90%" r="40%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Main droplet */}
          <path
            d="M32 6C32 6 12 30 12 42C12 53.0457 21.9543 62 33 62C44.0457 62 54 53.0457 54 42C54 30 32 6 32 6Z"
            fill="url(#dropletGradient)"
            stroke="#0891b2"
            strokeWidth="2"
            className="drop-path"
          />
          {/* Highlight */}
          <ellipse
            cx="26"
            cy="22"
            rx="7"
            ry="3.5"
            fill="url(#highlightGradient)"
          />
          {/* Shadow at base */}
          <ellipse cx="33" cy="59" rx="10" ry="3" fill="url(#shadowGradient)" />
          {/* Up arrow */}
          <g>
            <path
              d="M32 44V28"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M26 34L32 28L38 34"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </span>
    </button>
  );
};

export default ScrollToTopDroplet;
