import React from "react";
import darkGeoBg from "../../public/dark_geometric_bg.jpg";
import Image from "next/image";
import BannerProductCard from "./Widgets/BannerProductCard";

type Props = {
  photoURL: string;
  playerGearArray: any[];
  username: string;
};

const BannerPlayerProductCard = ({
  photoURL,
  playerGearArray,
  username,
}: Props) => {
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
      <Image
        src={darkGeoBg}
        alt={"dark geometric background"}
        className="h-[10rem] w-full rounded-t-md bg-contain bg-center bg-no-repeat"
      ></Image>
      <div className="absolute mt-[5rem] h-40 w-40 overflow-hidden rounded-full bg-slate-50 shadow-xl shadow-black/30 ring-4 ring-purple-main ring-offset-0">
        <Image src={photoURL} alt={"profile pic"} fill />
      </div>
      <div className="flex h-4/5 w-full flex-col items-center justify-evenly rounded-b-md bg-slate-50 px-10 pb-2 md:pt-24 xl:pt-20">
        <ol className="flex justify-center items-center w-full h-[4rem]">
          <div className="w-full h-[1px] bg-neutral-400"></div>
          <h1 className="w-full text-center mx-3 font-sans font-bold text-2xl">{username}&apos;s <br></br> Peripherals</h1>
          <div className="w-full h-[1px] bg-neutral-400"></div>

        </ol>
        {bannerProductCards}
      </div>
    </div>
  );
};

export default BannerPlayerProductCard;
