import { Box, SvgIcon, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const CustomWeatherCard = ({ title, cardIcon, Data, meaning }) => {
	return (
		<>
			<Box
				sx={{
					padding: '10px 15px',
					borderRadius: '12px',
					backgroundColor: '#1A191D',
				}}
			>
				<Typography sx={{ color: '#6C6B71' }}>{title}</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						margin: '15px 0',
					}}
				>
					<SvgIcon
						component={cardIcon}
						sx={{ fontSize: '50px' }}
						inheritViewBox
					/>
					<Typography
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'end',
							fontSize: '40px',
						}}
					>
						{Data ? Data : null}
						{meaning}
					</Typography>
				</Box>
			</Box>
		</>
	);
};

CustomWeatherCard.propTypes = {
	title: PropTypes.string,
	cardIcon: PropTypes.object,
	Data: PropTypes.any,
	meaning: PropTypes.string,
};

export default CustomWeatherCard;
