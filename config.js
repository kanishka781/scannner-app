import * as firebase from 'firebase'
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCW_HNbqQc41Ix-BJasDWxhwQWiF8BAB7w",
    authDomain: "willyapp-339d5.firebaseapp.com",
    projectId: "willyapp-339d5",
    storageBucket: "willyapp-339d5.appspot.com",
    messagingSenderId: "432291012793",
    appId: "1:432291012793:web:174e44c2e900fd01a13b68"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore()
 