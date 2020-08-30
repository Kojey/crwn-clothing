import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyCC_Efbc9m-dluYpF8ZBWxJ7bd-FIgxvPg",
  authDomain: "crwn-db-cf045.firebaseapp.com",
  databaseURL: "https://crwn-db-cf045.firebaseio.com",
  projectId: "crwn-db-cf045",
  storageBucket: "crwn-db-cf045.appspot.com",
  messagingSenderId: "260797564121",
  appId: "1:260797564121:web:b380be6d41886c516e6ac8",
  measurementId: "G-GKH7HDNF3X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
