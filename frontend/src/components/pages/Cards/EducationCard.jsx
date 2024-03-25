import React from 'react';
import { motion } from 'framer-motion';
import '../pages-style/card.css'

const EducationCard = ({ data }) => (
  <div className="card" whileHover={{ scale: 1.05 }}>
    <p className="card-title">{data.title}</p>
    <p className="card-description">{data.level}</p>
    <p className="card-description">{data.location}</p>
  </div>
);

export default EducationCard;
