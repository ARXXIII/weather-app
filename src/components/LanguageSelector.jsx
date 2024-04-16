import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
	const { i18n } = useTranslation();

	const lngCode = localStorage.getItem('i18nextLng');

	const changeLanguage = () => {
		i18n.changeLanguage(lngCode === 'ru' ? 'en' : 'ru');
	};

	return (
		<button className='flex' onClick={() => changeLanguage()}>
			{lngCode === 'en' ? (
				<div
					className={`flex justify-start items-center w-[100px] bg-violet-400 rounded-full`}
				>
					<div
						className={`flex justify-center items-center m-1 w-[34px] h-[34px] text-xs text-neutral-100 bg-black-blue rounded-full uppercase`}
					>
						eng
					</div>
				</div>
			) : (
				<div
					className={`flex justify-end items-center w-[100px] bg-violet-400 rounded-full`}
				>
					<div
						className={`flex justify-center items-center m-1 w-[34px] h-[34px] text-xs text-neutral-100 bg-black-blue rounded-full uppercase`}
					>
						rus
					</div>
				</div>
			)}
		</button>
	);
};

export default LanguageSelector;
