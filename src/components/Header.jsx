import { Box } from '@mui/material';
import SearchBar from './SearchBar';
import { PropTypes } from 'prop-types';
import SearchResults from './SearchResults';
import CurrentLocation from './CurrentLocation';
import LanguageSelector from './LanguageSelector';

const Header = ({
	// data,
	results,
	setResults,
	userLocation,
	onSearchChange,
}) => {
	return (
		<>
			<header className='flex flex-col lg:flex-row justify-between gap-y-8 lg:gap-x-8 items-center relative'>
				{/* <img
					src={`src/assets/images/${data ? data.weather[0].main : null}.svg`}
					alt='AR23 Weather App'
					className='hidden lg:block max-w-[175px] lg:max-w-[350px] max-h-[85px] lg:max-h-[175px]'
				/> */}
				{window.innerWidth >= 1024 ? (
					<>
						<Box className='font-bold text-4xl text-violet-400 tracking-wide'>
							<h1>AR23 | Weather App</h1>
						</Box>
						<Box>
							<SearchBar setResults={setResults} />
							{results && results.length > 0 && (
								<SearchResults
									results={results}
									handleSearch={onSearchChange}
								/>
							)}
						</Box>
						<Box className='flex items-center gap-x-8'>
							<CurrentLocation userLocationBtn={userLocation} />
							<LanguageSelector />
						</Box>
					</>
				) : (
					<Box className='flex flex-col-reverse justify-between gap-y-8 w-full'>
						<Box className='w-full lg:w-auto'>
							<SearchBar setResults={setResults} />
							{results && results.length > 0 && (
								<SearchResults
									results={results}
									handleSearch={onSearchChange}
								/>
							)}
						</Box>
						<Box className='flex justify-between items-center lg:items-center gap-x-8'>
							<Box className='font-bold text-4xl text-violet-400 tracking-wide'>
								<h1>AR23 | Weather App</h1>
							</Box>
							<LanguageSelector />
						</Box>
					</Box>
				)}
			</header>
		</>
	);
};

Header.propTypes = {
	data: PropTypes.any,
	results: PropTypes.any,
	setLatLon: PropTypes.any,
	setResults: PropTypes.any,
	userLocation: PropTypes.any,
	onSearchChange: PropTypes.any,
};

export default Header;
