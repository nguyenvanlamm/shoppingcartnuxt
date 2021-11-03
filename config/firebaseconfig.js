import firebase from "firebase/compat";

const config = {
  apiKey: "AIzaSyBtnKtrjWrogW0zjPi9EsDRtzjZ7fl6d6A",
  authDomain: "shoppingcartnux.firebaseapp.com",
  projectId: "shoppingcartnux",
  storageBucket: "shoppingcartnux.appspot.com",
  messagingSenderId: "792629790751",
  appId: "1:792629790751:web:2d92af0afe8f6d3896ad2a",
  measurementId: "G-4RWRRLW9MY"
}

const app = firebase.initializeApp(config)

export default app
