import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
	const languages = [
		{ code: 'en', lang: 'English' },
		{ code: 'ru', lang: 'Русский' },
	];

	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className='btn-container'>
			{languages.map((lng) => {
				return (
					<button
						className={`lang-changer__btn ${
							lng.code === i18n.language ? 'selected' : ''
						}  rounded-full  font-semibold mx-2 px-4 py-2`}
						key={lng.code}
						onClick={() => changeLanguage(lng.code)}
					>
						{lng.lang}
					</button>
				);
			})}
		</div>
	);
};

export default LanguageSelector;
