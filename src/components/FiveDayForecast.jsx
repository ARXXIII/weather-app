import { Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { monthNames, weekDayNames } from '../constants';
import { useTranslation } from 'react-i18next';

const FiveDayForecast = ({ data }) => {
	let i = 7;

	const { t } = useTranslation();

	return (
		<>
			<Typography
				sx={{
					margin: '40px 0',
					fontSize: 'h6.fontSize',
					color: '#FFFFFF',
				}}
			>
				{t('fiveDayForecastHeading')}
			</Typography>
			<div
				className='five-day-forecast__grid'
				style={{
					padding: '20px 25px',
					color: '#FFFFFF',
					borderRadius: '12px',
					backgroundColor: '#1D1B1F',
				}}
			>
				<div className='five-day-forecast__grid-item-1 flex justify-start items-center'>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`
								: null
						}
						alt={data ? data.list[i].weather[0].description : null}
					/>
					<Typography>
						{data ? Math.round(data.list[i].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-2 flex justify-center items-center'>
					<Typography>
						{data ? new Date(data.list[i].dt_txt).getDate() : null}{' '}
						{data
							? monthNames[new Date(data.list[i].dt_txt).getUTCMonth()]
							: null}
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-3 flex justify-end items-center text-right'>
					<Typography>
						{data
							? weekDayNames[new Date(data.list[i].dt_txt).getUTCDay()]
							: null}
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-4 flex justify-start items-center'>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 8].weather[0].icon
								  }.png`
								: null
						}
						alt={data ? data.list[i + 8].weather[0].description : null}
					/>
					<Typography>
						{data ? Math.round(data.list[i + 8].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-5 flex justify-center items-center'>
					<Typography>
						{data ? new Date(data.list[i + 8].dt_txt).getDate() : null}{' '}
						{data
							? monthNames[new Date(data.list[i + 8].dt_txt).getUTCMonth()]
							: null}
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-6 flex justify-end items-center text-right'>
					<Typography>
						{data
							? weekDayNames[new Date(data.list[i + 8].dt_txt).getUTCDay()]
							: null}
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-7 flex justify-start items-center'>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 16].weather[0].icon
								  }.png`
								: null
						}
						alt={data ? data.list[i + 16].weather[0].description : null}
					/>
					<Typography>
						{data ? Math.round(data.list[i + 16].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-8 flex justify-center items-center'>
					<Typography>
						{data ? new Date(data.list[i + 16].dt_txt).getDate() : null}{' '}
						{data
							? monthNames[new Date(data.list[i + 16].dt_txt).getUTCMonth()]
							: null}
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-9 flex justify-end items-center text-right'>
					<Typography>
						{data
							? weekDayNames[new Date(data.list[i + 16].dt_txt).getUTCDay()]
							: null}
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-10 flex justify-start items-center'>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 24].weather[0].icon
								  }.png`
								: null
						}
						alt={data ? data.list[i + 24].weather[0].description : null}
					/>
					<Typography>
						{data ? Math.round(data.list[i + 24].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-11 flex justify-center items-center'>
					<Typography>
						{data ? new Date(data.list[i + 24].dt_txt).getDate() : null}{' '}
						{data
							? monthNames[new Date(data.list[i + 24].dt_txt).getUTCMonth()]
							: null}
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-12 flex justify-end items-center text-right'>
					<Typography>
						{data
							? weekDayNames[new Date(data.list[i + 24].dt_txt).getUTCDay()]
							: null}
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-13 flex justify-start items-center'>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 32].weather[0].icon
								  }.png`
								: null
						}
						alt={data ? data.list[i + 32].weather[0].description : null}
					/>
					<Typography>
						{data ? Math.round(data.list[i + 32].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-14 flex justify-center items-center'>
					<Typography>
						{data ? new Date(data.list[i + 32].dt_txt).getDate() : null}{' '}
						{data
							? monthNames[new Date(data.list[i + 32].dt_txt).getUTCMonth()]
							: null}
					</Typography>
				</div>
				<div className='five-day-forecast__grid-item-15 flex justify-end items-center text-right'>
					<Typography>
						{data
							? weekDayNames[new Date(data.list[i + 32].dt_txt).getUTCDay()]
							: null}
					</Typography>
				</div>
			</div>
		</>
	);
};

FiveDayForecast.propTypes = {
	data: PropTypes.object,
	date: PropTypes.any,
};

export default FiveDayForecast;
