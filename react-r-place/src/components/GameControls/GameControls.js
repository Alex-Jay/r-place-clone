import React from "react";
import "./GameControls.css";

const GameControls = () => (
  <div className="GameControls">
    <label for="x-coord">
      Y:
      <input type="number" min="0" max="50" id="x-coord" />
    </label>
    <br />
    <label for="y-coord">
      X:
      <input type="number" min="0" max="50" id="y-coord" />
    </label>
    <br />
    <label for="color">
      Color:
      <input type="color" id="color" />
    </label>
    <br />
    <button id="submit">Place Color</button>
  </div>
);
export default GameControls;
