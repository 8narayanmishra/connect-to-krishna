import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-40 text-center w-full overflow-hidden text-grey-700"
    >

      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[44px] font-medium xl:leading-[65px] max-w-5xl text-orange-900 dark:text-white">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-[#1c097d] bg-clip-text text-[#ff6f00]/20">
          Connect to Krishna !
        </span>
      </h1>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-[#5044e5] bg-clip-text text-[#ff6f00]/60">
        "Our first duty is to satisfy the spiritual master, who can arrange for
        the Lord’s mercy. A common man must first begin to serve the spiritual
        master or the devotee. Then, through the mercy of the devotee, the Lord
        will be satisfied."
      </h1>
      <h1 className="text-1xl font-bold bg-gradient-to-r from-[#5044e5] bg-clip-text text-[#ff6f00]/40">
        — Srila Prabhupada, Sri Chaitanya caritamrita, Madhya Lila, 11.58
      </h1>
      <div className="relative">
        <img src={assets.hero_img} alt="" className="w-full max-w-6xl" />
      </div>
    </div>
  );
};

export default Hero;
