import firebase from "firebase";
import "fibase/storage" 

var firebaseConfig = {
    apiKey: "AIzaSyAeDZ5nQwB7TyjrUZ7rLy0mk2A58l_uyCs",
    authDomain: "task-82b77.firebaseapp.com",
    projectId: "task-82b77",
    storageBucket: "task-82b77.appspot.com",
    messagingSenderId: "142977694964",
    appId: "1:142977694964:web:b518f4ecb152139379b2a1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database;