import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
  } from "react-router-dom";

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';

export default function RoutesConfig() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/home" element={<Home />} />
			</Routes>			
		</Router>
	);
}
