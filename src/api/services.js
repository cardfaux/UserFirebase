import 'firebase/auth';

import { createRef } from './index';
import database from '../app/Firebase/DataBase/cloudFirestore';

export const createService = (newService) => {
	return database
		.collection('services')
		.add(newService)
		.then((docRef) => docRef.id);
};

export const fetchServiceById = async (serviceId) => {
	const snapshot = await database.collection('services').doc(serviceId).get();
	return { id: snapshot.id, ...snapshot.data() };
};

export const fetchServices = async () => {
	const snapshot = await database.collection('services').get();
	const services = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return services;
};

export const fetchUserServices = async (userId) => {
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
