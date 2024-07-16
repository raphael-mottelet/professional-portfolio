import React from 'react';
import { motion } from 'framer-motion';
import './cards-css/social-card.css';

const SocialLink = ({ data, isInline }) => {

  let iconUrl = data.iconSrc;
  if (iconUrl.startsWith('http://')) {
    iconUrl = iconUrl.replace('http://', 'https://');
  }

  return (
    <motion.div className={`social-card ${isInline ? 'inline' : ''}`} whileHover={{ scale: 1.05 }}>
      <a href={data.link} className="social-card-content">
        <img className='social-iconSrc' src={iconUrl} alt={data.name} />
        <p className="social-card-name">{data.name}</p>
      </a>
    </motion.div>
  );
};

export default SocialLink;
