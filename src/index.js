function formatDate(timestamp) {
    let date = new Date(timestamp);

    let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
    ];

    let day = days[date.getDay()];
    return `${day}`
}

function formatTime(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
}

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
}

    let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
    ];

    let day = days[date.getDay()];
    return `${hours}:${minutes}`
}

function displayTodayInfo(response) {

    console.log(`${apiUrl}&appid=${apiKey}`);
    
    let searchCityTempValue = Math.round(response.data.list[0].main.temp);
    let searchCityTempElement = document.querySelector("#todays-temperature-value");
    searchCityTempElement.innerHTML = `${searchCityTempValue}`;
    console.log(`${searchCityTempValue}`);

    let searchCityNameValue = response.data.city.name;
    let searchCityNameElement = document.querySelector("#city");
    searchCityNameElement.innerHTML = `${searchCityNameValue}`;
    console.log(`${searchCityNameValue}`);

    let searchCityConditionsValue = response.data.list[0].weather[0].description;
    let searchCityConditionsElement = document.querySelector("#conditions");
    searchCityConditionsElement.innerHTML = `${searchCityConditionsValue}`;
    console.log(`${searchCityConditionsValue}`);

    let searchCityFeelsLikeValue = Math.round(response.data.list[0].main.feels_like);
    let searchCityFeelsLikeElement = document.querySelector("#feels-like");
    searchCityFeelsLikeElement.innerHTML = `${searchCityFeelsLikeValue}`;
    console.log(`${searchCityFeelsLikeValue}`);

    let searchCityHumidityValue = response.data.list[0].main.humidity;
    let searchCityHumidityElement = document.querySelector("#humidity");
    searchCityHumidityElement.innerHTML = `${searchCityHumidityValue}`;
    console.log(`${searchCityHumidityValue}`);

    let searchCityWindSpeedValue = Math.round(response.data.list[0].wind.speed);
    let searchCityWindSpeedElement = document.querySelector("#wind-speed");
    searchCityWindSpeedElement.innerHTML = `${searchCityWindSpeedValue}`;
    console.log(`${searchCityWindSpeedValue}`);

    let searchCityTimeValue = formatDate(response.data.list[0].dt * 1000);
    let searchCityTimeElement = document.querySelector("#date");
    searchCityTimeElement.innerHTML = `${searchCityTimeValue}`;

    let searchCityDateValue = formatTime(response.data.list[0].dt * 1000);
    let searchCityDateElement = document.querySelector("#today-time");
    searchCityDateElement.innerHTML = `${searchCityDateValue}`;

    let searchCityDayOneValue = Math.round(response.data.list[8].main.temp);
    let searchCityDayOneElement = document.querySelector("#temp-plus-one");
    searchCityDayOneElement.innerHTML = `${searchCityDayOneValue}`;
    console.log(`${searchCityDayOneValue}`);

    let searchCityDayTwoValue = Math.round(response.data.list[16].main.temp);
    let searchCityDayTwoElement = document.querySelector("#temp-plus-two");
    searchCityDayTwoElement.innerHTML = `${searchCityDayTwoValue}`;
    console.log(`${searchCityDayTwoValue}`);

}
 
let apiKey = "4581002eb6d6effa90c6392584a38b4b";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&units=${units}`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTodayInfo);