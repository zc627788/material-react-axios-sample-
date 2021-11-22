/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { configureStore } from '@reduxjs/toolkit';
import dataSourceSlice from './dataSourceSlice';

// configureStore创建一个redux数据
export default configureStore({
  reducer: {
    dataSourceSlice: dataSourceSlice,
  },
});
