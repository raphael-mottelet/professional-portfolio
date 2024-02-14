import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ExperienceCard from './Cards/ExperienceCard';
import Navbar from './navbar';
import './pages-style/homepage.css';

function Homepage() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/get_experience/experience/list');
      if (!response.ok) {
        throw new Error('Failed to fetch experiences data');
      }
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error('Error fetching experiences data:', error);
    }
  };

  return (
    <AnimatePresence initial={false}>
      <div className="homepage-container">
        <Navbar />
        <div classname="experience-section-container">
          <section>
            {experiences.map(experience => (
              <ExperienceCard key={experience.id} data={experience} />
            ))}
          </section>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Homepage;
