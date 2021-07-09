from flask import Flask
import requests
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def fetch_data():
    url = "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&id=240444&api_key=" + os.environ.get("API_KEY")
    r = requests.get(url)
    data = r.json()
    return data