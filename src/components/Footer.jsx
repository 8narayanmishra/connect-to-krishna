import React from "react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer
      className="
        relative mt-32
        px-4 sm:px-10 lg:px-24 xl:px-40
        pt-16 pb-10
        backdrop-blur-xl
        bg-orange-100/70 dark:bg-orange-500/10
        border-t border-orange-300/40 dark:border-orange-400/30
        text-orange-900 dark:text-orange-100
      "
    >
      {/* Top section */}
      <div className="flex justify-between gap-16 max-lg:flex-col">
        {/* Brand + Links */}
        <div className="space-y-6 max-w-md">
          <img src={assets.logo} alt="Connect to Krishna" className="w-36" />

          <p className="text-sm text-orange-700 dark:text-orange-300 leading-relaxed">
            Our mission is to deliver the highest quality services with devotion
            and dedication, ensuring they remain accessible and affordable for
            all.
          </p>

          <ul className="flex flex-wrap gap-6 text-sm font-medium">
            {[
              ["Home", "#hero"],
              ["Services", "#services"],
              ["Why Us", "#why-us"],
              ["Vision", "#vision"],
              ["Contact", "#contact-us"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="
                    text-orange-700 dark:text-orange-300
                    hover:text-orange-500 dark:hover:text-orange-200
                    transition
                  "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-md w-full">
          <h3 className="font-semibold text-lg">Subscribe to our Newsletter</h3>
          <p className="text-sm mt-2 mb-6 text-orange-700 dark:text-orange-300">
            Receive spiritual tech updates directly in your inbox.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1 p-3 rounded-xl outline-none text-sm
                bg-orange-50/80 dark:bg-orange-500/20
                border border-orange-300/40 dark:border-orange-400/30
                text-orange-800 dark:text-orange-100
                placeholder-orange-400 dark:placeholder-orange-300
                focus:ring-2 focus:ring-orange-400
                transition
              "
            />
            <button
              className="
                px-6 rounded-xl text-sm font-medium
                bg-orange-500 text-white
                hover:bg-orange-600
                shadow-md hover:shadow-lg
                transition
              "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-10 border-orange-300/40 dark:border-orange-400/30" />

      {/* Bottom section */}
      <div className="flex flex-wrap justify-between items-center gap-6 text-sm">
        <p className="text-orange-600 dark:text-orange-300">
          © {new Date().getFullYear()} Connect to Krishna. All rights reserved.
        </p>

        <div className="flex gap-5">
          {[
            assets.facebook_icon,
            assets.twitter_icon,
            assets.linkedin_icon,
            assets.instagram_icon,
          ].map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt=""
              className="
                  w-5 h-5 cursor-pointer
                  opacity-70 hover:opacity-100
                  hover:scale-110 transition
                "
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
