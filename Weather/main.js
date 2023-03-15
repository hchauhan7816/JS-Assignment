import { API_KEY } from "../Weather/constant.js";

console.log(API_KEY);

const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const weatherButton = document.getElementById("getWeatherButton");

const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(URL + city + "&units=metric&appid=" + API_KEY);
    if (response.status !== 200) {
      alert("Can't fetch data!");
      throw new Error("Can't fetch data!");
    }
    const data = await response.json();
    // console.log(data);
    putData(data);
  } catch (e) {
    return e;
  }
};

const putData = (data) => {
  const cityName = document.getElementsByClassName("cityName")[0];
  cityName.innerHTML = data.name;

  const temperature = document.getElementsByClassName("temperature")[0];
  temperature.innerHTML = parseInt(data.main.temp) + "°C";

  const description = document.getElementsByClassName("description")[0];
  description.innerHTML = data.weather[0].main;

  const humidity = document.getElementById("humidity");
  humidity.innerHTML = parseInt(data.main.humidity) + "%";

  const wind = document.getElementById("wind");
  wind.innerHTML = parseInt(data.wind.speed) + " km/h";

  const pressure = document.getElementById("pressure");
  pressure.innerHTML = parseInt(data.main.pressure) + " hPa";

  const weatherImg = document.getElementById("weatherImg");
  weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};

weatherButton.addEventListener("click", (e) => {
  e.preventDefault();

  const cityValue = document.getElementById("cityName").value;
  fetchWeatherData(cityValue)
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log("Error! : ", e);
    });
});
