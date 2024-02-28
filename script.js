// Define a dictionary to store city names and their temperatures
// Dictionary or list of 10 specific cities and their random temperatures
const cityTemperatures = {
    "Nagpur": Math.floor(Math.random() * 20) + 20,  // Random temperature between 20 and 40
    "Mumbai": Math.floor(Math.random() * 20) + 20,
    "Delhi": Math.floor(Math.random() * 20) + 20,
    "Bangalore": Math.floor(Math.random() * 20) + 20,
    "Chennai": Math.floor(Math.random() * 20) + 20,
    "Kolkata": Math.floor(Math.random() * 20) + 20,
    "Pune": Math.floor(Math.random() * 20) + 20,
    "Hyderabad": Math.floor(Math.random() * 20) + 20,
    "Jaipur": Math.floor(Math.random() * 20) + 20,
    "Ahmedabad": Math.floor(Math.random() * 20) + 20
};

// Function to get weather report for a city
function getWeatherReport(city) {
    let temperature = cityTemperatures[city];
    if (temperature !== undefined) {
        displayWeather(city, temperature);
    } else {
        alert("City not found.");
    }
}

// Function to display weather information
function displayWeather(city, temperature) {
    let weatherBody = document.getElementById('weather-body');
    weatherBody.innerHTML = `
        <div class="location-details">
            <div class="city">${city}</div>
        </div>
        <div class="weather-status">
            <div class="temp">${temperature}°C</div>
        </div>
    `;
}

// Event listener for search button
document.getElementById('search-button').addEventListener('click', () => {
    let city = document.getElementById('input-box').value;
    getWeatherReport(city);
});

