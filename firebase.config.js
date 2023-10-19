// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPt33-E0Zpfjrzv_PWHi88TSSqsM5YowE",
  authDomain: "tech-elec-shop.firebaseapp.com",
  projectId: "tech-elec-shop",
  storageBucket: "tech-elec-shop.appspot.com",
  messagingSenderId: "810440631219",
  appId: "1:810440631219:web:03ba7b872aa2a8ba7461c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;