import CurrentLocation from './CurrentLocation';
import LanguageSelector from './LanguageSelector';
import SearchBar from './SearchBar';
import { Box, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';

const Header = ({ onSearchChange, userLocation }) => {
	return (
		<>
			<header className='flex justify-between items-center mx-10 my-16'>
				<Typography
					letterSpacing='0.05em'
					fontSize='24px'
					color='white'
					fontWeight='bold'
				>
					AR23 / Weather App
				</Typography>
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
