import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2WD0otpHT4ieFxUe5BZVkTkX9fjKRdDs",
    authDomain: "crown-db-c5427.firebaseapp.com",
    databaseURL: "https://crown-db-c5427.firebaseio.com",
    projectId: "crown-db-c5427",
    storageBucket: "crown-db-c5427.appspot.com",
    messagingSenderId: "477770943108",
    appId: "1:477770943108:web:59358352e7873f58da90d1",
    measurementId: "G-WKRRXMTRC9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;