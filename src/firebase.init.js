// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFZ_WVjnsB2Sl8vVmEkFbeqHtOFM7Ek6s",
    authDomain: "genius-car-services-4193b.firebaseapp.com",
    projectId: "genius-car-services-4193b",
    storageBucket: "genius-car-services-4193b.appspot.com",
    messagingSenderId: "1063631492354",
    appId: "1:1063631492354:web:b2583ab6f988a2b6bf5e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;