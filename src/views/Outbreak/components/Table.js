/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
const Table = () => {
  const cityData = useSelector(state => state.dataSourceSlice.cityData);
  const loading = useSelector(state => state.dataSourceSlice.loading);
  console.log(`loading`, loading);

  console.log(`cityData`, cityData);
  console.log(`Array.isArray()`, Array.isArray(cityData));
  const data = cityData.map(o => ({ ...o }));
  const columns = [
    {
      field: cityData[0]?.provinceShortName ? 'provinceShortName' : 'cityName',
      title: cityData[0]?.provinceShortName ? '国家/省份' : '城市',
    },
    {
      field: 'confirmedCount',
      title: '累积确诊人数',
    },
    {
      field: 'currentConfirmedCount',
      title: '当前确诊人数',
    },
    {
      field: 'suspectedCount',
      title: '疑似确诊人数',
    },
    {
      field: 'curedCount',
      title: '治愈人数',
    },
    {
      field: 'deadCount',
      title: '死亡人数',
    },
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <MaterialTable
        data={data}
        isLoading={loading}
        columns={columns}
        title="疫情数据"
        options={{
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF',
          },
        }}
      />
    </div>
  );
};

export default Table;
