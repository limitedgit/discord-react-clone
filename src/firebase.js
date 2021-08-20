import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCpIi3ghSVhWLuGm5AjlQXnVfMs2cMczXA",
    authDomain: "discord-clone-8baab.firebaseapp.com",
    projectId: "discord-clone-8baab",
    storageBucket: "discord-clone-8baab.appspot.com",
    messagingSenderId: "227497075308",
    appId: "1:227497075308:web:a0cc93bc80744a057aae49",
    measurementId: "G-VR1Y4PHT9T"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig)
const firestore = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default firestore;