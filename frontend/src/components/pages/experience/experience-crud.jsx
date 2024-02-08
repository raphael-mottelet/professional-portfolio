import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ExperienceDetail from './experience-details';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation

import '../pages-style/crud-style.css';
import '../pages-style/button-styling.css';

function Homepage() {
  const url = 'http://127.0.0.1:8000/';
  const [crudStyle, setCrudStyle] = useState([]);
  const [inputCrudStyleTitle, setInputCrudStyleTitle] = useState('');
  const [inputCrudStyleTitleDescription, setInputCrudStyleTitleDescription] = useState('');
  const [inputCrudStyleStatus, setInputCrudStyleStatus] = useState('ongoing');
  const [activeCrudStyle, setActiveCrudStyle] = useState(null);

  const getAllCrudStyle = () => {
    axios.get(url + 'get_experience/experience/list/')
      .then(res => {
        setCrudStyle(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const CrudStyleMarkStatus = task => {
    axios.put(url + `get_experience/experience/${task.id}/update/`, {
      'title': task.title,
      'status': task.status === 'ongoing' ? 'terminated' : 'ongoing'
    }).then(res => {
      getAllCrudStyle();
    }).catch(err => {
      console.error(err);
    });
  };

  const addCrudStyle = () => {
    axios.post(url + 'get_experience/experience/create/', {
      'title': inputCrudStyleTitle,
      'description': inputCrudStyleTitleDescription,
      'status': inputCrudStyleStatus
    }).then(res => {
      const newCrudStyle = res.data;
      setCrudStyle(prevCrudStyle => [...prevCrudStyle, newCrudStyle]);
      setInputCrudStyleTitle('');
      setInputCrudStyleTitleDescription('');
      setInputCrudStyleStatus('ongoing'); // Réinitialiser le statut après l'ajout
    }).catch(err => {
      console.error(err);
    });
  };

  const updateCrudStyle = task => {
    setActiveCrudStyle(task);
    setInputCrudStyleTitle(task.title);
    setInputCrudStyleTitleDescription(task.description);
    setInputCrudStyleStatus(task.status);
  };

  const deleteCrudStyle = task => {
    axios.delete(url + `get_experience/experience/${task.id}/destroy/`)
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

  const DescriptionChange = f => {
    setInputCrudStyleTitleDescription(f.target.value);
  };

  const handleStatusChange = e => {
    setInputCrudStyleStatus(e.target.value);
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
            placeholder="Ajoutez un titre"
            value={inputCrudStyleTitle}
            onChange={e => handleChange(e)}
          />
          <input 
            type="text" 
            placeholder="Ajoutez une description"
            value={inputCrudStyleTitleDescription}
            onChange={f => DescriptionChange(f)}
          />
          <select value={inputCrudStyleStatus} onChange={handleStatusChange}>
            <option value="ongoing">Ongoing</option>
            <option value="terminated">Terminated</option>
          </select>
          <button 
            onClick={addCrudStyle} 
            disabled={!inputCrudStyleTitle.trim()}
            className='crud-style-button'
          >
            Valider
          </button>
        </div>
      </div>
      <div className='crud-style-container'>
        <ul>
          {
            crudStyle.map(task => {
              return (
                <div className='crud-style-content'>
                  <div className='crud-style-title'>
                    {task.title}
                  </div>
                  <div className='crud-style-status'>
                    {task.status === 'ongoing' ? 
                      <span className='ongoing-mission'>Mission en cours</span> : 
                      <span className='terminated-mission'>Mission terminée</span>}
                  </div>
                  <div className='home-button'>
                    <button onClick={e => updateCrudStyle(task)} className='crud-style-button'>Edit</button>
                    <button className="crud-style-button" onClick={e => {deleteCrudStyle(task)}}>
                      Delete
                    </button>
                  </div>

                  <div>

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
