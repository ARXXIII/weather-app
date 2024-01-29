import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import { SvgIcon } from '@mui/material';

const CurrentLocation = () => {
	return (
		<>
			<button className='flex items-center rounded-full bg-[#B6A0E6] font-semibold px-4 py-2'>
				<SvgIcon
					component={LocationSearchingOutlinedIcon}
					sx={{ marginRight: '5px', fontSize: '20px' }}
				/>
				Current Location
			</button>
		</>
	);
};

export default CurrentLocation;
