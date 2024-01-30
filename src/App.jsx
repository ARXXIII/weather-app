import {
	FiveDayForecast,
	Forecast,
	ForecastByTime,
	ForecastHighlights,
	Header,
} from './components';
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const App = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);
	const [airPollution, setAirPollution] = useState(null);

	const userLocation = async () => {
		const IP_API = 'https://ipinfo.io/json?token=6c2f9d137c75be';

		let userLocationResponse = await fetch(IP_API);
		let userLocationData = await userLocationResponse.json();
		const userLocationArr = userLocationData.loc.split(',');

		const userCurrWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${userLocationArr[0]}&lon=${userLocationArr[1]}&units=metric&appid=${WEATHER_API_KEY}`
		);
		const userForecastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${userLocationArr[0]}&lon=${userLocationArr[1]}&units=metric&appid=${WEATHER_API_KEY}`
		);
		const userAirPollutionFetch = fetch(
			`${WEATHER_API_URL}/air_pollution/forecast?lat=${userLocationArr[0]}&lon=${userLocationArr[1]}&appid=${WEATHER_API_KEY}`
		);

		Promise.all([
			userCurrWeatherFetch,
			userForecastFetch,
			userAirPollutionFetch,
		])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();
				const airPollutionResponse = await response[2].json();

				setCurrentWeather({
					city: userLocationData.city + ', ' + userLocationData.country,
					...weatherResponse,
				});
				setForecast({
					city: userLocationData.city + ', ' + userLocationData.country,
					...forecastResponse,
				});
				setAirPollution({
					city: userLocationData.city + ', ' + userLocationData.country,
					...airPollutionResponse,
				});
			})
			.catch(console.log);
	};

	useEffect(() => {
		userLocation();
	}, []);

	const handleOnSearch = (searchData) => {
		const [lat, lon] = searchData.value.split(' ');

		const currWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
		);
		const forecastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
		);
		const airPollutionFetch = fetch(
			`${WEATHER_API_URL}/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
		);

		Promise.all([currWeatherFetch, forecastFetch, airPollutionFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();
				const airPollutionResponse = await response[2].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setForecast({ city: searchData.label, ...forecastResponse });
				setAirPollution({ city: searchData.label, ...airPollutionResponse });
			})
			.catch(console.log);
	};

	return (
		<>
			<Header onSearchChange={handleOnSearch} userLocation={userLocation} />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'start',
				}}
			>
				<Box
					sx={{
						width: '22.5%',
					}}
				>
					<Forecast data={currentWeather} />
					<FiveDayForecast data={forecast} />
				</Box>
				<Box
					sx={{
						width: '70%',
					}}
				>
					<ForecastHighlights
						data={currentWeather}
						airPollutionData={airPollution}
					/>
					<ForecastByTime
						data={forecast}
						timezoneData={currentWeather ? currentWeather.timezone : null}
					/>
				</Box>
			</Box>
		</>
	);
};

export default App;
