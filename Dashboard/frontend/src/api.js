import axios from 'axios';

// Base URL for the Flask API
const API_BASE_URL = 'http://localhost:5000/api';

export const fetchData = (startDate, endDate) =>
  axios.get(`${API_BASE_URL}/data`, { params: { start_date: startDate, end_date: endDate } });

export const fetchForecast = () => axios.get(`${API_BASE_URL}/forecast`);

export const fetchMetrics = () => axios.get(`${API_BASE_URL}/metrics`);
