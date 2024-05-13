import React from 'react';
import './pages-style/navbar.css';
import ToggleButton from './buttons/toggle_button/toggleButton';

const Navbar = ({ togglePanel, toggleNavbar, isVisible }) => {
    const navbarClass = `navbar ${isVisible ? 'visible' : 'hiden'}`;

    return (
        <nav className={navbarClass}>
            <div className="logo navbar-item">
                <a href="/">Raphaël Mottelet</a>
            </div>
            <div className="home navbar-item">
                <ToggleButton handleToggle={togglePanel}/>
            </div>
            <div className="search navbar-item">
                <input type="text" placeholder="Search..." />
            </div>
        </nav>
    );
};

export default Navbar;
