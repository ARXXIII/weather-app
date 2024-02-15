import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer>
			<a href='https://github.com/PICKLEGENT' rel='noreferrer' target='_blank'>
				<Box
					sx={{
						margin: '40px 0',
						padding: '23px',
						textAlign: 'center',
						color: '#FFFFFF',
						borderRadius: '12px',
						backgroundColor: '#1D1B1F',
					}}
				>
					<Typography
						sx={{
							letterSpacing: '0.05em',
						}}
					>
						{t('author')}
					</Typography>
				</Box>
			</a>
		</footer>
	);
};

export default Footer;
