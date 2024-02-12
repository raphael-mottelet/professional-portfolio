import axios from 'axios';
import React, { useEffect, useState } from 'react';

import '../pages-style/crud-style.css';
import '../pages-style/button-styling.css';

function ProjectCrud() {
  const url = 'http://127.0.0.1:8000/';
  const [crudStyle, setCrudStyle] = useState([]);
  const [inputCrudStyleTitle, setInputCrudStyleTitle] = useState('');
  const [inputCrudStyleTechs, setInputCrudStyleTechs] = useState('');
  const [inputCrudStyleGithub, setInputCrudStyleGithub] = useState('');
  const [activeCrudStyle, setActiveCrudStyle] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);

  const getAllCrudStyle = () => {
    axios.get(url + 'get_projects/projects/list/')
      .then(res => {
        setCrudStyle(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const addCrudStyle = () => {
    axios.post(url + 'get_projects/projects/create/', {
      'name': inputCrudStyleTitle,
      'techs': inputCrudStyleTechs,
      'github': inputCrudStyleGithub
    }).then(res => {
      const newCrudStyle = res.data;
      setCrudStyle(prevCrudStyle => [...prevCrudStyle, newCrudStyle]);
      setInputCrudStyleTitle('');
      setInputCrudStyleTechs('');
      setInputCrudStyleGithub('');
    }).catch(err => {
      console.error(err);
    });
  };

  const updateCrudStyle = task => {
    setActiveCrudStyle(task);
    setInputCrudStyleTitle(task.name);
    setInputCrudStyleTechs(task.techs);
    setInputCrudStyleGithub(task.github);
    setIsEditPopupOpen(true);
  };

  const saveEditedCrudStyle = () => {
    axios.put(url + `get_projects/projects/${activeCrudStyle.id}/update/`, {
      'name': inputCrudStyleTitle,
      'techs': inputCrudStyleTechs,
      'github': inputCrudStyleGithub
    }).then(res => {
      getAllCrudStyle();
      setIsEditPopupOpen(false);
    }).catch(err => {
      console.error(err);
    });
  };

  const deleteCrudStyle = task => {
    axios.delete(url + `get_projects/projects/${task.id}/destroy/`)
      .then(res => {
        getAllCrudStyle();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleChange = e => {
    setInputCrudStyleTitle(e.target.value);
  };

  const handleTechsChange = e => {
    setInputCrudStyleTechs(e.target.value);
  };

  const handleGithubChange = e => {
    setInputCrudStyleGithub(e.target.value);
  };

  useEffect(() => {
    getAllCrudStyle();
  }, []);

  return (
    <div className='home-container'>
      <div className='form-container'>
        <div className='crud-style-input'>
          <input 
            type="text" 
            placeholder="Add a title"
            value={inputCrudStyleTitle}
            onChange={e => handleChange(e)}
          />
          <input 
            type="text" 
            placeholder="Add technologies"
            value={inputCrudStyleTechs}
            onChange={e => handleTechsChange(e)}
          />
          <input 
            type="url" 
            placeholder="Add Github URL"
            value={inputCrudStyleGithub}
            onChange={e => handleGithubChange(e)}
          />
          <button 
            onClick={addCrudStyle} 
            disabled={!inputCrudStyleTitle.trim()}
            className='crud-style-button'
          >
            Add Project
          </button>
        </div>
      </div>
      <div className='crud-style-container'>
        <ul>
          {
            crudStyle.map(task => {
              return (
                <div className='crud-style-content' key={task.id}>
                  <div className='crud-style-title'>
                    {task.name}
                  </div>
                  <div className='crud-style-techs'>
                    {task.techs}
                  </div>
                  <div className='crud-style-github'>
                    <a href={task.github} target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </div>
                  <div className='home-button'>
                    <button onClick={() => updateCrudStyle(task)} className='crud-style-button'>Edit</button>
                    <button className="crud-style-button" onClick={() => deleteCrudStyle(task)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          }
        </ul>
      </div>
      {isEditPopupOpen && activeCrudStyle && (
        <div className='popup-container'>
          <div className='popup-content projects-popup'>
            <h2 className='popup-title'>Edit Project</h2>
            <input className='crud-popup-input' type='text' value={inputCrudStyleTitle} onChange={e => setInputCrudStyleTitle(e.target.value)} />
            <input className='crud-popup-input' type='text' value={inputCrudStyleTechs} onChange={e => setInputCrudStyleTechs(e.target.value)} />
            <input className='crud-popup-input' type='url' value={inputCrudStyleGithub} onChange={e => setInputCrudStyleGithub(e.target.value)} />
            <button className='popup-button' onClick={saveEditedCrudStyle}>Save</button>
            <button className='popup-button' onClick={() => setIsEditPopupOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCrud;
