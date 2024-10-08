import React from 'react';
import './cards-css/experience-card.css';

const ExperienceCard = ({ data }) => {

  let imageUrl = data.imageSrc;
  if (imageUrl.startsWith('http://')) {
    imageUrl = imageUrl.replace('http://', 'https://');
  }

  return (
    <div className='card'>
      <p className="card-date">{data.date}</p>
      <p className="card-title">{data.title}</p>
      <p className="card-status">{data.status}</p>
      <p className="card-description">{data.description}</p>
      <p className="card-location">Lieux: {data.location}</p>
      <img src={imageUrl} alt={data.title} className="card-image" />
    </div>
  );
};

export default ExperienceCard;
