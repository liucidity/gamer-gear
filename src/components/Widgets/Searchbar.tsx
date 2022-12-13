import React from "react";

const Searchbar = () => {
  return (
    <form className="flex h-14 w-[90%] md:w-1/3">
      {/* Turn the search bar into form with input tags later */}
      <div className="flex h-full w-full items-center">
        <input
          className="h-full w-full rounded-2xl border-none bg-white p-5 pl-11 font-light text-black placeholder-gray-400 ring-2 ring-white drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-light focus:drop-shadow-none"
          type="search"
          placeholder="Search Products, Players & Teams..."
        />
        <svg className="absolute ml-3 h-6 w-6 text-gray-400 pointer-events-none"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </div>
    </form>
  );
};

export default Searchbar;
