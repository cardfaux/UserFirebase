import {
	FETCH_SERVICES_SUCCESS,
	FETCH_SERVICE_SUCCESS,
	REQUEST_SERVICE,
	FETCH_USER_SERVICES_SUCCESS,
} from '../types';
import * as api from '../../../api/index';

export const createService = (newService, userId) => {
	//newService.price = parseInt(newService.price, 10)
	newService.reps = parseInt(newService.reps);
	newService.sets = parseInt(newService.sets);
	newService.weight = parseInt(newService.weight);
	newService.user = api.createRef('profiles', userId);

	return api.createService(newService);
};

export const fetchServices = () => async (dispatch) => {
	const services = await api.fetchServices();
	return dispatch({
		type: FETCH_SERVICES_SUCCESS,
		services,
	});
};

export const fetchUserServices = (userId) => async (dispatch) => {
	const services = await api.fetchUserServices(userId);
	return dispatch({
		type: FETCH_USER_SERVICES_SUCCESS,
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
	// service.user = await api.getUserProfile(service.user)
	const user = await service.user.get();
	service.user = user.data();
	//service.user.id = user.id;
	dispatch({ type: FETCH_SERVICE_SUCCESS, service });
};
