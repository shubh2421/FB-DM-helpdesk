import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBBnkidLvN67c9DGD2G64vWEGk3WNek7P0",
  authDomain: "fb-helpdesk-c0d2f.firebaseapp.com",
  projectId: "fb-helpdesk-c0d2f",
  storageBucket: "fb-helpdesk-c0d2f.appspot.com",
  messagingSenderId: "521556139702",
  appId: "1:521556139702:web:e36e85f50da3d2e8a05017"
}).auth()
