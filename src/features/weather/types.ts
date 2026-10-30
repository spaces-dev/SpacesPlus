interface Coord {
  lon: number
  lat: number
}

interface WeatherCondition {
  id: number
  main: string
  description: string
  icon: string
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

interface Wind {
  speed: number
  deg: number
}

interface Rain {
  '1h': number
}

interface Clouds {
  all: number
}

interface Sys {
  country: string
  sunrise: number
  sunset: number
}

export interface WeatherPayload {
  coord: Coord
  message: string
  weather: WeatherCondition[]
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
