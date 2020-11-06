import React, { useEffect } from "react";
import "./GameScreen.css";
import GameControls from "../GameControls/GameControls";
import GameCanvas from "../GameCanvas/GameCanvas";
import LogoutUser from "../LogoutUser/LogoutUser";

import firebase from "firebase";

const auth = firebase.auth();

var firebaseConfig = {
  apiKey: "AIzaSyDQrDnVBQanwDVDLeSBGx5UF21ZrM1iMmk",
  authDomain: "r-place-clone-797b8.firebaseapp.com",
  databaseURL: "https://r-place-clone-797b8.firebaseio.com",
  projectId: "r-place-clone-797b8",
  storageBucket: "r-place-clone-797b8.appspot.com",
  messagingSenderId: "110127680560",
  appId: "1:110127680560:web:af5aa4c49595eda51cf1f5",
  measurementId: "G-9QPL38ZPHV",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var colorsRef = firebase.database().ref;

function GameScreen() {
  useEffect(() => {
    // Update the document title using the browser API
    //
  });

  return (
    <div className="GameScreen">
      <GameControls />
      <GameCanvas />
      <LogoutUser />
    </div>
  );
}

export default GameScreen;
