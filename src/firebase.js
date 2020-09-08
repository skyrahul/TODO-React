// const firebaseConfig = {
//     apiKey: "AIzaSyBdVjTCOwUqEJEKqKq0JeetPzO7-OuFHo8",
//     authDomain: "todo-1ed86.firebaseapp.com",
//     databaseURL: "https://todo-1ed86.firebaseio.com",
//     projectId: "todo-1ed86",
//     storageBucket: "todo-1ed86.appspot.com",
//     messagingSenderId: "238095925361",
//     appId: "1:238095925361:web:577d61e9a31d6f895b9bd0",
//     measurementId: "G-V0Q03ZVPKD"
//   };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdVjTCOwUqEJEKqKq0JeetPzO7-OuFHo8",
    authDomain: "todo-1ed86.firebaseapp.com",
    databaseURL: "https://todo-1ed86.firebaseio.com",
    projectId: "todo-1ed86",
    storageBucket: "todo-1ed86.appspot.com",
    messagingSenderId: "238095925361",
    appId: "1:238095925361:web:577d61e9a31d6f895b9bd0",
    measurementId: "G-V0Q03ZVPKD"
})

const db = firebaseApp.firestore();

export {db}