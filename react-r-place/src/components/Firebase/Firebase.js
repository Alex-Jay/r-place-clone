import React from "react";
import "./Firebase.css";
import app from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQrDnVBQanwDVDLeSBGx5UF21ZrM1iMmk",
  authDomain: "r-place-clone-797b8.firebaseapp.com",
  databaseURL: "https://r-place-clone-797b8.firebaseio.com",
  projectId: "r-place-clone-797b8",
  storageBucket: "r-place-clone-797b8.appspot.com",
  messagingSenderId: "110127680560",
  appId: "1:110127680560:web:af5aa4c49595eda51cf1f5",
  measurementId: "G-9QPL38ZPHV",
};

class Firebase extends React.Component {
  constructor() {
    super();
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.user = {};
  }
  
  doSignInWithGoogleProvider = () => {
    const provider = new app.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider)
      .then(data => {
        this.user = {
          token: data.credential.accessToken,
          user: data.user,
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  doSignOut = () => {
    this.auth.signOut();
  };
};

export default Firebase;
