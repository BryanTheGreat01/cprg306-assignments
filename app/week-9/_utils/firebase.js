
import { initializeApp, getApps, getApp } from "firebase/app";

import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1Cnm585jE-NCo_zfUrP82AzQOO-zozxY",
  authDomain: "cprg306-assignments-34746.firebaseapp.com",
  projectId: "cprg306-assignments-34746",
  storageBucket: "cprg306-assignments-34746.firebasestorage.app",
  messagingSenderId: "580701300201",
  appId: "1:580701300201:web:f5acfcc6a53bfd15f5d778"
};

// Initialize Firebase
const app = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Create GitHub authentication provider
const githubProvider = new GithubAuthProvider();

// GitHub sign-in function
export function gitHubSignIn() {
  return signInWithPopup(auth, githubProvider);
}

// Logout function
export function logOut() {
  return signOut(auth);
}

