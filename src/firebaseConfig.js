// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk1idWiPYjYGRJusL_FJNchYKnckOwiW4",
  authDomain: "ecommerce-coder-38bfb.firebaseapp.com",
  projectId: "ecommerce-coder-38bfb",
  storageBucket: "ecommerce-coder-38bfb.appspot.com",
  messagingSenderId: "280783306574",
  appId: "1:280783306574:web:9358d424a5c841b52ce81f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app)

export default db