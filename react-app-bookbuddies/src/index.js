import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'font-awesome/css/font-awesome.min.css'
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyB5OCts_rsGHrVIcwhF2myIpDpnGTJ5CLw",
    authDomain: "bookbuddies-197717.firebaseapp.com",
    databaseURL: "https://bookbuddies-197717.firebaseio.com",
    projectId: "bookbuddies-197717",
    storageBucket: "bookbuddies-197717.appspot.com",
    messagingSenderId: "179256487113"
})



ReactDOM.render(<App />, document.getElementById('root'));

