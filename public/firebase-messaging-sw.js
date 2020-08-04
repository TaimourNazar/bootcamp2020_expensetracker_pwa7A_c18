importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyBwnVUs3JqM4rqwFI0O8C1FCKnqqkOziDk",
    authDomain: "expense-tracker-msg.firebaseapp.com",
    databaseURL: "https://expense-tracker-msg.firebaseio.com",
    projectId: "expense-tracker-msg",
    storageBucket: "expense-tracker-msg.appspot.com",
    messagingSenderId: "819464093069",
    appId: "1:819464093069:web:494ee45020bdcdf2d951c4"
})

firebase.messaging();