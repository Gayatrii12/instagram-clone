import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuUsu8EF2kqtFc-jgY-wkCvSFZ2Piyfp0",
  authDomain: "instagram-clone-3d432.firebaseapp.com",
  projectId: "instagram-clone-3d432",
  storageBucket: "instagram-clone-3d432.appspot.com",
  messagingSenderId: "740123758462",
  appId: "1:740123758462:web:c8f51cf873660e593eed2f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
