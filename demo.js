import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table } from 'antd';
import callApi from './api';

const DemoTable = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    try {
      const result = await callApi();
      setData(JSON.parse(result));
    } catch (err) {
      throw new Error(err);
    }
  }, []);
  return <Table columns={columns} dataSource={data} />;
};
export default DemoTable;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'contact number',
    dataIndex: 'contactNumber',
  },
];
