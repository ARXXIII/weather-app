import { Box, SvgIcon, Typography } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { PropTypes } from 'prop-types';
import { getDate } from '../constants';
import { useTranslation } from 'react-i18next';

const Forecast = ({ data }) => {
	const { t } = useTranslation();

	return (
		<>
			<Box
				sx={{
					padding: '20px 25px',
					color: '#FFFFFF',
					borderRadius: '12px',
					backgroundColor: '#1D1B1F',
				}}
			>
				<Typography sx={{ fontSize: 'h6.fontSize', letterSpacing: '0.05em' }}>
					{t('currWeatherHeading')}
				</Typography>
				<section className='flex justify-around  items-center'>
					<Typography
						sx={{
							margin: '15px 0',
							fontSize: '80px',
							letterSpacing: '0.05em',
						}}
					>
						{data ? Math.round(data.main.temp) : null}&deg;C
					</Typography>
					<img
						src={
							data
								? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
								: null
						}
						alt={data ? data.weather[0].description : null}
					/>
				</section>
				<Typography
					sx={{
						paddingBottom: '15px',
						letterSpacing: '0.05em',
						textTransform: 'capitalize',
						borderBottom: '2px solid #29282B',
					}}
				>
					{data ? data.weather[0].description : null}
				</Typography>
				<Box sx={{ display: 'flex', margin: '15px 0' }}>
					<SvgIcon
						component={CalendarTodayOutlinedIcon}
						sx={{ marginRight: '5px', fontSize: '22px' }}
						inheritViewBox
					/>
					<Typography sx={{ letterSpacing: '0.05em', color: '#6C6B71' }}>
						{data ? getDate(data.dt, data.timezone) : null}
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<SvgIcon
						component={PlaceOutlinedIcon}
						sx={{ marginRight: '5px', fontSize: '22px' }}
						inheritViewBox
					/>
					<Typography sx={{ letterSpacing: '0.05em', color: '#6C6B71' }}>
						{data ? data.city : null}
					</Typography>
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
