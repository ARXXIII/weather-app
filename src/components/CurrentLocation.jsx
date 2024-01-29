import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import { SvgIcon } from '@mui/material';
import { PropTypes } from 'prop-types';

const CurrentLocation = ({ userLocationBtn }) => {
	return (
		<>
			<button
				className='flex items-center rounded-full bg-[#B6A0E6] font-semibold px-4 py-2'
				onClick={userLocationBtn}
			>
				<SvgIcon
					component={LocationSearchingOutlinedIcon}
					sx={{ marginRight: '5px', fontSize: '20px' }}
				/>
				Current Location
			</button>
		</>
	);
};

CurrentLocation.propTypes = {
	userLocationBtn: PropTypes.any,
};

export default CurrentLocation;
