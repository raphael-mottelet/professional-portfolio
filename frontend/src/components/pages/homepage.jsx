// PublicPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './pages-style/homepage.css'
import UserLogin from './login/userlogin'
import CrudHub from './crud-hub';

const Homepage = () => {
    return (
        <div>
            <h1 className='homepage-title'>Welcome to My Website!</h1>
            <p className='homepage-content'>This is the public page where anyone can view information about your website.</p>
            <UserLogin></UserLogin>
            <CrudHub></CrudHub>
        </div>
    );
};

export default Homepage;
