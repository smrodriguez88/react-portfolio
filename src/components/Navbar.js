import React from "react";

function Navbar() {
  return (
  <header className="container-md mb-5">
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand pl-5" href="index.html">
        <h1>Steve Rodriguez</h1>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end pr-5" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">Home</a>
          <a className="nav-item nav-link" href="portfolio">Portfolio</a>
          <a className="nav-item nav-link" href="contact">Contact</a>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Social
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="https://www.linkedin.com/in/steven-rodriguez-1a418784/" target="_blank"><img src="images/linkedin.svg" width="25px"/>  Linkedin</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="https://www.facebook.com/steve.rodriguez.944023" target="_blank"><img src="images/fb.svg" width="25px"/>  Facebook</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="https://www.instagram.com/pandahpanduh/" target="_blank"><img src="images/instagram.svg" width="25px"/>  Instagram</a>
            </div>
          </li>
        </div>
      </div>
    </nav>
  </header>
);
};

export default Navbar;
