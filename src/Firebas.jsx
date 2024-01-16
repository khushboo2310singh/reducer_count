// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmY9R9-9cnRTMBLuoH50INRJYZfdSmGcQ",
  authDomain: "shopper-a0146.firebaseapp.com",
  projectId: "shopper-a0146",
  storageBucket: "shopper-a0146.appspot.com",
  messagingSenderId: "169801651523",
  appId: "1:169801651523:web:b570306ea803e915b2cbf6"
};

// const firebaseApp = getApp();
// const storage = getStorage(firebaseApp, "gs://my-custom-bucket");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;