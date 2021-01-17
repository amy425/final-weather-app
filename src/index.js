function getTemp(response) {
    
    let searchCityTempValue = Math.round(response.data.main.temp);
    let searchCityTempElement = document.querySelector("#todays-temperature-value");
    searchCityTempElement.innerHTML = `${searchCityTempValue}`;
    console.log(`${apiUrl}&appid=${apiKey}`);
    console.log(`${searchCityTempValue}`);

    let searchCityNameValue = response.data.name;
    let searchCityNameElement = document.querySelector("#city");
    searchCityNameElement.innerHTML = `${searchCityNameValue}`;
    console.log(`${searchCityNameValue}`);

    let searchCityConditionsValue = response.data.weather[0].description;
    let searchCityConditionsElement = document.querySelector("#conditions");
    searchCityConditionsElement.innerHTML = `${searchCityConditionsValue}`;
    console.log(`${searchCityConditionsValue}`);

    let searchCityHumidityValue = response.data.main.humidity;
    let searchCityHumidityElement = document.querySelector("#humidity");
    searchCityHumidityElement.innerHTML = `${searchCityHumidityValue}`;
    console.log(`${searchCityHumidityValue}`);

    let searchCityWindSpeedValue = Math.round(response.data.wind.speed);
    let searchCityWindSpeedElement = document.querySelector("#wind-speed");
    searchCityWindSpeedElement.innerHTML = `${searchCityWindSpeedValue}`;
    console.log(`${searchCityWindSpeedValue}`);
}

let apiKey = "4581002eb6d6effa90c6392584a38b4b";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=${units}`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemp);