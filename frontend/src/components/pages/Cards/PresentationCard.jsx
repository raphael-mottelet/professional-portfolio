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

  console.log(data.image);

  const lines = data.description.split('\n');
  return (
    <div className='presentation-card'>
      <p className="presentation-card-title">{data.title}</p>
      <div
        className={`presentation-card-description ${isVisible ? 'fade-in' : ''}`}
        ref={descriptionRef}
      >
        {lines.map((line, index) => (
          <p key={index} className="typing-animation">{line}</p>
        ))}
      </div>
      <img src={data.image} className="presentation-card-image" alt="Presentation" />
    </div>
  );
};

export default PresentationCard;
