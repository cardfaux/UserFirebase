import { SET_AUTH_USER, RESET_AUTH_STATE } from '../types';
import * as api from '../../../api/index';

export const register = (registerFormData) => {
	return api.registerUser({ ...registerFormData });
};

export const login = (loginData) => api.login({ ...loginData });

export const logout = () => async (dispatch) => {
	await api.logout();
	return dispatch({ user: null, type: SET_AUTH_USER });
};

export const onAuthStateChanged = (onAuthCallback) => {
	return api.onAuthStateChanged(onAuthCallback);
};

export const storeAuthUser = (authUser) => (dispatch) => {
	dispatch({ type: RESET_AUTH_STATE });
	if (authUser) {
		return api.getUserProfile(authUser.uid).then((userWithProfile) => {
			return dispatch({ user: userWithProfile, type: SET_AUTH_USER });
		});
	} else {
		return dispatch({ user: null, type: SET_AUTH_USER });
	}
};
