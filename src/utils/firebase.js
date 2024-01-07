// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDGB9O1dj-7vBWPlxnQOtPSiugRQPkH7c",
  authDomain: "netflixgpt-c3522.firebaseapp.com",
  projectId: "netflixgpt-c3522",
  storageBucket: "netflixgpt-c3522.appspot.com",
  messagingSenderId: "1082976277530",
  appId: "1:1082976277530:web:356e918517670ea8d5eda3",
  measurementId: "G-C5EHKV27V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();