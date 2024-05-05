import React, { useRef, useEffect, useState } from 'react';
import './Timelines/education-timeline/timeline.css';

const Timeline = ({ data = {} }) => {
  const [lineTop, setLineTop] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      let firstItemTop = null; // Store the top position of the first item
      let lastItemBottom = null; // Store the bottom position of the last item
      timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top + window.scrollY;
        const itemBottom = itemTop + item.offsetHeight;
        if (index === 0) {
          firstItemTop = itemTop;
        }
        if (index === timelineItems.length - 1) {
          lastItemBottom = itemBottom;
        }
        item.classList.add(index % 2 === 0 ? 'right' : 'left');
        item.classList.add('animated'); // Add the animated class to trigger fade-in effect
      });

      // Calculate line position and height based on the first and last item
      const height = lastItemBottom - firstItemTop;
      setLineHeight(height);
      setLineTop(firstItemTop + (lastItemBottom - firstItemTop) / 2); // Set lineTop to the middle of the first and last item
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class when item is in view
            observer.unobserve(entry.target); // Stop observing this item once it's appeared
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger when at least 50% of the card is visible
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call it once to check visibility initially

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>
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
