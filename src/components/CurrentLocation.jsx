import { PropTypes } from 'prop-types';
import { SvgIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';

const CurrentLocation = ({ userLocationBtn }) => {
	const { t } = useTranslation();

	return (
		<>
			<button
				className='hidden lg:flex items-center rounded-full bg-violet-400 font-semibold px-4 py-2 border border-violet-400 shrink-0'
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
