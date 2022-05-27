import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../../contexts/auth';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

export default function Login() {
	const {authenticated, login} = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin(e) {
		e.preventDefault();
		console.log({email, password});
		login(email, password);
	}

	return (
		<Container maxWidth="sm">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
				<Typography component="h1" variant="h5">
					{String(authenticated)}
				</Typography>
				<form onSubmit={handleLogin} >
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="E-mail"
							name="email"
							autoComplete="email"
							autoFocus
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Senha"
							type="password"
							id="password"
							autoComplete="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<FormControlLabel
							control={
								<Checkbox value="remember" color="primary" />
							}
							label="Manter-me conectado"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Entrar
						</Button>
					</form>
			</Box>
		</Container>
	);
}
