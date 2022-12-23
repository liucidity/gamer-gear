import * as React from 'react';
import { ProductRankingList } from '../ProductRankingList';
import { Games } from './Games';

export interface Props {
  peripheralData: any
}

export function ProductRanking ({peripheralData}:Props) {
  console.table(peripheralData)
  return (
    <section>
      <h1>Top Products By Game</h1>

      <Games />
      <div className='border-2 p-8 w-[80vw] h-[70vh] flex flex-row justify-between'>
        
        <div>
          Mice
        <ProductRankingList items={peripheralData.valorantData.mouse}/>
        </div>
        <div>
        Keyboards
        <ProductRankingList items={peripheralData.valorantData.keyboard}/>
        </div>
        <div>
          Headsets
        <ProductRankingList items={peripheralData.valorantData.headset}/>
        </div>
      </div>

    </section>
  );
}

// use state to conditionally render carousel

// render 1 carousel with 25 images, pills are pagination
