import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "@firebase/storage-compat";

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOM,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STOR_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export { db, firebaseApp };
