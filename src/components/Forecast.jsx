import { PropTypes } from 'prop-types';
import { getDate } from '../constants';
import { Box, SvgIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const Forecast = ({ data }) => {
	const { t } = useTranslation();

	return (
		<>
			<Box className='p-8 text-neutral-100 bg-black-blue rounded-xl'>
				<h1 className='text-2xl tracking-wide'>{t('currWeatherHeading')}</h1>
				<Box className='flex justify-center items-center mx-4 gap-x-8'>
					<h2 className='text-7xl'>
						{data ? Math.round(data.main.temp) : null}&deg;C
					</h2>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
								: null
						}
						alt={data ? data.weather[0].description : null}
					/>
				</Box>
				<p className='text-xl capitalize'>
					{data ? data.weather[0].main : null}
				</p>
				<Box className='mt-4 pt-4 border-t border-zinc-500'>
					<Box className='flex items-center gap-x-2'>
						<SvgIcon
							component={CalendarTodayOutlinedIcon}
							sx={{ fontSize: '22px' }}
							inheritViewBox
						/>
						<p className='text-lg text-zinc-500'>
							{data ? getDate(data.dt, data.timezone) : null}
						</p>
					</Box>
					<Box className='flex items-center mt-4 gap-x-2'>
						<SvgIcon
							component={PlaceOutlinedIcon}
							sx={{ fontSize: '22px' }}
							inheritViewBox
						/>
						<p className='text-lg text-zinc-500'>{data ? data.city : null}</p>
					</Box>
				</Box>
			</Box>
		</>
	);
};

Forecast.propTypes = {
	data: PropTypes.object,
	getDate: PropTypes.any,
};

export default Forecast;
