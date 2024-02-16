import { useState } from 'react';
// import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions, GEO_API_URL } from '../Api';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

const SearchBar = ({ setResults }) => {
	const [search, setSearch] = useState('');

	const { t } = useTranslation();

	const fetchCity = async (value) => {
		return await fetch(
			`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${value}`,
			geoApiOptions
		)
			.then((response) => response.json())
			.then((response) => {
				const results = response.data.map((city) => {
					return {
						value: `${city.latitude} ${city.longitude}`,
						label: `${city.name}, ${city.countryCode}`,
					};
				});
				setResults(results);
			});
	};

	const handleOnChange = (search) => {
		fetchCity(search);
		setSearch(search);
	};

	// const searchBarStyles = {
	// 	control: (provided, state) => ({
	// 		...provided,
	// 		width: '600px',
	// 		color: '#fff',
	// 		border: state.isFocused ? '1px solid #b6a0e6' : 'none',
	// 		borderRadius: '9999px',
	// 		backgroundColor: '#1D1B1F',
	// 	}),
	// 	option: (provided, state) => ({
	// 		...provided,
	// 		backgroundColor: state.isFocused ? '#b6a0e6' : '#1D1B1F',
	// 		color: state.isFocused ? '#000' : '#fff',
	// 	}),
	// };

	return (
		<>
			{/* <AsyncPaginate
				placeholder='Moscow, RU'
				debounceTimeout={600}
				value={search}
				onChange={handleOnChange}
				loadOptions={loadOptions}
				styles={searchBarStyles}
			/> */}
			<input
				type='text'
				placeholder={t('SearchBarPlaceholder')}
				value={search}
				onChange={(e) => handleOnChange(e.target.value)}
				className='p-2.5 w-[400px] text-white border border-[#b6a0e6] bg-[#1D1B1F] rounded-full outline-none'
			/>
		</>
	);
};

SearchBar.propTypes = {
	setResults: PropTypes.any,
};

export default SearchBar;
