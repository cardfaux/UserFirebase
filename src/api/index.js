import firebase from 'firebase/app';
import 'firebase/auth';

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
	const snapshot = await database
		.collection('services')
		.where('user', '==', userId)
		.get();
	const services = snapshot.docs.map((doc) => ({
		id: doc.id,
		...doc.data(),
	}));
	return services;
};

const createUserProfile = (userProfile) => {
	return database.collection('profiles').doc(userProfile.uid).set(userProfile);
};

export const registerUser = async ({ email, password, fullName }) => {
	try {
		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		const { user } = res;
		const userProfile = {
			uid: user.uid,
			fullName,
			email,
			services: [],
			description: '',
		};
		await createUserProfile(userProfile);
		return userProfile;
	} catch (error) {
		return Promise.reject(error.message);
	}
};

export const login = async ({ email, password }) => {
	try {
		const signinWithEmail = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		return signinWithEmail;
	} catch (error) {
		return await Promise.reject(error.message);
	}
};

export const logout = () => {
	return firebase.auth().signOut();
};

export const onAuthStateChanged = (onAuthCallback) => {
	return firebase.auth().onAuthStateChanged(onAuthCallback);
};

export const getUserProfile = (uid) => {
	return database
		.collection('profiles')
		.doc(uid)
		.get()
		.then((snapshot) => ({ uid, ...snapshot.data() }));
};
