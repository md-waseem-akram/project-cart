import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyANgnskjq471VsjSwBuoL9dcw36S23GqpI",
  authDomain: "cart-9a9b3.firebaseapp.com",
  projectId: "cart-9a9b3",
  storageBucket: "cart-9a9b3.appspot.com",
  messagingSenderId: "249307652721",
  appId: "1:249307652721:web:2986dd4110e547519af1d0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
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

