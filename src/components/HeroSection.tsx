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
    <section className="flex w-full max-w-full justify-center bg-black-main pt-16 md:h-screen">
      <header className="flex flex-col md:w-5/6 md:flex-row">
        {mapBannerPlayers}
      </header>
    </section>
  );
};

export default HeroSection;
