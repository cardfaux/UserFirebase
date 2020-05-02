import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/auth/Login';
import RegisterPage from '../../pages/auth/Register';
import CreateLogPage from '../../pages/logs/CreateLog';
import LogDetailPage from '../../pages/logs/LogDetail';
import MyLogsPage from '../../pages/logs/MyLogs';
import LogDetailUpdate from '../../pages/logs/LogDetailUpdate';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/register' component={RegisterPage} />
			<Route path='/create/service' component={CreateLogPage} />
			<Route path='/services/me' component={MyLogsPage} />
			<Route path='/service/update/:serviceId' component={LogDetailUpdate} />
			<Route path='/services/:serviceId' component={LogDetailPage} />
		</Switch>
	);
};

export default Routes;
