import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/auth/Login';
import RegisterPage from '../../pages/auth/Register';
import CreateLogPage from '../../pages/logs/CreateLog';
import LogDetailPage from '../../pages/logs/LogDetail';
import MyLogsPage from '../../pages/logs/MyLogs';
import LogDetailUpdate from '../../pages/logs/LogDetailUpdate';

import TestPage from '../../pages/test/SendToFirebase';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/register' component={RegisterPage} />
			<Route path='/create/log' component={CreateLogPage} />
			<Route path='/logs/me' component={MyLogsPage} />
			<Route path='/log/update/:logId' component={LogDetailUpdate} />
			<Route path='/log/:logId' component={LogDetailPage} />
			<Route path='/test' component={TestPage} />
		</Switch>
	);
};

export default Routes;
