import React, { useContext } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { AuthContext } from '../../contexts/auth';

export default function Header() {
	const { logout } = useContext(AuthContext);

	const handleLogout = () => {
		logout();
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Super Hero
					</Typography>
					<Button onClick={handleLogout} color="inherit">
						Logout
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
