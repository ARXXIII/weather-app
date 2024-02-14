import CurrentLocation from './CurrentLocation';
import LanguageSelector from './LanguageSelector';
import SearchBar from './SearchBar';
import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';

const Header = ({ onSearchChange, userLocation, data }) => {
	return (
		<>
			<header className='flex justify-center items-center mx-10 my-[100px] relative'>
				<img
					src={`/src/assets/images/${data ? data.weather[0].main : null}.svg`}
					alt='AR23 Weather App'
					className='absolute left-0  h-[175px]'
				/>
				<SearchBar handleSearch={onSearchChange} />
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'absolute',
						right: '0',
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
	data: PropTypes.any,
};

export default Header;
