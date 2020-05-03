import firebase from 'firebase/app';
import 'firebase/auth';

import database from '../app/Firebase/DataBase/cloudFirestore';

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
			logs: [],
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

export const getUserProfile = async (uid) => {
	const snapshot = await database.collection('profiles').doc(uid).get();
	return { uid, ...snapshot.data() };
};

export const signInWithGoogle = async () => {
	try {
		const provider = new firebase.auth.GoogleAuthProvider();
		const res = await firebase.auth().signInWithPopup(provider);
		const { user } = res;
		const profile = await getUserProfile(user.uid);
		if (profile) {
			const userProfile = {
				uid: user.uid,
				fullName: user.displayName,
				email: user.email,
				logs: [],
				description: '',
			};
			await createUserProfile(userProfile);
		}
		return true;
	} catch (error) {
		return Promise.reject(error.message);
	}
};

export const signInWithGitHub = async () => {
	try {
		const provider = new firebase.auth.GithubAuthProvider();
		provider.addScope('repo');
		const res = await firebase.auth().signInWithPopup(provider);
		const { user } = res;
		const profile = await getUserProfile(user.uid);
		if (profile) {
			const userProfile = {
				uid: user.uid,
				fullName: user.displayName,
				email: user.email,
				logs: [],
				description: '',
			};
			await createUserProfile(userProfile);
		}
		return true;
	} catch (error) {
		return Promise.reject(error.message);
	}
};
