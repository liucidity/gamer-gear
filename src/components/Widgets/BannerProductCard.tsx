import React from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {};

const BannerProductCard = (props: Props) => {
  return (
    <motion.div className="relative flex w-full flex-col items-center justify-evenly">
      <div className="absolute left-0 z-10 ml-5 h-24 w-24 rounded-full bg-purple-light"></div>
      <div className="flex flex-col items-center h-full w-10/12 justify-evenly rounded-lg bg-white drop-shadow-lg">
          <h1>Type</h1>
          <h1>Name</h1>
          <h1>Brand</h1>
      </div>
    </motion.div>
  );
};

export default BannerProductCard;
