import firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyB1GOonDZx1WwgT6RFAk1Xi2Q3dwNlK_fw",
  authDomain: "project-58-e608f.firebaseapp.com",
  databaseURL: "https://project-58-e608f-default-rtdb.firebaseio.com",
  projectId: "project-58-e608f",
  storageBucket: "project-58-e608f.appspot.com",
  messagingSenderId: "550851531904",
  appId: "1:550851531904:web:ac8e168d413c9c0620c265"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();