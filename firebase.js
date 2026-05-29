import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDp33VJKZSPDYwU5OY_Nzq-fnAck50-bDA",
    authDomain: "qeja-com.firebaseapp.com",
    databaseURL: "https://qeja-com-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "qeja-com",
    storageBucket: "qeja-com.firebasestorage.app",
    messagingSenderId: "219739142262",
    appId: "1:219739142262:web:52efbfb97bb07c32a94757"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

console.log("Firebase connected successfully");
