import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Nav, Container, Button } from 'react-bootstrap';

function Navbar() {
  let [ location, setLocation ] = useState(
    {currentPath:window.location.pathname})

  useEffect(() => {
      console.log(location)
      setLocation({currentPath:window.location.pathname})
  },[]);

  return (
  <Container className="container-md mb-5">
    <Nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Link className="navbar-brand pl-5" to="/">
        <h1>Steve Rodriguez</h1>
      </Link>
      <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </Button>
      <div className="collapse navbar-collapse justify-content-end pr-5" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className={
                window.location.pathname === '/' ||
                window.location.pathname === '/about'
                  ? 'nav-item nav-link active'
                  : 'nav-item nav-link'
              } to="/">Home</Link>
          <Link className={
                window.location.pathname === '/portfolio'
                  ? 'nav-item nav-link active'
                  : 'nav-item nav-link'
              } to="/portfolio">Portfolio</Link>
          <Link className={
                window.location.pathname === '/contact'
                  ? 'nav-item nav-link active'
                  : 'nav-item nav-link'
              } to="/contact">Contact</Link>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Social
            </Link>
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
    </Nav>
  </Container>
);
};

export default Navbar;
