/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line prettier/prettier
import axios from 'axios';
import { removePending, addPending } from '../utils/RequestsCancel';

axios.interceptors.request.use(
  config => {
    removePending(config); // 在请求开始前，对之前的请求做检查取消操作
    addPending(config); // 将当前请求添加到 pending 中
    // other code before request
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    removePending(response); // 在请求结束后，移除本次请求
    return response;
  },
  error => {
    if (axios.isCancel(error)) {
      console.log('repeated request: ' + error.message);
    } else {
      // handle error code
    }
    return Promise.reject(error);
  }
);

/* eslint-disable */
// 设置默认接口地址
axios.defaults.baseURL = 'https://lab.isaaclin.cn/nCoV/api';
const get = (url, params = {}) =>
  new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        // return false; 如果返回false 将不会执行promise finally
        reject(error);
      });
  });
export default { get };
