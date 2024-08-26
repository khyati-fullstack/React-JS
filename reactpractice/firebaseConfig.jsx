// npm install firebase

// npm install -g fiebase-tools

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwKo6IxBYStHVnpLSp9RBml_pui7xnizY",
  authDomain: "fb-reactproject-d85d7.firebaseapp.com",
  projectId: "fb-reactproject-d85d7",
  storageBucket: "fb-reactproject-d85d7.appspot.com",
  messagingSenderId: "303088942340",
  appId: "1:303088942340:web:1fd9df087b2e81641d6451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export {auth,db,storage}