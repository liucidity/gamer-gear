import { useState } from "react";
import { ProductRankingList } from "../ProductRankingList";
import { Games } from "./Games";

export interface Props {
  peripheralData: any;
}

interface GameName {
  game: string;
}

export function ProductRanking({ peripheralData }: Props) {
  // console.table(peripheralData);
  const [game, setGame] = useState<GameName>({ game: "valorant" });

  // console.log(game);

  return (
    <section className="mt-8 flex max-w-full flex-col items-center overflow-x-hidden">
      <h1 className="text-xl">Top Products By Game</h1>

      <Games setGame={setGame} />
      <div className="mt-6 flex w-screen max-w-screen-2xl flex-col items-center justify-between md:flex-row">
        <div className="flex w-full max-w-full flex-col items-center px-4 md:w-1/3">
          <h3>Mice</h3>
          <ProductRankingList items={peripheralData[`${game.game}`].mouse} />
        </div>
        <div className="flex w-full max-w-full flex-col items-center px-4 md:w-1/3">
          <h3>Keyboards</h3>
          <ProductRankingList items={peripheralData[`${game.game}`].keyboard} />
        </div>
        <div className="flex w-full max-w-full flex-col items-center px-4 md:w-1/3">
          <h3>Headsets</h3>
          <ProductRankingList items={peripheralData[`${game.game}`].headset} />
        </div>
      </div>
    </section>
  );
}

// use state to conditionally render carousel

// render 1 carousel with 25 images, pills are pagination
