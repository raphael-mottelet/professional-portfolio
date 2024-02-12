// PublicPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <h1>Welcome to My Website!</h1>
            <p>This is the public page where anyone can view information about your website.</p>
            <p>If you are an admin, you can <Link to="/login">login here</Link>.</p>
            <p>crud hub link <Link to="/crudhub">login here</Link>.</p>
        </div>
    );
};

export default Homepage;
