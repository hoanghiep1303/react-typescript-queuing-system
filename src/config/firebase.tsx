// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyD1slIUyadX7nWNDfKB3IrnTPQsnqmdmBc",
//   authDomain: "alta-project-17ceb.firebaseapp.com",
//   projectId: "alta-project-17ceb",
//   storageBucket: "alta-project-17ceb.appspot.com",
//   messagingSenderId: "237992083835",
//   appId: "1:237992083835:web:6e9f62c261cdb17283bdde",
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { config } from "./config";

const Firebase = firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore(Firebase);
export default Firebase;
