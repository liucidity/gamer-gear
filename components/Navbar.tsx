import React, { useState } from "react";
import MenuButtons from "./Widgets/MenuButtons";

const Navbar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const handleDropDown = () => {
    dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true);
  };
  return (
    <>
      <nav className="fixed top-0 z-10 w-screen border-2 border-blue-700 px-14 py-5">
        <div className="flex justify-between">
          <div className="border-2 border-black">Logo Here</div>
          <button
            className="flex border-2 border-purple-500 md:hidden"
            onClick={() => handleDropDown()}
          >
            DropDown
          </button>
          <div className="hidden border-2 border-black md:flex">
            <MenuButtons link={"/products"}>Products</MenuButtons>
            <MenuButtons link={"/about"}>About</MenuButtons>
            <MenuButtons link={"/players"}>Players</MenuButtons>
          </div>
        </div>
        {dropDownOpen && (
          <div className="flex flex-col items-center justify-start border-2    border-black py-4">
            <MenuButtons link={"/products"}>Products</MenuButtons>
            <MenuButtons link={"/about"}>About</MenuButtons>
            <MenuButtons link={"/players"}>Players</MenuButtons>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
