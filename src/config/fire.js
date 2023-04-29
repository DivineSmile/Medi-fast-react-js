import firebase from 'firebase';


  const firebaseConfig = {
    apiKey: "AIzaSyBkjgmUm-XicmAh7zM8DWNAe3OekM5KZEs",
    authDomain: "medi-fast-e3edc.firebaseapp.com",
    projectId: "medi-fast-e3edc",
    storageBucket: "medi-fast-e3edc.appspot.com",
    messagingSenderId: "891596046125",
    appId: "1:891596046125:web:ab777b80f4ec5554719da4",
    measurementId: "G-772LNBD8F1"
  };

  const fire  = firebase.initializeApp(firebaseConfig)

  
  export default fire
  