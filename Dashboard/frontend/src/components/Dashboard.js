import React, { useState, useEffect } from 'react';
import { fetchData, fetchForecast, fetchMetrics } from '../api';
import Charts from './Charts';
import Filters from './Filters';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    fetchData().then((response) => setData(response.data));
    fetchForecast().then((response) => setForecast(response.data));
    fetchMetrics().then((response) => setMetrics(response.data));
  }, []);

  return (
    <div>
      <h1>Brent Oil Price Dashboard</h1>
      <Filters setData={setData} />
      <Charts data={data} forecast={forecast} />
      <div>
        <h2>Model Metrics</h2>
        <p>RMSE: {metrics.RMSE}</p>
        <p>MAE: {metrics.MAE}</p>
      </div>
    </div>
  );
};

export default Dashboard;
