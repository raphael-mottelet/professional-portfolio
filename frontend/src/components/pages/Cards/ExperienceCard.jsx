import React from 'react';
import './cards-css/card.css';

const PresentationCard = ({ data }) => (
  <div className='card'>
    <p className="card-title">{data.title}</p>
    <p className="card-description">{data.description}</p>
    <img src={data.image} alt={data.title} className="card-image" /> {/* Assuming data contains an image field */}
  </div>
);

export default PresentationCard;
