# UW-Stats

This project fetches data about University of Wisconsin-Madison from an API to create visualizations. Built with React and Flask.

## Setup

### Frontend - React
Install the packages using: `yarn`

### Backend - Flask
```
# Move into data folder
$ cd data

# Set up Python virtual environment
$ py -m venv venv

# Activate virtual environment
$ source venv/Scripts/activate

# Install packages
$ pip install Flask requests python-dotenv
```

Request an API key from https://api.data.gov/signup/, and create a .env file containing the API key:
```
API_KEY=XXX
```

From root directory, run the application using `yarn dev`
