import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loggedRecovery = localStorage.getItem('user');

		if (loggedRecovery) {
			setUser(JSON.parse(loggedRecovery));
		}

		setLoading(false);
	}, []);

	const login = (email, password) => {
		const loggedUser = {
			id: '1',
			email,
		};

		localStorage.setItem('user', JSON.stringify(loggedUser));

		if (password === '123') {
			setUser(loggedUser);
			navigate('/');
		}
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem('user');
		navigate('/login');
	};

	return (
		<AuthContext.Provider
			value={{
				authenticated: Boolean(user),
				user,
				loading,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
