import firebase from 'firebase'
import "firebase/auth";
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyCbdHTG2EDwBhnRA3KDyI-bqEFoNRqdWYw",
    authDomain: "react-slack-like.firebaseapp.com",
    projectId: "react-slack-like",
    storageBucket: "react-slack-like.appspot.com",
    messagingSenderId: "237697934323",
    appId: "1:237697934323:web:e01dbae6845bd251be2886",
    measurementId: "G-E8H3RBK0VQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase;