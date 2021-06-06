import firebase from 'firebase';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAtlQI8sx792KyTf7uK302lqmVePbZK31o",
    authDomain: "olx-clone-7fe7d.firebaseapp.com",
    projectId: "olx-clone-7fe7d",
    storageBucket: "olx-clone-7fe7d.appspot.com",
    messagingSenderId: "242945577851",
    appId: "1:242945577851:web:bcb4272887096dd84a63de",
    measurementId: "G-1LKGDPM73G"
  });




  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();



  export {db,auth,storage,firebase}