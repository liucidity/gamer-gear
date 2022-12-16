import React from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {};

const BannerProductCard = (props: Props) => {
  return (
    <motion.div className="grid h-[12.5%] w-4/5 grid-cols-3 rounded-lg bg-white drop-shadow-lg">
      <div className="col-span-1 flex overflow-visible bg-purple-light"></div>
      <div className="col-span-2 flex flex-col items-center justify-evenly border-2 border-purple-main">
        <h1>Type</h1>
        <h1>Name</h1>
        <h1>Brand</h1>
      </div>
    </motion.div>
  );
};

export default BannerProductCard;
