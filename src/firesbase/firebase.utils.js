import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAeGSgBM9cB3_ZQULfcy0MNkEV7_avOatI",
  authDomain: "twitter-clone-949fa.firebaseapp.com",
  databaseURL: "https://twitter-clone-949fa.firebaseio.com",
  projectId: "twitter-clone-949fa",
  storageBucket: "twitter-clone-949fa.appspot.com",
  messagingSenderId: "615100983023",
  appId: "1:615100983023:web:a9c58d01d9ee68f9115d1a",
  measurementId: "G-ESZJC79QM9"
};
// Initialize Firebase

const firebaseUtils = firebase.initializeApp(firebaseConfig);

export default firebaseUtils;
export const db = firebase.firestore();
