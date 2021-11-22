/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import EchartBar from './EcahrtBar';
const Chart = ({ ChartData }) => {
  return (
    <div>
      <EchartBar ChartData={ChartData} />
    </div>
  );
};

export default Chart;
