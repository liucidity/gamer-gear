import React from "react";
import darkGeoBg from "../../public/dark_geometric_bg.jpg";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import BannerProductCard from "./Widgets/BannerProductCard";

type Props = {
  playerGearArray: any[];
  username: string;
  cldUserImage: string;
};

const BannerPlayerProductCard = ({
  playerGearArray,
  username,
}: // cldUserImage
Props) => {
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
        <CldImage
          src={`gamer-gear/${username}`}
          width={300}
          height={300}
          alt={"profile pic"}
        />
      </div>
      <div className="flex h-4/5 w-full flex-col items-center justify-evenly rounded-b-md bg-slate-50 px-10 pb-2 md:pt-24 xl:pt-20">
        <ol className="flex h-[4rem] w-full items-center justify-center">
          <div className="h-[1px] w-full bg-neutral-400"></div>
          <h1 className="mx-3 w-full text-center font-sans text-2xl font-bold">
            {username}&apos;s <br></br> Peripherals
          </h1>
          <div className="h-[1px] w-full bg-neutral-400"></div>
        </ol>
        {bannerProductCards}
      </div>
    </div>
  );
};

export default BannerPlayerProductCard;
