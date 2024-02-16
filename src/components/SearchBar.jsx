import { useState } from 'react';
import { geoApiOptions, GEO_API_URL } from '../Api';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

const SearchBar = ({ setResults }) => {
	const [search, setSearch] = useState('');

	const { t } = useTranslation();

	const fetchCity = async (value) => {
		try {
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
		} catch (error) {
			console.error(error);
		}
	};

	const handleOnChange = (search) => {
		fetchCity(search);
		setSearch(search);
	};

	return (
		<>
			<input
				type='text'
				placeholder={t('SearchBarPlaceholder')}
				value={search}
				onChange={(e) => handleOnChange(e.target.value)}
				className='px-5 py-2.5 w-[500px] text-white border border-[#b6a0e6] bg-[#1D1B1F] capitalize rounded-full outline-none'
			/>
		</>
	);
};

SearchBar.propTypes = {
	setResults: PropTypes.any,
};

export default SearchBar;
