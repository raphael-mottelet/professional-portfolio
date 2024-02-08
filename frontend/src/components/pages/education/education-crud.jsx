import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EducationDetail from './education-details';
import { Link } from 'react-router-dom'; // Importer Link pour la navigation

import '../pages-style/crud-style.css';
import '../pages-style/button-styling.css';

function EducationCrudPage() {
  const url = 'http://127.0.0.1:8000/';
  const [educations, setEducations] = useState([]);
  const [inputEducationTitle, setInputEducationTitle] = useState('');
  const [inputEducationTitleDescription, setInputEducationTitleDescription] = useState('');
  const [inputEducationStatus, setInputEducationStatus] = useState('ongoing');
  const [activeEducation, setActiveEducation] = useState(null);

  const getAllEducations = () => {
    axios.get(url + 'get_education/education/list/')
      .then(res => {
        setEducations(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const EducationMarkStatus = task => {
    axios.put(url + `get_education/education/${task.id}/update/`, {
      'title': task.title,
      'status': task.status === 'ongoing' ? 'terminated' : 'ongoing'
    }).then(res => {
      getAllEducations();
    }).catch(err => {
      console.error(err);
    });
  };

  const addEducation = () => {
    axios.post(url + 'get_education/education/create/', {
      'title': inputEducationTitle,
      'description': inputEducationTitleDescription,
      'status': inputEducationStatus
    }).then(res => {
      const newEducation = res.data;
      setEducations(prevEducations => [...prevEducations, newEducation]);
      setInputEducationTitle('');
      setInputEducationTitleDescription('');
      setInputEducationStatus('ongoing'); // Réinitialiser le statut après l'ajout
    }).catch(err => {
      console.error(err);
    });
  };

  const updateEducation = task => {
    setActiveEducation(task);
    setInputEducationTitle(task.title);
    setInputEducationTitleDescription(task.description);
    setInputEducationStatus(task.status);
  };

  const deleteEducation = task => {
    axios.delete(url + `get_education/education/${task.id}/destroy/`)
      .then(res => {
        getAllEducations();
      })
      .catch(ederr => {
        console.error(ederr);
      });
  };

  const handleChange = ed => {
    setInputEducationTitle(ed.target.value);
  };

  const DescriptionChange = fed => {
    setInputEducationTitleDescription(fed.target.value);
  };

  const handleStatusChange = ed => {
    setInputEducationStatus(ed.target.value);
  };

  useEffect(() => {
    getAllEducations();
  }, []);

  return (
    <div className='crud-hub'>
        <h1 className='crud-manager-title'>Education CRUD</h1>
      <div className='form-container'>
        <div className='crud-style-input'>
          <input 
            type="text" 
            placeholder="Ajoutez un titre"
            value={inputEducationTitle}
            onChange={ed => handleChange(ed)}
          />
          <input 
            type="text" 
            placeholder="Ajoutez une description"
            value={inputEducationTitleDescription}
            onChange={fed => DescriptionChange(fed)}
          />
          <select value={inputEducationStatus} onChange={handleStatusChange}>
            <option value="ongoing">Ongoing</option>
            <option value="terminated">Terminated</option>
          </select>
          <button 
            onClick={addEducation} 
            disabled={!inputEducationTitle.trim()}
            className='crud-style-field'
          >
            Valider
          </button>
        </div>
      </div>
      <div className='crud-style-container'>
        <ul>
          {
            educations.map(task => {
              return (
                <div className='crud-style-content'>
                  <div className='crud-style-title'>
                    {task.title}
                  </div>
                  <div className='crud-style-status'>
                    {task.status === 'ongoing' ? 
                      <span className='ongoing-mission'>Formation en cours</span> : 
                      <span className='terminated-mission'>Formation terminée</span>}
                  </div>
                  <div className='crud-style-button-container'>
                    <button onClick={e => updateEducation(task)} className='crud-style-button Education-edit'>Edit</button>
                    <button className="crud-style-button Education-delete" onClick={e => {deleteEducation(task)}}>
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

export default EducationCrudPage;
