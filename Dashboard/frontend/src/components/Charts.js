import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ComposedChart, } from 'recharts';

const Charts = ({ data, forecast, events }) => {
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
          <Line type="monotone" dataKey="Volatility" stroke="#8884d8" name="Volatility" />
          <Line type="monotone" dataKey="Momentum" stroke="#82ca9d" name="Momentum" />
          <Line type="monotone" dataKey="Rolling_Corr" stroke="#ff7300" name="Rolling Correlation" />
          <XAxis dataKey="Date" />
          <YAxis domain={[0, 0.5]}/>
          <Tooltip />
          <Legend />
        </LineChart>
      ) : (
        <p>No forecast data available</p>
      )}


      <h2>Event Impact on Prices</h2>
      {Array.isArray(events) && events.length > 0 ? (
        <ComposedChart width={800} height={400} data={events}>
          <Line dataKey="before_price" stroke="#e74c3c" name="Before Event Price" />
          <Line dataKey="after_price" stroke="#3498db" name="After Event Price" />
          <XAxis dataKey="Date" angle={-90} textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Legend />

                {/* Add a vertical line for each event date */}
        {events.map((event, index) => (
          <ReferenceLine
            key={index}
            x={event.Date}
            stroke="blue"
            strokeDasharray="3 3"
            label={{ position: 'top', value: event.Event }}
          />
        ))}
        </ComposedChart>
      ) : (
        <p>No event impact data available</p>
      )}
    </div>
  );
};

export default Charts;
