import React from "react";
import darkGeoBg from "../../public/dark_geometric_bg.jpg";
import Image from "next/image"
import BannerProductCard from "./Widgets/BannerProductCard";

type Props = {
  photoURL: string;
  playerGearArray: any[]
}

const BannerPlayerProductCard = ({photoURL, playerGearArray}:Props) => {
  const bannerProductCards = playerGearArray.map((gear, index) => {
    return (
      <BannerProductCard
        key={gear["id"]}
        product_name={gear["product_name"]}
        category={index}
      />
    );
  });
  return (
    <div className="relative flex h-full w-full flex-col items-center rounded-md">
      <Image src={darkGeoBg} alt={"dark geometric background"} className="h-[10rem] w-full bg-center bg-no-repeat bg-contain rounded-t-md"></Image>
      <div className="absolute mt-[5rem] h-40 w-40 rounded-full shadow-xl shadow-black/30 ring-4 ring-purple-main ring-offset-0 bg-gray-main overflow-hidden">
        <Image src={photoURL} alt={"profile pic"} fill />
      </div>
      <div className="h-4/5 w-full bg-white rounded-b-md pb-2 px-2 pt-24">
        {bannerProductCards}
      </div>
    </div>
  );
};

export default BannerPlayerProductCard;
