import { Box, Typography } from '@mui/material';

const Footer = () => {
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
						letterSpacing: '0.1em',
					}}
				>
					<a
						href='https://github.com/PICKLEGENT'
						rel='noreferrer'
						target='_blank'
					>
						Created by AR23
					</a>
				</Typography>
			</Box>
		</footer>
	);
};

export default Footer;
