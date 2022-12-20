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
      className="relative flex w-4/5 flex-col items-center justify-evenly shadow-inner hover:scale-110 md:h-96"
    >
      {/* Will run into trouble here with the round container sizing - hopefully a real image helps */}
      <div className="absolute left-0 z-10 ml-2 h-[6.5rem] w-[6.5rem] rounded-full bg-white shadow-xl shadow-purple-main/40 ring-4 ring-purple-main ring-offset-0">
        <Image src={productImageTest} alt={"Product_image"} fill />
      </div>
      <div className="flex h-1/2 w-10/12 flex-col items-center justify-evenly rounded-lg bg-white py-2 pl-20 drop-shadow-lg">
        <h1 className="px-2 text-center font-sans text-sm font-semibold tracking-wide  md:text-sm 2xl:text-lg">
          {product_category}
        </h1>
        <h1 className="max-w-full text-clip break-words px-2 text-center font-sans text-sm font-medium tracking-wide md:text-sm 2xl:text-lg">
          {product_name}
        </h1>
        <h1 className="px-2 text-center font-sans font-thin">
          Brand Name Here
        </h1>
      </div>
    </motion.div>
  );
};

export default BannerProductCard;
