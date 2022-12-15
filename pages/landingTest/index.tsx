import React from "react";
import HeroPanels from "../../components/HeroPanels";

const LandingPage = () => {
  return (
    <section className="flex h-full w-full flex-col items-center">
      <header className="flex h-full w-full md:w-5/6">
        <HeroPanels />
        <HeroPanels />
        <HeroPanels />
      </header>
    </section>
  );
};

export default LandingPage;