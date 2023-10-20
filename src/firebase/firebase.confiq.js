// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdJqVUe0_5obdRPjY0uTAVNXwmZU0N63M",
  authDomain: "brand-client-auth.firebaseapp.com",
  projectId: "brand-client-auth",
  storageBucket: "brand-client-auth.appspot.com",
  messagingSenderId: "268841477873",
  appId: "1:268841477873:web:859442411f8ceb69d26b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;