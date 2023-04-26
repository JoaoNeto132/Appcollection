//biblioteca do firebase
import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';

let firebaseConfig = {
  apiKey: "AIzaSyD8Limm0nQYPDQ5sa52e1nRByurU7m6R38",
  authDomain: "appboer-fecb9.firebaseapp.com",
  projectId: "appboer-fecb9",
  storageBucket: "appboer-fecb9.appspot.com",
  messagingSenderId: "514502373939",
  appId: "1:514502373939:web:b9750e336613d13ff4e946"
};

if (!firebase.apps.length) {
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    }

 

export default firebase;