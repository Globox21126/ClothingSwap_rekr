import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBvgz5_t0ub5a2x7cLch-htsMnRkinCyv8",
    authDomain: "itemswap-5c4f6.firebaseapp.com",
    databaseURL: "https://itemswap-5c4f6.firebaseio.com",
    projectId: "itemswap-5c4f6",
    storageBucket: "itemswap-5c4f6.appspot.com",
    messagingSenderId: "23545990382",
    appId: "1:23545990382:web:5b2b24e02073207d83b7ff"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const database = fire.database();

export {database, fire}

