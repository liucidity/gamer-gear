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
    <div className="flex h-screen w-screen flex-col items-center justify-between pt-24">
      <section className="flex w-full flex-col items-center">
        <p className="prose-sm md:prose-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex w-full items-center justify-center">
          Searchbar
        </div>
      </section>
      <section className="flex flex-col">
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
