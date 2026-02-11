import React, { useState } from "react";

const WhyUsCard = ({ service }) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="
        group relative min-w-[280px] w-[280px] h-[250px]
        rounded-2xl overflow-hidden
        bg-white dark:bg-[#1b120b]
        border border-orange-200/60 dark:border-orange-700/40
        shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]
        transition-transform duration-500
        hover:-translate-y-2
      "
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(
            600px circle at ${pos.x}% ${pos.y}%,
            rgba(255,111,0,0.15),
            transparent 40%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-100">
          {service.title}
        </h3>

        {/* Divider */}
        <div className="mt-3 h-px w-12 bg-orange-500/60 rounded-full" />

        {/* Description */}
        <p
          className="
            mt-6 text-sm leading-relaxed
            text-gray-700 dark:text-white
            opacity-10 translate-y-3
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-500
          "
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default WhyUsCard;
