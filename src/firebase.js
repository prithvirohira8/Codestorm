import firebase from "firebase";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJAh_tUO9bT7Rp7RvRqff9DWyAC0-YE-o",
    authDomain: "codestorm-a83ad.firebaseapp.com",
    databaseURL: "https://codestorm-a83ad-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "codestorm-a83ad",
    storageBucket: "codestorm-a83ad.appspot.com",
    messagingSenderId: "382876732430",
    appId: "1:382876732430:web:aa43509b89c80f8889805f"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//Gives Authentication instance 
export const auth = app.auth();
export default app;
