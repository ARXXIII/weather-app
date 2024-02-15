import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer>
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
					<a
						href='https://github.com/PICKLEGENT'
						rel='noreferrer'
						target='_blank'
					>
						{t('author')}
					</a>
				</Typography>
			</Box>
		</footer>
	);
};

export default Footer;
