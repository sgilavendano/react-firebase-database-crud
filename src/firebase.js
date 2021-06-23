import * as firebase from "firebase";
import "firebase/database";

let config = {
    apiKey: "AIzaSyDwaQgvZwjdkJfw7KOD59MUFzQhsjYq-oU",
    authDomain: "yardsale-42be8.firebaseapp.com",
    databaseURL: "https://yardsale-42be8.firebaseio.com",
    projectId: "yardsale-42be8",
    storageBucket: "yardsale-42be8.appspot.com",
    messagingSenderId: "414562145420",
    appId: "1:414562145420:web :db3f1016a7a5c8fbff97a9",

    //I cant find this anywhereee
    measurementId: "G-XW79NYCRE4",
};

firebase.initializeApp(config);

export default firebase.database();