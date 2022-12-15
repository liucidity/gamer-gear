import React from "react";
import HeroPanels from './HeroPanels';
// ---- Type Declarations ----
type PlayerObjectList = { username: string; id: number }[];
type Props = {
  playersData:PlayerObjectList;
}

// ---- Main Landing Page Component ----
const HeroSection = ({playersData}:Props) => {
  // ---- Helpers ----
  const mapPlayerBanners = playersData.map(({ id, username }) => {
    return <HeroPanels key={id} username={username} />;
  });

  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-black-main">
      <header id="banner-container" className="flex h-4/5 w-full md:w-5/6">
        {mapPlayerBanners}
      </header>
    </section>
  );
};

export default HeroSection;