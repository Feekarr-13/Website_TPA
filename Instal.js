// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWJ9_WG_xq_8XwJQWrwRpDjKWYt9K3G08",
    authDomain: "website_tpa.firebaseapp.com",
    projectId: "website_tpa",
    storageBucket: "website-tpa.appspot.com",
    messagingSenderId: "114587987750",
    appId: "1:114587987750:web:22b199ec6b7a6232295be7",
    measurementId: "G-QXVJ2X8V6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);