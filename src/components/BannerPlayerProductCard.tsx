import React from "react";
import darkGeoBg from "../../public/dark_geometric_bg.jpg";
import Image from "next/image"

type Props = {
  photoURL: string;
}

const BannerPlayerProductCard = ({photoURL}:Props) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center rounded-md">
      <Image src={darkGeoBg} alt={"dark geometric background"} className="h-[10rem] w-full bg-center bg-no-repeat bg-contain rounded-t-md"></Image>
      <div className="absolute mt-[5rem] h-40 w-40 rounded-full shadow-xl shadow-black/30 ring-4 ring-purple-main ring-offset-0 bg-white overflow-hidden">
        <Image src={photoURL} alt={"profile pic"} fill />
      </div>
      <div className="h-4/5 w-full bg-white rounded-b-md pb-2 px-2 pt-24">

      </div>
    </div>
  );
};

export default BannerPlayerProductCard;
