import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import SunriseSunset from './SunriseSunset';
import AirQualityCard from './AirQualityCard';
import { useTranslation } from 'react-i18next';
import CustomWeatherCard from './CustomWeatherCard';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';

const ForecastHighlights = ({ data, airPollutionData }) => {
	const { t } = useTranslation();

	return (
		<>
			<Box className='p-8 text-neutral-100 bg-black-blue rounded-xl'>
				<h1 className='text-2xl tracking-wide'>
					{t('todaysHighlightsHeading')}
				</h1>
				<Box className='flex flex-col mt-4 gap-y-8'>
					<section className='flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-8'>
						<Box className='w-full'>
							<AirQualityCard airQualityData={airPollutionData} />
						</Box>
						<Box className='w-full'>
							<SunriseSunset sunriseSunsetData={data} />
						</Box>
					</section>
					<section className='flex flex-col lg:flex-row justify-between item-center gap-y-8 lg:gap-x-8'>
						<Box className='w-full'>
							<CustomWeatherCard
								title={t('humidity')}
								cardIcon={WaterDropOutlinedIcon}
								Data={data ? data.main.humidity : null}
								meaning={'%'}
							/>
						</Box>
						<Box className='w-full'>
							<CustomWeatherCard
								title={t('pressure')}
								cardIcon={WaterOutlinedIcon}
								Data={data ? data.main.pressure : null}
								meaning={' hPa'}
							/>
						</Box>
						<Box className='w-full'>
							<CustomWeatherCard
								title={t('visibility')}
								cardIcon={VisibilityOutlinedIcon}
								Data={data ? Math.round(data.visibility / 1000 + 0.5) : null}
								meaning={' km'}
							/>
						</Box>
						<Box className='w-full'>
							<CustomWeatherCard
								title={t('feelsLike')}
								cardIcon={DeviceThermostatOutlinedIcon}
								Data={data ? Math.round(data.main.feels_like) : null}
								meaning={'°C'}
							/>
						</Box>
					</section>
				</Box>
			</Box>
		</>
	);
};

ForecastHighlights.propTypes = {
	data: PropTypes.object,
	airPollutionData: PropTypes.object,
};

export default ForecastHighlights;
