import * as firebase from 'firebase';

export default const firebaseConfig = {
    apiKey: "AIzaSyAJM1dsmCOWdayRc4ohxQoNCkrlBhSECsg",
    authDomain: "coffeeshops-database.firebaseapp.com",
    databaseURL: "https://coffeeshops-database.firebaseio.com",
    projectId: "coffeeshops-database",
    storageBucket: "coffeeshops-database.appspot.com",
    messagingSenderId: "430651409692",
    appId: "1:430651409692:web:8c312867b62e60ddca26d9",
    measurementId: "G-3K8HH1YBYF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();