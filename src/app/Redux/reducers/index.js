import { combineReducers } from 'redux';

import auth from './auth';
import logs from './logs';
import selectedLog from './selectedLog';

const FirebaseApp = combineReducers({
	logs,
	selectedLog,
	auth,
});

export default FirebaseApp;
