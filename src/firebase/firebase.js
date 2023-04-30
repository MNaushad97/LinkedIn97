//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl2q1edV83m4s8uRtguniCWfdAI21crc4",
  authDomain: "linkedin-97.firebaseapp.com",
  projectId: "linkedin-97",
  storageBucket: "linkedin-97.appspot.com",
  messagingSenderId: "260336446406",
  appId: "1:260336446406:web:1b6098536130fcc4a860c7",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
