import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="flex justify-start items-end mr-10" href="/home">
      <h1 className="font-sans font-bold text-off-white text-3xl tracking-wide subpixel-antialiased">GAMER</h1>
      <h1 className="font-sans font-bold text-purple-dark text-3xl tracking-wide subpixel-antialiased">GEAR</h1>
    </Link>
  );
};

export default Logo;
