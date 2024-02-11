import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EditPopup from '../popup/edition-popup'; // Import the EditPopup component

import '../pages-style/crud-style.css'; // Import the provided CSS

function Homepage() {
  const url = 'http://127.0.0.1:8000/';
  const [projects, setProjects] = useState([]);
  const [inputProjectTitle, setInputProjectTitle] = useState('');
  const [inputProjectDescription, setInputProjectDescription] = useState('');
  const [inputProjectGithub, setInputProjectGithub] = useState('');
  const [activeProject, setActiveProject] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for managing popup visibility

  const getAllProjects = () => {
    axios.get(url + 'get_projects/projects/list/')
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const addProject = () => {
    axios.post(url + 'get_projects/projects/create/', {
      'name': inputProjectTitle,
      'techs': inputProjectDescription,
      'github': inputProjectGithub
    }).then(res => {
      const newProject = res.data;
      setProjects(prevProjects => [...prevProjects, newProject]);
      setInputProjectTitle('');
      setInputProjectDescription('');
      setInputProjectGithub('');
    }).catch(err => {
      console.error(err);
    });
  };

  const updateProject = (project) => {
    setActiveProject(project);
    setIsEditPopupOpen(true); // Open the edit popup
  };

  const saveEditedProject = (editedProject) => {
    axios.put(url + `get_projects/projects/${editedProject.id}/update/`, editedProject)
      .then(res => {
        setProjects(prevProjects =>
          prevProjects.map(project =>
            project.id === editedProject.id ? editedProject : project
          )
        );
        setIsEditPopupOpen(false); // Close the edit popup after saving
        setActiveProject(null); // Clear active project after updating
      }).catch(err => {
        console.error(err);
      });
  };

  const deleteProject = project => {
    axios.delete(url + `get_projects/projects/${project.id}/destroy/`)
      .then(res => {
        getAllProjects();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleChange = e => {
    setInputProjectTitle(e.target.value);
  };

  const DescriptionChange = f => {
    setInputProjectDescription(f.target.value);
  };

  const handleGithubChange = e => {
    setInputProjectGithub(e.target.value);
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className='home-container'>
      <div className='form-container'>
        <div className='crud-style-input'>
          <input
            type="text"
            placeholder="Ajoutez un titre"
            value={inputProjectTitle}
            onChange={e => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Ajoutez une description"
            value={inputProjectDescription}
            onChange={f => DescriptionChange(f)}
          />
          <input
            type="url"
            placeholder="Ajoutez un lien git"
            value={inputProjectGithub}
            onChange={handleGithubChange}
          />
          <button
            onClick={addProject}
            disabled={!inputProjectTitle.trim()}
            className='crud-style-field'
          >
            Valider
          </button>
        </div>
      </div>
      <div className='crud-style-container'>
        <ul>
          {
            projects.map(project => {
              return (
                <div className='crud-style-content' key={project.id}>
                  <div className='crud-style-title'>
                    {project.name}
                  </div>
                  <div className='home-button'>
                    <button onClick={() => updateProject(project)} className='crud-style-button'>Edit</button>
                    <button className="crud-style-button" onClick={() => deleteProject(project)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          }
        </ul>
      </div>
      {isEditPopupOpen && activeProject && (
        <EditPopup
          project={activeProject}
          onSave={saveEditedProject}
          onClose={() => setIsEditPopupOpen(false)}
        />
      )}
    </div>
  );
}

export default Homepage;
