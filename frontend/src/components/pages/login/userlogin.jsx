import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ setLoggedIn }) => {
    const url = 'http://127.0.0.1:8000/';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url + 'login/', {
                username: username,
                password: password
            });
            const { access_token } = response.data;
            localStorage.setItem('access_token', access_token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`; // Set token in headers
            setLoggedIn(true);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (token) {
            // Check if token is still valid (optional)
            setLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setLoggedIn(false);
    };

    return (
        <div>
            {loggedIn ? (
                <div>
                    <h2>Welcome User!</h2>
                    <button onClick={handleLogout}>Logout</button>
                    {/* Add your protected routes or components here */}
                </div>
            ) : (
                <Login setLoggedIn={setLoggedIn} />
            )}
        </div>
    );
};

export default App;
