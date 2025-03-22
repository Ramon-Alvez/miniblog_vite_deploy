import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDK317ncdeMTbQSxP6Cc492L1WyGVYNrrM",
  authDomain: "miniblog-552fa.firebaseapp.com",
  projectId: "miniblog-552fa",
  storageBucket: "miniblog-552fa.firebasestorage.app",
  messagingSenderId: "964504771565",
  appId: "1:964504771565:web:bac104b0363c2ff3d025e4",
  measurementId: "G-DSR04MVTTR",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
