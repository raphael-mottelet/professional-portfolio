import React from 'react';
import './cards-css/presentation.css';

const PresentationCard = ({ data }) => (
  <div className='presentation-card'>
    <p className="presentation-card-title">{data.title}</p>
    <p className="presentation-card-description">{data.description}</p>
    <img src={data.image} className="presentation-card-image" />
  </div>
);

export default PresentationCard;
