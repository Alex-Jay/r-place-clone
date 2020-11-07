import React from "react";
import { withFirebase } from '../Firebase';
import "./GoogleAuthButton.css";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

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

const GoogleAuthButton = ({firebase}) => {
  return (
    <div className="GoogleAuthButton">
      <ThemeProvider theme={theme}>
        <Button onClick={firebase.doSignInWithGoogleProvider} variant="contained" color="primary">
          <VpnKeyIcon />
          &nbsp;Login with Google
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default withFirebase(GoogleAuthButton);
