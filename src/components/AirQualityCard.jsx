import { Box, SvgIcon } from '@mui/material';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import { PropTypes } from 'prop-types';
import { aqiText } from '../constants';
import { useTranslation } from 'react-i18next';

const AirQualityCard = ({ airQualityData }) => {
	const { t } = useTranslation();

	return (
		<Box className='p-4 bg-dark-black-blue rounded-xl' component='section'>
			<Box className='flex justify-between items-center'>
				<h2 className='text-lg text-zinc-500'>{t('airQualityIndex')}</h2>
				<p
					className={`px-3 font-semibold text-sm text-black rounded-full cursor-help air-quality-type__badge air-quality-type__${
						airQualityData ? airQualityData.list[0].main.aqi : null
					}`}
					title={
						airQualityData
							? aqiText[airQualityData.list[0].main.aqi].message
							: null
					}
				>
					{airQualityData
						? aqiText[airQualityData.list[0].main.aqi].level
						: null}
				</p>
			</Box>
			<Box className='flex flex-col lg:flex-row justify-around items-center gap-y-8 lg:gap-x-8 mt-4'>
				<SvgIcon
					component={AirOutlinedIcon}
					sx={{
						fontSize: 'h3.fontSize',
					}}
				/>
				<Box className='text-center'>
					<p className='text-sm text-zinc-500'>PM2.5</p>
					<p className='mt-2 text-4xl'>
						{airQualityData ? airQualityData.list[0].components.pm2_5 : null}
					</p>
				</Box>
				<Box className='text-center'>
					<p className='text-sm text-zinc-500'>
						SO<sub className='z-0'>2</sub>
					</p>
					<p className='mt-2 text-4xl'>
						{airQualityData ? airQualityData.list[0].components.so2 : null}
					</p>
				</Box>
				<Box className='text-center'>
					<p className='text-sm text-zinc-500'>
						NO<sub className='z-0'>2</sub>
					</p>
					<p className='mt-2 text-4xl'>
						{airQualityData ? airQualityData.list[0].components.no2 : null}
					</p>
				</Box>
				<Box className='text-center'>
					<p className='text-sm text-zinc-500'>
						O<sub className='z-0'>3</sub>
					</p>
					<p className='mt-2 text-4xl'>
						{airQualityData ? airQualityData.list[0].components.o3 : null}
					</p>
				</Box>
			</Box>
		</Box>
	);
};

AirQualityCard.propTypes = {
	airQualityData: PropTypes.object,
	aqiText: PropTypes.any,
};

export default AirQualityCard;
