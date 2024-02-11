// edition-popup.jsx
import React, { useState } from 'react';
import '../pages-style/edition-popup.css';

function PopupEdition({ project, onSave, onClose }) {
  // Initialize editedProject with project to prevent undefined values
  const [editedProject, setEditedProject] = useState(project || { name: '', techs: '', github: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedProject(prevProject => ({
      ...prevProject,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (!editedProject.id) {
      console.error('Project ID is missing.'); // Log an error if ID is missing
      return;
    }
    onSave(editedProject);
    onClose();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Edit Project</h2>
        <label>Title:</label>
        <input type="text" name="name" value={editedProject.name} onChange={handleChange} />
        <label>Description:</label>
        <input type="text" name="techs" value={editedProject.techs} onChange={handleChange} />
        <label>Github:</label>
        <input type="url" name="github" value={editedProject.github} onChange={handleChange} />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default PopupEdition;
