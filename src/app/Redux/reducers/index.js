import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';

const serviceReducer = combineReducers({
	service: servicesReducer,
});

export default serviceReducer;
