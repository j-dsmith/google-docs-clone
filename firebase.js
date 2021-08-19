import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7nCJWXnWGqyRh6EnCDLGSShrjpVDMcmg",
  authDomain: "docs-clone-53f73.firebaseapp.com",
  projectId: "docs-clone-53f73",
  storageBucket: "docs-clone-53f73.appspot.com",
  messagingSenderId: "1087707118831",
  appId: "1:1087707118831:web:ab491857f1d90db7bb6f1a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
