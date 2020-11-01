import firebase from 'firebase';
import "firebase/auth";
import "firebase/storage";
import 'firebase/firestore';


const config ={
  apiKey: "AIzaSyB4MqJ7aXVwlM8Lh6OAmLSWloOp7Gef48k",
  authDomain: "original-image-273c8.firebaseapp.com",
  databaseURL: "https://original-image-273c8.firebaseio.com",
  projectId: "original-image-273c8",
  storageBucket: "original-image-273c8.appspot.com",
  messagingSenderId: "1012864973815",
  appId: "1:1012864973815:web:f325934fce0435ab1c0cf2",
  measurementId: "G-YKRL8N3L3L"
};
export default {
  init() {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  },
};
firebase.getCurrentUser = () =>{
  return new Promise((resolve,reject)=>{
    const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      unsubscribe()
      resolve(user);
    },reject);
  });
}
;
firebase.initializeApp(config);

export const fb = firebase

export const db = firebase.firestore()

export const auth = firebase.auth()

export const storage = firebase.storage().ref()
