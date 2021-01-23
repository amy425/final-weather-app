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
    let hour = date.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
}

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
}

    return `${hour}:${minutes}`
}

function displayTodayInfo(response) {

    console.log(`${apiUrl}&appid=${apiKey}`);
    
    //Today's info
    let searchCityNameValue = response.data.city.name;
    let searchCityNameElement = document.querySelector("#city");
    searchCityNameElement.innerHTML = `${searchCityNameValue}`;
    console.log(`${searchCityNameValue}`);

    let iconElement = document.querySelector("#todays-icon");
    iconElement.setAttribute("src", "clouds.jpg");
    iconElement.setAttribute("alt", response.data.list[0].weather[0].description);

    let searchCityTempValue = Math.round(response.data.list[0].main.temp);
    let searchCityTempElement = document.querySelector("#todays-temperature-value");
    searchCityTempElement.innerHTML = `${searchCityTempValue}`;
    console.log(`${searchCityTempValue}`);

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


    //Today's date & time
    let searchCityTimeValue = formatDate(response.data.list[0].dt * 1000);
    let searchCityTimeElement = document.querySelector("#date");
    searchCityTimeElement.innerHTML = `${searchCityTimeValue}`;

    let searchCityDateValue = formatTime(response.data.list[0].dt * 1000);
    let searchCityDateElement = document.querySelector("#today-time");
    searchCityDateElement.innerHTML = `${searchCityDateValue}`;
    

    //Day 2
    let secondWeekday = formatDate(response.data.list[9].dt * 1000);
    let secondWeekdayElement = document.querySelector("#second-day");
    secondWeekdayElement.innerHTML = `${secondWeekday}`;

    let searchCityDayOneValue = Math.round(response.data.list[9].main.temp);
    let searchCityDayOneElement = document.querySelector("#temp-plus-one");
    searchCityDayOneElement.innerHTML = `${searchCityDayOneValue}`;
    console.log(`${searchCityDayOneValue}`);


    //Day 3
    let thirdWeekday = formatDate(response.data.list[18].dt * 1000);
    let thirdWeekdayElement = document.querySelector("#third-day");
    thirdWeekdayElement.innerHTML = `${thirdWeekday}`;

    let searchCityDayThreeValue = Math.round(response.data.list[18].main.temp);
    let searchCityDayThreeElement = document.querySelector("#temp-plus-two");
    searchCityDayThreeElement.innerHTML = `${searchCityDayThreeValue}`;
    console.log(`${searchCityDayThreeValue}`);

}
 
let apiKey = `4581002eb6d6effa90c6392584a38b4b`;
let city = `Sydney`;
let units = `metric`;
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTodayInfo);

//Change to Fahrenheit - add stop
function changeToFahrenheit(event) {
  event.preventDefault();
  let currentLocationTemp = document.querySelector(".temp");
  currentLocationTemp.innerHTML = Math.round(
    (currentLocationTemp.innerHTML * 9) / 5 + 32
  );
}

//Change to Celsius - add stop
function changeToCelsius(event) {
  event.preventDefault();
  let currentLocationTemp = document.querySelector(".temp");
  currentLocationTemp.innerHTML = Math.round(
    ((currentLocationTemp.innerHTML - 32) * 5) / 9
  );
}

let fahrenheitTemp = document.querySelector("#fahrenheit-link");
fahrenheitTemp.addEventListener("click", changeToFahrenheit);

let celsiusTemp = document.querySelector("#celsius-link");
celsiusTemp.addEventListener("click", changeToCelsius);
