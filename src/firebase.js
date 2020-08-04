import firebase from 'firebase';

const config={
    apiKey: "AIzaSyBwnVUs3JqM4rqwFI0O8C1FCKnqqkOziDk",
    authDomain: "expense-tracker-msg.firebaseapp.com",
    databaseURL: "https://expense-tracker-msg.firebaseio.com",
    projectId: "expense-tracker-msg",
    storageBucket: "expense-tracker-msg.appspot.com",
    messagingSenderId: "819464093069",
    appId: "1:819464093069:web:494ee45020bdcdf2d951c4"
}

firebase.initializeApp(config);

export default firebase;