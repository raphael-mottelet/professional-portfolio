import React, { useState, useEffect } from 'react';
import './pages-style/lateral_panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBriefcase, faProjectDiagram, faUsers, faBook, faRobot } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const sections = ['presentation', 'experience', 'education', 'projects', 'social'];

const sectionIcons = {
  presentation: faBook,
  experience: faBriefcase,
  education: faSchool,
  projects: faProjectDiagram,
  social: faUsers,
};

const LateralPanel = ({ isVisible, activeColor }) => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location]);

  return (
    <div className={`lateral-panel ${!isVisible ? 'hidden' : 'visible'}`}>
      <div className='panel-item-container'>
      {sections.map(section => (
        <Link key={section} to={`/${section === 'presentation' ? '' : `#${section}`}`}>
          <button
            className={`panel-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => {
              if (location.pathname !== '/') {
                window.location.href = `/#${section}`;
              } else {
                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <FontAwesomeIcon icon={sectionIcons[section]} className="icon" />
            {section.charAt(0).toUpperCase() + section.slice(1)}
            {activeSection === section && (
              <span
                className="dot"
              ></span>
            )}
          </button>
        </Link>
      ))}
      <Link to="/agent">
        <button className="panel-item agent">
          <FontAwesomeIcon icon={faRobot} className="icon" />
          Agent
        </button>
      </Link>
      </div>
    </div>
  );
};

export default LateralPanel;
