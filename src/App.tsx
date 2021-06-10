import React from "react";
import "./App.css";
import logo from "@assets/images/logo.svg";
import Video from "@assets/videos/video_data_green.mp4";

function App() {
  return (
    <div className="App-Container">
      <div className="App-Background">
        <video className="Video-Background" autoPlay loop muted src={Video} />
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
