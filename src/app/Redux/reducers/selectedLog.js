import { FETCH_LOG_SUCCESS, REQUEST_LOG } from '../types/index';
import { combineReducers } from 'redux';

const initSelectedLog = () => {
	const item = (state = {}, action) => {
		switch (action.type) {
			case FETCH_LOG_SUCCESS:
				return action.payload;
			default:
				return state;
		}
	};

	const isFetching = (state = false, action) => {
		switch (action.type) {
			case REQUEST_LOG:
				return true;
			case FETCH_LOG_SUCCESS:
				return false;
			default:
				return state;
		}
	};

	return combineReducers({
		item,
		isFetching,
	});
};

const selectedLog = initSelectedLog();
export default selectedLog;
