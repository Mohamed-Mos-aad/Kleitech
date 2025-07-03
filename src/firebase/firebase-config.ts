import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCKwe6--dPydu_z_gB1N-fF9tPhdIrhKG8",
    authDomain: "kleitech-chat.firebaseapp.com",
    databaseURL: "https://kleitech-chat-default-rtdb.firebaseio.com",
    projectId: "kleitech-chat",
    storageBucket: "kleitech-chat.firebasestorage.app",
    messagingSenderId: "254490525208",
    appId: "1:254490525208:web:a00fa3bc0aaf00d6568d6d",
    measurementId: "G-J8X69SGNL7"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);