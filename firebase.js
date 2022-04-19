// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFrqmuIEsCCpI16glV9VM48pnoTqgZUW4",
    authDomain: "clone-project-a98c0.firebaseapp.com",
    projectId: "clone-project-a98c0",
    storageBucket: "clone-project-a98c0.appspot.com",
    messagingSenderId: "243318856491",
    appId: "1:243318856491:web:a810e3262f85ad4588436e",
    measurementId: "G-1DMXC06BYK"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };