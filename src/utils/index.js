const api_key = '3adcfaba76e08011bd8ff507e1118964';

/**
 * 
 * @param {string} URL API url 
 * @param {Function} callback callback
 */
export async function fetchData(URL, callback) {
	fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
    currentWeather(city) {
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
    },
    forecast(city) {
        return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric`
    },
    airPollution(city) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?q=${city}`
    },
    reverseGeo(city) {
        return `https://api.openweathermap.org/geo/1.0/reverse?q=${city}&limit=5`
    },

    /**
     * 
     * @param {string} query 
     */
    geo(query) {
return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}