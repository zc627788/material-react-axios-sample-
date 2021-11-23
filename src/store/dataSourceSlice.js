/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter', // 命名空间，在调用action的时候会默认的设置为action的前缀
  // 初始值
  initialState: {
    loading: true,
    cityData: [],
    title: 'redux toolkit pre',
  },
  // 这里的属性会自动的导出为actions，在组件中可以直接通过dispatch进行触发
  reducers: {
    getCityData(state, { payload }) {
      console.log(`object`, payload);
      if (
        payload?.value?.results?.length === 1 &&
        payload?.value?.results[0]?.cities?.length > 0
      ) {
        state.cityData =
          payload?.value?.results[0]?.cities ||
          payload?.value?.results[0] ||
          [];
      } else {
        state.cityData = payload?.value?.results || [];
      }
      state.loading = payload.status;
    },
  },
});

// 导出actions
export const { getCityData } = counterSlice.actions;

// 内置了thunk插件，可以直接处理异步请求
// export const asyncIncrement = (payload) => (dispatch) => {
//  setTimeout(() => {
//  dispatch(getCityData(payload));
//   }, 2000);
// };

export default counterSlice.reducer; // 导出reducer，在创建store时使用到
