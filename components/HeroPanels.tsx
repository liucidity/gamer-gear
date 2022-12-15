import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

type Props = {};

const HeroPanels = ({}: Props) => {
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
    <AnimatePresence>
      <motion.section
        id="banner_items-container"
        className="flex h-full w-full flex-shrink-0 overflow-x-hidden border-slate-600 last-of-type:border-r-0 md:w-1/3 md:border-r-2"
        onMouseEnter={mouseEnterControls}
        onMouseLeave={mouseLeaveControls}
      >
        <motion.div
          id="banner_items"
          className="flex h-full w-full flex-shrink-0 bg-black-main"
          variants={bannerFM}
          animate={controls}
        ></motion.div>
        <motion.div
          className="hidden h-full w-full flex-shrink-0 bg-blue-500 md:flex"
          variants={bannerFM}
          animate={controls}
        >
          <button onClick={() => console.log("click")}>click here</button>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default HeroPanels;
