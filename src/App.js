import React from 'react';
//Import Mui Theme
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

//import Routes
import RoutesConfig from './routes';
import theme from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<RoutesConfig />
		</ThemeProvider>
	);
}

export default App;