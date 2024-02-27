import React, { useEffect, useState } from 'react';

import Navbar from './navbar';
import './pages-style/homepage.css';

import ExperienceCard from './Cards/ExperienceCard';
import EducationCard from './Cards/EducationCard';
import ProjectCard from './Cards/ProjectCard';
import SocialCard from './Cards/SocialLinksCard';
import Footer from './footer/footer'

function Homepage() {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const url = 'http://127.0.0.1:8000/'
  const fetchData = async () => {
    try {
      const experienceResponse = await fetch(url + 'get_experience/experience/list');
      const educationResponse = await fetch(url + 'get_education/education/list');
      const projectsResponse = await fetch(url + 'get_projects/projects/list');
      const socialResponse = await fetch(url + 'get_social-links/social-links/list');

      if (!experienceResponse.ok || !educationResponse.ok || !projectsResponse.ok || !socialResponse.ok) {
        throw new Error('Failed to fetch data');
      }
      const experienceData = await experienceResponse.json();
      const educationData = await educationResponse.json();
      const projectsData = await projectsResponse.json();
      const socialData = await socialResponse.json();

      setExperiences(experienceData);
      setEducation(educationData);
      setProjects(projectsData);
      setSocial(socialData);

    } catch (error) {
      console.error('Error fetching experiences data:', error);
    }
  };

  return (
      <div className="homepage-container">
            <Navbar></Navbar>
        <div className='homepage-title'>
          <h1>Experience</h1>
        </div>
        <div className="card-container">
          <section className='experience-cards'>
            {experiences.map(experience => (
              <ExperienceCard key={experience.id} data={experience} />
            ))}
          </section>
        </div>

        <div className='homepage-title'>
          <h1>Education</h1>
        </div>
        <div className="card-container">
          <section className='experience-cards'>
            {education.map(education => (
              <EducationCard key={education.id} data={education} />
            ))}
          </section>
        </div>

        <div className='homepage-title'>
          <h1>Project</h1>
        </div>
        <div className="card-container">
          <section className='experience-cards'>
            {projects.map(projects => (
              <ProjectCard key={projects.id} data={projects} />
            ))}
          </section>
        </div>

        
        <div className='homepage-title'>
          <h1>Social</h1>
        </div>
        <div className="social-card-container">
          <section className='social-cards'>
            {social.map((social, index) => (
              <SocialCard key={social.id} data={social} isInline={index < 5} />
            ))}
          </section>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
      
  );
}

export default Homepage;


/* function Homepage() {
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

      const experienceData = await experienceResponse.json();
      const educationData = await educationResponse.json();
      const projectsData = await projectsResponse.json();
      const socialData = await socialResponse.json();

      setExperiences(experienceData);
      setEducation(educationData);
      setProjects(projectsData);
      setSocial(socialData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <div className="content-container">
        <Section title="Experience" data={experiences} component={ExperienceCard} />
        <Section title="Education" data={education} component={EducationCard} />
        <Section title="Projects" data={projects} component={ProjectCard} />
        <Section title="Social" data={social} component={SocialCard} />
      </div>
    </div>
  );
}

const Section = ({ title, data, component: CardComponent }) => (
  <div className="section-title">
    <h1>{title}</h1>
    <div className="card-container">
      <section className='experience-card'>
      {data.map(item => (
        <CardComponent key={item.id} data={item} />
      
      ))}
      </section>
    </div>
  </div>
);

export default Homepage;*/