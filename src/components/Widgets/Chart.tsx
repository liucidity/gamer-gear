import 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2'

import * as React from 'react';

export interface Props {
  chartData: any
}

export function Chart ({chartData}: Props) {
  return (
    <div>
      <Doughnut data={chartData}
      options={{
        plugins: {
          legend: {
            display: false
          },

        }
      }}
      />
    </div>
  );
}
