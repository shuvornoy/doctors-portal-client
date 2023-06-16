// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd5HAuzTLDJqy9_hllKe4FzjzDtqPMuK4",
  authDomain: "doctors-portal-e2363.firebaseapp.com",
  projectId: "doctors-portal-e2363",
  storageBucket: "doctors-portal-e2363.appspot.com",
  messagingSenderId: "702390885935",
  appId: "1:702390885935:web:1f90ea1f59121335f7f0da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;