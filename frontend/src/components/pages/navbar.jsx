
import React from 'react';
import './pages-style/navbar.css';  // Make sure the CSS path is correct as per your project structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Logo</a>  {/* Replace 'Logo' with your actual logo image if needed */}
      </div>
      <div className="search">
        <input type="text" placeholder="Search..."/>
      </div>
      <div className="home">
        <a href="/">Home</a>
      </div>
    </nav>
  );
};

export default Navbar;
