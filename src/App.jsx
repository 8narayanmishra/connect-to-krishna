import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Vision from "./components/Vision";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(() => {
    // load saved theme, or default to light
    return localStorage.getItem("theme") || "light";
  });

  return (
    <div className="dark:bg-black relative">
      <Navbar Theme={theme} setTheme={setTheme} />
      <Hero />
      <Services />
      <WhyUs />
      <Vision />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
