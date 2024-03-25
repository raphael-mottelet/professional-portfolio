import React, { useState } from 'react';
import './pages-style/navbar.css';

const ComplexNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleButtonHover = (hoverState) => {
    setIsButtonHovered(hoverState);
    setIsSidebarOpen(hoverState); // Open sidebar on hover
  };

  return (
    <nav className={`navbar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-header">
          <button
            className="sidebar-toggle"
            onMouseEnter={() => handleButtonHover(true)}
            onMouseLeave={() => handleButtonHover(false)}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <ul className={`navbar-menu ${isButtonHovered ? 'visible' : ''}`}>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">Experience</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/project">Projects</a></li>
          <li><a href="/social">Social</a></li>
        </ul>
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
    </nav>
  );
};

export default ComplexNavbar;
