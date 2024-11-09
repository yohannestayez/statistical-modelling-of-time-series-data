

# **Brent Oil Price Analysis and Forecasting**

## **Project Overview**

This project aims to analyze the impact of global events on Brent oil prices and develop predictive models for forecasting price trends. By employing techniques such as change point analysis, statistical modeling, and time-series forecasting, the project explores significant shifts in oil prices related to global events, such as geopolitical conflicts, economic sanctions, and OPEC policy changes. This analysis will offer valuable insights into the causal relationships between global events and oil price fluctuations, enabling investors, policymakers, and energy companies to make informed decisions in the volatile energy market.

---

## **Project Structure**

```
├── .vscode/
│   └── settings.json
├── .github/
│   └── workflows/
│       └── unittests.yml
├── .gitignore
├── requirements.txt
├── README.md
├── src/
│   └── __init__.py
├── notebooks/
│   ├── Adding_Additional_Economic_Indicators.ipynb
│   ├── Model_Training.ipynb
│   ├── VAR.ipynb
│   └── Data_Workflow_and_Model_Understanding.ipynb
├── tests/
│   └── __init__.py
├── scripts/
|    ├── __init__.py
|    ├──  Model_Training.py
|    └── web_data_scrapping.py
└── Dashboard/
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

The project consists of multiple Jupyter notebooks, each dedicated to specific aspects of the analysis. Below is a brief description of each notebook:

## Notebooks

### **1. Data_Workflow_and_Model_Understanding.ipynb**
   - This notebook provides a complete data workflow, including Exploratory Data Analysis (EDA), event impact analysis, change point detection, time-series modeling, and residual analysis.
   - **Key Components**:
     - **Data Loading and Preprocessing**: Cleans and prepares historical Brent oil price data for analysis.
     - **EDA**: Visualizes data trends, volatility, and autocorrelation.
     - **Event Impact Analysis**: Examines how specific global events impact price volatility and returns.
     - **Change Point Detection**: Identifies abrupt shifts in oil price trends using the PELT algorithm.
     - **Time Series Modeling**: Implements ARIMA and GARCH models for forecasting and volatility estimation.
     - **Residual Analysis**: Validates model assumptions through statistical tests and diagnostics.

### **2. Adding_Additional_Economic_Indicators.ipynb**
   - This notebook enhances the Brent oil price data by integrating additional economic indicators (e.g., GDP growth, inflation rates, exchange rates).
   - **Key Components**:
     - **Data Loading**: Imports Brent oil prices and selected economic indicators.
     - **Data Cleaning and Merging**: Processes each dataset, handles missing values, and merges based on the `Year` column.
     - **Output**: Produces a comprehensive dataset, `Merged_brent_oil_prices_with_Indicators.csv`, which combines oil prices with economic indicators for advanced analysis.

### **3. Model_Training.ipynb**
   - This notebook focuses on building and training an LSTM model to forecast Brent oil prices using the combined dataset of prices and economic indicators.
   - **Key Components**:
     - **Data Preprocessing**: Scales data and creates sequential data batches for LSTM input.
     - **Model Definition and Training**: Defines and trains an LSTM model with Mean Squared Error (MSE) as the loss function over 50 epochs.
     - **Evaluation**: Splits data into training and testing sets, tracks model performance, and prints the loss after each epoch.

### **4. VAR.ipynb**
   - This notebook performs time-series analysis using a Vector Autoregression (VAR) model to capture multivariate dependencies and forecast future values in Brent oil prices.
   - **Key Components**:
     - **Data Preparation**: Checks for missing values and confirms data stationarity using the Augmented Dickey-Fuller test.
     - **VAR Model Training**: Trains a VAR model to understand interdependencies among time-series variables.
     - **Model Evaluation**: Evaluates model performance using metrics such as Mean Squared Error (MSE), Mean Absolute Error (MAE), and Mean Absolute Percentage Error (MAPE).



---

## **Setup and Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yohannestayez/statistical-modelling-of-time-series-data.git
   ```

2. **Install Dependencies**:
   - Ensure Python 3.x is installed.
   - Install required libraries:
     ```bash
     pip install -r requirements.txt
     ```

3. **Run Jupyter Notebook**:
   ```bash
   jupyter notebook
   ```
   - Open the desired notebook and run the cells sequentially.

---


## **Dashboard**
   - **Historical Trends**: Interactive line charts display historical Brent oil prices.
   - **Model Forecasts**: Forecast data visualized alongside actual prices for comparison.
   - **Event Impact Visualization**: Charts highlight the impact of major events on oil prices.
   - **Metrics Display**: Key performance metrics (e.g., RMSE, MAE) for model evaluation.
   - **Filters**: Date and event filters allow for custom data ranges and event-specific analysis.

## **Usage Instructions**

1. **Data Workflow and Analysis**:
   - Open `Data_Workflow_and_Model_Understanding.ipynb` to explore the data workflow, event analysis, change point detection, and time-series modeling.

2. **Economic Indicators Integration**:
   - Use `Adding_Additional_Economic_Indicators.ipynb` to merge additional economic data with oil prices for further analysis or modeling.

3. **Model Training**:
   - Execute `Model_Training.ipynb` to train and evaluate an LSTM model on the dataset that includes economic indicators.

4. **Time-Series Analysis**:
   - Run `VAR.ipynb` to analyze interdependencies and forecast Brent oil prices using a VAR model.

---

## **Results Summary**

1. **Event Impact Analysis**:
   - Major global events correlate with significant changes in oil price volatility and returns, providing insights into market reactions to geopolitical and economic shifts.

2. **Change Point Detection**:
   - Identified key change points in oil price trends, often aligning with major events impacting the energy market.

3. **Forecasting and Residual Analysis**:
   - Time-series modeling and residual diagnostics confirm the model's robustness, making it suitable for forecasting applications.

4. **Predictive Modeling**:
   - The LSTM and VAR models demonstrate the ability to forecast trends in Brent oil prices based on historical data and economic indicators, with performance evaluated using various metrics.

---

## **API Endpoints**
- **`GET /api/data`**: Historical data with event markers.
- **`GET /api/forecast`**: Model forecasts.
- **`GET /api/events`**: Event impact data.
- **`GET /api/metrics`**: Model evaluation metrics.


## **Contributing**

Contributions are welcome to enhance or extend the analysis, including additional features, models, or improvements in data processing.

---

## **License**

This project does not currently have a specific license. Please contact the project owner for permission to use, modify, or distribute any content.

---

## **Contact**

For questions, suggestions, or further information, feel free to reach out:
- **Yohannes Taye**
- [GitHub Profile](https://github.com/yohannestayez)

