import React, { useState, useEffect } from 'react';
import './pages-style/lateral_panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBriefcase, faProjectDiagram, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons

const sections = ['experience', 'education', 'projects', 'social'];

const sectionIcons = {
  homepage: faBriefcase,
  experience: faBriefcase,
  education: faSchool,
  projects: faProjectDiagram,
  social: faUsers,
};

const LateralPanel = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      sections.forEach(section => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.top >= 0) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="lateral-panel">
      {sections.map(section => (
        <button
          key={section}
          className={`panel-item ${activeSection === section ? 'active' : ''}`}
          onClick={() => document.getElementById(section).scrollIntoView()}
        >
          <FontAwesomeIcon icon={sectionIcons[section]} className="icon" /> {/* Use Font Awesome icon */}
          {section.charAt(0).toUpperCase() + section.slice(1)}
          {activeSection === section && <span className="dot"></span>}
        </button>
      ))}
    </div>
  );
};

export default LateralPanel;
