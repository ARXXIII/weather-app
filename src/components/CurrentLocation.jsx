import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import { SvgIcon } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

const CurrentLocation = ({ userLocationBtn }) => {
	const { t } = useTranslation();

	return (
		<>
			<button
				className='flex items-center rounded-full bg-[#B6A0E6] font-semibold mx-10 px-4 py-2'
				onClick={userLocationBtn}
			>
				<SvgIcon
					component={LocationSearchingOutlinedIcon}
					sx={{ marginRight: '5px', fontSize: '20px' }}
				/>
				{t('currLocationBtn')}
			</button>
		</>
	);
};

CurrentLocation.propTypes = {
	userLocationBtn: PropTypes.any,
};

export default CurrentLocation;
