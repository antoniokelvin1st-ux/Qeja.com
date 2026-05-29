// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDp33VJKZSPDYwU5OY_Nzq-fnAck50-bDA",
    authDomain: "qeja-com.firebaseapp.com",
    projectId: "qeja-com",
    storageBucket: "qeja-com.firebasestorage.app",
    messagingSenderId: "219739142262",
    appId: "1:219739142262:web:52efbfb97bb07c32a94757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const database = getDatabase(app);

console.log("Firebase connected successfully");
