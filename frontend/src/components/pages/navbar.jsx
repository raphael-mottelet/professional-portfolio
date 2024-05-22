import './pages-style/navbar.css';
import ToggleButton from './buttons/toggle_button/toggleButton';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ togglePanel, isVisible }) => {
    const navbarClass = `navbar ${isVisible ? 'visible' : 'hidden'}`;

    return (
        <nav className={navbarClass}>
            <div className="logo navbar-item">
                <a href="/">HOME</a>
            </div>
            <div className="home navbar-item">
                <ToggleButton handleToggle={togglePanel} />
            </div>
            <div className="search navbar-item">
                <input type="text" placeholder="coming soon..." />
            </div>
        </nav>
    );
};

export default Navbar;
