import {
	FETCH_SERVICES_SUCCESS,
	FETCH_SERVICE_SUCCESS,
	REQUEST_SERVICE,
	FETCH_USER_SERVICES_SUCCESS,
} from '../types';
import * as api from '../../../api/index';

export const createLog = (newService, userId) => {
	//newService.price = parseInt(newService.price, 10)
	newService.reps = parseInt(newService.reps);
	newService.sets = parseInt(newService.sets);
	newService.weight = parseInt(newService.weight);
	newService.user = api.createRef('profiles', userId);

	return api.createLog(newService);
};

export const updateLog = (docId, updatedService, userId) => {
	updatedService.reps = parseInt(updatedService.reps);
	updatedService.sets = parseInt(updatedService.sets);
	updatedService.weight = parseInt(updatedService.weight);
	updatedService.user = api.createRef('profiles', userId);

	return api.updateLog(docId, updatedService);
};

export const deleteLog = (docId) => {
	return api.deleteLog(docId);
};

export const fetchLogs = () => async (dispatch) => {
	const logs = await api.fetchLogs();
	return dispatch({
		type: FETCH_SERVICES_SUCCESS,
		payload: logs,
	});
};

export const fetchUserLogs = (userId) => async (dispatch) => {
	const logs = await api.fetchUserLogs(userId);
	return dispatch({
		type: FETCH_USER_SERVICES_SUCCESS,
		payload: logs,
	});
};

export const fetchLogById = (serviceId) => async (dispatch, getState) => {
	const lastViewedLog = getState().selectedLog.item;
	if (lastViewedLog.id && lastViewedLog.id === serviceId) {
		return Promise.resolve();
	}

	dispatch({ type: REQUEST_SERVICE });
	const log = await api.fetchLogById(serviceId);
	const user = await log.user.get();
	log.user = user.data();
	log.user.id = user.id;
	dispatch({ type: FETCH_SERVICE_SUCCESS, payload: log });
};
