import React from 'react';
import { motion } from 'framer-motion';
import '../pages-style/card.css'

const EducationCard = ({ data }) => (
  <motion.div className="card" whileHover={{ scale: 1.05 }}>
    <p className="card-title">{data.name}</p>
    <p className="card-description">{data.techs}</p>
  </motion.div>
);

export default EducationCard;
