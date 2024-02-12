import axios from 'axios';
import React, { useEffect, useState } from 'react';

import '../pages-style/crud-style.css';
import '../pages-style/button-styling.css';

function Homepage() {
  const url = 'http://127.0.0.1:8000/';
  const [crudStyle, setCrudStyle] = useState([]);
  const [inputCrudStyleTitle, setInputCrudStyleTitle] = useState('');
  const [inputCrudStyleTitleDescription, setInputCrudStyleTitleDescription] = useState('');
  const [inputCrudStyleStatus, setInputCrudStyleStatus] = useState('ongoing');
  const [activeCrudStyle, setActiveCrudStyle] = useState(null);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false); // State for managing edit popup visibility

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
      setInputCrudStyleStatus('ongoing'); // Reset status after adding
    }).catch(err => {
      console.error(err);
    });
  };

  const updateCrudStyle = task => {
    setActiveCrudStyle(task);
    setInputCrudStyleTitle(task.title);
    setInputCrudStyleTitleDescription(task.description);
    setInputCrudStyleStatus(task.status);
    setIsEditPopupOpen(true); // Open the edit popup
  };

  const saveEditedCrudStyle = () => {
    // Send PUT request to update task
    axios.put(url + `get_experience/experience/${activeCrudStyle.id}/update/`, {
      'title': inputCrudStyleTitle,
      'description': inputCrudStyleTitleDescription,
      'status': inputCrudStyleStatus
    }).then(res => {
      getAllCrudStyle();
      setIsEditPopupOpen(false); // Close the edit popup after saving
    }).catch(err => {
      console.error(err);
    });
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
                <div className='crud-style-content' key={task.id}>
                  <div className='crud-style-title'>
                    {task.title}
                  </div>
                  <div className='crud-style-status'>
                    {task.status === 'ongoing' ? 
                      <span className='ongoing-mission'>Mission en cours</span> : 
                      <span className='terminated-mission'>Mission terminée</span>}
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
          <div className='popup-content experience-popup'>
            <h2 className='popup-title'>Edit Task</h2>
            <input className='crud-popup-input' type='text' value={inputCrudStyleTitle} onChange={e => setInputCrudStyleTitle(e.target.value)} />
            <input className='crud-popup-input' type='text' value={inputCrudStyleTitleDescription} onChange={f => setInputCrudStyleTitleDescription(f.target.value)} />
            <select className='crud-popup-input' value={inputCrudStyleStatus} onChange={e => setInputCrudStyleStatus(e.target.value)}>
              <option value='ongoing'>Ongoing</option>
              <option value='terminated'>Terminated</option>
            </select>
            <button className='popup-button' onClick={saveEditedCrudStyle}>Save</button>
            <button className='popup-button' onClick={() => setIsEditPopupOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
