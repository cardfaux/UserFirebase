import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import RegisterPage from '../../pages/Register';
import ServiceCreatePage from '../../pages/ServiceCreate';
import ServiceDetailPage from '../../pages/ServiceDetail';
import FaqPage from '../../pages/Faq';
import UserServicesPage from '../../pages/UserServices';
import ServiceDetailUpdate from '../../pages/ServiceDetailUpdate';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/register' component={RegisterPage} />
			<Route path='/create/service' component={ServiceCreatePage} />
			<Route path='/services/me' component={UserServicesPage} />
			<Route
				path='/service/update/:serviceId'
				component={ServiceDetailUpdate}
			/>
			<Route path='/services/:serviceId' component={ServiceDetailPage} />
			<Route path='/faq' component={FaqPage} />
		</Switch>
	);
};

export default Routes;
