import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/auth/Home';

export default function Routes() {
	return (
		<Switch>
			<Route path="/" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/dashboard" component={Home} />
		</Switch>
	);
}
