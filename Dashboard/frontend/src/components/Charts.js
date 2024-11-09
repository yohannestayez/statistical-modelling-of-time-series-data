import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';

const Charts = ({ data, forecast }) => {
  return (
    <div className="charts">
      <h2>Historical Brent Oil Prices</h2>
      {Array.isArray(data) && data.length > 0 ? (
        <LineChart width={800} height={400} data={data}>
          <Line type="monotone" dataKey="Price" stroke="#8884d8" name="Historical Prices" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      ) : (
        <p>No historical data available</p>
      )}

      <h2>Model Forecast</h2>
      {Array.isArray(forecast) && forecast.length > 0 ? (
        <LineChart width={800} height={400} data={forecast}>
          <Line type="monotone" dataKey="Pri  ce" stroke="#82ca9d" name="Forecasted Prices" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      ) : (
        <p>No forecast data available</p>
      )}

      <h2>Event Impact on Prices</h2>
      {Array.isArray(data) && data.length > 0 ? (
        <BarChart width={800} height={400} data={data}>
          <Bar dataKey="EventImpact" fill="#e74c3c" name="Event Impact" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </BarChart>
      ) : (
        <p>No event impact data available</p>
      )}
    </div>
  );
};

export default Charts;
