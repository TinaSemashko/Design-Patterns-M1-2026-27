import {
  CurrentConditionsDisplay,
  ForecastDisplay,
  StatisticsDisplay,
} from "./display/display";
import { WeatherData } from "./weather-data";

const currentDisplay = new CurrentConditionsDisplay();
const statisticsDisplay = new StatisticsDisplay();
const forecastDisplay = new ForecastDisplay();

const weatherData = new WeatherData();

weatherData.registerObserver(currentDisplay);
weatherData.registerObserver(statisticsDisplay);
weatherData.registerObserver(forecastDisplay);

weatherData.setMeasurements(26, 65, 1013);
weatherData.removeObserver(statisticsDisplay);
weatherData.setMeasurements(28, 70, 1012);
