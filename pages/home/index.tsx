import React from "react";

const Home = ({ children }) => {
  return (
    <section className="flex min-h-screen w-screen flex-col items-center border-2 border-slate-500 pt-32">
      <div className="border-2 border-blue-500 h-1/3 w-screen">Hero Section</div>
      <div className="border-2 border-blue-500 h-1/3 w-screen">
        searchbar - ideally center
      </div>
      <div className="flex w-screen flex-wrap items-center justify-between h-1/3 border-2 border-blue-500 p-10 ">
        <div className="h-56 border-2 border-purple-500 md:w-44">
          Top 5 peripheral
        </div>
        <div className="h-56 border-2 border-purple-500 md:w-44">
          Top 5 peripheral
        </div>
        <div className="h-56 border-2 border-purple-500 md:w-44">
          Top 5 peripheral
        </div>
        <div className="h-56 border-2 border-purple-500 md:w-44">
          Top 5 peripheral
        </div>
      </div>
    </section>
  );
};

export default Home;
