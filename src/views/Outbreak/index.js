/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import Chart from './components/echart/Chart';
import Table from './components/Table';
import Header from './components/Header';
import Cards from './components/Cards';
import { Grid, Card } from '@material-ui/core';

import { getChartData } from './request';

const index = () => {
  // 图表数据
  const [ChartData, setChartData] = useState([]);

  useEffect(async () => {
    await getChartData(setChartData);
  }, []);

  return (
    <>
      <Header />
      <br />

      <Grid container spacing={2} justify="center">
        <Grid xs={6} item style={{ marginBottom: '15px' }}>
          <Card>
            <Cards
              confirmed={ChartData.confirmedCount}
              recovered={ChartData.curedCount}
              deaths={ChartData.deadCount}
            />
          </Card>
        </Grid>

        <Grid xs={6} item>
          <Card>
            <Chart ChartData={ChartData} />
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Table />
      </Grid>
      <div></div>
    </>
  );
};

export default index;
