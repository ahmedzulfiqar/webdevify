import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCa9GE9_oKCOGnKJ6Xrf4ADLdhGsg13SRE",
  authDomain: "webdevify.firebaseapp.com",
  projectId: "webdevify",
  storageBucket: "webdevify.appspot.com",
  messagingSenderId: "388258900107",
  appId: "1:388258900107:web:20c321820ca682e173cc8e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
