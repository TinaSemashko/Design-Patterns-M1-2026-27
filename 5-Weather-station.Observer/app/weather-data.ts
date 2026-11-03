
import { Observer, Subject } from "./observer";

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(observer: Observer): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }
  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.notifyObservers();
  }

}
