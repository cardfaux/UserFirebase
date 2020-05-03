import { FETCH_LOGS_SUCCESS } from '../types';

const INITIAL_STATE = {
	items: [],
};

const logsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_LOGS_SUCCESS:
			return { ...state, items: action.payload };
		default:
			return state;
	}
};

export default logsReducer;
