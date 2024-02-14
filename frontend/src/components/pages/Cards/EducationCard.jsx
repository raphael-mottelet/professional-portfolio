import React from 'react';
import { motion } from 'framer-motion';
import '../pages-style/card.css'

const EducationCard = ({ data }) => (
  <div className="card" whileHover={{ scale: 1.05 }}>
    <p className="card-title">{data.name}</p>
    <p className="card-description">{data.techs}</p>
  </div>
);

export default EducationCard;
