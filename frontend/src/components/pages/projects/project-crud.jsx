import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation

import '../pages-style/crud-style.css';
import '../pages-style/button-styling.css';

function Homepage() {
  const url = 'http://127.0.0.1:8000/';
  const [projects, setProjects] = useState([]);
  const [inputProjectTitle, setInputProjectTitle] = useState('');
  const [inputProjectDescription, setInputProjectDescription] = useState('');
  const [inputProjectStatus, setInputProjectStatus] = useState('ongoing');
  const [activeProject, setActiveProject] = useState(null);

  const getAllProjects = () => {
    axios.get(url + 'get_projects/project/list/')
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const projectMarkStatus = project => {
    axios.put(url + `get_projects/project/${project.id}/update/`, {
      'title': project.title,
      'status': project.status === 'ongoing' ? 'terminated' : 'ongoing'
    }).then(res => {
      getAllProjects();
    }).catch(err => {
      console.error(err);
    });
  };

  const addProject = () => {
    axios.post(url + 'get_projects/project/create/', {
      'title': inputProjectTitle,
      'description': inputProjectDescription,
      'status': inputProjectStatus
    }).then(res => {
      const newProject = res.data;
      setProjects(prevProjects => [...prevProjects, newProject]);
      setInputProjectTitle('');
      setInputProjectDescription('');
      setInputProjectStatus('ongoing'); // Réinitialiser le statut après l'ajout
    }).catch(err => {
      console.error(err);
    });
  };

  const updateProject = project => {
    setActiveProject(project);
    setInputProjectTitle(project.title);
    setInputProjectDescription(project.description);
    setInputProjectStatus(project.status);
  };

  const deleteProject = project => {
    axios.delete(url + `get_projects/project/${project.id}/destroy/`)
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
        <div className='project-input'>
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
          <select value={inputProjectStatus} onChange={handleStatusChange}>
            <option value="ongoing">Ongoing</option>
            <option value="terminated">Terminated</option>
          </select>
          <button 
            onClick={addProject} 
            disabled={!inputProjectTitle.trim()}
            className='project-field'
          >
            Valider
          </button>
        </div>
      </div>
      <div className='project-container'>
        <ul>
          {
            projects.map(project => {
              return (
                <div className='project-content' key={project.id}>
                  <div className='project-title'>
                    {project.title}
                  </div>
                  <div className='project-status'>
                    {project.status === 'ongoing' ? 
                      <span className='ongoing-mission'>Mission en cours</span> : 
                      <span className='terminated-mission'>Mission terminée</span>}
                  </div>
                  <div className='home-button'>
                    <button onClick={e => updateProject(project)} className='project-edit'>Edit</button>
                    <button className="project-delete" onClick={e => {deleteProject(project)}}>
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
