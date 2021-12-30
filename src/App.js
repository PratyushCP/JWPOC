import logo from "./logo.svg";
import "./App.css";
import JWPlayer from "./JWPlayer";
import ReactPlayer from "./ReactPlayer.js";
function App() {
  return (
    <div className="App">
      <JWPlayer />
      {/* <ReactPlayer />
      <div id="player"></div> */}
    </div>
  );
}

export default App;
