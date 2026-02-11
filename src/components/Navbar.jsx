import React from "react";
import assets from "../assets/assets";
import ThemeToggler from "./ThemeToggler";

const Navbar = ({ Theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      className="
        sticky top-0 z-50
        backdrop-blur-xl
        bg-orange-100/70 dark:bg-orange-500/10
        border-b border-orange-300/40 dark:border-orange-400/30
        transition-colors
      "
    >
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 font-medium text-orange-800 dark:text-orange-100">
        {/* Logo */}
        <img
          src={Theme === "dark" ? assets.logo_dark : assets.logo}
          className="w-32 sm:w-40"
          alt="Logo"
        />

        {/* Menu Items */}
        <nav
          className={`
            flex gap-6 sm:items-center sm:text-sm
            transition-all duration-300
            ${!isMenuOpen ? "max-sm:w-0" : "max-sm:w-64 max-sm:px-8"}
            max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:h-screen
            max-sm:flex-col max-sm:pt-20
            max-sm:overflow-hidden
            max-sm:bg-orange-100/90 dark:max-sm:bg-orange-500/20
            text-orange-900 dark:text-orange-100
          `}
        >
          {/* Close icon (mobile) */}
          <img
            src={assets.close_icon}
            alt="Close"
            className="w-5 absolute top-5 right-5 sm:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />

          {[
            { label: "Home", href: "#" },
            { label: "Our Services", href: "#services" },
            { label: "Why Us?", href: "#why-us" },
            { label: "Vision", href: "#vision" },
            { label: "Contact", href: "#contact-us" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="
                relative
                hover:text-orange-500 dark:hover:text-orange-300
                transition
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-orange-400
                hover:after:w-full after:transition-all
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggler theme={Theme} setTheme={setTheme} />

          {/* Mobile menu icon */}
          <img
            src={Theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt="Menu"
            onClick={() => setIsMenuOpen(true)}
            className="w-8 sm:hidden cursor-pointer"
          />

          {/* Connect button */}
          <a
            href="#contact-us"
            className="
              hidden sm:flex items-center gap-2
              px-6 py-2 rounded-full text-sm font-medium
              bg-orange-500 text-white
              hover:bg-orange-600 hover:scale-105
              shadow-md hover:shadow-lg
              transition
            "
          >
            Connect
            <img
              src={assets.arrow_icon}
              width={14}
              alt="Arrow"
              className="invert"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
