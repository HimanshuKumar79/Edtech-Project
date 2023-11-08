import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChHQVfGx5Mh9TvMNBJ-8Z6eLy6FMKUKHI",
  authDomain: "edtechassignment-1a8a7.firebaseapp.com",
  projectId: "edtechassignment-1a8a7",
  storageBucket: "edtechassignment-1a8a7.appspot.com",
  messagingSenderId: "588589482199",
  appId: "1:588589482199:web:6ca809e6edb1bec835f092",
  measurementId: "G-HHDSNG7D8Z",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
