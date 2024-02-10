import React, { useState } from 'react';
import '../pages-style/edition-popup.css'

function PopupEdition({ project, onSave, onClose }) {
  const [editedProject, setEditedProject] = useState(project);

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedProject(prevProject => ({
      ...prevProject,
      [name]: value
    }));
  };

  const handleSave = () => {
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
