// CrudHub.jsx

import React, { useState } from 'react';
import EducationPage from './education/education-crud';
import ExperiencePage from './experience/experience-crud';
import SocialLinksPage from './social-link/social-links-crud';
import ProjectPage from './projects/project-crud';
import './pages-style/crud-hub-style.css';

function CrudHub() {
  const [selectedCrud, setSelectedCrud] = useState(null);

  const handleSelectChange = event => {
    setSelectedCrud(event.target.value);
  };

  return (
    <div className="crud-hub">
      <h1 classname="crud-manager-title">CRUD MANAGER</h1>
      <select value={selectedCrud} onChange={handleSelectChange}>
        <option value="">Sélectionner un CRUD</option>
        <option value="education">Education</option>
        <option value="experience">Experience</option>
        <option value="sociallinks">Social Links</option>
        <option value="project">Project</option>
      </select>
      <div className="crud-display">
        {selectedCrud === 'education' && <EducationPage className="crud-content" />}
        {selectedCrud === 'experience' && <ExperiencePage className="crud-content" />}
        {selectedCrud === 'sociallinks' && <SocialLinksPage className="crud-content" />}
        {selectedCrud === 'project' && <ProjectPage className="crud-content" />}
      </div>
    </div>
  );
}

export default CrudHub;
