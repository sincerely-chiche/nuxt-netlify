// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firestore from "firebase/firestore"
// https://firebase.google.com/docs/web/setup#available-libraries



export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBKvPscL-5Puy7xRWmImRqScaBmLbjoslU",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    

})