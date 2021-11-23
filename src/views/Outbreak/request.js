/* eslint-disable prettier/prettier */
import http from '../../api/http';

// 查询表格api
const getChartData = (setChartData, setLoading, queryParams) => {
  http.get('/overall', { ...queryParams }).then(response => {
    setChartData(response.results[0]);
  });
};

// 查询图表api
const getList = (queryParams, url = '/area') =>
  http.get(url, { ...queryParams });

export { getList, getChartData };
