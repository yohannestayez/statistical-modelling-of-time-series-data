import requests
from bs4 import BeautifulSoup
import pandas as pd
from datetime import datetime, timedelta
import time
from dotenv import load_dotenv
import os

load_dotenv('.env')

# Initialize list to store news data
news_data = []

# Define Reuters base URL and search parameters
reuters_base_url = "https://www.reuters.com"
search_queries = ["Brent oil prices", "crude oil", "OPEC", "energy markets"]

# Define date range
start_date = datetime(1987, 1, 1)
end_date = datetime(2023, 12, 31)

# Function to scrape Reuters news
def scrape_reuters_news(query, start_date, end_date):
    current_date = start_date
    while current_date <= end_date:
        formatted_start_date = current_date.strftime("%Y-%m-%d")
        next_date = current_date + timedelta(days=90)
        formatted_end_date = min(next_date, end_date).strftime("%Y-%m-%d")

        # Construct search URL for Reuters
        search_url = f"{reuters_base_url}/search/news?blob={query}&dateRange=all"

        # Request news from Reuters
        response = requests.get(search_url)
        if response.status_code != 200:
            print(f"Failed to retrieve data for {formatted_start_date} to {formatted_end_date}")
            current_date = next_date  # Move to the next interval
            continue

        # Parse page content with BeautifulSoup
        soup = BeautifulSoup(response.content, "html.parser")
        articles = soup.find_all("article", {"class": "story"})

        # Loop through each article and extract data
        for article in articles:
            try:
                headline = article.find("h3").get_text(strip=True)
                description = article.find("p").get_text(strip=True)
                date_element = article.find("time")
                date = date_element.get("datetime") if date_element else formatted_start_date
                link = article.find("a", href=True)
                article_url = f"{reuters_base_url}{link['href']}" if link else "N/A"

                news_data.append({
                    "headline": headline,
                    "description": description,
                    "date": date,
                    "url": article_url,
                    "source": "Reuters"
                })
            except AttributeError:
                continue

        # Move to the next 3-month interval
        current_date = next_date
        time.sleep(1)  # To avoid rate-limiting
        print(f"Scraping data from day: {current_date}")

# Run the Reuters scraper for each search query
for query in search_queries:
    scrape_reuters_news(query, start_date, end_date)

# Convert the collected data into a DataFrame and save it to a CSV file
df = pd.DataFrame(news_data)
df.to_csv("C:/Users/Administrator/Documents/kifiya/Week_10/data/brent_oil_news_data.csv", index=False)

print("Scraping completed and data saved to brent_oil_news_data.csv")
