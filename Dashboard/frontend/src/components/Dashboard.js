import React, { useState, useEffect } from 'react';
import { fetchData, fetchForecast, fetchMetrics, fetchEvents } from '../api';
import Charts from './Charts';
import Filters from './Filters';

const Dashboard = () => {
  // Initialize state variables as empty arrays to prevent .map() errors
  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [metrics, setMetrics] = useState({});
  const [events, setEvents] = useState({});

useEffect(() => {
  // Fetch historical data
  fetchData()
    .then((response) => {
      console.log("Fetched data:", response.data);  // Check data response
      setData(Array.isArray(response.data) ? response.data : []);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setData([]);  // Set to empty array on error
    });

  // Fetch forecast data
  fetchForecast()
    .then((response) => {
      console.log("Fetched forecast:", response.data);  // Check forecast response
      setForecast(Array.isArray(response.data) ? response.data : []);
    })
    .catch((error) => {
      console.error("Error fetching forecast:", error);
      setForecast([]);  // Set to empty array on error
    });

  // Fetch metrics data
  fetchMetrics()
    .then((response) => {
      console.log("Fetched metrics:", response.data);  // Check metrics response
      setMetrics(response.data || {});
    })
    .catch((error)=> {
      console.error("Error fetching metrics:", error);
    });
  
  // Fetch events data
  fetchEvents()
   .then((response) => {
      console.log("Fetched events:", response.data);  // Check event response
      setEvents(Array.isArray(response.data) ? response.data : []);
   })
   .catch((error) => {
     console.error("Error fetching events:", error);
     setEvents([]);  // Set to empty array on error
   });

}, []);



  return (
    <div className="container">
      <h1>Brent Oil Price Dashboard</h1>
      <Filters setData={setData} />
      <Charts data={data} forecast={forecast} events={events}/>
      <div className="metrics">
        <h2>Model Metrics</h2>
        <p>RMSE: {metrics.RMSE}</p>
        <p>MAE: {metrics.MAE}</p>
      </div>
    </div>
  );
};

export default Dashboard;
