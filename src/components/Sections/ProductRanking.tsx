import {useState} from 'react'
import { ProductRankingList } from '../ProductRankingList';
import { Games } from './Games';

export interface Props {
  peripheralData: any
}

interface GameName {
  game: string;
}

export function ProductRanking ({peripheralData}:Props) {
  console.table(peripheralData)
  const [game, setGame] = useState<GameName>({game:"valorant"})

  console.log(game)

  return (
    <section>
      <h1>Top Products By Game</h1>

      <Games setGame={setGame}/>
      <div className='border-2 p-8 w-[80vw] h-[70vh] flex flex-row justify-between'>
        
        <div>
          Mice
        <ProductRankingList items={peripheralData[`${game.game}`].mouse}/>
        </div>
        <div>
        Keyboards
        <ProductRankingList items={peripheralData[`${game.game}`].keyboard}/>
        </div>
        <div>
          Headsets
        <ProductRankingList items={peripheralData[`${game.game}`].headset}/>
        </div>
      </div>

    </section>
  );
}

// use state to conditionally render carousel

// render 1 carousel with 25 images, pills are pagination
