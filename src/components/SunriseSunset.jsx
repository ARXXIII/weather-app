import { Box, SvgIcon, Typography } from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { PropTypes } from 'prop-types';
import { getTime } from '../constants';

const SunriseSunset = ({ sunriseSunsetData }) => {
	return (
		<Box
			component='section'
			sx={{
				padding: '10px 15px',
				height: '161px',
				borderRadius: '12px',
				backgroundColor: '#1A191D',
			}}
		>
			<Typography sx={{ color: '#6C6B71' }}>Sunrise & Sunset</Typography>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					margin: '20px 0',
				}}
			>
				<SvgIcon
					component={WbSunnyOutlinedIcon}
					sx={{
						marginRight: '15px',
						fontSize: 'h3.fontSize',
					}}
				/>
				<Box>
					<Typography sx={{ fontSize: '14px', color: '#6C6B71' }}>
						Sunrise
					</Typography>
					<Typography
						sx={{
							fontSize: '34px',
						}}
					>
						{sunriseSunsetData
							? getTime(
									sunriseSunsetData.sys.sunrise,
									sunriseSunsetData.timezone
							  )
							: null}
					</Typography>
				</Box>
				<SvgIcon
					component={DarkModeOutlinedIcon}
					sx={{
						marginRight: '15px',
						fontSize: 'h3.fontSize',
					}}
				/>
				<Box>
					<Typography sx={{ fontSize: '14px', color: '#6C6B71' }}>
						Sunset
					</Typography>
					<Typography
						sx={{
							fontSize: '34px',
						}}
					>
						{sunriseSunsetData
							? getTime(
									sunriseSunsetData.sys.sunset,
									sunriseSunsetData.timezone
							  )
							: null}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

SunriseSunset.propTypes = {
	sunriseSunsetData: PropTypes.object,
	getTime: PropTypes.any,
};

export default SunriseSunset;
