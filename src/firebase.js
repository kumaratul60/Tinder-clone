import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDIE-q2AFAXRhVnnif6mqIKV6ghnb-_w04",
    authDomain: "tinder-bot-c8dae.firebaseapp.com",
    projectId: "tinder-bot-c8dae",
    storageBucket: "tinder-bot-c8dae.appspot.com",
    messagingSenderId: "231105301540",
    appId: "1:231105301540:web:7eff0a31fdf39d87a11cb1",
    measurementId: "G-F9YVFPEZJX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;