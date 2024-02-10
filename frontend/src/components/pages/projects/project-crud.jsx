import axios from 'axios';
import React, { useEffect, useState } from 'react';

import '../pages-style/crud-style.css'; // Import the provided CSS

function Homepage() {
  const url = 'http://127.0.0.1:8000/';
  const [projects, setProjects] = useState([]);
  const [inputProjectTitle, setInputProjectTitle] = useState('');
  const [inputProjectDescription, setInputProjectDescription] = useState('');
  const [inputProjectStatus, setInputProjectStatus] = useState('ongoing');
  const [activeProject, setActiveProject] = useState(null);

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
      'github': inputProjectStatus
    }).then(res => {
      const newProject = res.data;
      setProjects(prevProjects => [...prevProjects, newProject]);
      setInputProjectTitle('');
      setInputProjectDescription('');
      setInputProjectStatus('ongoing'); // Reset status after adding
    }).catch(err => {
      console.error(err);
    });
  };

  const updateProject = project => {
    setActiveProject(project);
    setInputProjectTitle(project.name);
    setInputProjectDescription(project.techs);
    setInputProjectStatus(project.github);
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

  const handleStatusChange = e => {
    setInputProjectStatus(e.target.value);
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
            type="text" 
            placeholder="Ajoutez un techs"
            value={inputProjectStatus}
            onChange={handleStatusChange}
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
                  <div className='crud-style-status'>
                    {project.github === 'ongoing' ? 
                      <span className='ongoing-mission'>Mission en cours</span> : 
                      <span className='terminated-mission'>Mission terminée</span>}
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
    </div>
  );
}

export default Homepage;
