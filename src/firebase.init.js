// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxEf_NnQ1t0EWeqtVNU-WuWkiAeomUBqA",
    authDomain: "hardware-parts-manufacturer.firebaseapp.com",
    projectId: "hardware-parts-manufacturer",
    storageBucket: "hardware-parts-manufacturer.appspot.com",
    messagingSenderId: "151827024402",
    appId: "1:151827024402:web:1595f6b6f273efebc3a6cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;