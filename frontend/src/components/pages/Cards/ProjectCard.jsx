import React from 'react';
import { motion } from 'framer-motion';
import { IoLogInOutline } from 'react-icons/io5';
import '../pages-style/card.css'

const ProjectCard = ({ data }) => (
  <motion.div className="card" whileHover={{ scale: 1.05 }}>
    <p className="card-title">{data.name}</p>
    <img src={data.imageSrc} className="card-image" alt="" />
    <p className="card-description">{data.techs}</p>
    <a href={data.github}>
      <IoLogInOutline className="card-icon" />
    </a>
  </motion.div>
);

export default ProjectCard;
