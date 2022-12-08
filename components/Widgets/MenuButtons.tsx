import React from "react";

const MenuButtons = (props: { children:any , link:string }) => {
  return (
    <a className="mt-2 ml-5 border-2 border-black md:mt-0" href={props.link}>
      {props.children}
    </a>
  );
};

export default MenuButtons;
