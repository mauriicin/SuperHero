import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { findById } from '../../services/api';

export default function CircularIndeterminate() {
	const response = findById('batman');

	console.log(response);

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
