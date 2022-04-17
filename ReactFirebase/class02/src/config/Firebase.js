import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWGCJ8mCl8QK_Z8dLhNpzhzZWdtbyUdXI",
    authDomain: "studentapp-22785.firebaseapp.com",
    projectId: "studentapp-22785",
    storageBucket: "studentapp-22785.appspot.com",
    messagingSenderId: "400414299375",
    appId: "1:400414299375:web:06f6cda3935aaaea57371a",
    measurementId: "G-GGP8XYDK6L"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
