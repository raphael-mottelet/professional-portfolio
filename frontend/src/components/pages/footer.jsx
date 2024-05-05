import React from 'react';
import './pages-style/footer.css';

const Footer = ({ isVisible }) => {
  const className = isVisible ? 'footer-offset' : 'footer-center';

  return (
    <footer className={className}>
      <p>© 2024 GreenLizard-IT. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
