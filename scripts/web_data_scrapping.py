import yfinance as yf
import pandas as pd

# Fetch historical data for Brent crude oil
brent_data = yf.Ticker("BZ=F")  # "BZ=F" is the ticker symbol for Brent crude oil

# Retrieve data from January 1, 1987, to December 31, 2023
hist_data = brent_data.history(start="1987-01-01", end="2022-12-31")

# Display the first few rows of the historical data
print(hist_data.head())

# Save the historical data to a CSV file
csv_path = "C:/Users/Administrator/Documents/kifiya/Week_10/data/brent_crude_oil_data.csv"
hist_data.to_csv(csv_path)
print(f"Data saved to {csv_path}")
