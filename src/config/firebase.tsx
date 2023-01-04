import firebase from "firebase/compat/app";
import React from "react";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import config from "./config";

const Firebase = firebase.initializeApp(config.firebaseConfig);

export const Providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export const auth = firebase.auth();
export default Firebase;
