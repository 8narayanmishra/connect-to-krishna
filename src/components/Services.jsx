import React from "react";
import assets from "../assets/assets";
import Title from "../components/Title";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "Online Portfolio Service",
      description:
        "Create a polished online presence to share your spiritual journey with the world.",
      status: "Launched on 14th March 2025.",
      icon: assets.ads_icon,
    },
    {
      title: "Disciple Care Portal",
      description: "All-in-one solution for managing spiritual care and sadhana tracking. Join us as we embark on this spiritual journey together !",
      status: "Launching on July 1st, 2025",
      icon: assets.content_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[120px] text-orange-700 dark:text-white"
    >

      <Title
        title="How can we help you?"
        description="We provide our services as intuitive SaaS applications* and APIaaS applications*, enabling us to deliver dedicated, affordable solutions for your spiritual journey."
      />
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
