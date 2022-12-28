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
    <section className='relative w-full flex flex-col items-center justify-center mx-20 mt-4'>
      <h1 className='mx-12 my-4 text-xl'>Top Products By Game</h1>

      <Games setGame={setGame} className=''/>
      <div className='py-8 gap-2 flex flex-row flex-wrap justify-evenly mt-2'>
        
        <div className='text-center'>
          <h3>
          Mice
          </h3>
        <ProductRankingList items={peripheralData[`${game.game}`].mouse}/>
        </div>
        <div className='text-center'>
        <h3>
        Keyboards
        </h3>
        <ProductRankingList items={peripheralData[`${game.game}`].keyboard}/>
        </div>
        <div className='text-center'>
          <h3>
          Headsets
          </h3>
        <ProductRankingList items={peripheralData[`${game.game}`].headset}/>
        </div>
      </div>

    </section>
  );
}

// use state to conditionally render carousel

// render 1 carousel with 25 images, pills are pagination
