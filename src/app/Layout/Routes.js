import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import RegisterPage from '../../pages/Register';
import ServiceDetailPage from '../../pages/ServiceDetail';
import FaqPage from '../../pages/Faq';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/register' component={RegisterPage} />
			<Route path='/services/:serviceId' component={ServiceDetailPage} />
			<Route path='/faq' component={FaqPage} />
		</Switch>
	);
};

export default Routes;
