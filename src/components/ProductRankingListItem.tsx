import * as React from "react";
import { CldImage } from "next-cloudinary";
import { defaults } from "chart.js";

export interface Props {
  item: any;
}

export function ProductRankingListItem({ item }: Props) {
  const srcImgString = (item: any) => {
    const productNameLower = item.product_name.toLowerCase();
    const gProXhs = `gamer-gear/g pro x wireless headset se`;
    const apexPro = `gamer-gear/apex pro tkl`;
    const gProKeeb = `gamer-gear/g pro x mechanical keyboard`;
    const gProKeebSE = `gamer-gear/g pro x mk se`;
    switch (productNameLower) {
      case "g pro x":
        return gProXhs;
      case "g pro x wireless headset":
        return gProXhs;
      case "g pro x headset":
        return gProXhs;
      case "g pro gaming headset":
        return gProXhs;
      case "apex pro":
        return apexPro;
      case "g pro mechanical keyboard":
        return gProKeeb;
      case "g pro x keyboard se":
        return gProKeebSE;
      default:
        return `gamer-gear/${productNameLower}`;
    }
  };
  return (
    <div className="mb-2 flex h-[6rem] w-full max-w-full flex-row items-center justify-between gap-3 rounded-md bg-slate-200 p-2 drop-shadow-sm md:h-[4rem]">
      <div className="relative flex aspect-square h-full max-h-full items-center justify-center overflow-hidden rounded-md bg-white">
        <CldImage
          src={srcImgString(item)}
          alt={"product image"}
          width={100}
          height={100}
        ></CldImage>
      </div>
      <div className="break-words text-center font-sans text-xl font-medium">
        {item.product_name}
      </div>
      <span className="flex items-center justify-center rounded-full bg-gradient-to-br from-purple-light to-purple-dark px-2 py-1 text-xs font-bold text-off-white">
        {item.player_peripherals.length}
      </span>
    </div>
  );
}
