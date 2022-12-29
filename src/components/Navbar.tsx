import React, { useState } from "react";
import Logo from "./Widgets/Logo";
import MenuButtons from "./Widgets/MenuButtons";

const Navbar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDown = () => {
    dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true);
  };
  return (
    <nav className="fixed inset-x-0 z-50 flex h-[5rem] items-center justify-start bg-black-main px-6 md:px-14">
      <Logo></Logo>
    </nav>
  );
};

export default Navbar;
