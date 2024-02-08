import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './pages-style/homepage.css';
import './pages-style/button-styling.css';

function Homepage() {
  const url = 'http://127.0.0.1:8000/';
  const [Experience, setExperience] = useState([]);
  const [inputExperienceTitle, setInputExperienceTitle] = useState('');
  const [inputExperienceTitleDescription, setInputExperienceTitleDescription] = useState('');
  const [inputExperienceStatus, setInputExperienceStatus] = useState('ongoing');
  const [activeExperience, setactiveExperience] = useState(null);

  const getAllExperience = () => {
    axios.get(url + 'experience/list/')
      .then(res => {
        setExperience(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const ExperienceMarkStatus = task => {
    axios.put(url + `experience/${task.id}/update/`, {
      'title': task.title,
      'status': task.status === 'ongoing' ? 'terminated' : 'ongoing'
    }).then(res => {
      getAllExperience();
    }).catch(err => {
      console.error(err);
    });
  };

  const addExperience = () => {
    axios.post(url + 'experience/create/', {
      'title': inputExperienceTitle,
      'description': inputExperienceTitleDescription,
      'status': inputExperienceStatus
    }).then(res => {
      const newExperience = res.data;
      setExperience(prevExperience => [...prevExperience, newExperience]);
      setInputExperienceTitle('');
      setInputExperienceTitleDescription('');
      setInputExperienceStatus('ongoing'); // Réinitialiser le statut après l'ajout
    }).catch(err => {
      console.error(err);
    });
  };

  const updateExperience = task => {
    setactiveExperience(task);
    setInputExperienceTitle(task.title);
    setInputExperienceTitleDescription(task.description);
    setInputExperienceStatus(task.status);
  };

  const deleteExperience = task => {
    axios.delete(url + `experience/${task.id}/destroy/`)
      .then(res => {
        getAllExperience();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleChange = e => {
    setInputExperienceTitle(e.target.value);
  };

  const DescriptionChange = f => {
    setInputExperienceTitleDescription(f.target.value);
  };

  const handleStatusChange = e => {
    setInputExperienceStatus(e.target.value);
  };

  useEffect(() => {
    getAllExperience();
  }, []);

  return (
    <div className='home-container'>
      <div className='form-container'>
        <div className='Experience-input'>
          <input 
            type="text" 
            placeholder="Ajoutez un titre"
            value={inputExperienceTitle}
            onChange={e => handleChange(e)}
          />
          <input 
            type="text" 
            placeholder="Ajoutez une description"
            value={inputExperienceTitleDescription}
            onChange={f => DescriptionChange(f)}
          />
          <select value={inputExperienceStatus} onChange={handleStatusChange}>
            <option value="ongoing">Ongoing</option>
            <option value="terminated">Terminated</option>
          </select>
          <button 
            onClick={addExperience} 
            disabled={!inputExperienceTitle.trim()}
            className='Experience-field'
          >
            Valider
          </button>
        </div>
      </div>
      <div className='Experience-container'>
        <ul>
          {
            Experience.map(task => {
              return (
                <div className='Experience-content'>
                  <div className='Experience-title'>
                    {task.title}
                  </div>
                  <div className='Experience-status'>
                    {task.status === 'ongoing' ? 
                      <span className='ongoing-mission'>Mission en cours</span> : 
                      <span className='terminated-mission'>Mission terminée</span>}
                  </div>
                  <div className='home-button'>
                    <button onClick={e => updateExperience(task)} className='Experience-edit'>Edit</button>
                    <button className="Experience-delete" onClick={e => {deleteExperience(task)}}>
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
