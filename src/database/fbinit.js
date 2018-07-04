import firebase from 'firebase';
import 'firebase/firestore/';
import fbconfig from './fbconfig';

const firebaseApp = firebase.initializeApp(fbconfig);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebaseApp.firestore();

