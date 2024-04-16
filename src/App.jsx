import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api';
import {
	FiveDayForecast,
	Footer,
	Forecast,
	ForecastByTime,
	ForecastHighlights,
	Header,
} from './components';

const App = () => {
	const { t } = useTranslation();

	const [results, setResults] = useState([]);
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

	const handleOnSearch = (result) => {
		const [lat, lon] = result.value.split(' ');

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

				setCurrentWeather({ city: result.label, ...weatherResponse });
				setForecast({ city: result.label, ...forecastResponse });
				setAirPollution({ city: result.label, ...airPollutionResponse });
			})
			.catch(console.log);

		setResults([]);
	};

	return (
		<>
			<Box className='flex flex-col justify-center px-4 lg:px-16 py-8 gap-y-8'>
				<Header
					onSearchChange={handleOnSearch}
					userLocation={userLocation}
					data={currentWeather}
					results={results}
					setResults={setResults}
				/>
				{currentWeather ? (
					<Box className='flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-y-8 lg:gap-x-8'>
						<Box className='flex flex-col gap-y-8 w-full lg:w-auto'>
							<Forecast data={currentWeather} />
							<Box>
								<FiveDayForecast data={forecast} />
							</Box>
							<Box className='hidden lg:block w-full lg:w-auto'>
								<Footer />
							</Box>
						</Box>
						<Box className='flex flex-col gap-y-8 w-full lg:w-auto'>
							<ForecastHighlights
								data={currentWeather}
								airPollutionData={airPollution}
							/>
							<Box>
								<ForecastByTime
									data={forecast}
									timezoneData={currentWeather ? currentWeather.timezone : null}
								/>
							</Box>
						</Box>
					</Box>
				) : (
					<Box className='p-8 text-center text-4xl text-neutral-100 tracking-wide bg-black-blue rounded-xl animate-bounce'>
						<h1>{t('enterCity')}</h1>
					</Box>
				)}
				<Box className='block lg:hidden w-full lg:w-auto'>
					<Footer />
				</Box>
			</Box>
		</>
	);
};

export default App;
