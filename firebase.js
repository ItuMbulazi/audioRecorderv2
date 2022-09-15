// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAwd1bYjuqN209Hbg8R7Mou5VL8ZquhPn4",

  authDomain: "audioappv2.firebaseapp.com",

  projectId: "audioappv2",

  storageBucket: "audioappv2.appspot.com",

  messagingSenderId: "305523149265",

  appId: "1:305523149265:web:cf058309838d546a9178f0",

  measurementId: "G-NKRHFPY3SK"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export {auth};