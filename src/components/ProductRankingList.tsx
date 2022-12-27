import Image from 'next/image';
import * as React from 'react';
import { ProductRankingListItem } from './ProductRankingListItem';
import 'chart.js/auto'
import {Pie} from 'react-chartjs-2'
import { Chart } from './Widgets/Chart';

type Props = {
  items:any
}

export function ProductRankingList ({items}: Props) {
  console.log(items)

  const chartData = {
    labels: items.map((item) => item.product_name),
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Pro Choice',
          data: items.map((item)=> item.player_peripherals.length),
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(196, 43, 240, 0.8)',
            'rgba(255, 255, 123, 0.8)',
            'rgba(255, 002, 412, 0.8)',
            'rgba(000, 002, 412, 0.8)',
            'rgba(255, 002, 123, 0.8)',
          ],
          borderWidth: 2,
        }
    ]
}


  return (
    <div className='flex flex-col items-center'>
      <div className='mb-8'>
        {/* pie chart */}
        <Chart chartData={chartData}/>
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
