import React, { useState } from "react";
import DiscipleFeaturesModal from "./DiscipleFeaturesModal";

const visionData = [
  {
    title: "Online Portfolio Service",
    description:
      "Create polished online presences for Gurus and spiritual leaders.",
    status: "Launched on 14th March 2025.",
  },
  {
    title: "Disciple Care Portal",
    description:
      "An integrated platform to manage spiritual care, sadhana tracking, and community engagement.",
    status: "Launching on July 1st, 2025",
    hasFeatures: true,
  },
  {
    title: "Mobile App for Disciple Care Portal",
    description:
      "Access disciple tracking tools, schedules, and guidance on the go.",
    status: "Launching in early 2026",
  },
  {
    title: "Yatra Management Services",
    description:
      "Plan and manage spiritual yatras efficiently with our intuitive portal.",
    status: "Launching in late 2026",
  },
];

const Vision = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="vision"
      className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-24
                 text-orange-900 dark:text-orange-100"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">
          Our Vision
        </h2>
        <p className="mt-4 text-orange-700 dark:text-orange-300 max-w-2xl mx-auto">
          Guided by devotion, inspired by service, strengthened by technology.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute left-1/2 top-0 h-full w-[2px]
                     bg-orange-200/70 dark:bg-orange-600/40
                     -translate-x-1/2"
        />

        <div className="flex flex-col gap-20">
          {visionData.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start pr-10" : "justify-end pl-10"
              }`}
            >
              {/* Dot */}
              <div
                className="absolute left-1/2 top-8 -translate-x-1/2
                           w-6 h-6 rounded-full
                           bg-orange-500
                           border-4 border-white dark:border-orange-900
                           shadow-lg z-10"
              />

              {/* Card */}
              <div
                className="w-full sm:w-[420px]
                           rounded-2xl p-6
                           backdrop-blur-xl
                           bg-orange-100/70 dark:bg-orange-500/10
                           border border-orange-300/40 dark:border-orange-400/30
                           shadow-lg
                           transform transition-all duration-500
                           hover:-translate-y-2 hover:shadow-2xl
                           hover:bg-orange-200/80 dark:hover:bg-orange-500/20"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                <p className="text-sm leading-relaxed text-orange-800 dark:text-orange-200">
                  {item.description}
                </p>

                <p className="mt-4 text-sm font-medium text-orange-700 dark:text-orange-300">
                  {item.status}
                </p>

                {/* Browse features button */}
                {item.hasFeatures && (
                  <button
                    onClick={() => setOpen(true)}
                    className="mt-4 inline-flex px-5 py-2 rounded-full
                               bg-orange-500 text-white text-sm
                               hover:bg-orange-600
                               shadow-md hover:shadow-lg
                               transition"
                  >
                    Browse Features
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <DiscipleFeaturesModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Vision;
