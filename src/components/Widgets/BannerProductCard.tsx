import React from "react";
import { motion, useAnimation } from "framer-motion";
import productImageTest from "../../../public/product_image_test.png";
import Image from "next/image";

type Props = {
  product_name: string;
  key: string;
  category: number;
};

const BannerProductCard = ({ product_name, key, category }: Props) => {
  let product_category = "";
  switch (category) {
    case 0:
      product_category = "Keyboard".toUpperCase();
      break;
    case 1:
      product_category = "Mouse".toUpperCase();
      break;
    case 2:
      product_category = "Headset".toUpperCase();
      break;
    case 3:
      product_category = "Monitor".toUpperCase();
      break;
  }

  return (
    <motion.div
      key={key}
      className="relative flex w-4/5 flex-col items-center justify-evenly hover:scale-110 md:h-96 shadow-inner"
    >
      {/* Will run into trouble here with the round container sizing - hopefully a real image helps */}
      <div className="absolute left-0 z-10 ml-2 h-[6.5rem] w-[6.5rem] rounded-full bg-white shadow-xl shadow-purple-main/40 ring-4 ring-purple-main ring-offset-0">
        <Image
          src={productImageTest}
          alt={"Product_image"}
          width={100}
          height={100}
        />
      </div>
      <div className="flex h-1/2 w-10/12 flex-col items-center justify-evenly rounded-lg bg-white pl-20 drop-shadow-lg py-2">
        <h1 className="text-center font-sans text-base font-semibold tracking-wide">
          {product_category}
        </h1>
        <h1 className="text-lg break-words text-center font-sans font-medium tracking-wide">
          {product_name}
        </h1>
        <h1 className="text-center font-sans font-thin">Brand Name Here</h1>
      </div>
    </motion.div>
  );
};

export default BannerProductCard;
