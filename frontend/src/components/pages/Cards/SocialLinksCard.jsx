import React from 'react';
import { motion } from 'framer-motion';
import '../pages-style/card.css'

const SocialLink = ({ data }) => (
  <motion.div className="card" whileHover={{ scale: 1.05 }}>
    <a href={data.link} className="card-content">
      {data.iconSrc}
      <p className="card-name">{data.name}</p>
    </a>
  </motion.div>
);

export default SocialLink;
