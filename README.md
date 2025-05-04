# Weather_App

## Description
A simple, interactive weather application that allows users to check current weather conditions for any city around the world. The app displays temperature, humidity, wind speed, and weather icons based on current conditions.

## Features
- Real-time weather data using the OpenWeatherMap API
- Search for any city globally
- Displays current temperature in Celsius
- Shows humidity percentage and wind speed
- Weather icons that change based on current conditions
- Clean, responsive user interface

## Installation
1. Clone the repository or download the files
2. Open `index.html` in your web browser

## Files
- `index.html` - The main HTML structure
- `style.css` - CSS styling for the weather app
- `script.js` - JavaScript functionality
- `images/` - Directory containing weather icons and UI elements

## Usage
1. Enter a city name in the search box
2. Click the search button or press Enter
3. View the current weather information for the requested city

## API Integration
This app uses the OpenWeatherMap API. The free tier allows up to 1,000 API calls per day.

## Trouble shooting
- Make sure the script tag is placed at the bottom of the body element or has the `defer` attribute
- Check that all image paths are correct and files exist in the images directory
- Ensure your API key is valid and correctly entered in the script
- Check browser console for any JavaScript errors

## Credits
- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons designed for weather representation

## Future Enhancements
- Weather forecast for multiple days
- Temperature unit toggle (Celsius/Fahrenheit)
- Geolocation to automatically detect user's city
- Additional weather metrics (pressure, visibility, etc.)
