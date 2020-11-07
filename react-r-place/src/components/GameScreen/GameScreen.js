import React from "react";
import "./GameScreen.css";
import GameControls from "../GameControls/GameControls";
import GameCanvas from "../GameCanvas/GameCanvas";
import LoginUser from "../LoginUser/LoginUser";
import LogoutUser from "../LogoutUser/LogoutUser";
import { AuthUserContext } from "../Session";

const GameScreen = () => {
  return (
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <div className="game-screen">
            <GameControls />
            <GameCanvas />
            <LogoutUser />
          </div>
        ) : (
          <div className="game-screen">
            <LoginUser />
          </div>
        )
      }
    </AuthUserContext.Consumer>
  );
};

export default GameScreen;
