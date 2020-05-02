import 'firebase/auth';

import { createRef } from './index';
import database from '../app/Firebase/DataBase/cloudFirestore';

export const createLog = async (newService) => {
	const docRef = await database.collection('services').add(newService);
	return docRef.id;
};

export const updateLog = async (docId, updatedService) => {
	const updatedDoc = await database
		.collection('services')
		.doc(docId)
		.update(updatedService);

	return updatedDoc;
};

export const deleteLog = async (docId) => {
	const deletedDoc = await database.collection('services').doc(docId).delete();
	return deletedDoc;
};

export const fetchLogById = async (serviceId) => {
	const snapshot = await database.collection('services').doc(serviceId).get();
	return { id: snapshot.id, ...snapshot.data() };
};

export const fetchLogs = async () => {
	const snapshot = await database.collection('services').get();
	const logs = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return logs;
};

export const fetchUserLogs = async (userId) => {
	const userRef = createRef('profiles', userId);
	const snapshot = await database
		.collection('services')
		.where('user', '==', userRef)
		.get();
	const services = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return services;
};
