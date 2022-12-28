import React from "react";
import HeroPanels from "./HeroPanels";
// ---- Type Declarations ----
type BannerPlayers = {
  first_name: null;
  last_name: null;
  gamesIDs: any;
  id: string;
  picture: string;
  player_peripherals: {}[];
  teamID: string;
  username: string;
}[];
type Props = {
  bannerPlayers: BannerPlayers;
};

// ---- Main Landing Page Component ----
const HeroSection = ({ bannerPlayers }: Props) => {

  // ---- Helpers ----
  const mapBannerPlayers = bannerPlayers.map(
    ({ id, username, player_peripherals }) => {
      return (
        <HeroPanels
          key={id}
          username={username}
          playerGear={player_peripherals}
        />
      );
    }
  );

  return (
    <section className="relative flex pt-16 md:h-screen w-screen flex-col items-center justify-end bg-black-main pb-5">
      <header id="banner-container" className="flex flex-col md:flex-row h-full w-full md:w-5/6">
        {mapBannerPlayers}
      </header>
    </section>
  );
};

export default HeroSection;
