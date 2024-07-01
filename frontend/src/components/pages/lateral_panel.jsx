import React, { useState, useEffect } from 'react';
import './pages-style/lateral_panel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBriefcase, faProjectDiagram, faUsers, faBook, faRobot } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const sections = ['presentation', 'experience', 'formation', 'projets', 'social'];

const sectionIcons = {
  presentation: faBook,
  experience: faBriefcase,
  formation: faSchool,
  projets: faProjectDiagram,
  social: faUsers,
};

const LateralPanel = ({ isVisible, activeColor }) => {
  const [activeSection, setActiveSection] = useState('');
  const [visibleText, setVisibleText] = useState(null);
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

  const toggleTextVisibility = (index) => {
    setVisibleText(visibleText === index ? null : index);
  };

  return (
    <div className={`lateral-panel ${!isVisible ? 'hidden' : 'visible'}`}>
      <div className={`panel-item-container ${!isVisible ? 'hidden' : 'visible'}`}>
      {sections.map((section, index) => (
        <Link key={section} to={`/${section === 'presentation' ? '' : `#${section}`}`}>
          <button
            className={`panel-item ${activeSection === section ? 'active' : ''}`}
            onClick={() => {
              if (location.pathname !== '/') {
                window.location.href = `/#${section}`;
              } else {
                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
              }
              toggleTextVisibility(index);
            }}
          >
            <FontAwesomeIcon icon={sectionIcons[section]} className="icon" />
            <span className={`text ${visibleText === index ? 'visible' : 'hidden'}`}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
            {activeSection === section && (
              <span className="dot"></span>
            )}
          </button>
        </Link>
      ))}
      <Link to="/agent">
        <button className="panel-item agent" onClick={() => toggleTextVisibility(sections.length)}>
          <FontAwesomeIcon icon={faRobot} className="icon" />
          <span className={`text ${visibleText === sections.length ? 'visible' : 'hidden'}`}>Agent</span>
        </button>
      </Link>
      </div>
    </div>
  );
};

export default LateralPanel;
