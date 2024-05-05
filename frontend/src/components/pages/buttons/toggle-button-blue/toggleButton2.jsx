import React, { useState } from 'react';
import './toggleButton2.css';

const ToggleButton = ({ handleToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(prevState => !prevState);
    handleToggle(!isOn);
  };

  return (
    <div className={`toggle-button ${isOn ? 'off' : 'on'}`} onClick={handleClick}>
      <div className="button"></div>
      <div className="tooltip">{isOn ? 'Panel off' : 'Panel on'}</div>
    </div>
  );
};

export default ToggleButton;
