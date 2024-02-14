import React from 'react';
import './pages-style/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/"></a>
        </div>
        <ul className="navbar-menu">
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">Experience</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/project">Projects</a></li>
          <li><a href="/social">Social</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
