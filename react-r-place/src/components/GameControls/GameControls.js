import React from "react";
import "./GameControls.css";
import { withFirebase } from '../Firebase';
import Input from "@material-ui/core/Input";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
    },
  },
});

const GameControls = ({firebase}) => (
  <div className="GameControls">
    <Input
      placeholder="X coordinate"
      id="x-coord"
      type="number"
      min="0"
      max="50"
    />
    <br />
    <Input
      placeholder="Y coordinate"
      id="y-coord"
      type="number"
      min="0"
      max="50"
    />
    <br />
    <label for="color">
      Color:
      <input type="color" id="color" />
    </label>
    <br />
    <Button
      onClick={}
      variant="contained"
      color="primary"
    >
      Place Color
    </Button>
  </div>
);
export default withFirebase(GameControls);
