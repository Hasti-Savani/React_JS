import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbzjv1okg7pPQcHMN7dF6SDI_v9w43234",
  authDomain: "project-c4d3b.firebaseapp.com",
  projectId: "project-c4d3b",
  storageBucket: "project-c4d3b.firebasestorage.app",
  messagingSenderId: "755414856284",
  appId: "1:755414856284:web:c9507305176492c91fec99",
  measurementId: "G-H1LM6W798B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);