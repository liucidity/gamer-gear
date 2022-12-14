import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const HeroPanels = ({}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log(isHovered);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log(isHovered);
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
      <header className="h-1/2 w-[90%] border-2 border-black md:w-2/3">
        <motion.div
          className="flex h-full w-full overflow-hidden border-2 border-purple-main md:w-1/3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex h-full w-full flex-shrink-0 bg-red-500"
            variants={bannerFM}
            animate={isHovered ? "hover" : "initial"}
          ></motion.div>
          <motion.div
            className="flex h-full w-full flex-shrink-0 bg-blue-500"
            variants={bannerFM}
            animate={isHovered ? "hover" : "initial"}
          >
            <button onClick={() => console.log("click")}>click here</button>
          </motion.div>
        </motion.div>
      </header>
    </AnimatePresence>
  );
};

export default HeroPanels;
