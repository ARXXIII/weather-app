import { PropTypes } from 'prop-types';
import { Box, SvgIcon } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const SearchResult = ({ result, handleSearch }) => {
	const selectCity = (result) => {
		handleSearch(result);
	};

	return (
		<>
			<Box
				onClick={() => selectCity(result)}
				className='flex justify-start items-center p-2.5 hover:bg-violet-400 hover:text-black-blue duration-200 ease-in cursor-pointer'
			>
				<SvgIcon
					component={PlaceOutlinedIcon}
					sx={{ marginRight: '5px', fontSize: '22px' }}
					inheritViewBox
				/>
				<p>{result.label}</p>
			</Box>
		</>
	);
};

SearchResult.propTypes = {
	result: PropTypes.any,
	handleSearch: PropTypes.any,
};

export default SearchResult;
