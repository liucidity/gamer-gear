import React from "react";
import SnapCarousel from "../../components/SnapCarousel";

// ---- Type Definitions
// ** If the Home component below accepts more props, add them and their respective types in this Type declaration, and then destructure below **
type Props = {
  children: any;
};

const topProducts = [
  {
    type: "Mouse",
    id: "id1",
  },
  {
    type: "Keyboard",
    id: "id2",
  },
  {
    type: "Monitor",
    id: "id3",
  },
  {
    type: "Headphones",
    id: "id4",
  },
];

const Home = ({ children }: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between pt-24">
      <header className="flex h-52 w-[90%] flex-col items-center border-2 border-purple-main">
        <h1 className="prose-sm px-5 md:prose-xl">GAMERGEAR</h1>
        <h2>Test Tagline For Hero Section</h2>
      </header>
      {/* Turn the search bar into form with input tags later */}
      <label className="group flex h-14 w-[90%] items-center rounded-lg border-2 border-white bg-white shadow-xl ">
        <input
          className="h-full w-full bg-white p-5 peer focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          type="search"
          placeholder="Search Products, Players & Teams..."
        />
        <div className="top[50%-8px] w-1 h-1"></div>
        <input className="h-[50px] w-[50px] p-5 peer-focus:outline-none peer-focus:border-sky-500 peer-focus:ring-sky-500 peer-focus:ring-1" type="submit" />
      </label>
      <section className="flex w-[90%] flex-col border-2 border-purple-main">
        <header className="flex items-center justify-between px-5">
          <div>Top Products</div>
          <a>View More</a>
        </header>
        <SnapCarousel products={topProducts} />
      </section>
    </div>
  );
};

export default Home;
