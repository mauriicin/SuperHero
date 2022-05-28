import React from 'react';

import Box from '@mui/material/Box';
import Header from '../../components/Header';
import ListHero from '../../components/ListHero';

export default function Home() {
	return (
		<>
			<Header />
			<Box
				component="main"
				sx={{
					padding: 4,
					flexGrow: 1,
					height: '100vh',
					overflow: 'auto',
				}}
			>
				<ListHero />
			</Box>
		</>
	);
}
