export const weatherOptionsId = 'SP_WEATHER_SETTINGS'
export const weatherWidgetId = 'SP_WIDGET_WEATHER'
export const cityInputId = 'SP-CITY-INPUT'
export const loadingCity = 'Загрузка...'

export const secondsPerMinute = 60
export const weatherPollMs = 30_000
export const hPaToMmHg = 0.75

export const intervalRange = { min: 1, max: 360 }
export const apiKeyPattern = /^[a-f0-9]{32}$/i
export const cityPattern = /^\p{L}[\p{L}\s.'’-]*$/u

export const openWeather = {
  endpoint: 'https://api.openweathermap.org/data/2.5/weather',
  keyUrl: 'https://openweathermap.org/appid',
  icon: (name: string) => `https://openweathermap.org/img/wn/${name}@2x.png`,
  city: (id: number) => `https://openweathermap.org/city/${id}`,
}
