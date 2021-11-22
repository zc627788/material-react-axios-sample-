/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Bar } from 'react-chartjs-2';

import styles from './bar.moudule.css';
const EchartBar: React.FC = ({
  // data: { confirmed, recovered, deaths },
  country,
}) => {
  const barChart = (
    <Bar
      data={{
        labels: ['感染', '康复', '死亡'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [1, 2, 3],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  );

  return <div className={styles.container}>{barChart}</div>;
};

export default EchartBar;
