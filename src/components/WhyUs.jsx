import React, { useRef } from "react";
import Title from "../components/Title";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  const scrollRef = useRef(null);

  const whyUsData = [
    {
      title: "1. Extensive Experience",
      description:
        "Over 16 years in multinational corporations, mastering diverse roles and technologies in software development.",
    },
    {
      title: "2. Diverse Skill Set",
      description:
        "Expertise across all project phases, delivering SaaS and APIaaS solutions for varied client needs.",
    },
    {
      title: "3. Project Management Proficiency",
      description:
        "Proven ability to handle complex projects efficiently, ensuring quality and timely delivery.",
    },
    {
      title: "4. Mentorship and Team Building",
      description:
        "Mentoring developers and fostering continuous learning to drive innovative software solutions.",
    },
    {
      title: "5. Understanding of Organization",
      description:
        "Deep insights from serving as temple commander, managing events, accounts, and congregation operations.",
    },
    {
      title: "6. Devotional Commitment",
      description:
        "Offering services with devotion, focusing on value and dedication rather than financial gain.",
    },
  ];

  return (
    <div
      id="why-us"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[120px] text-orange-700 dark:text-white"
    >
      {/* Background Image */}

      {/* Title */}
      <Title
  title="Why Us?"
  description={
    <>
      Our platform offers tailored software solutions for spiritual leaders, temples, and communities to effectively manage and care for their disciples and connected devotees.
      <br /><br />
      
    </>
  }
/>

      {/* Cards + Arrows Wrapper */}
      <div className="relative w-full">
        {/* Scroll Container */}
        <div className="relative w-full">
          {/*Left fade*/}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20
               bg-gradient-to-r from-white dark:from-black to-transparent"
          />
          {/* Right fade */}
          {
            <div
              className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20
               bg-gradient-to-l from-white dark:from-black to-transparent"
            />
          }
          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
          >
            {whyUsData.map((service, index) => (
              <WhyUsCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
