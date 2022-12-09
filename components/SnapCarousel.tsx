import React from "react";

type ProductItem = {
  id: string;
  type: string;
};
type Props = {
  products: ProductItem[];
};

const SnapCarousel = ({ products }: Props) => {
  const productsListItem = products.map(({ type, id }) => {
    return (
      <li
        key={id}
        className=" mx-3 h-56 w-44 shrink-0 snap-center border-2 border-purple-500"
      >
        {type}
      </li>
    );
  });
  return (
    <ul className="flex w-full snap-x snap-mandatory items-center overflow-x-auto px-2 py-6 md:justify-center ">
      {productsListItem}
    </ul>
  );
};

export default SnapCarousel;
