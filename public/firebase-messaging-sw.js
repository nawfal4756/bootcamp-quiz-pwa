importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyACh1kiSMbOx6CasofKcSBKYhDSc4B08CM",
    authDomain: "bootcamp-quiz-pwa.firebaseapp.com",
    databaseURL: "https://bootcamp-quiz-pwa.firebaseio.com",
    projectId: "bootcamp-quiz-pwa",
    storageBucket: "bootcamp-quiz-pwa.appspot.com",
    messagingSenderId: "639224656473",
    appId: "1:639224656473:web:09ee934b15fd3ee072b748"
});

firebase.messaging();