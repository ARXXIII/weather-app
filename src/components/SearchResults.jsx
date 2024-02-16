import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';
import SearchResult from './SearchResult';

const SearchResults = ({ results, onSearchChange }) => {
	return (
		<>
			<section className='absolute mt-5'>
				<Box
					sx={{
						width: '400px',
						color: 'white',
						border: '1px solid #b6a0e6',
						borderRadius: '12px',
						backgroundColor: '#1D1B1F',
						overflow: 'hidden',
					}}
				>
					{results.map((result, id) => {
						return (
							<SearchResult
								result={result}
								onSearchChange={onSearchChange}
								key={id}
							/>
						);
					})}
				</Box>
			</section>
		</>
	);
};

SearchResults.propTypes = {
	results: PropTypes.any,
	onSearchChange: PropTypes.any,
};

export default SearchResults;
