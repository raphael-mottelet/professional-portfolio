import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import LateralPanel from './lateral_panel';
import './pages-style/homepage.css';

import ExperienceCard from './Cards/ExperienceCard';
import PresentationCard from './Cards/PresentationCard'; // Updated import
import EducationCard from './Cards/EducationCard'; // Retained import
import ProjectCard from './Cards/ProjectCard';
import SocialCard from './Cards/SocialLinksCard';
import Footer from './footer';

const sectionColors = {
  presentation: '#333333', // Dark gray
  experience: '#333333', // Same as presentation, consider differentiating if needed
  education: '#00d49e', // Light green
  projects: '#b8a9c9', // Lavender
  social: '#ffcf5a'    // Light orange
};

function Homepage() {
  const url = 'http://127.0.0.1:8000/';
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [social, setSocial] = useState([]);
  const [presentation, setPresentation] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState(sectionColors['presentation']); // Corrected to use a valid key
  const [panelVisible, setPanelVisible] = useState(true);

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchData = async () => {
    try {
      const presentationResponse = await fetch(url + 'get_presentation/presentation/list');
      const experienceResponse = await fetch(url + 'get_experience/experience/list');
      const educationResponse = await fetch(url + 'get_education/education/list');
      const projectsResponse = await fetch(url + 'get_projects/projects/list');
      const socialResponse = await fetch(url + 'get_social-links/social-links/list');

      setPresentation(await presentationResponse.json() || []);
      setExperiences(await experienceResponse.json() || []);
      setEducation(await educationResponse.json() || []);
      setProjects(await projectsResponse.json() || []);
      setSocial(await socialResponse.json() || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setExperiences([]);
      setEducation([]);
      setProjects([]);
      setSocial([]);
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const cards = section.querySelectorAll('.card');
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setBackgroundColor(interpolateColors(sectionColors[section.id], sectionColors[sections[index + 1] ? sections[index + 1].id : section.id], Math.max(0, window.innerHeight - rect.top) / (rect.bottom - rect.top)));
        cards.forEach(card => {
          card.classList.remove('fade-out');
          card.classList.add('fade-in');
        });
      } else {
        cards.forEach(card => {
          card.classList.remove('fade-in');
          card.classList.add('fade-out');
        });
      }
    });
  };

  const interpolateColors = (color1, color2, factor) => {
    const result = color1.slice(1).match(/.{2}/g)
      .map((hex, i) => parseInt(hex, 16))
      .map((val, i) => Math.round(val + factor * (parseInt(color2.slice(1).match(/.{2}/g)[i], 16) - val)));
    return `#${result.map(v => v.toString(16).padStart(2, '0')).join('')}`;
  };

  const handleTogglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <div className="homepage-container" style={{ backgroundColor }}>
      <Navbar togglePanel={handleTogglePanel} isVisible={panelVisible} />
      <LateralPanel isVisible={panelVisible} />
      <div className={`content-container ${panelVisible ? '' : 'shift-left'}`}>
        <Section title='' id="presentation" data={presentation} component={PresentationCard} />
        <Section title="My experience" id="experience" data={experiences} component={ExperienceCard} />
        <Section title="Education" id="education" data={education} component={EducationCard} />
        <Section title="My projects" id="projects" data={projects} component={ProjectCard} />
        <Section title="Social media" id="social" data={social} component={SocialCard} />
      </div>
      <Footer togglePanel={handleTogglePanel} isVisible={panelVisible}/>
    </div>
  );
}

const Section = ({ title, id, data = [], component: CardComponent }) => (
  <div className="section-container" id={id}>
    <h1>{title}</h1>
    <div className="card-container">
      {data.map(item => (
        <CardComponent key={item.id} data={item} />
      ))}
    </div>
  </div>
);

export default Homepage;
