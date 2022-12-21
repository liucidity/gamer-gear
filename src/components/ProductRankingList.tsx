import Image from 'next/image';
import * as React from 'react';
import { ProductRankingListItem } from './ProductRankingListItem';

type Props = {
  items:any
}

export function ProductRankingList ({items}: Props) {
  console.log(items)
  return (
    <div>
      <div>
        {/* pie chart */}
        </div>

      <ol>

      {items.map((item)=>{
        // console.log(product_name)
        return(
          <>
          <li>
            <ProductRankingListItem item={item}/>
          </li>
          </>
        )
      })}
      </ol>
    </div>
  );
}
