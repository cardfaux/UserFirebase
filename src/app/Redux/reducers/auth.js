import {
	SET_AUTH_USER,
	RESET_AUTH_STATE,
	FETCH_USER_LOGS_SUCCESS,
} from '../types/index';

const INITIAL_STATE = {
	user: null,
	isAuth: false,
	isAuthResolved: false,
};

const auth = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_AUTH_USER:
			return {
				user: action.payload,
				isAuthResolved: true,
				isAuth: !!action.payload,
			};
		case RESET_AUTH_STATE:
			return { ...state, isAuthResolved: false };
		case FETCH_USER_LOGS_SUCCESS:
			return { ...state, user: { ...state.user, logs: action.payload } };
		default:
			return state;
	}
};

export default auth;
