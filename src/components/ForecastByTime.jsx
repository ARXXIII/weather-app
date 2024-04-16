import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { getHours } from '../constants';
import { useTranslation } from 'react-i18next';
import windDirection from '../assets/images/direction.png';

const ForecastByTime = ({ data, timezoneData }) => {
	const { t } = useTranslation();

	return (
		<>
			<h1 className='text-2xl text-neutral-100 tracking-wide'>
				{t('forecastByTimeHeading')}
			</h1>
			<Box className='flex flex-col gap-y-8' component='section'>
				<Box className='flex flex-col lg:flex-row justify-between mt-4 gap-y-8 lg:gap-x-8 text-neutral-100'>
					{data
						? data.list.slice(0, 7).map((forecast, index) => (
								<Box
									className='flex flex-col justify-between items-center w-full h-[228px] p-8 text-center text-2xl bg-black-blue rounded-lg'
									key={index}
								>
									<h3>
										{data
											? getHours(data.list[index + 1].dt, timezoneData)
											: null}
									</h3>
									<img
										src={
											data
												? `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@2x.png`
												: null
										}
										alt={
											data ? data.list[index + 1].weather[0].description : null
										}
									/>
									<p>
										{data
											? Math.round(data.list[index + 1].main.temp_max)
											: null}
										&deg;
									</p>
								</Box>
						  ))
						: null}
				</Box>
				<Box className='flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-8 text-neutral-100'>
					{data
						? data.list.slice(0, 7).map((forecast, index) => (
								<Box
									className='flex flex-col justify-between items-center w-full h-[228px] p-8 text-center text-2xl bg-black-blue rounded-lg'
									key={index}
								>
									<h3>
										{data
											? getHours(data.list[index + 1].dt, timezoneData)
											: null}
									</h3>
									<img
										style={{
											transform: `rotate(${
												data ? data.list[index + 6].wind.deg : null
											}deg)`,
										}}
										src={data ? windDirection : null}
										alt={
											data ? data.list[index + 1].weather[0].description : null
										}
									/>
									<p>
										{data ? Math.round(data.list[index + 1].wind.speed) : null}{' '}
										km/h
									</p>
								</Box>
						  ))
						: null}
				</Box>
			</Box>
		</>
	);
};

ForecastByTime.propTypes = {
	data: PropTypes.object,
	getHours: PropTypes.any,
	timezoneData: PropTypes.number,
};

export default ForecastByTime;
