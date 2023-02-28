import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDNQphaHbPk5OHDoPDIx-FLF4hAz7Dg1kQ",
  authDomain: "e-ride-4ec65.firebaseapp.com",
  projectId: "e-ride-4ec65",
  storageBucket: "e-ride-4ec65.appspot.com",
  messagingSenderId: "166915728157",
  appId: "1:166915728157:web:ccfc50ac44fbf7ab7037f4"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
