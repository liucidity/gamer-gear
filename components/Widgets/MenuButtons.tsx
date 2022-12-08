import React from "react";

const MenuButtons = ({ children, link }) => {
  return (
    <a className="mt-2 ml-5 border-2 border-black md:mt-0" href={link}>
      {children}
    </a>
  );
};

export default MenuButtons;
