from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

# Load data
brent_data = pd.read_csv('data/brent_data.csv')  # Historical Brent oil prices
model_forecast = pd.read_csv('data/model_forecast.csv')  # Model forecast data
with open('data/metrics.json', 'r') as f:
    model_metrics = json.load(f)  # Model evaluation metrics

@app.route('/api/data', methods=['GET'])
def get_data():
    """Return historical Brent oil prices data."""
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    
    # Filter data based on date range if provided
    filtered_data = brent_data.copy()
    if start_date and end_date:
        filtered_data = filtered_data[(filtered_data['Date'] >= start_date) & (filtered_data['Date'] <= end_date)]

    return jsonify(filtered_data.to_dict(orient='records'))

@app.route('/api/forecast', methods=['GET'])
def get_forecast():
    """Return model forecast data."""
    return jsonify(model_forecast.to_dict(orient='records'))

@app.route('/api/metrics', methods=['GET'])
def get_metrics():
    """Return model evaluation metrics like RMSE and MAE."""
    return jsonify(model_metrics)

if __name__ == '__main__':
    app.run(debug=True)
