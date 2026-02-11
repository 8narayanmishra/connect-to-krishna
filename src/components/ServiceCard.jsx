import React from "react";

const ServiceCard = ({ service }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="
        relative overflow-hidden
        max-w-lg m-2 sm:m-4
        rounded-2xl
        border border-orange-300/40 dark:border-orange-400/30
        backdrop-blur-xl
        bg-orange-100/70 dark:bg-orange-500/10
        shadow-lg hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-1
      "
    >
      {/* Glow effect */}
      <div
        className="
          pointer-events-none absolute z-0
          w-[280px] h-[280px]
          rounded-full blur-3xl
          bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
          opacity-60
          transition-opacity duration-500
        "
        style={{
          top: position.y - 140,
          left: position.x - 140,
        }}
      />

      {/* Content */}
      <div
        className="
          relative z-10
          flex items-start gap-6
          p-7
          rounded-xl
          bg-orange-50/80 dark:bg-orange-500/15
          border border-orange-200/40 dark:border-orange-400/20
        "
      >
        {/* Text */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100">
            {service.title}
          </h3>

          <p className="text-sm mt-2 leading-relaxed text-orange-800 dark:text-orange-200">
            {service.description}
          </p>

          <p className="text-sm mt-2 font-medium text-orange-600 dark:text-orange-300">
            {service.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
