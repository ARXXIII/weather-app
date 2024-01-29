import { Box, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { getHours } from '../constants';
// import windDirection from '../assets/images/direction.png';

const ForecastByTime = ({ data, timezoneData }) => {
	let i = 1;

	return (
		<>
			<Typography
				sx={{
					margin: '40px 0',
					fontSize: 'h6.fontSize',
					color: '#FFFFFF',
				}}
			>
				Forecast by Time
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flex: 'wrap',
					justifyContent: 'space-between',
					color: '#FFFFFF',
				}}
			>
				<div className='p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i].dt, timezoneData) : null}
					</Typography>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`
								: null
						}
						alt={data ? data.list[i].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='mx-5 p-5 w-[140px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 1].dt, timezoneData) : null}
					</Typography>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 1].weather[0].icon
								  }@2x.png`
								: null
						}
						alt={data ? data.list[i + 1].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 1].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 2].dt, timezoneData) : null}
					</Typography>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 2].weather[0].icon
								  }@2x.png`
								: null
						}
						alt={data ? data.list[i + 2].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 2].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='mx-5 p-5 w-[140px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 3].dt, timezoneData) : null}
					</Typography>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 3].weather[0].icon
								  }@2x.png`
								: null
						}
						alt={data ? data.list[i + 3].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 3].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 4].dt, timezoneData) : null}
					</Typography>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 4].weather[0].icon
								  }@2x.png`
								: null
						}
						alt={data ? data.list[i + 4].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 4].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='mx-5 p-5 w-[140px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 5].dt, timezoneData) : null}
					</Typography>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 5].weather[0].icon
								  }@2x.png`
								: null
						}
						alt={data ? data.list[i + 5].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 5].main.temp_max) : null}&deg;
					</Typography>
				</div>
				<div className='p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 6].dt, timezoneData) : null}
					</Typography>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${
										data.list[i + 6].weather[0].icon
								  }@2x.png`
								: null
						}
						alt={data ? data.list[i + 6].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 6].main.temp_max) : null}&deg;
					</Typography>
				</div>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flex: 'wrap',
					justifyContent: 'space-between',
					margin: '40px 0',
					color: '#FFFFFF',
				}}
			>
				<div className='p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i].dt, timezoneData) : null}
					</Typography>
					<img
						style={{
							transform: `rotate(${
								data ? data.list[i + 6].wind.deg : null
							}deg)`,
						}}
						src={data ? `./src/assets/images/direction.png` : null}
						alt={data ? data.list[i].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i].wind.speed) : null} km/h
					</Typography>
				</div>
				<div className='mx-5 p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 1].dt, timezoneData) : null}
					</Typography>
					<img
						style={{
							transform: `rotate(${
								data ? data.list[i + 6].wind.deg : null
							}deg)`,
						}}
						src={data ? `./src/assets/images/direction.png` : null}
						alt={data ? data.list[i + 1].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 1].wind.speed) : null} km/h
					</Typography>
				</div>
				<div className='p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 2].dt, timezoneData) : null}
					</Typography>
					<img
						style={{
							transform: `rotate(${
								data ? data.list[i + 6].wind.deg : null
							}deg)`,
						}}
						src={data ? `./src/assets/images/direction.png` : null}
						alt={data ? data.list[i + 2].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 2].wind.speed) : null} km/h
					</Typography>
				</div>
				<div className='mx-5 p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 3].dt, timezoneData) : null}
					</Typography>
					<img
						style={{
							transform: `rotate(${
								data ? data.list[i + 6].wind.deg : null
							}deg)`,
						}}
						src={data ? `./src/assets/images/direction.png` : null}
						alt={data ? data.list[i + 3].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 3].wind.speed) : null} km/h
					</Typography>
				</div>
				<div className='p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 4].dt, timezoneData) : null}
					</Typography>
					<img
						style={{
							transform: `rotate(${
								data ? data.list[i + 6].wind.deg : null
							}deg)`,
						}}
						src={data ? `./src/assets/images/direction.png` : null}
						alt={data ? data.list[i + 4].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 4].wind.speed) : null} km/h
					</Typography>
				</div>
				<div className='mx-5 p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 5].dt, timezoneData) : null}
					</Typography>
					<img
						style={{
							transform: `rotate(${
								data ? data.list[i + 6].wind.deg : null
							}deg)`,
						}}
						src={data ? `./src/assets/images/direction.png` : null}
						alt={data ? data.list[i + 5].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 5].wind.speed) : null} km/h
					</Typography>
				</div>
				<div className='p-5 w-[150px] h-[206px] rounded-[12px] bg-[#1D1B1F] flex flex-col justify-between items-center text-center'>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? getHours(data.list[i + 6].dt, timezoneData) : null}
					</Typography>
					<img
						style={{
							transform: `rotate(${
								data ? data.list[i + 6].wind.deg : null
							}deg)`,
						}}
						src={data ? `./src/assets/images/direction.png` : null}
						alt={data ? data.list[i + 6].weather[0].description : null}
					/>
					<Typography sx={{ fontSize: '22px' }}>
						{data ? Math.round(data.list[i + 6].wind.speed) : null} km/h
					</Typography>
				</div>
			</Box>
		</>
	);
};

ForecastByTime.propTypes = {
	data: PropTypes.object,
	timezoneData: PropTypes.number,
	getHours: PropTypes.any,
};

export default ForecastByTime;
