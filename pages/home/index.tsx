import React from "react";
import SnapCarousel from "../../components/SnapCarousel";

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
  {
    type: "Headphones",
    id: "id5",
  },
  {
    type: "Headphones",
    id: "id6",
  },
  {
    type: "Headphones",
    id: "id7",
  },
  {
    type: "Headphones",
    id: "id8",
  },
  {
    type: "Headphones",
    id: "id9",
  },
  {
    type: "Headphones",
    id: "id10",
  },
  {
    type: "Headphones",
    id: "id11",
  },
  {
    type: "Headphones",
    id: "id12",
  },
  {
    type: "Headphones",
    id: "id13",
  },
  {
    type: "Headphones",
    id: "id14",
  },
  {
    type: "Headphones",
    id: "id15",
  },
  {
    type: "Headphones",
    id: "id16",
  },
];

const Home = (props: { children: any }) => {
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
