import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import SearchResult from './SearchResult';

const SearchResults = ({ results, handleSearch }) => {
	return (
		<>
			<section className='absolute mt-4 z-10'>
				<Box className='w-[300px] lg:w-[500px] text-neutral-100 border border-violet-400 bg-black-blue rounded-xl overflow-hidden'>
					{results.map((result, id) => (
						<SearchResult
							result={result}
							handleSearch={handleSearch}
							key={id}
						/>
					))}
				</Box>
			</section>
		</>
	);
};

SearchResults.propTypes = {
	results: PropTypes.any,
	handleSearch: PropTypes.any,
};

export default SearchResults;
