import "./App.css";
import "./Responive.css";
// import header from "./js/script";
import Header from "./componets/header";
import Feature from "./componets/feature";
import React from "react";
function App() {
  return (
    <>
      <Header/>
      <header className="flex">
        <div className="container">
          <div className="header-title">
            <h1>
              <span className="font">Explore</span>
              <span className="font-bold"> The Traveling</span>
            </h1>
            <p>Enjoy the best destinations with our travel agency</p>
          </div>

          <div className="header-form">
            <h2>Choose Your Travel Location:</h2>
            <form className="flex">
              <input
                type={"text"}
                className="form-control"
                placeholder="Destination name"></input>
              <input
                type={"date"}
                className="form-control"
                placeholder="Date"></input>
              <input
                type={"number"}
                className="form-control"
                placeholder="Price"></input>
              <input
                type={"submit"}
                className="btn"
                value={"search"}></input>
            </form>
          </div>
        </div>
      </header>
      <Feature />
      <footer>
        <div>
          {/* <video className="video-hero" src={video} autoPlay loop muted></video> */}
          <p>
            lorem sdkldkf skdmld <br /> hello fahad
          </p>
          <p>
            lorem sdkldkf skdmld <br /> hello fahad
          </p>
          <p>
            lorem sdkldkf skdmld <br /> hello fahad
          </p>
        </div>
      </footer>
    </>
  );
}
// header();
export default App;
