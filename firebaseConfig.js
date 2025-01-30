import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAxrtzCKzzZKPQBdPrfIcaoKXWBVNMBoDw",
  authDomain: "segir-f5f19.firebaseapp.com",
  projectId: "segir-f5f19",
  storageBucket: "segir-f5f19.firebasestorage.app",
  messagingSenderId: "315753211152",
  appId: "1:315753211152:web:825394bfa5ce4672bb3195",
  measurementId: "G-GS57NKX9W9",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);