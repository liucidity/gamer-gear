import React from "react";
import { motion, useAnimation } from "framer-motion";
import AgentTestImage from "../../public/assets/agent_test_image.png";
import Image from "next/image";
import BannerProductCard from "./Widgets/BannerProductCard";

// ---- Type Definitions ----
type Props = {
  key: string;
  username: string;
  photoURL: string;
  playerGear: any;
};

// ---- Main Component ----
const HeroPanels = ({ key, username, photoURL, playerGear }: Props) => {
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
  const { keyboard, mouse, headset, monitor } = playerGear[0];
  const playerGearArray = [keyboard, mouse, headset, monitor];
  // const playerGearArray = [keyboard]
  console.log(playerGearArray);

  const bannerProductCards = playerGearArray.map((gear, index) => {
    return (
      <BannerProductCard
        key={gear.id}
        product_name={gear.product_name}
        category={index}
      />
    );
  });

  return (
    <motion.section
      key={key}
      id="banner_items-container"
      className="flex h-full w-full flex-shrink-0 overflow-x-hidden overflow-y-hidden border-black-main last-of-type:border-r-0 md:w-1/3 md:border-x-2"
      onMouseEnter={mouseEnterControls}
      onMouseLeave={mouseLeaveControls}
    >
      <motion.span
        id="banner_items"
        className="relative flex h-full w-full flex-shrink-0 overflow-hidden"
        variants={bannerFM}
        animate={controls}
      >
        <Image
          src={photoURL}
          alt={`${username}-pic`}
          style={{ objectFit: "cover"}}
          // width={800}
          // height={1500}
          fill
        ></Image>
        <h1 className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 break-words p-2 text-center font-sans text-3xl font-extrabold text-white">
          PLAY LIKE
          <br />
          {username}
        </h1>
      </motion.span>
      <motion.div
        className="hidden h-full w-full flex-shrink-0 flex-col items-center justify-evenly md:flex"
        variants={bannerFM}
        animate={controls}
      >
        {bannerProductCards}
      </motion.div>
    </motion.section>
  );
};

export default HeroPanels;
