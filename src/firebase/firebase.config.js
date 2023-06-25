// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFS430VQ09nzMd-oX3_lwMy2AVXE1oxVg",
  authDomain: "chef-auth-9264a.firebaseapp.com",
  projectId: "chef-auth-9264a",
  storageBucket: "chef-auth-9264a.appspot.com",
  messagingSenderId: "656307328302",
  appId: "1:656307328302:web:a530cf35c00dcf188b96bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;