import React from "react";

const MenuButtons = (props: { children:any , link:string }) => {
  return (
    <a className="mt-2 mr-10 md:mt-0 " href={props.link}>
      <h1 className="text-white font-sans font-normal hover:text-purple-400 text-xl subpixel-antialiased">{props.children}</h1>
    </a>
  );
};

export default MenuButtons;
