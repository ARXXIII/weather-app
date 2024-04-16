import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import { PropTypes } from 'prop-types';
import SearchResults from './SearchResults';
import CurrentLocation from './CurrentLocation';
import LanguageSelector from './LanguageSelector';

console.log(window.innerWidth);

const Header = ({
	onSearchChange,
	userLocation,
	data,
	results,
	setResults,
}) => {
	return (
		<>
			<header className='flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-8 items-center relative'>
				<img
					src={`/src/assets/images/${data ? data.weather[0].main : null}.svg`}
					alt='AR23 Weather App'
					className='hidden lg:block max-w-[175px] lg:max-w-[350px] max-h-[85px] lg:max-h-[175px]'
				/>
				{window.innerWidth >= 1024 ? (
					<>
						<Box className='w-full lg:w-auto'>
							<SearchBar setResults={setResults} />
							{results && results.length > 0 && (
								<SearchResults
									results={results}
									handleSearch={onSearchChange}
								/>
							)}
						</Box>
						<Box className='flex flex-col lg:flex-row items-end lg:items-center gap-y-8 lg:gap-x-8'>
							<CurrentLocation userLocationBtn={userLocation} />
							<LanguageSelector />
						</Box>
					</>
				) : (
					<Box className='flex flex-col-reverse lg:flex-row justify-between gap-y-8 lg:gap-x-8 w-full lg:w-auto'>
						<Box className='w-full lg:w-auto'>
							<SearchBar setResults={setResults} />
							{results && results.length > 0 && (
								<SearchResults
									results={results}
									handleSearch={onSearchChange}
								/>
							)}
						</Box>
						<Box className='flex flex-col lg:flex-row items-end lg:items-center gap-y-8 lg:gap-x-8'>
							<CurrentLocation userLocationBtn={userLocation} />
							<LanguageSelector />
						</Box>
					</Box>
				)}
			</header>
		</>
	);
};

Header.propTypes = {
	onSearchChange: PropTypes.any,
	userLocation: PropTypes.any,
	data: PropTypes.any,
	results: PropTypes.any,
	setResults: PropTypes.any,
	setLatLon: PropTypes.any,
};

export default Header;
