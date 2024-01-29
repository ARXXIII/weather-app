import { useState } from 'react';

// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { AsyncPaginate } from 'react-select-async-paginate';
// import { SvgIcon } from '@mui/material';
import { geoApiOptions, GEO_API_URL } from '../Api';
import { PropTypes } from 'prop-types';

// const SearchButton = () => (
// 	<button type='button'>
// 		<SvgIcon component={SearchOutlinedIcon} />
// 	</button>
// );

const SearchBar = ({ handleSearch }) => {
	const [search, setSearch] = useState(null);

	const loadOptions = (inputValue) => {
		return fetch(
			`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
			geoApiOptions
		)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude} ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			});
	};

	const handleOnChange = (searchData) => {
		setSearch(searchData);
		handleSearch(searchData);
	};

	return (
		// <div className='search-bar'>
		// 	<div className='flex px-4 items-center rounded-full bg-[#1D1B1F] text-white'>
		// 		<SearchButton onClick={() => setSearch(search)} />
		// 		<input
		// 			type='text'
		// 			name='search'
		// 			placeholder='City, country'
		// 			value={search}
		// 			onChange={handleOnChange}
		// 			className='px-4 py-2 rounded-full outline-none bg-transparent w-[400px]'
		// 		/>
		// 	</div>
		// </div>
		<AsyncPaginate
			placeholder='Moscow, RU'
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	);
};

SearchBar.propTypes = {
	handleSearch: PropTypes.any,
};

export default SearchBar;
