
const cityTemperatures = {
    "Nagpur": Math.floor(Math.random() * 20) + 20,  
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


function getWeatherReport(city) {
    let temperature = cityTemperatures[city];
    if (temperature !== undefined) {
        displayWeather(city, temperature);
    } else {
        alert("City not found.");
    }
}


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
    weatherBody.style.display = "block"; // 
}

document.getElementById('search-button').addEventListener('click', () => {
    let city = document.getElementById('input-box').value.trim();
    if (city !== "") {
        getWeatherReport(city);
    } else {
        alert("Please enter a city name.");
    }
});

