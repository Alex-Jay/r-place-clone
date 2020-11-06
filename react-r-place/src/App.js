import "./App.css";
import LoginUser from "./components/LoginUser/LoginUser";
import GameScreen from "./components/GameScreen/GameScreen";

function App() {
  return (
    <div className="App">
      <div class="App-Wrapper">
        <LoginUser />
        <GameScreen />
      </div>
    </div>
  );
}

export default App;
