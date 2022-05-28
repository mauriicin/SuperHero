import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from '../../components/Header';
import ListHero from '../../components/ListHero';

export default function Home() {
	return (
		<Container maxWidth="root">
			<Header />
			<Grid>
				<ListHero />
			</Grid>
		</Container>
	);
}
