export const API_KEY = '3316efa1ee9e9077c3ea940ec0989bd4'

export const FullURL = (city,API_KEY) => `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=7&appid=${API_KEY}`