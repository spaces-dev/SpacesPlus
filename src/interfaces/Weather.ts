export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Rain {
  '1h': number
}

export interface Clouds {
  all: number
}

export interface Sys {
  country: string
  sunrise: number
  sunset: number
}

export interface IWeather {
  coord: Coord
  message: string
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  rain: Rain
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
