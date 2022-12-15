import React from "react";
import HeroPanels from "../../components/HeroPanels";

const LandingPage = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-black-main">
      <header id="banner-container" className="flex h-4/5 w-full md:w-5/6">
        <HeroPanels />
        <HeroPanels />
        <HeroPanels />
      </header>
    </section>
  );
};

export default LandingPage;
