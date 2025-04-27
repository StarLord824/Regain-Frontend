import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBRFvvtVSAytHOveRHGE3ZOOdfvA-aUfmg",
  authDomain: "regain-c6d55.firebaseapp.com",
  projectId: "regain-c6d55",
  storageBucket: "regain-c6d55.firebasestorage.app",
  messagingSenderId: "526016777193",
  appId: "1:526016777193:web:974f2f75c5aae6754e9978",
  measurementId: "G-3VHWXF86GK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);




export { auth, db, analytics };