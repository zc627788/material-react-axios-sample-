/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './bar.css';
const EchartBar: React.FC = ({ ChartData }) => {
  const barChart = (
    <Bar
      data={{
        labels: ['现存确诊人数', '累计确诊人数', '治愈人数', '死亡人数'],
        datasets: [
          {
            label: '世界疫情(较昨日增加数量)',
            backgroundColor: [
              'rgba(255, 128, 0, 0.5)',
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [
              ChartData.currentConfirmedCount,
              ChartData.confirmedCount,
              ChartData.curedCount,
              ChartData.deadCount,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ALL` },
      }}
    />
  );

  return (
    <div
      className={styles.container}
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '90%',
      }}
    >
      {barChart}
    </div>
  );
};

export default EchartBar;
