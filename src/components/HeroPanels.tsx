import React from "react";
import { motion, useAnimation } from "framer-motion";
import { CldImage } from "next-cloudinary";
import BannerPlayerProductCard from "./BannerPlayerProductCard";

// ---- Type Definitions ----
type Props = {
  key: string;
  username: string;
  playerGear: any;
};

// ---- Main Component ----
const HeroPanels = ({ key, username, playerGear }: Props) => {
  // ---- Framer Motion ----
  const controls = useAnimation();
  const mouseEnterControls = () => {
    controls.start("hover");
  };
  const mouseLeaveControls = () => {
    controls.start("initial");
  };
  const bannerFM = {
    hover: {
      x: "-100%",
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    initial: {
      x: "0",
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  // ---- Data ----
  const { keyboard, mouse, headset } = playerGear[0];
  const playerGearArray = [keyboard, mouse, headset];

  return (
    <motion.section
      key={key}
      id="banner_items-container"
      className="flex flex-shrink-0 overflow-x-hidden border-black-main md:h-full md:w-1/3 md:border-r-2 md:last-of-type:border-r-0"
      onMouseEnter={mouseEnterControls}
      onMouseLeave={mouseLeaveControls}
    >
      <motion.span
        id="banner_items"
        className="relative flex h-full w-full flex-shrink-0 overflow-hidden"
        variants={bannerFM}
        animate={controls}
      >
        <CldImage
          src={`gamer-gear/${username}`}
          width={1000}
          height={1000}
          alt={`${username}-pic`}
          gravity="faces"
          crop="crop"
          zoom="0.5"
          className="object-contain md:object-cover"
        />
        <h1 className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 break-words p-2 text-center font-sans text-3xl font-extrabold text-off-white">
          PLAY LIKE
          <br />
          {username}
        </h1>
      </motion.span>
      <motion.div
        className="flex h-full w-full flex-shrink-0 flex-col items-center p-2"
        variants={bannerFM}
        animate={controls}
      >
        <BannerPlayerProductCard
          playerGearArray={playerGearArray}
          username={username}
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroPanels;
