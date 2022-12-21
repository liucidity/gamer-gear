import * as React from 'react';
import { ProductRankingList } from '../ProductRankingList';

export interface Props {
  productRanking: any
}

export function ProductRanking ({productRanking}:Props) {
  console.table(productRanking)
  return (
    <section>
      <h1>Top Products By Game</h1>
      <div className='border-2 p-8 w-[80vw] h-[70vh] flex flex-row justify-between'>
        
        <div>
          Mice
        <ProductRankingList items={productRanking.mouseRanking}/>
        </div>
        <div>
        Keyboards
        <ProductRankingList items={productRanking.keyboardRanking}/>
        </div>
        <div>
          Headsets
        <ProductRankingList items={productRanking.headsetRanking}/>
        </div>
      </div>

    </section>
  );
}

// use state to conditionally render carousel

// render 1 carousel with 25 images, pills are pagination
