import 'firebase/auth';

import { createRef } from './index';
import database from '../app/Firebase/DataBase/cloudFirestore';

export const createLog = async (newLog) => {
	const docRef = await database.collection('workoutlogs').add(newLog);
	return docRef.id;
};

export const updateLog = async (docId, updatedLog) => {
	const updatedDoc = await database
		.collection('workoutlogs')
		.doc(docId)
		.update(updatedLog);

	return updatedDoc;
};

export const deleteLog = async (docId) => {
	const deletedDoc = await database
		.collection('workoutlogs')
		.doc(docId)
		.delete();
	return deletedDoc;
};

export const fetchLogById = async (logId) => {
	const snapshot = await database.collection('workoutlogs').doc(logId).get();
	return { id: snapshot.id, ...snapshot.data() };
};

export const fetchLogs = async () => {
	const snapshot = await database.collection('workoutlogs').get();
	const logs = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return logs;
};

export const fetchUserLogs = async (userId) => {
	const userRef = createRef('profiles', userId);
	const snapshot = await database
		.collection('workoutlogs')
		.where('user', '==', userRef)
		.get();
	const logs = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return logs;
};
