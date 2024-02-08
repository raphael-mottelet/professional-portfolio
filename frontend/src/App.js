import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrudHub from './components/pages/crud-hub';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CrudHub />} />
      </Routes>
    </Router>
  );
}

export default App;
