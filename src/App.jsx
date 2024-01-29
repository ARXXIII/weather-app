import {
	FiveDayForecast,
	Forecast,
	ForecastByTime,
	ForecastHighlights,
	Header,
} from './components';
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api';
import { useState } from 'react';
import { Box } from '@mui/material';

const App = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);
	const [airPollution, setAirPollution] = useState(null);

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
			<Header onSearchChange={handleOnSearch} />
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

			{/* <div className='main__grid mx-20'>
				<div className='forecast__item'>
					<Forecast data={currentWeather} />
				</div>
				<div className='five-days-forecast__item'>
					<FiveDayForecast data={forecast} />
				</div>
				<div className='forecast-highlights__item'>
					<ForecastHighlights
						data={currentWeather}
						airPollutionData={airPollution}
					/>
				</div>
				<div className='forecast-by-time__item'>
					<ForecastByTime
						data={forecast}
						timezoneData={currentWeather ? currentWeather.timezone : null}
					/>
				</div>
			</div> */}
		</>
	);
};

export default App;
