// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firestore from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries



export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    

})