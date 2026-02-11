import React, { useState } from "react";
import DiscipleFeaturesModal from "./DiscipleFeaturesModal";

const visionData = [
  {
    title: "Online Portfolio Service",
    description:
      "Manage front-end websites for Gurus and prominent personalities.",
    status: "Launched on 14th March 2025.",
  },
  {
    title: "Disciple Care Portal",
    description: "All-in-one solution for spiritual care and sadhana tracking.",
    status: "Launching on July 1st, 2025",
    hasFeatures: true,
  },
  {
    title: "Mobile App for Disciple Care Portal",
    description:
      "Mobile access for disciples and councilors to track progress.",
    status: "Launching in early 2026",
  },
  {
    title: "Yatra Management Services",
    description: "Streamlined registration and devotee coordination platform.",
    status: "Launching in late 2026",
  },
];

const Vision = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="vision"
      className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-24 
                 text-orange-700 dark:text-orange-100"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold">Our Vision</h2>
        <p className="mt-4 text-orange-500 dark:text-orange-300 max-w-2xl mx-auto">
          Guided by devotion. Inspired by service. Strengthened by technology.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div
          className="
    absolute top-0 h-full w-[2px]
    bg-gradient-to-b from-orange-300 via-orange-500 to-orange-300
    left-6 sm:left-1/2 sm:-translate-x-1/2
  "
        />

        <div className="flex flex-col gap-16">
          {visionData.map((item, index) => (
            <div
              key={index}
              className={`
                relative flex
                ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}
              `}
            >
              {/* Dot */}
              <div
                className="
                  absolute top-8
                  w-4 h-4 rounded-full
                  bg-orange-600
                  shadow-lg shadow-orange-500/50
                  left-6 -translate-x-1/2
                  sm:left-1/2 sm:-translate-x-1/2
  "
              />

              {/* Card */}
              <div
                className="
                  ml-12 sm:ml-0
                  w-full sm:w-[420px]
                  backdrop-blur-xl
                  bg-orange-500/10 dark:bg-orange-500/20
                  border border-orange-400/30
                  rounded-2xl
                  shadow-xl shadow-orange-500/10
                  p-6
                  transition-all duration-300
                  hover:scale-[1.02]
                "
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-orange-600 dark:text-orange-200">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-medium text-orange-500 dark:text-orange-300">
                  {item.status}
                </p>

                {item.hasFeatures && (
                  <button
                    onClick={() => setOpen(true)}
                    className="
                      mt-5 inline-flex items-center gap-2
                      px-4 py-2 rounded-full text-sm
                      bg-orange-600 text-white
                      hover:bg-orange-700
                      transition
                    "
                  >
                    Browse Features
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DiscipleFeaturesModal isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default Vision;
