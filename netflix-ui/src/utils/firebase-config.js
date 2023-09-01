import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDBI5JGVobp2PVcjz8ml5rbuyNrKsjFbE",
  authDomain: "react-netflix-clone-ad399.firebaseapp.com",
  projectId: "react-netflix-clone-ad399",
  storageBucket: "react-netflix-clone-ad399.appspot.com",
  messagingSenderId: "15627635612",
  appId: "1:15627635612:web:48164a6b84601212799659",
  measurementId: "G-VZMQ1F2CJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);