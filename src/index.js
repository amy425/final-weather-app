function formatDate(timestamp) {
    let date = new Date(timestamp);

    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
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
    
  for (let i of document.getElementsByClassName("cfunit")){
   i.innerHTML = `°C`;
  }

  celsiusTemp.classList.add("active");
  fahrenheitTemp.classList.remove("active");

    //Today's info
    let searchCityNameValue = response.data.city.name;
    let searchCityNameElement = document.querySelector("#city");
    searchCityNameElement.innerHTML = `${searchCityNameValue}`;

    let iconElement = document.querySelector("#todays-icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.list[0].weather[0].description);

    let searchCityTempValue = Math.round(response.data.list[0].main.temp);
    let searchCityTempElement = document.querySelector("#today-temp");
    searchCityTempElement.innerHTML = `${searchCityTempValue}`;

    let searchCityConditionsValue = response.data.list[0].weather[0].description;
    let searchCityConditionsElement = document.querySelector("#conditions");
    searchCityConditionsElement.innerHTML = `${searchCityConditionsValue}`;

    let searchCityFeelsLikeValue = Math.round(response.data.list[0].main.feels_like);
    let searchCityFeelsLikeElement = document.querySelector("#feels-like");
    searchCityFeelsLikeElement.innerHTML = `${searchCityFeelsLikeValue}`;

    let searchCityHumidityValue = response.data.list[0].main.humidity;
    let searchCityHumidityElement = document.querySelector("#humidity");
    searchCityHumidityElement.innerHTML = `${searchCityHumidityValue}`;

    let searchCityWindSpeedValue = Math.round(response.data.list[0].wind.speed);
    let searchCityWindSpeedElement = document.querySelector("#wind-speed");
    searchCityWindSpeedElement.innerHTML = `${searchCityWindSpeedValue}`;


    //Today's date & time
    let searchCityTimeValue = formatDate(response.data.list[0].dt * 1000);
    let searchCityTimeElement = document.querySelector("#date");
    searchCityTimeElement.innerHTML = `${searchCityTimeValue}`;
    console.log(formatDate(response.data.list[0].dt * 1000));

    let searchCityDateValue = formatTime(response.data.list[0].dt * 1000);
    let searchCityDateElement = document.querySelector("#today-time");
    searchCityDateElement.innerHTML = `${searchCityDateValue}`;
    console.log(formatTime(response.data.list[0].dt * 1000));

    //Day 2
    let searchCityDayTwoValue = Math.round(response.data.list[8].main.temp);
    let searchCityDayTwoElement = document.querySelector("#second-day-temp");
    searchCityDayTwoElement.innerHTML = `${searchCityDayTwoValue}`;

    let searchCityDayTwoDescription = response.data.list[8].weather[0].description;
    let searchCityDayTwoDescriptionElement = document.querySelector("#second-day-description");
    searchCityDayTwoDescriptionElement.innerHTML = `${searchCityDayTwoDescription}`;

    let searchCityDayTwoMin = Math.round(response.data.list[8].main.temp_min);
    let searchCityDayTwoMinElement = document.querySelector("#second-day-min");
    searchCityDayTwoMinElement.innerHTML = `${searchCityDayTwoMin}`;

    let searchCityDayTwoMax = Math.round(response.data.list[8].main.temp_max);
    let searchCityDayTwoMaxElement = document.querySelector("#second-day-max");
    searchCityDayTwoMaxElement.innerHTML = `${searchCityDayTwoMax}`;


    //Day 3
    let thirdWeekday = formatDate(response.data.list[16].dt * 1000);
    let thirdWeekdayElement = document.querySelector("#third-day");
    thirdWeekdayElement.innerHTML = `${thirdWeekday}`;

    let searchCityDayThreeValue = Math.round(response.data.list[16].main.temp);
    let searchCityDayThreeElement = document.querySelector("#third-day-temp");
    searchCityDayThreeElement.innerHTML = `${searchCityDayThreeValue}`;

    let searchCityDayThreeDescription = response.data.list[16].weather[0].description;
    let searchCityDayThreeDescriptionElement = document.querySelector("#third-day-description");
    searchCityDayThreeDescriptionElement.innerHTML = `${searchCityDayThreeDescription}`;

    let searchCityDayThreeMin = Math.round(response.data.list[16].main.temp_min);
    let searchCityDayThreeMinElement = document.querySelector("#third-day-min");
    searchCityDayThreeMinElement.innerHTML = `${searchCityDayThreeMin}`;

    let searchCityDayThreeMax = Math.round(response.data.list[16].main.temp_max);
    let searchCityDayThreeMaxElement = document.querySelector("#third-day-max");
    searchCityDayThreeMaxElement.innerHTML = `${searchCityDayThreeMax}`;


    //Day 4
    let fourthWeekday = formatDate(response.data.list[24].dt * 1000);
    let fourthWeekdayElement = document.querySelector("#fourth-day");
    fourthWeekdayElement.innerHTML = `${fourthWeekday}`;

    let searchCityDayFourValue = Math.round(response.data.list[24].main.temp);
    let searchCityDayFourElement = document.querySelector("#fourth-day-temp");
    searchCityDayFourElement.innerHTML = `${searchCityDayFourValue}`;

    let searchCityDayFourDescription = response.data.list[24].weather[0].description;
    let searchCityDayFourDescriptionElement = document.querySelector("#fourth-day-description");
    searchCityDayFourDescriptionElement.innerHTML = `${searchCityDayFourDescription}`;

    let searchCityDayFourMin = Math.round(response.data.list[24].main.temp_min);
    let searchCityDayFourMinElement = document.querySelector("#fourth-day-min");
    searchCityDayFourMinElement.innerHTML = `${searchCityDayFourMin}`;

    let searchCityDayFourMax = Math.round(response.data.list[24].main.temp_max);
    let searchCityDayFourMaxElement = document.querySelector("#fourth-day-max");
    searchCityDayFourMaxElement.innerHTML = `${searchCityDayFourMax}`;


    //Day 5
    let fifthWeekday = formatDate(response.data.list[32].dt * 1000);
    let fifthWeekdayElement = document.querySelector("#fifth-day");
    fifthWeekdayElement.innerHTML = `${fifthWeekday}`;

    let searchCityDayFiveValue = Math.round(response.data.list[32].main.temp);
    let searchCityDayFiveElement = document.querySelector("#fifth-day-temp");
    searchCityDayFiveElement.innerHTML = `${searchCityDayFiveValue}`;

    let searchCityDayFiveDescription = response.data.list[32].weather[0].description;
    let searchCityDayFiveDescriptionElement = document.querySelector("#fifth-day-description");
    searchCityDayFiveDescriptionElement.innerHTML = `${searchCityDayFiveDescription}`;

    let searchCityDayFiveMin = Math.round(response.data.list[32].main.temp_min);
    let searchCityDayFiveMinElement = document.querySelector("#fifth-day-min");
    searchCityDayFiveMinElement.innerHTML = `${searchCityDayFiveMin}`;

    let searchCityDayFiveMax = Math.round(response.data.list[32].main.temp_max);
    let searchCityDayFiveMaxElement = document.querySelector("#fifth-day-max");
    searchCityDayFiveMaxElement.innerHTML = `${searchCityDayFiveMax}`;
}

function citySearch(city) {
  let apiKey = `4581002eb6d6effa90c6392584a38b4b`;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTodayInfo);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  citySearch(searchInput.value);
}

let form = document.querySelector("#search-feature");
form.addEventListener("submit", search);


//Change temperature values to Fahrenheit
function changeToFahrenheit() {
  celsiusTemp.classList.remove("active");
  
  for (let i of document.getElementsByClassName("cfunit")){
   i.innerHTML = `°F`;
}

  for (let i of document.getElementsByClassName("temp")){
   i.innerHTML = Math.round(
    ((i.innerHTML * 9) / 5) + 32
  );
}
}

let fahrenheitTemp = document.querySelector("#fahrenheit-link");
fahrenheitTemp.addEventListener("click", changeToFahrenheit);


//Change temperature values to Celsius
function changeToCelsius() {
  fahrenheitTemp.classList.remove("active");
  celsiusTemp.classList.add("active");
  
  for (let i of document.getElementsByClassName("cfunit")){
   i.innerHTML = `°C`;
}
  
  for (let i of document.getElementsByClassName("temp")){
   i.innerHTML = Math.round(
    ((i.innerHTML - 32) * 5) / 9
  );
}
}

let celsiusTemp = document.querySelector("#celsius-link");
celsiusTemp.addEventListener("click", changeToCelsius);

function displayCurrentCity(position) {
  
  let latitudeValue = position.coords.latitude;
  let longitudeValue = position.coords.longitude;

  let apiKey = "4581002eb6d6effa90c6392584a38b4b";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitudeValue}&lon=${longitudeValue}&units=${units}`;

  console.log(`${apiUrl}&appid=${apiKey}`);

  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTodayInfo);
}

function getCurrentCity() {
  navigator.geolocation.getCurrentPosition(displayCurrentCity);
}

let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", getCurrentCity);

window.onload = citySearch(`London`);