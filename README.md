
# **Brent Oil Price Analysis and Forecasting**

## **Project Overview**

The project aims to analyze the impact of global events on Brent oil prices. By employing change point analysis and statistical modeling techniques, we will identify significant shifts in oil prices and associate them with specific events such as geopolitical conflicts, economic sanctions, and OPEC policy changes. This analysis will provide valuable insights into the causal relationships between global events and oil price fluctuations, enabling investors, policymakers, and energy companies to make informed decisions in the volatile energy market.

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
│   ├── __init__.py
│   └── Data_Workflow_and_Model_Understanding.ipynb
├── tests/
│   └── __init__.py
└── scripts/
    ├── __init__.py
    └── web_data_scrapping.py
   

```

The project consists of multiple Jupyter notebooks, each dedicated to specific aspects of the analysis. Below is a brief description of each notebook:

### **1. Data_Workflow_and_Model_Understanding.ipynb**
   - This notebook covers the entire data workflow, including EDA, event impact analysis, change point detection, time series modeling, and residual analysis.
   - **Key Components**:
     - **Data Loading and Preprocessing**: Import and clean historical Brent oil price data.
     - **EDA**: Visualize trends, volatility, and perform autocorrelation analysis.
     - **Event Impact Analysis**: Assess how events affect price volatility and returns.
     - **Change Point Detection**: Identify abrupt trend shifts using the PELT algorithm.
     - **Time Series Modeling**: Use ARIMA and GARCH models for forecasting and volatility estimation.
     - **Residual Analysis**: Validate model assumptions using statistical tests and visual diagnostics.

## **Setup and Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yohannestayez/statistical-modelling-of-time-series-data.git
   ```

2. **Install Dependencies**:
   - Make sure Python 3.x is installed.
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

## **Usage Instructions**

1. **Data Workflow and Analysis**:
   - Open `Data_Workflow_and_Model_Understanding.ipynb` and execute the cells to understand and replicate the complete analysis.


---

## **Results Summary**

1. **Event Impact Analysis**:
   - Significant events, like geopolitical or economic occurrences, influence oil price volatility and returns. The analysis quantifies these impacts over defined periods.
2. **Change Point Detection**:
   - Highlighted change points indicate major trend shifts, correlating with market changes or events.
3. **Residual Analysis**:
   - Model assumptions are validated using statistical tests, confirming robustness for forecasting applications.

---

## **Contributing**

Contributions to improve or extend the analysis are welcome.

---

## **License**

This project does not have a specific license. If you wish to use, modify, or distribute the content, please contact the project owner for permission and details.

---

## **Contact**

For questions or suggestions, feel free to reach out:
- **Yohannes Taye**
- [GitHub Profile](https://github.com/yohannestayez)

