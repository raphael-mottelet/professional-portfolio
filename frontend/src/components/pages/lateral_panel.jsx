import React, { useState, useEffect } from 'react';
import './pages-style/lateral_panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBriefcase, faProjectDiagram, faUsers, faBook } from '@fortawesome/free-solid-svg-icons';

const sections = ['presentation','experience', 'education', 'projects', 'social'];

const sectionIcons = {
  presentation: faBook,
  experience: faBriefcase,
  education: faSchool,
  projects: faProjectDiagram,
  social: faUsers,
};

const LateralPanel = ({ isVisible, activeColor }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      sections.forEach(section => {
        const element = document.getElementById(section);
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`lateral-panel ${!isVisible ? 'hidden' : 'visible'}`}>
      {sections.map(section => (
        <button
          key={section}
          className={`panel-item ${activeSection === section ? 'active' : ''}`}
          onClick={() => document.getElementById(section).scrollIntoView()}
        >
          <FontAwesomeIcon icon={sectionIcons[section]} className="icon" />
          {section.charAt(0).toUpperCase() + section.slice(1)}
          {activeSection === section && (
            <span
              className="dot"
              style={{ backgroundColor: activeColor, borderColor: 'black' }}
            ></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default LateralPanel;
