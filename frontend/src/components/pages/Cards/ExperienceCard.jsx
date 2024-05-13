import React from 'react';
import './cards-css/card.css';

const ExperienceCard = ({ data }) => (
  <div className='card'>
    <p className="card-title">{data.title}</p>
    <p className="card-description">{data.description}</p>
    <p className="card-date">{data.date}</p> {/* Utilisez card-date pour la classe de date */}
    <p className="card-location">{data.location}</p> {/* Utilisez card-location pour la classe de location */}

    <img src={data.image} alt={data.title} className="card-image" /> {/* Assuming data contains an image field */}
  </div>
);

export default ExperienceCard;
