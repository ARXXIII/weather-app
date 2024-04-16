import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';
import { monthNames, weekDayNames } from '../constants';

const FiveDayForecast = ({ data }) => {
	let i = 7;

	const { t } = useTranslation();

	return (
		<>
			<h1 className='text-2xl text-neutral-100 tracking-wide'>
				{t('fiveDayForecastHeading')}
			</h1>
			<Box className='flex flex-col mt-4 p-8 gap-y-8 text-lg text-neutral-100 bg-black-blue rounded-xl'>
				{data
					? data.list.slice(0, 5).map((forecast, index) => (
							<Box className='flex justify-between items-center' key={index}>
								<Box className='flex justify-start items-center gap-x-1 w-20'>
									<img
										src={
											data
												? `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}.png`
												: null
										}
										alt={
											data
												? data.list[i * index + 8].weather[0].description
												: null
										}
									/>
									<p>
										{data
											? Math.round(data.list[i * index + 8].main.temp_max)
											: null}
										&deg;
									</p>
								</Box>
								<p>
									{data
										? new Date(data.list[i * index + 8].dt_txt).getDate()
										: null}{' '}
									{data
										? monthNames[
												new Date(data.list[i * index + 8].dt_txt).getUTCMonth()
										  ]
										: null}
								</p>
								<p className='w-24 text-right'>
									{data
										? weekDayNames[
												new Date(data.list[i * index + 8].dt_txt).getUTCDay()
										  ]
										: null}
								</p>
							</Box>
					  ))
					: null}
			</Box>
		</>
	);
};

FiveDayForecast.propTypes = {
	data: PropTypes.object,
};

export default FiveDayForecast;
