import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyD9703msQFncIRY6nu5gcoVEuy6j_wJ6vg",
  authDomain: "social-app-884b2.firebaseapp.com",
  projectId: "social-app-884b2",
  storageBucket: "social-app-884b2.appspot.com",
  messagingSenderId: "838513615558",
  appId: "1:838513615558:web:bf8f669922adcfb97eedc7",
  measurementId: "G-ZCYR957KRZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const functions = firebase.functions();
