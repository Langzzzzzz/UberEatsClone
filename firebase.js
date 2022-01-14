import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "ubereatsclone-XXXXXXXXXX.firebaseapp.com",
    projectId: "ubereatsclone-XXXXXXXXXX",
    storageBucket: "ubereatsclone-XXXXXXXXXX.appspot.com",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXX"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;