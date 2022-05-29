import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { findByName } from '../../services/api';
import Hero from '../../components/Hero';
import Loading from '../../components/Loading';

export default function CircularIndeterminate() {
	const [hero, setHero] = useState('');
	const [error, setError] = useState('');
	const [heroData, setHeroData] = useState({});
	const [showLoader, setShowLoader] = useState(false);

	function clearSearch(req) {
		return req.replace(' ', '%20');
	}

	async function handleForm(e) {
		e.preventDefault();
		setError('');
		setShowLoader(true);

		findByName(clearSearch(hero)).then((r) => {
			if (r.data.response === 'error') {
				setError('Hero does not exist in Database, try another one!');
				setShowLoader(false);
			}
			if (r.data.response === 'success') {
				setHeroData(r.data.results);
				setShowLoader(false);
			}
		});
	}
	const isObjectEmpty = (myObject) => {
		return Object.entries(myObject).length > 0;
	};

	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
				}}
			>
				{!error ? <></> : <Alert severity="error">{error}</Alert>}
				<form onSubmit={handleForm}>
					<TextField
						helperText="Look for a hero."
						label="Hero name"
						fullWidth
						value={hero}
						onChange={(e) => setHero(e.target.value)}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Search
					</Button>
				</form>
				{showLoader && <Loading />}
				{isObjectEmpty(heroData) && <Hero data={heroData} />}
			</Box>
		</Container>
	);
}
