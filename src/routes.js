import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';

import Loading from './components/Loading';

import Login from './pages/auth/Login';
import Home from './pages/Home';

import { AuthProvider, AuthContext } from './contexts/auth';

export default function RoutesConfig() {
	const Private = ({ children }) => {
		const { authenticated, loading } = useContext(AuthContext);

		if (loading) {
			return <Loading />;
		}

		if (!authenticated) {
			return <Navigate to="/login" />;
		}

		return children;
	};

	return (
		<Router>
			<AuthProvider>
				<Routes>
					<Route exact path="/login" element={<Login />} />
					<Route
						path="/"
						element={
							<Private>
								<Home />
							</Private>
						}
					/>
				</Routes>
			</AuthProvider>
		</Router>
	);
}
