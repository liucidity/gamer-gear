import * as React from 'react';

export interface Props {
  item:any
}

export function ProductRankingListItem ({item}: Props) {
  return (
    <div className='flex flex-row items-center justify-between bg-blue p-2 m-0 h-12 w-[36rem]'>
      <div className=''>
        {/* image */}
      </div>
      <div>
        {item.product_name}
      </div>
      <div className='flex flex-col items-center '>
        <div>
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{item.player_peripherals.length}</span>
        </div>
      </div>
    </div>

  );
}
