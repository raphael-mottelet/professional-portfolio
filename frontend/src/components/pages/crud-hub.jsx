import React, { useState } from 'react';
import EducationPage from './crud/education/education-crud';
import ExperiencePage from './crud/experience/experience-crud';
import SocialLinksPage from './crud/social-link/social-links-crud';
import ProjectPage from './crud/projects/project-crud';
import './pages-style/crud-hub-style.css';

function CrudHub() {
  const [selectedCrud, setSelectedCrud] = useState(null);

  const handleSelectChange = event => {
    setSelectedCrud(event.target.value);
  };

  return (
    <div className="crud-hub-container">
      <h1 className="crud-manager-title">crud manager</h1>
      <select value={selectedCrud} onChange={handleSelectChange}>
        <option className="crud-hub-value" value="">Sélectionner un CRUD</option>
        <option className="crud-hub-value" value="presentation">Presentation</option>
        <option className="crud-hub-value" value="education">Education</option>
        <option className="crud-hub-value" value="experience">Experience</option>
        <option className="crud-hub-value" value="sociallinks">Social Links</option>
        <option className="crud-hub-value" value="project">Project</option>
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
