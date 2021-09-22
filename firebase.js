import firebase from "firebase";
import "firebase/storage";

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID
//   };
const firebaseConfig = {
  apiKey: "AIzaSyAMJ3Ct7Hb0R3qnz4wGPbB4xnR2E5ScBQY",
  authDomain: "celtic-volt-494.firebaseapp.com",
  databaseURL: "https://celtic-volt-494.firebaseio.com",
  projectId: "celtic-volt-494",
  storageBucket: "celtic-volt-494.appspot.com",
  messagingSenderId: "939249142404",
  appId: "1:939249142404:web:6ed73fca72a550a77210d1"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db= app.firestore();
const storage = firebase.storage();

export { db, storage};