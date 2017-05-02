import firebase from 'firebase'

// const config = {
//   apiKey: "AIzaSyDHL6JFTyBcaV60WpE4yXfeO0aZbzA9Xbk",
//   authDomain: "practice-auth.firebaseapp.com",
//   databaseURL: "https://practice-auth.firebaseio.com",
// }

const config = {
    apiKey: "AIzaSyAR1EvjUyRux_a6fUZMzSBVPc6Ktw7FFQs",
    authDomain: "safetymanaged.firebaseapp.com",
    databaseURL: "https://safetymanaged.firebaseio.com",
    projectId: "safetymanaged",
    storageBucket: "safetymanaged.appspot.com",
    messagingSenderId: "310844407970"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth