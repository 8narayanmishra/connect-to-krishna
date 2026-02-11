import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const ContactUs = () => {
  return (
    <div
      id="contact-us"
      className="
        relative flex flex-col items-center gap-10
        px-4 sm:px-12 lg:px-24 xl:px-40 py-32
        text-orange-900 dark:text-orange-100
      "
    >
      {/* Heading */}
      <Title
        title="Reach Out to Us"
        description="We would love to hear from you."
      />

      {/* Glass Form Container */}
      <div
        className="
          w-full max-w-3xl
          rounded-3xl
          backdrop-blur-xl
          bg-orange-100/70 dark:bg-orange-500/10
          border border-orange-300/40 dark:border-orange-400/30
          shadow-xl
          p-8 sm:p-10
        "
      >
        <form className="grid sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="
                w-full p-4 text-sm rounded-xl outline-none
                bg-orange-50/80 dark:bg-orange-500/20
                border border-orange-300/40 dark:border-orange-400/30
                text-orange-800 dark:text-orange-100
                placeholder-orange-400 dark:placeholder-orange-300
                focus:ring-2 focus:ring-orange-400
                transition
              "
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full p-4 text-sm rounded-xl outline-none
                bg-orange-50/80 dark:bg-orange-500/20
                border border-orange-300/40 dark:border-orange-400/30
                text-orange-800 dark:text-orange-100
                placeholder-orange-400 dark:placeholder-orange-300
                focus:ring-2 focus:ring-orange-400
                transition
              "
              required
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium">Message</label>
            <textarea
              rows="7"
              placeholder="Enter your message"
              className="
                w-full p-4 text-sm rounded-xl outline-none resize-none
                bg-orange-50/80 dark:bg-orange-500/20
                border border-orange-300/40 dark:border-orange-400/30
                text-orange-800 dark:text-orange-100
                placeholder-orange-400 dark:placeholder-orange-300
                focus:ring-2 focus:ring-orange-400
                transition
              "
              required
            />
          </div>

          {/* Button */}
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="
                inline-flex items-center gap-2
                px-10 py-3 rounded-full
                bg-orange-500 text-white text-sm font-medium
                shadow-md hover:shadow-xl
                hover:bg-orange-600
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              Send Message
              <img src={assets.arrow_icon} alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
