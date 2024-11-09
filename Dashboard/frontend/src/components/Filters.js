import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { fetchData } from '../api';
import './Filters.css'; // Custom CSS for date picker styling

const Filters = ({ setData }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const applyFilter = () => {
    const start = startDate ? startDate.toISOString().split("T")[0] : "";
    const end = endDate ? endDate.toISOString().split("T")[0] : "";
    fetchData(start, end).then((response) => setData(response.data));
  };

  return (
    <div className="filters">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Select Start Date"
        className="date-picker"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Select End Date"
        className="date-picker"
      />
      <button onClick={applyFilter} className="filter-button">Apply Filter</button>
    </div>
  );
};

export default Filters;
