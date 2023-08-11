import Firebase from "firebase/compat/app";
import firebaseAuthServices from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const config = {
  // apiKey: "AIzaSyD9bey1ez6gx_2he0MpCL3Dw2GKoaimDt8",
  // authDomain: "instagram-dc39d.firebaseapp.com",
  // projectId: "instagram-dc39d",
  // storageBucket: "instagram-dc39d.appspot.com",
  // messagingSenderId: "81965261261",
  // appId: "1:81965261261:web:0b9c61f0f38340ef232484"
  apiKey: "AIzaSyCX-6EmnT8PCzWymALyxSJA3DF2ECtWOkU",
  authDomain: "intagram-clone-3cfa1.firebaseapp.com",
  databaseURL:
    "https://intagram-clone-3cfa1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "intagram-clone-3cfa1",
  storageBucket: "intagram-clone-3cfa1.appspot.com",
  messagingSenderId: "618137300454",
  appId: "1:618137300454:web:c131f2a6d5e031b34cba27",
  measurementId: "G-1VWVYKYV6F",
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export const storage = firebase.storage();
export { firebase, FieldValue };
