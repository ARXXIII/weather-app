import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URL } from '../Api';
import { PropTypes } from 'prop-types';

const SearchBar = ({ handleSearch }) => {
	const [search, setSearch] = useState(null);

	const loadOptions = (inputValue) => {
		return fetch(
			`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
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

	const searchBarStyles = {
		control: (provided, state) => ({
			...provided,
			width: '600px',
			color: '#fff',
			border: state.isFocused ? '1px solid #b6a0e6' : 'none',
			borderRadius: '12px',
			backgroundColor: '#1D1B1F',
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isFocused ? '#b6a0e6' : '#1D1B1F',
			color: state.isFocused ? '#000' : '#fff',
		}),
	};

	return (
		<AsyncPaginate
			placeholder='Moscow, RU'
			debounceTimeout={600}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
			styles={searchBarStyles}
		/>
	);
};

SearchBar.propTypes = {
	handleSearch: PropTypes.any,
};

export default SearchBar;
