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
  console.table(peripheralData);
  const [game, setGame] = useState<GameName>({ game: "valorant" });

  console.log(game);

  return (
    <section className="relative mt-8 flex w-full flex-col items-center justify-center">
      <h1 className="text-xl">Top Products By Game</h1>

      <Games setGame={setGame} />
      <div className="mt-6 flex flex-row justify-between">
        <div className="w-1/3 text-center">
          <h3>Mice</h3>
          <ProductRankingList items={peripheralData[`${game.game}`].mouse} />
        </div>
        <div className="w-1/3 text-center">
          <h3>Keyboards</h3>
          <ProductRankingList items={peripheralData[`${game.game}`].keyboard} />
        </div>
        <div className="w-1/3 text-center">
          <h3>Headsets</h3>
          <ProductRankingList items={peripheralData[`${game.game}`].headset} />
        </div>
      </div>
    </section>
  );
}

// use state to conditionally render carousel

// render 1 carousel with 25 images, pills are pagination
