// Import the functions you need from the Firebase SDKs
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getAnalytics, Analytics } from "firebase/analytics";

// Define the Firebase configuration type for better type safety
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

// Your web app's Firebase configuration with proper typing
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyAhYCsGDrIPSnTk0Qxret9finAh4oODJXI",
  authDomain: "informatica-4107e.firebaseapp.com",
  projectId: "informatica-4107e",
  storageBucket: "informatica-4107e.appspot.com",
  messagingSenderId: "240851992652",
  appId: "1:240851992652:web:2f08014aafefaf942034e9",
  measurementId: "G-13MB8PB5N8",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app); // Firebase Authentication
const analytics: Analytics = getAnalytics(app); // Firebase Analytics

export { auth, analytics };

