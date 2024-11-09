
# Brent Oil Price Dashboard

This project is an interactive web dashboard for analyzing and visualizing Brent oil prices over time. The dashboard includes data visualizations for historical prices, model forecasts, and event impacts, providing insights into how different factors influence oil prices. It is built using **React** for the frontend and **Flask** for the backend, with **Plotly** and **Recharts** for data visualization.

## Features
- **Historical Trends**: Interactive line charts display historical Brent oil prices.
- **Model Forecasts**: Forecast data visualized alongside actual prices for comparison.
- **Event Impact Visualization**: charts highlighting the impact of major events on oil prices.
- **Metrics Display**: Key performance metrics (e.g., RMSE, MAE) for model evaluation.
- **Filters**: Date and event filters allow for custom data ranges and event-specific analysis.
- **Responsive Design**: Dashboard is accessible on desktop, tablet, and mobile devices.

## Tech Stack
- **Frontend**: React, Recharts, Plotly, and React DatePicker
- **Backend**: Flask (Python)
- **Data Processing**: Pandas (Python)
- **Styling**: CSS, Bootstrap (for layout)

## Project Structure

```
Dashboard/
├── backend/
│   ├── app.py                # Flask backend app
│   ├── requirements.txt       # Backend dependencies
│   ├── data/
│   │   ├── brent_data.csv     # Historical Brent oil prices with events
│   │   ├── model_forecast.csv # Model predictions
|   |   ├── events_impact.csv   # event impact on be=rent oil prices
│   │   └── metrics.json       # Model evaluation metrics
│   ├── models/                # Saved models (e.g., LSTM.pth, VAR.joblib)
└── frontend/
    ├── Screenshots/
    ├── src/
    │   ├── components/        # React components
    │   │   ├── Dashboard.js   # Main dashboard component
    │   │   ├── Charts.js      # Charts component
    |   |   ├── Filters.css         
    │   │   └── Filters.js     # Date and event filters
    │   ├── App.js             # Main React App entry point
    │   ├── index.js           # ReactDOM.render entry point
    │   ├── api.js             # API calls to Flask backend
    ├── package.json           # Frontend dependencies
    └── .env                   # Environment variables for API URLs
```

## Installation

### Prerequisites
- **Node.js** and **npm** for the frontend
- **Python 3.x** and **pip** for the backend

### Backend Setup
1. Clone the repository and navigate to the `backend` directory:
   ```bash
   git clone https://github.com/yohannestayez/statistical-modelling-of-time-series-data.git
   cd brent-oil-dashboard/backend
   ```
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Flask backend:
   ```bash
   python app.py
   ```
   The backend server will start at `http://localhost:5000`.

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the React frontend:
   ```bash
   npm start
   ```
   The frontend server will start at `http://localhost:3000`.

## Usage
1. **Navigate to `http://localhost:3000`** in your browser to view the dashboard.
2. Use the date filter to view specific time periods.
3. Hover over chart elements for details, and use tooltips to explore data points.

## API Endpoints
### Backend API (Flask)
- **`GET /api/data`**: Returns historical Brent oil prices and event markers.
- **`GET /api/forecast`**: Returns model forecast data for Brent oil prices.
- **`GET /api/events`**: Returns event impact data for Brent oil prices.
- **`GET /api/metrics`**: Returns model evaluation metrics (e.g., RMSE, MAE).
- **`POST /api/predict`**: Accepts JSON input to generate predictions using a saved model.


## Customization
- **Add New Data**: To add new data sources, save them in the `backend/data/` folder, and modify `app.py` to serve new datasets.
- **Update Visualizations**: Edit `Charts.js` to customize or add new chart types.
- **Change Styling**: Modify `index.css` or use additional CSS libraries for custom styles.


