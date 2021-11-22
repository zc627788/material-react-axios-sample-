/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './index.module.css';
const Cards: React.FC = ({ confirmed, recovered, deaths }) => {
  if (!confirmed && !recovered && !deaths) {
    return <div> Loading........ </div>;
  } else {
    return (
      <div className={styles.container}>
        <Grid container justify="center">
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                确诊
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={confirmed || 0}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date().toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                较昨日确诊人数
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                治愈
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={recovered || 0}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date().toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                康复病例数.
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                死亡
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={deaths || 0}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date().toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                死亡病例数.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Cards;
