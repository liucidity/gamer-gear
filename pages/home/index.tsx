import React from "react";
import SnapCarousel from "../../components/SnapCarousel";

// ---- Type Definitions
// ** If the Home component below accepts more props, add them and their respective types in this Type declaration, and then destructure below **
type Props = {
  children: any,
}


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
    <div className="flex h-screen w-screen flex-col items-center justify-between border-2 border-slate-500 px-10 pt-24">
      <section className="flex w-screen flex-col items-center border-2 border-green-500">
        <p className="flex w-screen items-center justify-center border-2 border-pink-500">
          Hero
        </p>
        <div className="flex w-screen items-center justify-center border-2 border-pink-500">
          Searchbar
        </div>
      </section>
      <SnapCarousel products={topProducts} />
    </div>
  );
};

export default Home;
