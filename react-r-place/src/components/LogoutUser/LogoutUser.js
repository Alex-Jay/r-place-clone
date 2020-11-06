import React from 'react';
import './LogoutUser.css';
import { Button } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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

const LogoutUser = () => (
  <div className="LogoutUser">
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        <ExitToAppIcon />&nbsp;Logout
      </Button>
    </ThemeProvider>
  </div>
);

export default LogoutUser;
