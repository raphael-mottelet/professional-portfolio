import React from 'react';
import '../pages-style/card.css';

const ExperienceCard = ({ data }) => (
  <div className='card'>
    <p className="card-title">{data.title}</p>
    <p className="card-date">{data.date}</p>
    <p className="card-description">{data.description}</p>
  </div>
);

export default ExperienceCard;
