import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcn62aWfjdbWErzSJSCcs6AkzIul475V8",

  authDomain: "disney-plus-92ee8.firebaseapp.com",

  projectId: "disney-plus-92ee8",

  storageBucket: "disney-plus-92ee8.appspot.com",

  messagingSenderId: "984284067120",

  appId: "1:984284067120:web:3e9c327e8dcd025db184f5",

  measurementId: "G-ECXNCMVHQ6",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const storage = getStorage();

export { auth, provider, storage };

export default db;
