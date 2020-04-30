import { combineReducers } from 'redux';

import auth from './auth';
import services from './services';
import selectedService from './selectedService';

const serviceApp = combineReducers({
	services,
	selectedService,
	auth,
});

export default serviceApp;
