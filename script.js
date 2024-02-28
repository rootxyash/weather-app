// Define a dictionary to store city names and their temperatures
let cityTemperatures = {};

// Update the getWeatherReport function to populate the dictionary
function getWeatherReport(city) {
    fetch(`${https://api.openweathermap.org/data/2.5/weather}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(weatherData => {
            cityTemperatures[weatherData.name] = weatherData.main.temp;
            displayCityTemperatures();
        });
}

// Display city names and their temperatures
function displayCityTemperatures() {
    let temperatureList = document.getElementById('temperature-list');
    temperatureList.innerHTML = '';

    for (let city in cityTemperatures) {
        let listItem = document.createElement('li');
        listItem.textContent = `${city}: ${cityTemperatures[city]}°C`;
        temperatureList.appendChild(listItem);
    }
}

// Remove the event listener for key press of enter
// Remove the showWeatherReport function
// Remove the getTime and dateManage functions
// Remove the changeBg and getIconClass functions

// Optional: Add a button click event listener to trigger getWeatherReport
let searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
    let searchInputBox = document.getElementById('input-box');
    getWeatherReport(searchInputBox.value);
});

// Optional: Reset the input box after adding a city
function reset() {
    let input = document.getElementById('input-box');
    input.value = '';
}


