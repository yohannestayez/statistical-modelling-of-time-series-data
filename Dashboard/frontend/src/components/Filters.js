import React, { useState } from 'react';
import { fetchData } from '../api';

const Filters = ({ setData }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const applyFilter = () => {
    fetchData(startDate, endDate).then((response) => setData(response.data));
  };

  return (
    <div>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Start Date"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
      />
      <button onClick={applyFilter}>Apply Filter</button>
    </div>
  );
};

export default Filters;
