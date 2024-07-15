import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import LateralPanel from './lateral_panel';
import './pages-style/homepage.css';

import ExperienceCard from './Cards/ExperienceCard';
import PresentationCard from './Cards/PresentationCard';
import EducationCard from './Cards/EducationCard';
import ProjectCard from './Cards/ProjectCard';
import SocialCard from './Cards/SocialLinksCard';
import Footer from './footer';

const sectionColors = {
  presentation: '#80c77a',
  experience: '#80c77a',
  formation: '#00d49e',
  projets: '#b8a9c9',
  social: '#f6e58d'
};

function Homepage() {
  const apiUrl = process.env.REACT_APP_API_URL
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [social, setSocial] = useState([]);
  const [presentation, setPresentation] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState(sectionColors['presentation']);
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
      const presentationResponse = await fetch(`${apiUrl}/get_presentation/presentation/list`, { redirect: 'follow' });
      const experienceResponse = await fetch(`${apiUrl}/get_experience/experience/list`, { redirect: 'follow' });
      const educationResponse = await fetch(`${apiUrl}/get_education/education/list`, { redirect: 'follow' });
      const projectsResponse = await fetch(`${apiUrl}/get_projects/projects/list`, { redirect: 'follow' });
      const socialResponse = await fetch(`${apiUrl}/get_social-links/social-links/list`, { redirect: 'follow' });

      if (!presentationResponse.ok || !experienceResponse.ok || !educationResponse.ok || !projectsResponse.ok || !socialResponse.ok) {
        throw new Error('Error fetching data');
      }

      setPresentation(await presentationResponse.json() || []);
      setExperiences(await experienceResponse.json() || []);
      setEducation(await educationResponse.json() || []);
      setProjects(await projectsResponse.json() || []);
      setSocial(await socialResponse.json() || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setPresentation([]);
      setExperiences([]);
      setEducation([]);
      setProjects([]);
      setSocial([]);
    }
  };


  const handleScroll = () => {
    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section, index) => {
      if (section) {
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
        <Section title="Mon expérience" id="experience" data={experiences} component={ExperienceCard} />
        <Section title="Formation" id="formation" data={education} component={EducationCard} />
        <Section title="Mes projets" id="projets" data={projects} component={ProjectCard} />
        <Section title="Réseaux sociaux" id="social" data={social} component={SocialCard} />
      </div>
      <Footer togglePanel={handleTogglePanel} isVisible={panelVisible} />
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
