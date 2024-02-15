import { Box, Typography } from '@mui/material';
import CustomWeatherCard from './CustomWeatherCard';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import AirQualityCard from './AirQualityCard';
import SunriseSunset from './SunriseSunset';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

const ForecastHighlights = ({ data, airPollutionData }) => {
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
				<Typography sx={{ marginBottom: '15px', fontSize: 'h6.fontSize' }}>
					{t('todaysHighlightsHeading')}
				</Typography>
				<div className='forecast-highlights__grid'>
					<div className='forecast-highlights__1'>
						<AirQualityCard airQualityData={airPollutionData} />
					</div>
					<div className='forecast-highlights__2'>
						<SunriseSunset sunriseSunsetData={data} />
					</div>
					<div className='forecast-highlights__3'>
						<CustomWeatherCard
							title={t('humidity')}
							cardIcon={WaterDropOutlinedIcon}
							Data={data ? data.main.humidity : null}
							meaning={'%'}
						/>
					</div>
					<div className='forecast-highlights__4'>
						<CustomWeatherCard
							title={t('pressure')}
							cardIcon={WaterOutlinedIcon}
							Data={data ? data.main.pressure : null}
							meaning={' hPa'}
						/>
					</div>
					<div className='forecast-highlights__5'>
						<CustomWeatherCard
							title={t('visibility')}
							cardIcon={VisibilityOutlinedIcon}
							Data={data ? Math.round(data.visibility / 1000 + 0.5) : null}
							meaning={' km'}
						/>
					</div>
					<div className='forecast-highlights__6'>
						<CustomWeatherCard
							title={t('feelsLike')}
							cardIcon={DeviceThermostatOutlinedIcon}
							Data={data ? Math.round(data.main.feels_like) : null}
							meaning={'°C'}
						/>
					</div>
				</div>
			</Box>
		</>
	);
};

ForecastHighlights.propTypes = {
	data: PropTypes.object,
	airPollutionData: PropTypes.object,
};

export default ForecastHighlights;
