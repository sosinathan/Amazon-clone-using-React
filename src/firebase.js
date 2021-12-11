// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-tqEjTLxR21dck0jdvpm0n-4eVaBa0NU",
  authDomain: "one-3153e.firebaseapp.com",
  projectId: "one-3153e",
  storageBucket: "one-3153e.appspot.com",
  messagingSenderId: "496438900698",
  appId: "1:496438900698:web:70e9ccef770c3480e732e3",
  measurementId: "G-BTKQW3PD42"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
