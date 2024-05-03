
import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import LateralPanel from './lateral_panel';
import './pages-style/homepage.css';

import ExperienceCard from './Cards/ExperienceCard';
import EducationCard from './Cards/EducationCard';
import ProjectCard from './Cards/ProjectCard';
import SocialCard from './Cards/SocialLinksCard';
import Footer from './footer/footer';

function Homepage() {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const url = 'http://127.0.0.1:8000/';
  const fetchData = async () => {
    try {
      const experienceResponse = await fetch(url + 'get_experience/experience/list');
      const educationResponse = await fetch(url + 'get_education/education/list');
      const projectsResponse = await fetch(url + 'get_projects/projects/list');
      const socialResponse = await fetch(url + 'get_social-links/social-links/list');

      if (!experienceResponse.ok || !educationResponse.ok || !projectsResponse.ok || !socialResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      setExperiences(await experienceResponse.json());
      setEducation(await educationResponse.json());
      setProjects(await projectsResponse.json());
      setSocial(await socialResponse.json());

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <LateralPanel />
      <div className="content-container">
        <Section title="Homepage" id="homepage" data={experiences} component={ExperienceCard} />
        <Section title="Experience" id="experience" data={experiences} component={ExperienceCard} />
        <Section title="Education" id="education" data={education} component={EducationCard} />
        <Section title="Projects" id="projects" data={projects} component={ProjectCard} />
        <Section title="Social" id="social" data={social} component={SocialCard} />
      </div>
      <Footer />
    </div>
  );
}

const Section = ({ title, id, data, component: CardComponent }) => (
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
