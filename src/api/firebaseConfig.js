import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC_eiab8kvYADRjzWof_nMlLqL-EaxWmc",
  authDomain: "cukiernia-c3073.firebaseapp.com",
  projectId: "cukiernia-c3073",
  storageBucket: "cukiernia-c3073.appspot.com",
  messagingSenderId: "1041733970078",
  appId: "1:1041733970078:web:e1105d8e44df699c1cf38f",
  measurementId: "G-B5DV2D0BTF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();

export const db = getFirestore(app);
