import React, { useState } from "react";
import Logo from "./Widgets/Logo";
import MenuButtons from "./Widgets/MenuButtons";

const Navbar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDown = () => {
    dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true);
  };
  return (
    <>
      <nav className="shadow-xl fixed inset-x-0 top-0 z-10 w-screen bg-gradient-to-br from-purple-light via-purple-main to-purple-dark px-6 md:px-14 py-5">
        <div className="flex justify-between md:justify-start">
          <Logo></Logo>
          <button
            className="flex border-2 border-purple-500 md:hidden"
            onClick={() => handleDropDown()}
          >
            DropDown
          </button>
          <div className="hidden md:flex md:items-center">
            <MenuButtons link={"/products"}>Products</MenuButtons>
            <MenuButtons link={"/games"}>Games</MenuButtons>
            <MenuButtons link={"/players"}>Players</MenuButtons>
          </div>
        </div>
        {dropDownOpen && (
          <div className="flex flex-col items-center justify-start py-4">
            <MenuButtons link={"/products"}>Products</MenuButtons>
            <MenuButtons link={"/games"}>Games</MenuButtons>
            <MenuButtons link={"/players"}>Players</MenuButtons>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
