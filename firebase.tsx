// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8hj9ZODCcvbBsDPxknRiAmcP4zFZgBvo",
  authDomain: "loginapp-6447a.firebaseapp.com",
  projectId: "loginapp-6447a",
  storageBucket: "loginapp-6447a.appspot.com",
  messagingSenderId: "849150971302",
  appId: "1:849150971302:web:b5042d823c23c5f1ee9367",
};

const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);

export { auth };
