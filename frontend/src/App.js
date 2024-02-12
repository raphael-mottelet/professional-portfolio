import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrudHub from './components/pages/crud-hub';
import Login from './components/pages/login/userlogin'
import HomePage from './components/pages/homepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/crudhub" element={<CrudHub />} />
      </Routes>
    </Router>
  );
}

export default App;
