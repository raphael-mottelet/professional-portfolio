import React from 'react';
import { motion } from 'framer-motion';
import './cards-css/social-card.css'

const SocialLink = ({ data, isInline }) => (
  <div className={`social-card ${isInline ? 'inline' : ''}`} whileHover={{ scale: 1.05 }}>
    <a href={data.link} className="social-card-content">
      <img classname='social-iconSrc' src={data.iconSrc} alt={data.name} />
      <p className="social-card-name">{data.name}</p>
    </a>
  </div>
);

export default SocialLink;
