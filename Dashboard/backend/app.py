from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
import pandas as pd
import joblib
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
# Load data
brent_data = pd.read_csv('Dashboard/backend/data/brent_data.csv')  # Historical Brent oil prices
model_forecast = pd.read_csv('Dashboard/backend/data/model_forecast.csv')  # Model forecast data
event_impact = pd.read_csv('Dashboard/backend/data/events_impact.csv')  #Event impact data

with open('Dashboard/backend/data/metrics.json', 'r') as f:
    model_metrics = json.load(f)  # Model evaluation metrics

# Load the Joblib model (e.g., VAR or other models saved with joblib)
model = joblib.load('Dashboard/backend/models/VAR_model.joblib')  # Path to your Joblib model

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

@app.route('/api/events', methods=['GET'])
def get_events():
    """Return model forecast data."""
    return jsonify(event_impact.to_dict(orient='records'))

@app.route('/api/metrics', methods=['GET'])
def get_metrics():
    """Return model evaluation metrics like RMSE and MAE."""
    return jsonify(model_metrics)

@app.route('/api/predict', methods=['POST'])
def predict():
    """Make predictions with the Joblib model."""
    data = request.get_json()  # Expecting JSON input with necessary features
    input_df = pd.DataFrame(data)  # Convert JSON input to DataFrame
    
    # Use the loaded model to make predictions
    try:
        predictions = model.forecast(y=input_df.values, steps=10)  # Adjust steps as needed
        prediction_df = pd.DataFrame(predictions, columns=['Forecasted_Price'])
        response = prediction_df.to_dict(orient='records')
    except Exception as e:
        return jsonify({'error': str(e)}), 400

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
