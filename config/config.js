import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZvsXvTkscxH2dWInqPlPRh_6YVCmWjn0",
  authDomain: "myfirstproject-950f0.firebaseapp.com",
  databaseURL: "https://myfirstproject-950f0.firebaseio.com",
  projectId: "myfirstproject-950f0",
  storageBucket: "myfirstproject-950f0.appspot.com",
  messagingSenderId: "542190601512",
  appId: "1:542190601512:web:c8b808b9e39562c6",
};

firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
