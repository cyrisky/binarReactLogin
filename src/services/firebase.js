// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4VhEe0KPzOWgkfGpx-tjAcy_-6kX9Gak",
  authDomain: "project-binar-52b33.firebaseapp.com",
  projectId: "project-binar-52b33",
  storageBucket: "project-binar-52b33.appspot.com",
  messagingSenderId: "52883237413",
  appId: "1:52883237413:web:565ffeef784c2ac4c3edcc",
  measurementId: "G-W5SCBD8LBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);