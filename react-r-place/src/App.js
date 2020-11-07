import "./App.css";
import React from "react";
import { withFirebase } from "./components/Firebase";
import GameScreen from "./components/GameScreen/GameScreen";
import { AuthUserContext } from "./components/Session";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      console.log(authUser);

      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <AuthUserContext.Provider value={this.state.authUser}>
            <GameScreen/>
          </AuthUserContext.Provider>
        </div>
      </div>
    );
  }
}

export default withFirebase(App);
