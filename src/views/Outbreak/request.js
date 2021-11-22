/* eslint-disable prettier/prettier */
import http from '../../api/http';

// 查询表格api
const getChartData = (setChartData, setLoading, queryParams) => {
  http.get('/overall', { ...queryParams }).then(response => {
    setChartData(response.results[0]);
  });
};

// 查询图表api
const getList = (setData, queryParams) => {
  http.get('/area', { ...queryParams }).then(response => {
    console.log(
      `response?.results[0]?.cities || []`,
      response?.results[0]?.cities || []
    );
    return setData(response);
  });
};

export { getList, getChartData };
