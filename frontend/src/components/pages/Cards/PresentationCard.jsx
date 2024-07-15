import React, { useEffect, useRef, useState } from 'react';
import './cards-css/presentation.css';

const PresentationCard = ({ data }) => {
  const descriptionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (descriptionRef.current.getBoundingClientRect().top < window.innerHeight) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let imageUrl = data.image;
  if (imageUrl.startsWith('http://')) {
    imageUrl = imageUrl.replace('http://', 'https://');
  }

  const lines = data.description.split('\n');
  return (
    <div className='presentation-card'>
      <p className="presentation-card-title">{data.title}</p>

      <div className='personnal-presentation-container'>
        <img src={imageUrl} className="presentation-card-image" alt="Presentation" />
        <div className="personnal-presentation-paragraph">
          <p className="personnal-presentation-text">{data.firstname}</p>
          <p className="personnal-presentation-text">{data.name}</p>
          <p className="personnal-presentation-text">{data.age}</p>
          <p className="personnal-presentation-text-job">{data.job}</p>
        </div>
      </div>

      <div
        className={`presentation-card-description ${isVisible ? 'fade-in' : ''}`}
        ref={descriptionRef}
      >
        {lines.map((line, index) => (
          <p key={index} className="typing-animation">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default PresentationCard;
