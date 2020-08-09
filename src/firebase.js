import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBDzI5fmfL1xCeGt7HLkPazfnE4A4YF7l0",
    authDomain: "cookie-land.firebaseapp.com",
    databaseURL: "https://cookie-land.firebaseio.com",
    projectId: "cookie-land",
    storageBucket: "cookie-land.appspot.com",
    messagingSenderId: "703940798474",
    appId: "1:703940798474:web:38c1617345692edd2a17f3",
    measurementId: "G-9JP1WCY53L"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;



