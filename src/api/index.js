import database from '../app/Firebase/DataBase/cloudFirestore';

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
