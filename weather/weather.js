import Readline from "readline/promises";
import fetch from "node-fetch";

// create Account here in open weather map then open this https://home.openweathermap.org/api_keys then you will see your api key
const API_KEY = `#`;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("city  is not found check city name Please");
    }
    const weatherData = await response.json();
    console.log(`\n📍 City: ${weatherData.name}`);
    console.log(`🌡️   Temperature: ${weatherData.main.temp}°C`);
    console.log(`🌥️   Weather: ${weatherData.weather[0].description}\n`);
  } catch (error) {
    console.log("❌ Error:", error.message);
    
  }
};

const city = await rl.question("enter city name ");
await getWeather(city);
rl.close();
