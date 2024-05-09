import React, { useRef, useEffect, useState } from 'react';
import './Timelines/education-timeline/timeline.css';

const Timeline = ({ data = {} }) => {
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      if (timelineItems.length > 0) {
        const firstItemRect = timelineItems[0].getBoundingClientRect();
        const lastItemRect = timelineItems[timelineItems.length - 1].getBoundingClientRect();
        
        const firstItemTop = firstItemRect.top + window.scrollY;
        const lastItemBottom = lastItemRect.bottom + window.scrollY;

        const timelineTop = timelineRef.current.getBoundingClientRect().top + window.scrollY;
        const relativeTop = firstItemTop - timelineTop;
        const adjustedHeight = lastItemBottom - firstItemTop - lastItemRect.height / 2;

        setLineHeight(adjustedHeight);
        setLineTop(relativeTop);

        timelineItems.forEach((item, index) => {
          item.classList.add(index % 2 === 0 ? 'right' : 'left');
          item.classList.add('animated');
        });
      }
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>
      <div className="timeline-central-line" style={{ top: `${lineTop}px`, height: `${lineHeight}px` }}></div>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-line-to-dot"></div>
          <div className="timeline-item-content">
            <p className="timeline-item-date">{data.date}</p>
            <h3 className="timeline-item-title">{data.title}</h3>
            <p className="timeline-item-description">{data.level}</p>
            <p className="timeline-item-description">{data.location}</p>
            <p className="timeline-item-description">{data.description}</p>
            <p className="timeline-item-description">{data.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
