import { Box, SvgIcon, Typography } from '@mui/material';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import { PropTypes } from 'prop-types';
import { aqiText } from '../constants';
import { useTranslation } from 'react-i18next';

const AirQualityCard = ({ airQualityData }) => {
	const { t } = useTranslation();

	return (
		<Box
			component='section'
			sx={{
				padding: '10px 15px',
				borderRadius: '12px',
				backgroundColor: '#1A191D',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Typography sx={{ color: '#6C6B71' }}>
					{t('airQualityIndex')}
				</Typography>
				<Typography
					className={`air-quality-type__badge air-quality-type__${
						airQualityData ? airQualityData.list[0].main.aqi : null
					}`}
					sx={{
						padding: '0 12px',
						fontSize: '14px',
						color: '#000',
						borderRadius: '25px',
						cursor: 'help',
					}}
					title={
						airQualityData
							? aqiText[airQualityData.list[0].main.aqi].message
							: null
					}
				>
					{airQualityData
						? aqiText[airQualityData.list[0].main.aqi].level
						: null}
				</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					margin: '20px 0',
				}}
			>
				<SvgIcon
					component={AirOutlinedIcon}
					sx={{
						fontSize: 'h3.fontSize',
					}}
				/>
				<Box
					sx={{
						textAlign: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '14px',
							color: '#6C6B71',
						}}
					>
						PM2.5
					</Typography>
					<Typography
						sx={{
							marginTop: '5px',
							fontSize: 'h4.fontSize',
						}}
					>
						{airQualityData ? airQualityData.list[0].components.pm2_5 : null}
					</Typography>
				</Box>
				<Box
					sx={{
						textAlign: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '14px',
							color: '#6C6B71',
						}}
					>
						SO<sub>2</sub>
					</Typography>
					<Typography
						sx={{
							marginTop: '5px',
							fontSize: 'h4.fontSize',
						}}
					>
						{airQualityData ? airQualityData.list[0].components.so2 : null}
					</Typography>
				</Box>
				<Box
					sx={{
						textAlign: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '14px',
							color: '#6C6B71',
						}}
					>
						NO<sub>2</sub>
					</Typography>
					<Typography
						sx={{
							marginTop: '5px',
							fontSize: 'h4.fontSize',
						}}
					>
						{airQualityData ? airQualityData.list[0].components.no2 : null}
					</Typography>
				</Box>
				<Box
					sx={{
						textAlign: 'center',
					}}
				>
					<Typography
						sx={{
							fontSize: '14px',
							color: '#6C6B71',
						}}
					>
						O<sub>3</sub>
					</Typography>
					<Typography
						sx={{
							marginTop: '5px',
							fontSize: 'h4.fontSize',
						}}
					>
						{airQualityData ? airQualityData.list[0].components.o3 : null}
					</Typography>
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
