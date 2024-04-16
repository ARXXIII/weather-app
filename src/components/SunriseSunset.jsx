import { PropTypes } from 'prop-types';
import { getTime } from '../constants';
import { Box, SvgIcon } from '@mui/material';
import { useTranslation } from 'react-i18next';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const SunriseSunset = ({ sunriseSunsetData }) => {
	const { t } = useTranslation();

	return (
		<Box className='p-4 bg-dark-black-blue rounded-xl' component='section'>
			<h2 className='text-lg text-zinc-500'>
				{t('sunrise')}&nbsp;&&nbsp;{t('sunset')}
			</h2>
			<Box className='flex flex-col lg:flex-row justify-around items-center gap-y-8 lg:gap-x-8 mt-4'>
				<Box className='flex items-center gap-x-8'>
					<SvgIcon
						component={WbSunnyOutlinedIcon}
						sx={{
							fontSize: 'h3.fontSize',
						}}
					/>
					<Box>
						<p className='text-sm text-zinc-500'>{t('sunrise')}</p>
						<p className='mt-3 text-4xl shrink-0'>
							{sunriseSunsetData
								? getTime(
										sunriseSunsetData.sys.sunrise,
										sunriseSunsetData.timezone
								  )
								: null}
						</p>
					</Box>
				</Box>
				<Box className='flex items-center gap-x-8'>
					<SvgIcon
						component={DarkModeOutlinedIcon}
						sx={{
							fontSize: 'h3.fontSize',
						}}
					/>
					<Box>
						<p className='text-sm text-zinc-500'>{t('sunset')}</p>
						<p className='mt-3 text-4xl'>
							{sunriseSunsetData
								? getTime(
										sunriseSunsetData.sys.sunset,
										sunriseSunsetData.timezone
								  )
								: null}
						</p>
					</Box>
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
