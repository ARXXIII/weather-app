import PropTypes from 'prop-types';
import { Box, SvgIcon } from '@mui/material';

const CustomWeatherCard = ({ title, cardIcon, Data, meaning }) => {
	return (
		<>
			<Box className='p-4 bg-dark-black-blue rounded-xl'>
				<h3 className='text-lg text-zinc-500'>{title}</h3>
				<Box className='flex justify-around items-center m-4'>
					<SvgIcon
						component={cardIcon}
						sx={{ fontSize: '48px' }}
						inheritViewBox
					/>
					<p className='flex justify-center items-end text-4xl'>
						{Data ? Data : null}
						{meaning}
					</p>
				</Box>
			</Box>
		</>
	);
};

CustomWeatherCard.propTypes = {
	Data: PropTypes.any,
	title: PropTypes.string,
	meaning: PropTypes.string,
	cardIcon: PropTypes.object,
};

export default CustomWeatherCard;
