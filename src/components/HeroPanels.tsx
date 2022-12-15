import React from "react";
import { motion, useAnimation } from "framer-motion";
import AgentTestImage from "../../public/assets/agent_test_image.png";
import Image from "next/image";

// ---- Type Definitions ----
type Props = {
  key: number;
  username: string;
};

// ---- Main Component ----
const HeroPanels = ({ key, username }: Props) => {
  
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
    },
    initial: {
      x: "0",
    },
  };

  return (
    <motion.section
      key={key}
      id="banner_items-container"
      className="flex h-full w-full flex-shrink-0 overflow-x-hidden border-slate-600 last-of-type:border-r-0 md:w-1/3 md:border-r-2"
      onMouseEnter={mouseEnterControls}
      onMouseLeave={mouseLeaveControls}
    >
      <motion.div
        id="banner_items"
        className="relative flex h-full w-full flex-shrink-0 overflow-hidden"
        variants={bannerFM}
        animate={controls}
      >
        <Image
          src={AgentTestImage} // should be prop
          alt="agent-silouhette" // should be prop
          style={{ objectFit: "cover", height: "auto" }}
        ></Image>
        <h1 className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 p-2 text-center font-sans text-3xl font-extrabold text-white">
          PLAY LIKE {username}
        </h1>
      </motion.div>
      <motion.div
        className="hidden h-full w-full flex-shrink-0 bg-blue-500 md:flex"
        variants={bannerFM}
        animate={controls}
      >
        <button onClick={() => console.log("click")}>click here</button>
      </motion.div>
    </motion.section>
  );
};

export default HeroPanels;
