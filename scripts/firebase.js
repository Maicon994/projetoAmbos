// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkPDnIFeenyUoE45Cui0z8us0ZeDKO5bE",
    authDomain: "projetoclaudio-d9623.firebaseapp.com",
    databaseURL: "https://projetoclaudio-d9623-default-rtdb.firebaseio.com",
    projectId: "projetoclaudio-d9623",
    storageBucket: "projetoclaudio-d9623.firebasestorage.app",
    messagingSenderId: "636549684456",
    appId: "1:636549684456:web:be65409e50af014e337d5d",
    measurementId: "G-5LW2HYEMD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };
