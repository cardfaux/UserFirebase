import {
	FETCH_SERVICES_SUCCESS,
	FETCH_SERVICE_SUCCESS,
	REQUEST_SERVICE,
	SET_AUTH_USER,
	RESET_AUTH_STATE,
} from '../types';
import * as api from '../../../api/index';

export const fetchServices = () => async (dispatch) => {
	const services = await api.fetchServices();
	return dispatch({
		type: FETCH_SERVICES_SUCCESS,
		services,
	});
};

export const fetchServiceById = (serviceId) => async (dispatch, getState) => {
	const lastService = getState().selectedService.item;
	if (lastService.id && lastService.id === serviceId) {
		return Promise.resolve();
	}

	dispatch({ type: REQUEST_SERVICE });
	const service = await api.fetchServiceById(serviceId);
	return dispatch({
		type: FETCH_SERVICE_SUCCESS,
		service,
	});
};

export const register = (registerFormData) => {
	return api.registerUser({ ...registerFormData });
};

export const login = (loginData) => api.login({ ...loginData });

export const logout = () => (dispatch) => {
	return api.logout().then((_) => {
		return dispatch({ user: null, type: SET_AUTH_USER });
	});
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
