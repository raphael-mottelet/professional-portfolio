import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrudHub from './components/pages/crud-hub';
import Login from './components/pages/login/userlogin'
import HomePage from './components/pages/homepage'
import Education from './components/pages/Cards/EducationCard'
import Experience from './components/pages/Cards/ExperienceCard'
import Social from './components/pages/Cards/SocialLinksCard'
import Project from './components/pages/Cards/ProjectCard'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/crudhub" element={<CrudHub />} />

        <Route exact path="/education" element={<Education />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/projects" element={<Project />} />
        <Route exact path="/social" element={<Social />} />
      </Routes>
    </Router>
  );
}

export default App;
