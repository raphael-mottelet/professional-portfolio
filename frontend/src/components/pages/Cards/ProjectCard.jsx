import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './cards-css/project-card.css';

const ProjectCard = ({ data }) => (
  <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
    <p className="project-card-title">{data.name}</p>
    <p className="project-card-techs">{data.techs}</p>
    <p className="project-card-description">{data.description}</p>
    {data.imageSrc ? (
      <a href={data.github} target="_blank" rel="noopener noreferrer">
        <img src={data.imageSrc} className="project-card-image" alt={data.name} />
      </a>
    ) : (
      <a href={data.github} target="_blank" rel="noopener noreferrer" className="project-card-link">
        <FaGithub size={48} className="github-icon" />
      </a>
    )}
  </motion.div>
);

export default ProjectCard;
