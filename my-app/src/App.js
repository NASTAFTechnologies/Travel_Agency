import "./App.css";
import "./Responive.css";
import header from './js/script';
import React from "react";
function App() {
  return (
    <>
      <nav className="Navbar">
        <div className="container-flex">
          <a href="/" className="site-brand">Travel<span>Boss</span></a>
          <button type="button" id="navbar-show-btn" className="flex" >
            <i className="fas fa-bars" ></i>
          </button>
          <div id="navbar-collapse" >
            <button type="button" id="navbar-close-btn" className="flex">
              <i className="fas fa-times" ></i>
            </button>
            <ul className="navbar-nav">
              <li className="nav-link" > <a className="nav-item" href="/">Home</a></li>
              <li className="nav-link" > <a className="nav-item" href="/">Place's</a></li>
              <li className="nav-link" > <a className="nav-item" href="/">About</a></li>
              <li className="nav-link" > <a className="nav-item" href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="flex">
        <div className="container" >
          <div className="header-title" >
            <h1><span className="font">Explore</span><span className="font-bold"> The Traveling</span></h1>
            <p>Enjoy the best destinations with our travel agency</p>
          </div>

          <div className="header-form" >
            <h2>Choose Your Travel Location:</h2>
            <form className="flex" >
              <input type={'text'} className="form-control" placeholder="Destination name" ></input>
              <input type={'date'} className="form-control" placeholder="Date" ></input>
              <input type={'number'} className="form-control" placeholder="Price" ></input>
              <input type={'submit'} className="btn" value={'search'} ></input>
            </form>
          </div>
        </div>
      {/* <video className="video-hero" src={video} autoPlay loop muted></video> */}
      </header>
    </>
  );
}
header()
export default App;
