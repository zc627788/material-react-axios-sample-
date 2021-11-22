/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { getList } from '../../request';
import { useDispatch } from 'react-redux';
import { getCityData, setCityLoading } from '../../../../store/dataSourceSlice';
const Index = () => {
  const [inputValue, setInputValue] = useState([]);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      getList(setData, {});
    }, 1200);
  }, []);

  useEffect(() => {
    dispatch(getCityData(data));
  }, [data]);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item>
          <TextField
            id="standard-basic"
            label="国家/省份"
            onChange={e => setInputValue(e.target.value)}
          />
        </Grid>
        <Grid item style={{ marginTop: 15 }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            onClick={() => {
              // update loading
              dispatch(setCityLoading(true));
              getList(
                setData,
                inputValue.length > 0
                  ? { province: inputValue, repeat: true }
                  : { repeat: true }
              );
            }}
          >
            搜索
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
