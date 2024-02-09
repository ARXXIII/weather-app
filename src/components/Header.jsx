import CurrentLocation from './CurrentLocation';
import LanguageSelector from './LanguageSelector';
import SearchBar from './SearchBar';
import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import Logo from 'D:/My projects/ar23-weather-app/src/assets/images/logo.svg';

const Header = ({ onSearchChange, userLocation }) => {
	return (
		<>
			<header className='flex justify-between items-center mx-10 my-16'>
				<img src={Logo} alt='AR23 Weather App' className='w-[175px]' />
				<SearchBar handleSearch={onSearchChange} />
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<CurrentLocation userLocationBtn={userLocation} />
					<LanguageSelector />
				</Box>
			</header>
		</>
	);
};

Header.propTypes = {
	onSearchChange: PropTypes.any,
	userLocation: PropTypes.any,
};

export default Header;
