import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyClKNf0yL68gzViLc06WMwK1RA5ipWcwzY",
    authDomain: "pickitpro-25c32.firebaseapp.com",
    projectId: "pickitpro-25c32",
    storageBucket: "pickitpro-25c32.appspot.com",
    messagingSenderId: "345828660922",
    appId: "1:345828660922:web:fee86d07618eb3a7289483",
    measurementId: "G-PY3XDVEQBD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app);