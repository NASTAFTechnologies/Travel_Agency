import "./App.css";
import video from "./img/video.mp4"
import manu from "./img/manu-bar.png";
import React from "react";
function App() {
  return (
    <div className="header">
    <header className="App-header">
      <p>Travel</p>
      <nav>
        <a href="/">home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </nav>
      <div className="manu-bar">
        <img  src={manu}></img>
      </div>
    </header>
    <video className="video-hero" src={video} autoPlay loop muted></video>
    </div>
  );
}

export default App;
