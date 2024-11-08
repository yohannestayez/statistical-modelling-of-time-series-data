import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Charts = ({ data, forecast }) => {
  return (
    <div>
      <h2>Historical Brent Oil Prices</h2>
      <LineChart width={800} height={400} data={data}>
        <Line type="monotone" dataKey="Price" stroke="#8884d8" name="Historical Prices" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>

      <h2>Model Forecast</h2>
      <LineChart width={800} height={400} data={forecast}>
        <Line type="monotone" dataKey="Forecast" stroke="#82ca9d" name="Forecasted Prices" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Charts;
