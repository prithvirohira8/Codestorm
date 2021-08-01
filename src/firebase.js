import firebase from "firebase/app";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJAh_tUO9bT7Rp7RvRqff9DWyAC0-YE-o",
    authDomain: "codestorm-a83ad.firebaseapp.com",
    projectId: "codestorm-a83ad",
    storageBucket: "codestorm-a83ad.appspot.com",
    messagingSenderId: "382876732430",
    appId: "1:382876732430:web:aa43509b89c80f8889805f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//Gives Authentication instance 
export const auth = app.auth();

//Gives firebase's reference in general 
export default app;
