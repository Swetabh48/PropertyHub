// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertyhub-2a1a5.firebaseapp.com",
  projectId: "propertyhub-2a1a5",
  storageBucket: "propertyhub-2a1a5.appspot.com",
  messagingSenderId: "652540039259",
  appId: "1:652540039259:web:4033462a43af97ca86af7e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);