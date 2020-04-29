import {
	FETCH_SERVICES_SUCCESS,
	FETCH_SERVICE_SUCCESS,
	REQUEST_SERVICE,
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
