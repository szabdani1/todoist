import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA3Bl9d4kg-6cYE3_W9Z2-FsZZ4LEyoWsc",
    authDomain: "todoist-8f434.firebaseapp.com",
    databaseURL: "https://todoist-8f434.firebaseio.com",
    projectId: "todoist-8f434",
    storageBucket: "todoist-8f434.appspot.com",
    messagingSenderId: "871246003680",
    appId: "1:871246003680:web:7423db454ce0713b153f85"
});

export {firebaseConfig as firebase};