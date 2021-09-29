import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoLE4rZhgE0uLhAxRuBHTZluGDsWaJXys",
  authDomain: "swen3252021a2.firebaseapp.com",
  databaseURL: "https://swen3252021a2-default-rtdb.firebaseio.com",
  projectId: "swen3252021a2",
  storageBucket: "swen3252021a2.appspot.com",
  messagingSenderId: "610725307988",
  appId: "1:610725307988:web:06e6d2374a8484f115afc1",
  measurementId: "G-5MJ28KHTXB"
};

let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;