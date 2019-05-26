import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import  flamelink from 'flamelink/app'
import 'flamelink/content'
import 'flamelink/storage'


var firebaseConfig = {
  apiKey: "AIzaSyC3kSZIclw1YrzZ1nVSrxq6myIBjQY-14A",
  authDomain: "kajave-furniture.firebaseapp.com",
  databaseURL: "https://kajave-furniture.firebaseio.com",
  projectId: "kajave-furniture",
  storageBucket: "kajave-furniture.appspot.com",
  messagingSenderId: "390556271795",
  appId: "1:390556271795:web:a6d3f436159490e4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)


const app = flamelink({
  firebaseApp, // required
  dbType: 'cf', // can be either 'rtdb' or 'cf' for Realtime DB or Cloud Firestore
  env: 'production', // optional, default shown
  locale: 'en-US', // optional, default shown
  precache: true // optional, default shown. Currently it only precaches "schemas" for better performance
})

export default  app;