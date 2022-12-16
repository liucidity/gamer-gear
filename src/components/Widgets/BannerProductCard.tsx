import React from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  product_name:string;
  key:string;
};

const BannerProductCard = ({ product_name, key }: Props) => {

  return (
    <motion.div key={key} className="relative flex h-full w-full flex-col items-center justify-evenly">
      {/* Will run into trouble here with the round container sizing - hopefully a real image helps */}
      <div className="absolute left-0 z-10 ml-5 h-[6.5rem] w-[6.5rem] rounded-full bg-purple-light"></div>
      <div className="flex flex-col items-center pl-24 h-1/2 w-10/12 justify-evenly rounded-lg bg-white drop-shadow-lg">
          <h1 className="text-center font-sans font-thin">{product_name}</h1>
          <h1 className="text-center font-sans font-thin">Brand Name Here</h1>
      </div>
    </motion.div>
  );
};

export default BannerProductCard;
