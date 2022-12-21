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
      className="flex h-1/5 w-full items-center justify-between rounded-md bg-slate-200 px-2 drop-shadow-sm "
    >
      <div className="relative flex aspect-square h-4/5 items-center justify-center overflow-hidden rounded-md bg-slate-50 ">
        <Image src={productImageTest} alt={"product image"} fill></Image>
      </div>
      <div className="flex h-full w-3/4 flex-col items-center justify-evenly ">
        <h1 className="px-2 text-center font-sans text-sm font-semibold tracking-wide  md:text-sm 2xl:text-lg">
          {product_category}
        </h1>
        <h1 className="max-w-full text-clip break-words px-2 text-center font-sans text-sm font-medium tracking-wide md:text-sm 2xl:text-lg">
          {product_name}
        </h1>
      </div>
    </motion.div>
  );
};

export default BannerProductCard;
