import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);

	const login = (email, password) => {

		if(password === '123'){
			setUser({ id: '1', email });
			navigate('/home');
		}		
	};
	const logout = () => {
		console.log('logout');
		setUser(null);
		navigate('/')
	};

	return (
		<AuthContext.Provider
			value={{
				authenticated: !!user,
				user,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};