import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer>
			<a href='https://github.com/PICKLEGENT' rel='noreferrer' target='_blank'>
				<Box className='p-8 text-center text-2xl text-neutral-100 tracking-wide bg-black-blue rounded-xl'>
					<p>{t('author')}</p>
				</Box>
			</a>
		</footer>
	);
};

export default Footer;
