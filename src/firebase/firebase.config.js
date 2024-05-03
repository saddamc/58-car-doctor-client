 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC0vUlZysWfOgneKQ-y_1kalLbS5rSRiP8",

  authDomain: "cars-doctor-7c7d8.firebaseapp.com",

  projectId: "cars-doctor-7c7d8",

  storageBucket: "cars-doctor-7c7d8.appspot.com",

  messagingSenderId: "908403257615",

  appId: "1:908403257615:web:a9a7b14286357478f9ce7a"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;