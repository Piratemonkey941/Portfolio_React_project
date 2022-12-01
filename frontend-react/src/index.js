import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
// import firebase from 'firebase'

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDj0kw5rJ3_l4HeL4jFCkFLiYWS-FzZlzM",
//   authDomain: "carlosarodriguezportfolio.firebaseapp.com",
//   projectId: "carlosarodriguezportfolio",
//   storageBucket: "carlosarodriguezportfolio.appspot.com",
//   messagingSenderId: "533216228992",
//   appId: "1:533216228992:web:f5038d0fcc926ffeddd865",
//   measurementId: "G-JKWTP5Q7GW"
// };

// firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
