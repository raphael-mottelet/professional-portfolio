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
    <div className="crud-hub-container">
      <h1 classname="crud-manager-title">crud manager</h1>
      <select value={selectedCrud} onChange={handleSelectChange}>
        <option classname="crud-hub-value" value="">Sélectionner un CRUD</option>
        <option classname="crud-hub-value" value="education">Education</option>
        <option classname="crud-hub-value" value="experience">Experience</option>
        <option classname="crud-hub-value" value="sociallinks">Social Links</option>
        <option classname="crud-hub-value" value="project">Project</option>
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
