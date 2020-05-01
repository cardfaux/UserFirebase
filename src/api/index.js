import 'firebase/auth';

import database from '../app/Firebase/DataBase/cloudFirestore';

export const createRef = (collection, docId) => {
	return database.doc(`${collection}/` + docId);
};

export * from './services';
export * from './auth';
