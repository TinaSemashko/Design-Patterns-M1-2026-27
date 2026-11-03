import { Observer } from "@/observer";

export class CurrentConditionsDisplay implements Observer{
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature}°C and ${this.humidity}% humidity and ${this.pressure} hPa pressure`
    );
  }
}

export class StatisticsDisplay implements Observer{
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(`Statistics display: ${this.temperature}°C and ${this.humidity}% humidity and ${this.pressure} hPa pressure`);
  }
}

export class ForecastDisplay implements Observer{
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display(): void {
    console.log(`Forecast display: ${this.temperature}°C and ${this.humidity}% humidity and ${this.pressure} hPa pressure`);
  }
}
