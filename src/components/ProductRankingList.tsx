import * as React from "react";
import { ProductRankingListItem } from "./ProductRankingListItem";
import "chart.js/auto";
import { Chart } from "./Widgets/Chart";

type Props = {
  items: any;
};

export function ProductRankingList({ items }: Props) {
  const chartData = {
    labels: items.map((item) => item.product_name),
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Pro Choice",
        data: items.map((item) => item.player_peripherals.length),
        // you can set indiviual colors for each bar
        backgroundColor: [
          "#C42BF0",
          "#F02BBA",
          "#F0622B",
          "#57F02B",
          "#2BB9F0",
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="my-4">
        <Chart chartData={chartData} />
      </div>

      <ol className="w-full">
        {items.map((item) => {
          return (
            <>
              <li>
                <ProductRankingListItem item={item} />
              </li>
            </>
          );
        })}
      </ol>
    </div>
  );
}
