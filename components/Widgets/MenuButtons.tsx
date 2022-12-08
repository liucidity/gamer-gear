import React from "react";

const MenuButtons = (props: { children:any , link:string }) => {
  return (
    <a className="mt-2 ml-6 md:mt-0" href={props.link}>
      <h1 className="text-white hover:text-black font-sans font-normal text-xl">{props.children}</h1>
    </a>
  );
};

export default MenuButtons;
