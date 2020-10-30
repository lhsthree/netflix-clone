import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalStyles } from './global-styles'
import { App } from './App';
import { FirebaseContext } from './context/firebase';
import reportWebVitals from './reportWebVitals';

const config = {
	apiKey: "AIzaSyAyrZezgKOCrv6ar3YFAAa2iruYs4H7mXM",
    authDomain: "netlix-clone-lhsthree.firebaseapp.com",
    databaseURL: "https://netlix-clone-lhsthree.firebaseio.com",
    projectId: "netlix-clone-lhsthree",
    storageBucket: "netlix-clone-lhsthree.appspot.com",
    messagingSenderId: "838534815285",
    appId: "1:838534815285:web:b21ce646390dc1aa865b7c"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
  <FirebaseContext.Provider value={{ firebase: window.firebase }}>
  <GlobalStyles />
    <App />
  </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
