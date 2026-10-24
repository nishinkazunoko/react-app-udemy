import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB_0wqs-QpizMS-sOAGlvf4nW61MiwNYXw",
  authDomain: "blog-67a92.firebaseapp.com",
  projectId: "blog-67a92",
  storageBucket: "blog-67a92.firebasestorage.app",
  messagingSenderId: "726435802014",
  appId: "1:726435802014:web:abc14edcd6fbdc0e77848f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider ,db }