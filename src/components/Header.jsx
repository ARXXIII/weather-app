import CurrentLocation from './CurrentLocation';
import { Typography } from '@mui/material';
import SearchBar from './SearchBar';
import { PropTypes } from 'prop-types';

const Header = ({ onSearchChange }) => {
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
				<CurrentLocation />
			</header>
		</>
	);
};

Header.propTypes = {
	onSearchChange: PropTypes.any,
};

export default Header;
