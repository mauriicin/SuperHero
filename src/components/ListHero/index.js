import React, { useState } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CircularIndeterminate() {
	const [showHero, setShowHero] = useState(false);

	const handleForm = (e) => {};

	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'start',
					justifyContent: 'center',
				}}
			>
				<TextField
					helperText="Please enter your name"
					label="Nome Do Heroi"
				/>
			</Box>
		</Container>
	);
}
