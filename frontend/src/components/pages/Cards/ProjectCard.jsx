import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './cards-css/project-card.css';

const ProjectCard = ({ data }) => {
  // Forcer l'URL de l'image à utiliser HTTPS
  let imageUrl = data.imageSrc;
  if (imageUrl && imageUrl.startsWith('http://')) {
    imageUrl = imageUrl.replace('http://', 'https://');
  }

  return (
    <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
      <p className="project-card-title">{data.name}</p>
      <p className="project-card-techs">{data.techs}</p>
      <p className="project-card-description">{data.description}</p>
      <div className="hover-message">cliquezmoi</div>
      {imageUrl ? (
        <a href={data.github} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} className="project-card-image" alt={data.name} />
        </a>
      ) : (
        <a href={data.github} target="_blank" rel="noopener noreferrer" className="project-card-link">
          <FaGithub size={48} className="github-icon" />
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
