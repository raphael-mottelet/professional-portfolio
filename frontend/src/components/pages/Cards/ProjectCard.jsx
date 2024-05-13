import React from 'react';
import { motion } from 'framer-motion';
import { IoLogInOutline } from 'react-icons/io5';
import './cards-css/card.css'

const ProjectCard = ({ data }) => (
  <div className="card" whilehover={{ scale: 1.05 }}>
    <p className="card-title">{data.name}</p>
    <img src={data.imageSrc} className="card-image" alt="" />
    <p className="card-description">{data.description}</p>
    <p className="card-description-techs">{data.techs}</p>
    <a href={data.github}>
      <IoLogInOutline className="card-icon" />
    </a>
  </div>
);

export default ProjectCard;
