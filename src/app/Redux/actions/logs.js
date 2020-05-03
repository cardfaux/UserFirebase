import {
	FETCH_LOGS_SUCCESS,
	FETCH_LOG_SUCCESS,
	REQUEST_LOG,
	FETCH_USER_LOGS_SUCCESS,
} from '../types';
import * as api from '../../../api/index';

export const createLog = (newLog, userId) => {
	newLog.reps = parseInt(newLog.reps);
	newLog.sets = parseInt(newLog.sets);
	newLog.weight = parseInt(newLog.weight);
	newLog.user = api.createRef('profiles', userId);

	return api.createLog(newLog);
};

export const updateLog = (docId, updatedLog, userId) => {
	updatedLog.reps = parseInt(updatedLog.reps);
	updatedLog.sets = parseInt(updatedLog.sets);
	updatedLog.weight = parseInt(updatedLog.weight);
	updatedLog.user = api.createRef('profiles', userId);

	return api.updateLog(docId, updatedLog);
};

export const deleteLog = (docId) => {
	return api.deleteLog(docId);
};

export const fetchLogs = () => async (dispatch) => {
	const logs = await api.fetchLogs();
	return dispatch({
		type: FETCH_LOGS_SUCCESS,
		payload: logs,
	});
};

export const fetchUserLogs = (userId) => async (dispatch) => {
	const logs = await api.fetchUserLogs(userId);
	return dispatch({
		type: FETCH_USER_LOGS_SUCCESS,
		payload: logs,
	});
};

export const fetchLogById = (logId) => async (dispatch, getState) => {
	console.log('GETSTATE', getState);
	const lastViewedLog = getState().selectedLog.item;
	if (lastViewedLog.id && lastViewedLog.id === logId) {
		return Promise.resolve();
	}

	dispatch({ type: REQUEST_LOG });
	const log = await api.fetchLogById(logId);
	const user = await log.user.get();
	log.user = user.data();
	log.user.id = user.id;
	dispatch({ type: FETCH_LOG_SUCCESS, payload: log });
};
