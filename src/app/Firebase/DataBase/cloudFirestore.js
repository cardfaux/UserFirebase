import firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseConfig } from '../FirebaseConfig/FirebaseConfig';

const database = firebase.initializeApp(firebaseConfig).firestore();

export const { Timestamp } = firebase.firestore;
export default database;
